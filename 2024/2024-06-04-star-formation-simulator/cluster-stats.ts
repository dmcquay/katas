import { Point, Particle } from "./types";

export class ClusterStats {
  public centerOfMass: Point | undefined;
  public mass: number;
  public count: number;
  private log: Record<string, any>[];

  constructor() {
    this.centerOfMass = undefined;
    this.mass = 0;
    this.count = 0;
    this.log = [];
  }

  addParticle(particle: Particle) {
    // this.log.push({
    //   action: "addParticle",
    //   particle,
    //   centerOfMass: this.centerOfMass,
    //   mass: this.mass,
    //   count: this.count,
    // });
    if (this.centerOfMass == null) {
      this.centerOfMass = {
        x: particle.x,
        y: particle.y,
      };
      this.mass = particle.mass;
      this.count = 1;
    } else {
      const totalMass = this.mass + particle.mass;
      const x =
        (this.mass * this.centerOfMass.x + particle.mass * particle.x) /
        totalMass;
      const y =
        (this.mass * this.centerOfMass.y + particle.mass * particle.y) /
        totalMass;
      this.centerOfMass = { x, y };
      this.mass += particle.mass;
      this.count++;
    }
  }

  removeParticle(particle: Particle) {
    // this.log.push({
    //   action: "removeParticle",
    //   particle,
    //   centerOfMass: this.centerOfMass,
    //   mass: this.mass,
    //   count: this.count,
    // });
    if (this.centerOfMass == null) {
      throw new Error(
        `Cannot remove particle from empty cluster (centerOfMass is nullish). Particle ID: ${
          particle.id
        }\n${JSON.stringify(this.log, null, 2)}`
      );
    }
    if (this.count === 0) {
      throw new Error(
        `Cannot remove particle from empty cluster (count is 0). Particle ID: ${
          particle.id
        }\n${JSON.stringify(this.log, null, 2)}`
      );
    }
    const remainingMass = this.mass - particle.mass;
    if (remainingMass < 0) {
      throw new Error(
        `The remaining mass cannot be less than 0. mass: ${
          this.mass
        }, particle mass: ${
          particle.mass
        }, remainingMass: ${remainingMass}\n${JSON.stringify(
          this.log,
          null,
          2
        )}`
      );
    }
    if (remainingMass === 0) {
      this.centerOfMass = undefined;
      this.mass = 0;
    } else {
      const x =
        (this.centerOfMass.x * this.mass - particle.mass * particle.x) /
        remainingMass;
      const y =
        (this.centerOfMass.y * this.mass - particle.mass * particle.y) /
        remainingMass;
      this.centerOfMass = { x, y };
      this.mass -= particle.mass;
    }
    this.count--;
  }
}
