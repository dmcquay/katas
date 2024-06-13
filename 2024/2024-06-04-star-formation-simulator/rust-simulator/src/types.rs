use serde::{Serialize, Deserialize};

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Vector {
    pub x: f64,
    pub y: f64,
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Point {
    pub x: i32,
    pub y: i32,
}

#[derive(Debug, Serialize)]
pub struct Particle {
    pub id: usize,
    pub x: u32,
    pub y: u32,
    pub v: Vector,
    pub mass: f64,
}