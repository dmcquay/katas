export interface Point {
  x: number;
  y: number;
}

export interface Vector {
  x: number;
  y: number;
}

export type Particle = Point & {
  v: Vector;
  mass: number;
};
