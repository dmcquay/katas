import { Particle, ParticleCollection, Point } from "./types";

export class ParticleList implements ParticleCollection {
  private particles: Particle[];

  constructor() {
    this.particles = [];
  }

  add(particle: Particle) {
    this.particles.push(particle);
  }

  getAll() {
    return this.particles;
  }

  getGravitySources(particle: Particle) {
    return this.particles.filter((p) => p !== particle);
  }

  getNeighbors(point: Point, _distanceMeters: number) {
    return this.particles.filter((p) => p !== point);
  }

  remove(particle: Particle) {
    this.particles = this.particles.filter((p) => p.id !== particle.id);
  }

  mutateParticle(particle: Particle, cb: (particle: Particle) => void) {
    cb(particle);
  }
}
