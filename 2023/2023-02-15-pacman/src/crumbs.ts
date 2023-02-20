import { Crumb, Path, Axis, Point, GameStatus } from "./types";
import { getPathAxis } from "./path-utils";
import { paths } from "./paths";
import * as R from "ramda";
import { StateStore } from "./state-store";
import { pointEq, pointsAreClose } from "./utils";

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
  "V10C",
  "V9",
  "V8",
  "V7A",
  "V7C",
  "V6A",
  "V6C",
  "V6D",
];

const BIG_CRUMB_POSITIONS: Point[] = [
  { x: 1, y: 3 },
  { x: 1, y: 23 },
  { x: 26, y: 3 },
  { x: 26, y: 23 },
];

const crumbShouldBeBig = (crumb: Crumb): boolean => {
  return (
    BIG_CRUMB_POSITIONS.find((point) => pointEq(crumb.position, point)) != null
  );
};

const createCrumbsAlongPath = (path: Path): Crumb[] => {
  const crumbs: Crumb[] = [];
  if (getPathAxis(path) === Axis.Vertical) {
    const minY = Math.min(path.start.y, path.end.y);
    const maxY = Math.max(path.start.y, path.end.y);
    const x = path.start.x;
    for (let y = minY; y <= maxY; y++) {
      crumbs.push({ position: { x, y }, consumed: false });
    }
  } else {
    const minX = Math.min(path.start.x, path.end.x);
    const maxX = Math.max(path.start.x, path.end.x);
    const y = path.start.y;
    for (let x = minX; x <= maxX; x++) {
      crumbs.push({ position: { x, y }, consumed: false });
    }
  }
  return crumbs;
};

const crumbEq = (c1: Crumb, c2: Crumb): boolean => {
  return pointEq(c1.position, c2.position);
};

export const createStandardCrumbs = (): Crumb[] => {
  const matchingPaths = paths.filter((p) =>
    PATHS_WITH_CRUMBS.includes(p.label)
  );
  let crumbs = matchingPaths.flatMap(createCrumbsAlongPath);
  crumbs = R.uniqWith(crumbEq, crumbs);
  crumbs.filter(crumbShouldBeBig).forEach((crumb) => (crumb.isBig = true));
  return crumbs;
};

const crumbIsCloseToPoints =
  (points: Point[]) =>
  (crumb: Crumb): boolean => {
    return (
      points.find((point) => pointsAreClose(point)(crumb.position)) != null
    );
  };

export const eatCrumbs = (store: StateStore) => {
  store.subscribe((state) => {
    const isClose = crumbIsCloseToPoints(
      state.players.map((player) => player.position)
    );
    const closeCrumb = state.crumbs.filter((c) => !c.consumed).find(isClose);
    if (closeCrumb != null) {
      const crumbs = state.crumbs.map((crumb) => {
        if (crumbEq(closeCrumb, crumb)) {
          return {
            ...crumb,
            consumed: true,
          };
        } else {
          return crumb;
        }
      });
      const status =
        crumbs.filter((c) => !c.consumed).length === 0
          ? GameStatus.Win
          : state.status;
      store.setState({
        ...state,
        crumbs,
        status,
      });
    }
  });
};
