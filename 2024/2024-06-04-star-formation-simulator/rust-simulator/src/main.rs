mod types;
mod particle_collection;

use types::{Particle, Point, Vector};
use particle_collection::{ParticleCollection, ParticleList};

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

#[derive(Deserialize)]
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
    // interval_seconds: f64,
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
        x: config.center.x as f64 - config.width as f64 / 2.0 + rand_num(0.0, config.width as f64),
        y: config.center.y as f64 - config.height as f64 / 2.0 + rand_num(0.0, config.height as f64),
        v: config.velocity.clone(),
        mass: config.particle_mass_kg,
    }
}

fn create_initial_particles(particles: &mut Box<dyn ParticleCollection>, clusters: &Vec<ClusterConfig>) {
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

fn write_frame(mut file: &File, particles: &Box<dyn ParticleCollection>, prev_frame_size: u32) -> io::Result<u32> {
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

fn main() {
    let args = read_args();
    let config = read_config(args.config_path);
    let file = File::create(args.output_path).unwrap();
    let mut particles: Box<dyn ParticleCollection> = Box::new(ParticleList::new());
    create_initial_particles(&mut particles, &config.clusters);
    let mut prev_frame_size = 0 as u32;
    loop {
        prev_frame_size = write_frame(&file, &particles, prev_frame_size).unwrap();
    }
}
