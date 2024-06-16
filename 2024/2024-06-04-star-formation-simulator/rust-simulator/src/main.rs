mod types;
mod particle_collection;

use types::{Particle, Point, Vector};
use particle_collection::{ParticleQuadTree};

extern crate serde;
extern crate rmp_serde;

use rand::Rng;
use std::sync::atomic::{AtomicUsize, Ordering};
use serde::Deserialize;
use rmp_serde::encode;
use std::fs::File;
use std::io::{BufReader, Write};
use std::io;
use std::env;
use std::time::Instant;

static G: f64 = 6.6743e-11;
static MIN_COLLISION_DISTANCE_METERS: f64 = 1.0;
static MINIMUM_FORCE_DISTANCE_METERS: f64 = 2.0;

#[derive(Deserialize, Clone)]
struct ClusterConfig {
    height: i32,
    width: i32,
    particle_count: i32,
    particle_mass_kg: f64,
    center: Point,
    velocity: Vector,
}

#[derive(Deserialize)]
struct Config {
    interval_seconds: f64,
    // max_frames: i64,
    // enable_gravitational_clustering: bool,
    clusters: Vec<ClusterConfig>
}

struct Args {
    config_path: String,
    output_path: String
}

fn rand_num(min: f64, max: f64) -> f64 {
    rand::thread_rng().gen_range(min..max)
}

fn next_particle_id() -> usize {
    static NEXT_ID: AtomicUsize = AtomicUsize::new(0);
    NEXT_ID.fetch_add(1, Ordering::Relaxed)
}

fn create_random_particle(config: &ClusterConfig) -> Particle {
    Particle {
        id: next_particle_id(),
        x: (config.center.x - config.width / 2 + rand_num(0.0, config.width as f64) as i32),
        y: (config.center.y - config.height / 2 + rand_num(0.0, config.height as f64) as i32),
        v: config.velocity.clone(),
        mass: config.particle_mass_kg,
    }
}

fn create_initial_particles(particles: &mut ParticleQuadTree, clusters: &Vec<ClusterConfig>) {
    for cluster in clusters {
        for _ in 0..cluster.particle_count {
            particles.add(create_random_particle(cluster));
        }
    }
}

fn read_args() -> Args {
    let args: Vec<String> = env::args().collect();

    if args.len() != 3 {
        eprintln!("Usage: {} <config_path> <output_path>", args[0]);
        std::process::exit(1);
    }

    let config_path = &args[1];
    let output_path = &args[2];

    Args {
        config_path: config_path.clone(),
        output_path: output_path.clone()
    }
}

fn read_config(path: String) -> Config {
    let file = File::open(path).expect("Failed to open configuration file");
    let reader = BufReader::new(file);
    let config: Config = serde_json::from_reader(reader).expect("Failed to parse configuration file");
    config
}

fn write_frame(mut file: &File, particles: &ParticleQuadTree, prev_frame_size: u32) -> io::Result<u32> {
    let mapped = &particles.iter()
        .map(|p| (p.id, p.x as i32, p.y as i32, p.mass as u32))
        .collect::<Vec<_>>();
    let buf = encode::to_vec(&mapped).unwrap();
    let len = buf.len() as u32;
    file.write_all(&(len).to_be_bytes()).unwrap();
    file.write_all(&(prev_frame_size).to_be_bytes()).unwrap();
    file.write_all(&buf).unwrap();
    Ok(len)
}

fn calculate_gravitational_force(p1: &Particle, p2: &Particle) -> Vector {
    let dx = (p2.x - p1.x) as f64;
    let dy = (p2.y - p1.y) as f64;
    let distance = (dx * dx + dy * dy).sqrt();

    if distance < MINIMUM_FORCE_DISTANCE_METERS {
        return Vector { x: 0.0, y: 0.0 };
    }

    let force_magnitude = (G * p1.mass * p2.mass) / (distance * distance);
    let force_x = (force_magnitude * dx) / distance;
    let force_y = (force_magnitude * dy) / distance;

    Vector { x: force_x, y: force_y }
}

fn add_vectors(vectors: &[Vector]) -> Vector {
    vectors.iter().fold(Vector { x: 0.0, y: 0.0 }, |acc, v| Vector {
        x: acc.x + v.x,
        y: acc.y + v.y,
    })
}

fn update_particles(particles: &ParticleQuadTree, interval_seconds: u64) -> ParticleQuadTree {
    let mut new_particles: ParticleQuadTree = ParticleQuadTree::new();
    for p in particles.iter() {
        let force = add_vectors(&particles.iter()
            .map(|g| calculate_gravitational_force(p, g))
            .collect::<Vec<_>>());
        let acceleration_x = force.x / p.mass;
        let acceleration_y = force.y / p.mass;

        let new_particle = Particle {
            id: p.id,
            mass: p.mass,
            v: Vector {
                x: p.v.x + acceleration_x * interval_seconds as f64,
                y: p.v.y + acceleration_y * interval_seconds as f64
            },
            x: p.x + ((p.v.x * (interval_seconds as f64)) as i32),
            y: p.y + ((p.v.y * (interval_seconds as f64)) as i32),
        };
        new_particles.add(new_particle);
    }
    new_particles
}

fn main() {
    let args = read_args();
    let config = read_config(args.config_path);
    let file = File::create(args.output_path).unwrap();
    let mut particles: ParticleQuadTree = ParticleQuadTree::new();
    create_initial_particles(&mut particles, &config.clusters);
    let mut prev_frame_size = 0 as u32;
    let mut last_report_time = Instant::now();
    let mut frame = 0;
    let mut frames_since_last_report = 0;

    loop {
        particles = update_particles(&particles, config.interval_seconds as u64);
        prev_frame_size = write_frame(&file, &particles, prev_frame_size).unwrap();

        frame += 1;
        frames_since_last_report += 1;
        let elapsed = last_report_time.elapsed();
        if elapsed.as_millis() > 10000 {
            println!(
              "frame {}: seconds per frame: {:.3}",
              frame,
              elapsed.as_millis() as f64 / 1000f64 / frames_since_last_report as f64
            );
            last_report_time = Instant::now();
            frames_since_last_report = 0;
        }
    }
}
