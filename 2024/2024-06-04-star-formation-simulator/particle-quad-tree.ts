import type {
  Point,
  Particle,
  GravitySource,
  ParticleCollection,
} from "./types";
import { ClusterStats } from "./cluster-stats";

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
  top: 1000000,
  bottom: -1000000,
  right: 1000000,
  left: -1000000,
};

const boundsOverlap = (b1: Bounds, b2: Bounds): boolean => {
  const result =
    b1.right >= b2.left &&
    b1.left <= b2.right &&
    b1.top >= b2.bottom &&
    b1.bottom <= b2.top;
  return result;
};

export class ParticleQuadTree implements ParticleCollection {
  private data: ParticleQuadTreeData;
  public clusterStats: ClusterStats;
  private opts: ParticleQuadTreeOptions;
  private bounds: Bounds;

  constructor(
    opts: ParticleQuadTreeOptions = DEFAULT_OPTIONS,
    bounds: Bounds = DEFAULT_BOUNDS
  ) {
    this.data = { isDivided: false, particles: [] };
    this.bounds = bounds;
    this.opts = opts;
    this.clusterStats = new ClusterStats();
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
    if (point.x >= xDivide) {
      if (point.y >= yDivide) {
        return this.data.topRight;
      } else {
        return this.data.bottomRight;
      }
    } else {
      if (point.y >= yDivide) {
        return this.data.topLeft;
      } else {
        return this.data.bottomLeft;
      }
    }
  }

  add(particle: Particle): void {
    if (
      particle.x < this.bounds.left ||
      particle.x > this.bounds.right ||
      particle.y < this.bounds.bottom ||
      particle.y > this.bounds.top
    ) {
      console.error(`Ignoring out of bounds particle`);
      return;
    }

    this.clusterStats.addParticle(particle);

    if (this.data.isDivided) {
      const subTree = this.getSubTree(particle);
      subTree.add(particle);
    } else {
      this.data.particles.push(particle);

      if (this.clusterStats.count > this.opts.maxParticles) {
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
      if (this.clusterStats.count <= this.opts.maxParticles) {
        this.data = {
          isDivided: false,
          particles: this.getAll(),
        };
      }
    } else {
      const found = this.data.particles.find((p) => p === particle);
      if (found == null) {
        throw new Error(`Tried to remove particle that does not exist.`);
      }
      this.data.particles = this.data.particles.filter((p) => p !== particle);
    }
    this.clusterStats.removeParticle(particle);
  }

  mutateParticle(particle: Particle, cb: (particle: Particle) => void) {
    const prevPoint = { x: particle.x, y: particle.y };
    this.remove(particle);
    cb(particle);
    try {
      this.add(particle);
    } catch (err: any) {
      throw new Error(err.message + JSON.stringify(prevPoint));
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

  getGravitySources(p: Particle) {
    const neighbors = this.getNeighbors(p, 100);
    const clusters = this.getGravitationalClusters(p, 100);
    const neighborClusters: GravitySource[] = neighbors.map((p) => {
      return {
        ...p,
        objectCount: 1,
      };
    });
    return [...clusters, ...neighborClusters];
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
        (t) => t.clusterStats.count > 0 && boundsOverlap(bounds, t.bounds)
      );
      return overlappingSubTrees.flatMap((t) =>
        t.getNeighbors(point, maxDistance)
      );
    } else {
      return this.data.particles.filter((p) => p !== point);
    }
  }

  // to get virtual particles for simplified gravitational computations
  getGravitationalClusters(point: Point, minDistance: number): GravitySource[] {
    const bounds = {
      top: point.y + minDistance,
      bottom: point.y - minDistance,
      left: point.x - minDistance,
      right: point.x + minDistance,
    };

    if (this.clusterStats.centerOfMass == null) {
      // console.log("center of mass null, return []");
      return [];
    }

    if (!this.data.isDivided) {
      if (boundsOverlap(bounds, this.bounds)) {
        return [];
      } else {
        return [
          {
            ...this.clusterStats.centerOfMass,
            mass: this.clusterStats.mass,
            objectCount: this.clusterStats.count,
          },
        ];
      }
    }

    const allSubTrees = [
      this.data.topLeft,
      this.data.topRight,
      this.data.bottomLeft,
      this.data.bottomRight,
    ];

    const nonOverlappingSubTrees = allSubTrees.filter(
      (t) => !boundsOverlap(bounds, t.bounds)
    );

    if (nonOverlappingSubTrees.length === 4) {
      return [
        {
          ...this.clusterStats.centerOfMass,
          mass: this.clusterStats.mass,
          objectCount: this.clusterStats.count,
        },
      ];
    }

    const nonEmptySubTrees = allSubTrees.filter(
      (t) => t.clusterStats.count > 0
    );

    return nonEmptySubTrees.flatMap((t) => {
      return t.getGravitationalClusters(point, minDistance);
    });
  }
}
