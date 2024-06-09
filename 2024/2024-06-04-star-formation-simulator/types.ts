export interface Point {
  x: number;
  y: number;
}

export interface Vector {
  x: number;
  y: number;
}

export type Particle = Point & {
  id: number;
  v: Vector;
  mass: number;
};

export type GravitySource = Point & {
  mass: number;
  objectCount?: number;
};

export interface ParticleCollection {
  add: (particle: Particle) => void;
  getAll: () => Particle[];
  remove: (particle: Particle) => void;
  getGravitySources: (particle: Particle) => GravitySource[];
  getNeighbors: (point: Point, distanceMeters: number) => Particle[];
}
