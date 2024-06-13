use crate::types::Particle;

pub trait ParticleCollection {
    fn add(&mut self, particle: Particle);
    fn iter(&self) -> Box<dyn Iterator<Item = &Particle> + '_>;
}

pub struct ParticleList {
    particles: Vec<Particle>,
}

impl ParticleList {
    pub fn new() -> Self {
        ParticleList {
            particles: Vec::new(),
        }
    }
}

impl ParticleCollection for ParticleList {
    fn add(&mut self, particle: Particle) {
        self.particles.push(particle);
    }

    fn iter(&self) -> Box<dyn Iterator<Item = &Particle> + '_> {
        Box::new(self.particles.iter())
    }
}