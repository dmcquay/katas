use serde::{Serialize, Deserialize};

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Vector {
    pub x: f64,
    pub y: f64,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Point {
    pub x: i32,
    pub y: i32,
}

#[derive(Debug, Serialize, Clone)]
pub struct Particle {
    pub id: usize,
    pub x: f64,
    pub y: f64,
    pub v: Vector,
    pub mass: f64,
}