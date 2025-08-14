use crate::types::{Particle, Point};

#[derive(Debug)]
struct Bounds {
    top: i32,
    bottom: i32,
    left: i32,
    right: i32
}

struct ParticleQuadTreeNodeDataUndivided {
    particles: Vec<Particle>,
}

struct ParticleQuadTreeNodeDataDivided {
    top_left: Box<ParticleQuadTreeNode>,
    top_right: Box<ParticleQuadTreeNode>,
    bottom_left: Box<ParticleQuadTreeNode>,
    bottom_right: Box<ParticleQuadTreeNode>,
}

enum ParticleQuadTreeNodeData {
    Undivided(ParticleQuadTreeNodeDataUndivided),
    Divided(ParticleQuadTreeNodeDataDivided),
}

struct ParticleQuadTreeNode {
    bounds: Bounds,
    data: ParticleQuadTreeNodeData
}

pub struct BarnesHutTree {
    root: ParticleQuadTreeNode,
    max_particles_per_node: u32
}

fn is_within_bounds(bounds: &Bounds, point: &Point) -> bool {
    point.x >= bounds.left && point.x <= bounds.right &&
    point.y >= bounds.bottom && point.y <= bounds.top
}


impl BarnesHutTree {
    pub fn new(max_particles_per_node: u32) -> Self {
        BarnesHutTree {
            root: ParticleQuadTreeNode {
                bounds: Bounds {
                    top: 1000000,
                    bottom: -1000000,
                    left: -1000000,
                    right: 1000000
                },
                data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                    particles: Vec::new(),
                }),
            },
            max_particles_per_node
        }
    }

    pub fn add(&mut self, particle: Particle) {
        let max_particles = self.max_particles_per_node;
        Self::add_recursive_static(&mut self.root, particle, max_particles);
    }

    fn add_recursive_static(node: &mut ParticleQuadTreeNode, particle: Particle, max_particles_per_node: u32) {
        if !is_within_bounds(&node.bounds, &particle.location) {
            println!("Particle out of bounds: {:?} not in {:?}", particle.location, node.bounds);
            return;
        }

        match &mut node.data {
            ParticleQuadTreeNodeData::Undivided(ref mut undivided) => {
                undivided.particles.push(particle);
                if undivided.particles.len() > max_particles_per_node as usize {
                    let particles_to_redistribute = undivided.particles.clone();
                    Self::split_node_static(node);
                    
                    // Re-add all particles to the now-divided node
                    for p in particles_to_redistribute {
                        Self::add_to_divided_node_static(node, p, max_particles_per_node);
                    }
                }
            }
            ParticleQuadTreeNodeData::Divided(_) => {
                Self::add_to_divided_node_static(node, particle, max_particles_per_node);
            }
        }
    }

    fn add_to_divided_node_static(node: &mut ParticleQuadTreeNode, particle: Particle, max_particles_per_node: u32) {
        if let ParticleQuadTreeNodeData::Divided(ref mut divided) = &mut node.data {
            let x_divide = node.bounds.left + (node.bounds.right - node.bounds.left) / 2;
            let y_divide = node.bounds.bottom + (node.bounds.top - node.bounds.bottom) / 2;
            
            if particle.location.x >= x_divide {
                if particle.location.y >= y_divide {
                    Self::add_recursive_static(&mut divided.top_right, particle, max_particles_per_node);
                } else {
                    Self::add_recursive_static(&mut divided.bottom_right, particle, max_particles_per_node);
                }
            } else {
                if particle.location.y >= y_divide {
                    Self::add_recursive_static(&mut divided.top_left, particle, max_particles_per_node);
                } else {
                    Self::add_recursive_static(&mut divided.bottom_left, particle, max_particles_per_node);
                }
            }
        }
    }

    fn split_node_static(node: &mut ParticleQuadTreeNode) {
        let x_divide = node.bounds.left + (node.bounds.right - node.bounds.left) / 2;
        let y_divide = node.bounds.bottom + (node.bounds.top - node.bounds.bottom) / 2;
        
        node.data = ParticleQuadTreeNodeData::Divided(ParticleQuadTreeNodeDataDivided {
            top_left: Box::new(ParticleQuadTreeNode {
                bounds: Bounds {
                    top: node.bounds.top,
                    bottom: y_divide,
                    left: node.bounds.left,
                    right: x_divide,
                },
                data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                    particles: Vec::new(),
                }),
            }),
            top_right: Box::new(ParticleQuadTreeNode {
                bounds: Bounds {
                    top: node.bounds.top,
                    bottom: y_divide,
                    left: x_divide,
                    right: node.bounds.right,
                },
                data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                    particles: Vec::new(),
                }),
            }),
            bottom_left: Box::new(ParticleQuadTreeNode {
                bounds: Bounds {
                    top: y_divide,
                    bottom: node.bounds.bottom,
                    left: node.bounds.left,
                    right: x_divide,
                },
                data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                    particles: Vec::new(),
                }),
            }),
            bottom_right: Box::new(ParticleQuadTreeNode {
                bounds: Bounds {
                    top: y_divide,
                    bottom: node.bounds.bottom,
                    left: x_divide,
                    right: node.bounds.right,
                },
                data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                    particles: Vec::new(),
                }),
            }),
        });
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
        loop {
            // If we have particles and a valid index, return the next particle
            if let (Some(particles), Some(index)) = (self.particles, self.current_particle_index) {
                if index < particles.len() {
                    self.current_particle_index = Some(index + 1);
                    return Some(&particles[index]);
                } else {
                    // Finished with this particle list, clear it
                    self.particles = None;
                    self.current_particle_index = None;
                }
            }

            // If no more nodes to process, we're done
            if self.node_stack.is_empty() {
                return None;
            }

            // Get the next node to process
            let node = self.node_stack.pop().unwrap();
            
            match &node.data {
                ParticleQuadTreeNodeData::Divided(divided) => {
                    // Add child nodes to stack (reverse order for depth-first traversal)
                    self.node_stack.push(&divided.bottom_right);
                    self.node_stack.push(&divided.bottom_left);
                    self.node_stack.push(&divided.top_right);
                    self.node_stack.push(&divided.top_left);
                }
                ParticleQuadTreeNodeData::Undivided(undivided) => {
                    if !undivided.particles.is_empty() {
                        self.particles = Some(&undivided.particles);
                        self.current_particle_index = Some(0);
                    }
                }
            }
        }
    }
}
