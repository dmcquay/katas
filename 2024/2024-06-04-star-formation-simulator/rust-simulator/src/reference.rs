extern crate rand;
extern crate msgpack;
extern crate serde;
extern crate serde_derive;

use rand::Rng;
use serde::{Serialize, Deserialize};
use std::env;
use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::{Duration, Instant};

#[derive(Serialize, Deserialize, Clone)]
struct Vector {
    x: f64,
    y: f64,
}

#[derive(Serialize, Deserialize, Clone)]
struct Point {
    x: i32,
    y: i32,
}

#[derive(Serialize, Deserialize, Clone)]
struct Particle {
    id: usize,
    x: f64,
    y: f64,
    v: Vector,
    mass: f64,
}

#[derive(Serialize, Deserialize)]
struct GravitySource {
    x: f64,
    y: f64,
    mass: f64,
}

struct ClusterConfig {
    height: i32,
    width: i32,
    particle_count: i32,
    particle_mass_kg: f64,
    center: Point,
    velocity: Vector,
}

static G: f64 = 6.6743e-11;
static MIN_COLLISION_DISTANCE_METERS: f64 = 1.0;
static MINIMUM_FORCE_DISTANCE_METERS: f64 = 2.0;

fn rand_num(min: f64, max: f64) -> f64 {
    rand::thread_rng().gen_range(min..max)
}

fn get_env_var(key: &str) -> Result<String, Box<dyn Error>> {
    env::var(key).map_err(|e| e.into())
}

fn get_float(key: &str) -> Result<f64, Box<dyn Error>> {
    get_env_var(key)?.parse::<f64>().map_err(|e| e.into())
}

fn get_int(key: &str) -> Result<i32, Box<dyn Error>> {
    get_float(key).map(|f| f as i32)
}

fn radius_from_area(area: f64) -> f64 {
    (area / std::f64::consts::PI).sqrt()
}

fn calculate_gravitational_force(p1: &Particle, p2: &GravitySource) -> Vector {
    let dx = p2.x - p1.x;
    let dy = p2.y - p1.y;
    let distance = (dx * dx + dy * dy).sqrt();

    if distance < MINIMUM_FORCE_DISTANCE_METERS {
        return Vector { x: 0.0, y: 0.0 };
    }

    let force_magnitude = (G * p1.mass * p2.mass) / (distance * distance);
    let force_x = (force_magnitude * dx) / distance;
    let force_y = (force_magnitude * dy) / distance;

    Vector { x: force_x, y: force_y }
}

fn apply_force(particle: &mut Particle, force: &Vector, delta_time: f64) {
    let acceleration_x = force.x / particle.mass;
    let acceleration_y = force.y / particle.mass;

    particle.v.x += acceleration_x * delta_time;
    particle.v.y += acceleration_y * delta_time;
}

fn create_random_particle(config: &ClusterConfig) -> Particle {
    let mut rng = rand::thread_rng();
    Particle {
        id: next_particle_id(),
        x: config.center.x as f64 - config.width as f64 / 2.0 + rand_num(0.0, config.width as f64),
        y: config.center.y as f64 - config.height as f64 / 2.0 + rand_num(0.0, config.height as f64),
        v: config.velocity.clone(),
        mass: config.particle_mass_kg,
    }
}

fn next_particle_id() -> usize {
    static NEXT_ID: AtomicUsize = AtomicUsize::new(0);
    NEXT_ID.fetch_add(1, Ordering::Relaxed)
}

fn main() -> Result<(), Box<dyn Error>> {
    let interval_seconds = get_int("INTERVAL_SECONDS")? as f64;
    let enable_gravitational_clustering = get_int("ENABLE_GRAVITATIONAL_CLUSTERING")?;
    let maximum_generations = get_int("MAXIMUM_GENERATIONS")?;
    let cluster_count = get_int("CLUSTER_COUNT")?;

    let mut clusters = Vec::new();
    for i in 1..=cluster_count {
        let center: Vec<i32> = get_env_var(&format!("CLUSTER{}_CENTER", i))?
            .split(',')
            .map(|x| x.parse().unwrap())
            .collect();

        let velocity: Vec<f64> = get_env_var(&format!("CLUSTER{}_VELOCITY", i))?
            .split(',')
            .map(|x| x.parse().unwrap())
            .collect();

        clusters.push(ClusterConfig {
            height: get_int(&format!("CLUSTER{}_HEIGHT", i))?,
            width: get_int(&format!("CLUSTER{}_WIDTH", i))?,
            particle_count: get_int(&format!("CLUSTER{}_PARTICLE_COUNT", i))?,
            particle_mass_kg: get_float(&format!("CLUSTER{}_PARTICLE_MASS_KG", i))?,
            center: Point { x: center[0], y: center[1] },
            velocity: Vector { x: velocity[0], y: velocity[1] },
        });
    }

    let file_path = env::args().nth(1).ok_or("Missing file path argument")?;
    let mut file = File::create(file_path)?;

    let mut particle_collection: Vec<Particle> = Vec::new();
    for cluster in &clusters {
        for _ in 0..cluster.particle_count {
            particle_collection.push(create_random_particle(cluster));
        }
    }

    let mut generation = 0;
    let mut interrupted = false;
    let mut last_generation_rate_report = Instant::now();
    let mut gen_counter = 0;

    while !interrupted && generation < maximum_generations {
        update_particles(&mut particle_collection, interval_seconds);
        print_particles(&mut file, &particle_collection)?;
        generation += 1;
        gen_counter += 1;

        if last_generation_rate_report.elapsed() > Duration::from_secs(10) {
            eprintln!(
                "generation {}: seconds per generation: {}",
                generation,
                last_generation_rate_report.elapsed().as_secs_f64() / gen_counter as f64
            );
            last_generation_rate_report = Instant::now();
            gen_counter = 0;
        }
    }

    Ok(())
}

