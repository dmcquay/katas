export interface Point {
  x: number;
  y: number;
}

export interface Path {
  start: Point;
  end: Point;
}

export enum Heading {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export enum GhostColor {
  RED,
  PINK,
  CYAN,
  ORANGE,
}

export interface Ghost {
  color: GhostColor;
  position: Point;
  heading: Heading;
}

export interface Player {
  position: Point;
  heading: Heading;
}

export interface GameState {
  players: Player[];
  ghosts: Ghost[];
  pacManVariation: number;
  ghostVariation: number;
}
