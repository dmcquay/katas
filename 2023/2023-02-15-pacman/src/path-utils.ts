import { Axis, Path } from "./types";

export const getPathAxis = (path: Path): Axis => {
  if (path.start.x === path.end.x) return Axis.Vertical;
  else if (path.start.y === path.end.y) return Axis.Horizontal;
  else throw new Error("Path is diagonal, which is not allowed.");
};
