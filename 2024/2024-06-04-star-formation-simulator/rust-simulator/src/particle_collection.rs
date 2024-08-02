use crate::types::{Particle, Point};

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

fn is_within_bounds(_bounds: &Bounds, _point: &Point) -> bool {
    unimplemented!();
}

fn split(node: &mut ParticleQuadTreeNode) {
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

fn add_to_children(nodes: &mut Vec<ParticleQuadTreeNode>, particles: &Vec<Particle>) {
    for particle in particles {
        for node in nodes.iter_mut() {
            if is_within_bounds(&node.bounds, &particle.location) {
                match node.data {
                    ParticleQuadTreeNodeData::Undivided(mut undivided) => {
                        undivided.particles.push(*particle);
                    },
                    _ => {}
                }
            }
        }
    }
}

impl BarnesHutTree {
    pub fn new(max_particles_per_node: u32) -> Self {
        BarnesHutTree {
            root: ParticleQuadTreeNode {
                bounds: Bounds {
                    top: i32::MIN,
                    bottom: i32::MAX,
                    left: i32::MIN,
                    right: i32::MAX
                },
                data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                    particles: Vec::new(),
                }),
            },
            max_particles_per_node
        }
    }

    pub fn add2(&mut self, particle: Particle) {
        let mut stack: Vec<&mut ParticleQuadTreeNode> = vec![&mut self.root];
        while stack.len() > 0 {
            let node = stack.pop().unwrap();
            if is_within_bounds(&node.bounds, &particle.location) {
                if let ParticleQuadTreeNodeData::Undivided(undivided) = &mut node.data {
                    if undivided.particles.len() < self.max_particles_per_node as usize {
                        undivided.particles.push(particle);
                    } else {
                        let particles_clone = undivided.particles.clone();
                        split(node);
                        
                    }
                } else {
                    

                }
            }
        }
    }



    pub fn add(&mut self, particle: Particle) {
        let mut current_node = &mut self.root;
        let mut divide_needed = false;
        let mut particles_to_add: Vec<Particle> = Vec::new();
        particles_to_add.push(particle);
        
        loop {
            match current_node.data {
                ParticleQuadTreeNodeData::Undivided(ref mut undivided) => {
                    undivided.particles.push(particle);
                    if undivided.particles.len() > self.max_particles_per_node as usize {
                        println!("detected node that needs to be divided");
                        particles_to_add = undivided.particles.clone();
                        divide_needed = true;
                    }
                    break;
                }
                ParticleQuadTreeNodeData::Divided(ref mut divided) => {
                    let x_divide = current_node.bounds.left + (current_node.bounds.right - current_node.bounds.left) / 2;
                    let y_divide = current_node.bounds.bottom + (current_node.bounds.top - current_node.bounds.bottom) / 2;
                    if particle.location.x >= x_divide {
                        if particle.location.y >= y_divide {
                            current_node = &mut divided.top_right
                        } else {
                            current_node = &mut  divided.bottom_right
                        }
                    } else {
                        if particle.location.y >= y_divide {
                            current_node = &mut  divided.top_left
                        } else {
                            current_node = &mut  divided.bottom_left
                        }
                    }
                }
            }
        }

        match divide_opt {
            None => {
            },
            Some(particles ) => {
                println!("dividing node");
                let x_divide = current_node.bounds.left + (current_node.bounds.right - current_node.bounds.left) / 2;
                let y_divide = current_node.bounds.bottom + (current_node.bounds.top - current_node.bounds.bottom) / 2;
                
                current_node.data = ParticleQuadTreeNodeData::Divided(ParticleQuadTreeNodeDataDivided {
                    top_left: Box::new(ParticleQuadTreeNode {
                        bounds: Bounds {
                            top: current_node.bounds.top,
                            bottom: y_divide,
                            left: current_node.bounds.left,
                            right: x_divide,
                        },
                        data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                            particles: Vec::new(),
                        }),
                    }),
                    top_right: Box::new(ParticleQuadTreeNode {
                        bounds: Bounds {
                            top: current_node.bounds.top,
                            bottom: y_divide,
                            left: x_divide,
                            right: current_node.bounds.right,
                        },
                        data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                            particles: Vec::new(),
                        }),
                    }),
                    bottom_left: Box::new(ParticleQuadTreeNode {
                        bounds: Bounds {
                            top: y_divide,
                            bottom: current_node.bounds.bottom,
                            left: current_node.bounds.left,
                            right: x_divide,
                        },
                        data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                            particles: Vec::new(),
                        }),
                    }),
                    bottom_right: Box::new(ParticleQuadTreeNode {
                        bounds: Bounds {
                            top: y_divide,
                            bottom: current_node.bounds.bottom,
                            left: x_divide,
                            right: current_node.bounds.right,
                        },
                        data: ParticleQuadTreeNodeData::Undivided(ParticleQuadTreeNodeDataUndivided {
                            particles: Vec::new(),
                        }),
                    }),
                });

                for particle in particles.iter() {
                    println!("adding particle to new node");
                    self.add(*particle)
                }
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
                Some(some_node) => {
                    match some_node.data {
                        ParticleQuadTreeNodeData::Divided(ref divided) => {
                            self.node_stack.push(&divided.top_left);
                            self.node_stack.push(&divided.top_right);
                            self.node_stack.push(&divided.bottom_left);
                            self.node_stack.push(&divided.bottom_right);
                        }
                        ParticleQuadTreeNodeData::Undivided(ref undivided) => {
                            self.particles = Some(&undivided.particles);
                            self.current_particle_index = Some(0);
                        }
                    }
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
