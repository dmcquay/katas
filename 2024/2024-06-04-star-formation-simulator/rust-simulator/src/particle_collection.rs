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

struct ParticleQuadTreeNodeUndivided {
    particles: Vec<Particle>,
}

struct ParticleQuadTreeNodeDivided {
    topLeft: Box<ParticleQuadTreeNode>,
    topRight: Box<ParticleQuadTreeNode>,
    bottomLeft: Box<ParticleQuadTreeNode>,
    bottomRight: Box<ParticleQuadTreeNode>
}

enum ParticleQuadTreeNode {
    Undivided(ParticleQuadTreeNodeUndivided),
    Divided(ParticleQuadTreeNodeDivided),
}

pub struct ParticleQuadTree {
    root: ParticleQuadTreeNode
}

impl ParticleQuadTree {
    pub fn new() -> Self {
        ParticleQuadTree {
            root: ParticleQuadTreeNode::Undivided(ParticleQuadTreeNodeUndivided {
                particles: Vec::new()
            })
        }
    }
}

impl ParticleCollection for ParticleQuadTree {
    fn add(&mut self, particle: Particle) {
        match self.root {
            ParticleQuadTreeNode::Divided(ref divided) => {},
            ParticleQuadTreeNode::Undivided(ref mut undivided) => {
                undivided.particles.push(particle)
            }
        }
    }

    fn iter(&self) -> Box<dyn Iterator<Item = &Particle> + '_> {
        match self.root {
            ParticleQuadTreeNode::Divided(ref _divided) => {
                // let iter_nw = divided.nw.iter();
                // let iter_ne = divided.ne.iter();
                // let iter_sw = divided.sw.iter();
                // let iter_se = divided.se.iter();
                // Box::new(iter_nw.chain(iter_ne).chain(iter_sw).chain(iter_se))
                Box::new([].iter())
            }
            ParticleQuadTreeNode::Undivided(ref undivided) => {
                Box::new(undivided.particles.iter())
            }
        }
    }
}