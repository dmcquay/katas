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

  getGravitySources(_particle: Particle) {
    return this.particles;
  }

  getNeighbors(_point: Point, _distanceMeters: number) {
    return this.particles;
  }

  remove(particle: Particle) {
    this.particles = this.particles.filter((p) => p.id !== particle.id);
  }
}
