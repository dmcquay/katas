import { Point } from "./types";

export const getRandomListItem = <T>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)];
};

const INC = 0.1;

export const pointsAreClose =
  (p1: Point, tolerance: number = INC) =>
  (p2: Point): boolean => {
    const INC = 0.1;
    return (
      Math.abs(p1.x - p2.x) < tolerance && Math.abs(p1.y - p2.y) < tolerance
    );
  };
