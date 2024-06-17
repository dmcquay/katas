use serde::{Serialize, Deserialize};

#[derive(Debug, Deserialize, Serialize, Clone, Copy)]
pub struct Vector {
    pub x: f64,
    pub y: f64,
}

#[derive(Debug, Deserialize, Serialize, Clone, Copy)]
pub struct Point {
    pub x: i32,
    pub y: i32,
}

#[derive(Debug, Serialize, Clone, Copy)]
pub struct Particle {
    pub id: usize,
    pub location: Point,
    pub velocity: Vector,
    pub mass: f64,
}