use crate::types::Particle;

struct ParticleQuadTreeNodeUndivided {
    particles: Vec<Particle>,
}

struct ParticleQuadTreeNodeDivided {
    top_left: Box<ParticleQuadTreeNode>,
    top_right: Box<ParticleQuadTreeNode>,
    bottom_left: Box<ParticleQuadTreeNode>,
    bottom_right: Box<ParticleQuadTreeNode>
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

    pub fn add(&mut self, particle: Particle) {
        match self.root {
            ParticleQuadTreeNode::Divided(ref divided) => {},
            ParticleQuadTreeNode::Undivided(ref mut undivided) => {
                undivided.particles.push(particle)
            }
        }
    }

    pub fn iter(&self) -> ParticleQuadTreeIterator {
        ParticleQuadTreeIterator::new(&self.root)
    }
}

pub struct ParticleQuadTreeIterator<'a> {
    node_stack: Vec<&'a ParticleQuadTreeNode>,
    particles: Option<&'a Vec<Particle>>,
    current_particle_index: Option<usize>,
}

impl<'a> ParticleQuadTreeIterator<'a> {
    fn new(root: &'a ParticleQuadTreeNode) -> Self {
        ParticleQuadTreeIterator {
            node_stack: vec![root],
            particles: None,
            current_particle_index: None
        }
    }
}

impl<'a> Iterator for ParticleQuadTreeIterator<'a> {
    type Item = &'a Particle;

    fn next(&mut self) -> Option<Self::Item> {
        while (self.particles.is_none() || self.particles.as_ref().unwrap().is_empty()) && !self.node_stack.is_empty() {
            let node = self.node_stack.pop();
        
            match node {
                Some(ParticleQuadTreeNode::Divided(ref divided)) => {
                    self.node_stack.push(&divided.top_left);
                    self.node_stack.push(&divided.top_right);
                    self.node_stack.push(&divided.bottom_left);
                    self.node_stack.push(&divided.bottom_right);
                }
                Some(ParticleQuadTreeNode::Undivided(ref undivided)) => {
                    self.particles = Some(&undivided.particles);
                    self.current_particle_index = Some(0);
                },
                None => {}
            }
        }

        if let Some(index) = self.current_particle_index {
            if let Some(particle) = self.particles.and_then(|vec| vec.get(index)) {
                self.current_particle_index = Some(index + 1);
                return Some(particle);
            }
        }

        None
    }
}
