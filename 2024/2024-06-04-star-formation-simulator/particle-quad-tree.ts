import type { Point, Particle } from "./types";

type ParticleQuadTreeData =
  | {
      isDivided: false;
      particles: Particle[];
    }
  | {
      isDivided: true;
      topLeft: ParticleQuadTree;
      topRight: ParticleQuadTree;
      bottomLeft: ParticleQuadTree;
      bottomRight: ParticleQuadTree;
    };

type Bounds = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

type ParticleQuadTreeOptions = {
  maxParticles: number;
};

const DEFAULT_OPTIONS: ParticleQuadTreeOptions = {
  maxParticles: 10,
};

const DEFAULT_BOUNDS: Bounds = {
  top: 10000000,
  bottom: -10000000,
  right: 10000000,
  left: -10000000,
};

const boundsOverlap = (b1: Bounds, b2: Bounds): boolean => {
  return (
    b1.right >= b2.left &&
    b1.left <= b2.right &&
    b1.top >= b2.bottom &&
    b1.bottom <= b2.top
  );
};

export class ParticleQuadTree {
  private data: ParticleQuadTreeData;
  public count: number;
  private opts: ParticleQuadTreeOptions;
  private bounds: Bounds;

  constructor(
    opts: ParticleQuadTreeOptions = DEFAULT_OPTIONS,
    bounds: Bounds = DEFAULT_BOUNDS
  ) {
    this.data = { isDivided: false, particles: [] };
    this.bounds = bounds;
    this.opts = opts;
    this.count = 0;
  }

  private getXDivide() {
    return this.bounds.left + (this.bounds.right - this.bounds.left) / 2;
  }

  private getYDivide() {
    return this.bounds.bottom + (this.bounds.top - this.bounds.bottom) / 2;
  }

  private getSubTree(point: Point) {
    if (!this.data.isDivided) throw new Error("not divided");
    const xDivide = this.getXDivide();
    const yDivide = this.getYDivide();
    if (point.x <= xDivide) {
      if (point.y >= yDivide) {
        return this.data.topLeft;
      } else {
        return this.data.bottomLeft;
      }
    } else {
      if (point.y >= yDivide) {
        return this.data.topRight;
      } else {
        return this.data.bottomRight;
      }
    }
  }

  add(particle: Particle): void {
    this.count++;

    if (this.data.isDivided) {
      const subTree = this.getSubTree(particle);
      subTree.add(particle);
    } else {
      this.data.particles.push(particle);

      if (this.count > this.opts.maxParticles) {
        const particles = this.data.particles;
        const xDivide = this.getXDivide();
        const yDivide = this.getYDivide();
        this.data = {
          isDivided: true,
          topLeft: new ParticleQuadTree(this.opts, {
            top: this.bounds.top,
            bottom: yDivide,
            left: this.bounds.left,
            right: xDivide,
          }),
          topRight: new ParticleQuadTree(this.opts, {
            top: this.bounds.top,
            bottom: yDivide,
            left: xDivide,
            right: this.bounds.right,
          }),
          bottomLeft: new ParticleQuadTree(this.opts, {
            top: yDivide,
            bottom: this.bounds.bottom,
            left: this.bounds.left,
            right: xDivide,
          }),
          bottomRight: new ParticleQuadTree(this.opts, {
            top: yDivide,
            bottom: this.bounds.bottom,
            left: xDivide,
            right: this.bounds.right,
          }),
        };
        for (let p of particles) {
          const subTree = this.getSubTree(p);
          subTree.add(p);
        }
      }
    }
  }

  remove(particle: Particle): void {
    if (this.data.isDivided) {
      this.getSubTree(particle).remove(particle);
      this.count--;
      if (this.count <= this.opts.maxParticles) {
        this.data = {
          isDivided: false,
          particles: this.getAll(),
        };
      }
    } else {
      this.data.particles = this.data.particles.filter((p) => p !== particle);
    }
  }

  getAll(): Particle[] {
    if (this.data.isDivided) {
      return [
        ...this.data.topLeft.getAll(),
        ...this.data.topRight.getAll(),
        ...this.data.bottomLeft.getAll(),
        ...this.data.bottomRight.getAll(),
      ];
    } else {
      return this.data.particles;
    }
  }

  // to get actual particles for collision detection
  // will always return full quad tree leaf nodes. therefore, guaranteed to give you all neighbors
  // within distance and then maybe some extra.
  getNeighbors(point: Point, maxDistance: number): Particle[] {
    if (this.data.isDivided) {
      const bounds = {
        top: point.y + maxDistance,
        bottom: point.y - maxDistance,
        left: point.x - maxDistance,
        right: point.x + maxDistance,
      };
      const allSubTrees = [
        this.data.topLeft,
        this.data.topRight,
        this.data.bottomLeft,
        this.data.bottomRight,
      ];
      const overlappingSubTrees = allSubTrees.filter(
        (t) => t.count > 0 && boundsOverlap(bounds, t.bounds)
      );
      return overlappingSubTrees.flatMap((t) =>
        t.getNeighbors(point, maxDistance)
      );
    } else {
      return this.data.particles.filter((p) => p !== point);
    }
  }

  // to get virtual particles for simplified gravitational computations
  getGravitationalClusters(point: Point): Particle[] {
    return [];
  }
}
