export enum Axis {
  Vertical,
  Horizontal,
}

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
export const AllGhostColors: GhostColor[] = [
  GhostColor.RED,
  GhostColor.PINK,
  GhostColor.CYAN,
  GhostColor.ORANGE,
];

export interface Ghost {
  color: GhostColor;
  position: Point;
  heading: Heading;
}

export interface Player {
  position: Point;
  heading: Heading;
}

export interface Path {
  label: string;
  start: Point;
  end: Point;
  isJailExit?: boolean;
}

export interface Crumb {
  position: Point;
  consumed: boolean;
  isBig?: boolean;
}

export enum GameStatus {
  Playing,
  Win,
  Lose,
  Paused,
}

export interface GameState {
  status: GameStatus;
  players: Player[];
  ghosts: Ghost[];
  pacManVariation: number;
  ghostVariation: number;
  paths: Path[];
  crumbs: Crumb[];
  isJailOpen: boolean;
  ghostsEdibleUntil?: number; // Date epoch millis
}
