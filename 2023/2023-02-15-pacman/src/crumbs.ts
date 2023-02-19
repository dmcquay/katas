import { Crumb, Path, Axis } from "./types";
import { getPathAxis } from "./path-utils";
import { paths } from "./paths";
import * as R from "ramda";

const PATHS_WITH_CRUMBS: string[] = [
  "H1A",
  "H1B",
  "H2",
  "H3A",
  "H3B",
  "H3C",
  "H3D",
  "H7A",
  "H7B",
  "H8A",
  "H8B",
  "H8C",
  "H9A",
  "H9B",
  "H9C",
  "H9D",
  "H10",
  "V1A",
  "V1B",
  "V1C",
  "V2",
  "V3",
  "V4A",
  "V4C",
  "V5A",
  "V5C",
  "V5D",
  "V10A",
  "V10B",
  "v10C",
  "V9",
  "V8",
  "V7A",
  "V7C",
  "V6A",
  "V6C",
  "V6D",
];

const createCrumbsAlongPath = (path: Path): Crumb[] => {
  const crumbs: Crumb[] = [];
  if (getPathAxis(path) === Axis.Vertical) {
    const minY = Math.min(path.start.y, path.end.y);
    const maxY = Math.max(path.start.y, path.end.y);
    const x = path.start.x;
    for (let y = minY; y <= maxY; y++) {
      crumbs.push({ position: { x, y } });
    }
  } else {
    const minX = Math.min(path.start.x, path.end.x);
    const maxX = Math.max(path.start.x, path.end.x);
    const y = path.start.y;
    for (let x = minX; x <= maxX; x++) {
      crumbs.push({ position: { x, y } });
    }
  }
  return crumbs;
};

const crumbEq = (c1: Crumb, c2: Crumb): boolean => {
  return c1.position.x === c2.position.x && c1.position.y === c2.position.y;
};

export const createStandardCrumbs = (): Crumb[] => {
  const matchingPaths = paths.filter((p) =>
    PATHS_WITH_CRUMBS.includes(p.label)
  );
  const crumbs = matchingPaths.flatMap(createCrumbsAlongPath);
  return R.uniqWith(crumbEq, crumbs);
};
