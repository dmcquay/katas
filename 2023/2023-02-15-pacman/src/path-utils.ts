import { Axis, GameState, Heading, Path } from "./types";

export const getPathAxis = (path: Path): Axis => {
  if (path.start.x === path.end.x) return Axis.Vertical;
  else if (path.start.y === path.end.y) return Axis.Horizontal;
  else throw new Error("Path is diagonal, which is not allowed.");
};

const HEADINGS_BY_AXIS: Record<Axis, Heading[]> = {
  [Axis.Vertical]: [Heading.UP, Heading.DOWN],
  [Axis.Horizontal]: [Heading.LEFT, Heading.RIGHT],
};

export const getHeadingsByAxis = (axis: Axis): Heading[] => {
  return HEADINGS_BY_AXIS[axis];
};

export const getEnabledPaths = (state: GameState): Path[] => {
  if (state.isJailOpen) {
    return state.paths;
  } else {
    return state.paths.filter((path) => !path.isJailExit);
  }
};