fn update_particles(particles: &mut Vec<Particle>, interval_seconds: f64) {
    for p in particles.iter_mut() {
        p.x += p.v.x * interval_seconds;
        p.y += p.v.y * interval_seconds;

        let gravity_sources: Vec<GravitySource> = particles.iter().map(|p| GravitySource {
            x: p.x,
            y: p.y,
            mass: p.mass,
        }).collect();

        let force_vector = add_vectors(&gravity_sources.iter()
            .map(|g| calculate_gravitational_force(p, g))
            .collect::<Vec<_>>());

        apply_force(p, &force_vector, interval_seconds);
    }

    combine_particles(particles);
}

fn add_vectors(vectors: &[Vector]) -> Vector {
    vectors.iter().fold(Vector { x: 0.0, y: 0.0 }, |acc, v| Vector {
        x: acc.x + v.x,
        y: acc.y + v.y,
    })
}

fn combine_particles(particles: &mut Vec<Particle>) {
    let mut deleted_particle_ids = vec![false; particles.len()];
    let distance = particles.iter()
        .map(|p| radius_from_area(p.mass))
        .fold(f64::NEG_INFINITY, f64::max);

    for i in 0..particles.len() {
        if deleted_particle_ids[i] {
            continue;
        }

        let particle1 = &mut particles[i];
        let neighbors: Vec<usize> = particles.iter()
            .enumerate()
            .filter(|(j, p)| !deleted_particle_ids[*j] && (p.x - particle1.x).abs() < distance && (p.y - particle1.y).abs() < distance)
            .map(|(j, _)| j)
            .collect();

        for &j in neighbors.iter().skip(1) {
            if i == j || deleted_particle_ids[j] {
                continue;
            }

            let particle2 = &mut particles[j];
            let dx = particle1.x - particle2.x;
            let dy = particle1.y - particle2.y;
            let distance = (dx * dx + dy * dy).sqrt();
            let collision_distance = f64::max(
                MIN_COLLISION_DISTANCE_METERS,
                radius_from_area(particle1.mass) + radius_from_area(particle2.mass),
            );

            if distance < collision_distance {
                let mass1 = particle1.mass;
                let mass2 = particle2.mass;
                let combined_mass = mass1 + mass2;
                let combined_vx = (mass1 * particle1.v.x + mass2 * particle2.v.x) / combined_mass;
                let combined_vy = (mass1 * particle1.v.y + mass2 * particle2.v.y) / combined_mass;

                *particle1 = Particle {
                    id: if mass1 > mass2 { particle1.id } else { particle2.id },
                    mass: combined_mass,
                    v: Vector { x: combined_vx, y: combined_vy },
                    x: (particle1.x * mass1 + particle2.x * mass2) / combined_mass,
                    y: (particle1.y * mass1 + particle2.y * mass2) / combined_mass,
                };

                deleted_particle_ids[j] = true;
            }
        }
    }

    particles.retain(|p| !deleted_particle_ids[p.id]);
}

fn print_particles(file: &mut File, particles: &[Particle]) -> Result<(), Box<dyn Error>> {
    let frame_data = msgpack::encode::write_vec(&particles.iter()
        .map(|p| (p.id, p.x as i32, p.y as i32, p.mass as i32))
        .collect::<Vec<_>>())?;

    file.write_all(&(frame_data.len() as u32).to_be_bytes())?;
    file.write_all(&(0 as u32).to_be_bytes())?;
    file.write_all(&frame_data)?;

    Ok(())
}
