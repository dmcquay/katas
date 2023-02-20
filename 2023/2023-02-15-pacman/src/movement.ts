import { getEnabledPaths, getHeadingsByAxis, getPathAxis } from "./path-utils";
import { StateStore } from "./state-store";
import { Path, Player, Heading, Ghost, Point, Axis, GameStatus } from "./types";
import { getRandomListItem, pointsAreClose } from "./utils";

const INC = 0.1;

const findPath = (paths: Path[], heading: Heading, position: Point): Path => {
  const path = paths.find((path) => {
    if ([Heading.LEFT, Heading.RIGHT].includes(heading)) {
      return (
        position.y === path.start.y &&
        position.y === path.end.y &&
        position.x >= Math.min(path.start.x, path.end.x) &&
        position.x <= Math.max(path.start.x, path.end.x)
      );
    } else {
      return (
        position.x === path.start.x &&
        position.x === path.end.x &&
        position.y >= Math.min(path.start.y, path.end.y) &&
        position.y <= Math.max(path.start.y, path.end.y)
      );
    }
  });
  if (path == null)
    throw new Error(
      `Expected character to always be on a path, but no matching paths were found. Position: ${JSON.stringify(
        position
      )}`
    );
  return path;
};

const moveForward = <T extends Player | Ghost>(obj: T): T => {
  const xInc =
    obj.heading === Heading.RIGHT
      ? INC
      : obj.heading === Heading.LEFT
      ? INC * -1
      : 0;
  const yInc =
    obj.heading === Heading.DOWN
      ? INC
      : obj.heading === Heading.UP
      ? INC * -1
      : 0;
  return {
    ...obj,
    position: {
      x: snap(obj.position.x + xInc, INC * 0.9),
      y: snap(obj.position.y + yInc, INC * 0.9),
    },
  };
};

const atEndOfPath = (
  path: Path,
  heading: Heading,
  position: Point
): boolean => {
  return (
    (heading === Heading.RIGHT &&
      position.x === Math.max(path.start.x, path.end.x)) ||
    (heading === Heading.LEFT &&
      position.x === Math.min(path.start.x, path.end.x)) ||
    (heading === Heading.UP &&
      position.y === Math.min(path.start.y, path.end.y)) ||
    (heading === Heading.DOWN &&
      position.y === Math.max(path.start.y, path.end.y))
  );
};

const OPPOSITE_HEADINGS: Record<Heading, Heading> = {
  [Heading.UP]: Heading.DOWN,
  [Heading.DOWN]: Heading.UP,
  [Heading.LEFT]: Heading.RIGHT,
  [Heading.RIGHT]: Heading.LEFT,
};

const reverseHeading = <T extends Player | Ghost>(obj: T): T => {
  return {
    ...obj,
    heading: OPPOSITE_HEADINGS[obj.heading],
  };
};

const reverseHeadingRequested = (
  currentHeading: Heading,
  requestedHeading?: Heading
): boolean => {
  if (requestedHeading == null) return false;
  return (
    headingsAreParallel(currentHeading, requestedHeading) &&
    currentHeading !== requestedHeading
  );
};

const getHeadingAxis = (heading: Heading): Axis => {
  if ([Heading.UP, Heading.DOWN].includes(heading)) return Axis.Vertical;
  else return Axis.Horizontal;
};

const headingsAreParallel = (h1: Heading, h2: Heading): boolean => {
  return getHeadingAxis(h1) === getHeadingAxis(h2);
};

const pathIsNearPoint = (point: Point, path: Path): boolean => {
  if (getPathAxis(path) === Axis.Vertical)
    return (
      Math.abs(point.x - path.start.x) < INC * 0.9 &&
      point.y <= Math.max(path.start.y, path.end.y) &&
      point.y >= Math.min(path.start.y, path.end.y)
    );
  else
    return (
      Math.abs(point.y - path.start.y) < INC * 0.9 &&
      point.x <= Math.max(path.start.x, path.end.x) &&
      point.x >= Math.min(path.start.x, path.end.x)
    );
};

const isNearPath = (heading: Heading, position: Point, path: Path) => {
  return (
    getHeadingAxis(heading) !== getPathAxis(path) &&
    pathIsNearPoint(position, path)
  );
};

const getNearPath = (
  heading: Heading,
  position: Point,
  paths: Path[]
): Path | undefined => {
  return paths.find((path) => isNearPath(heading, position, path));
};

const movePlayer = (
  player: Player,
  paths: Path[],
  requestedHeading?: Heading
): Player => {
  if (reverseHeadingRequested(player.heading, requestedHeading)) {
    return reverseHeading(player);
  }

  // switching to a different path
  const playerRequestedAxisChange =
    requestedHeading != null &&
    !headingsAreParallel(requestedHeading, player.heading);
  if (playerRequestedAxisChange) {
    const nearPath = getNearPath(player.heading, player.position, paths);
    if (
      nearPath != null &&
      !atEndOfPath(nearPath, requestedHeading, player.position)
    ) {
      return {
        ...player,
        heading: requestedHeading,
        position: {
          x: snap(player.position.x, INC * 2),
          y: snap(player.position.y, INC * 2),
        },
      };
    }
  }

  const currentPath = findPath(paths, player.heading, player.position);
  if (atEndOfPath(currentPath, player.heading, player.position)) {
    return reverseHeading(player);
  }

  return moveForward(player);
};

const moveGhost = (ghost: Ghost, paths: Path[]): Ghost => {
  const path = findPath(paths, ghost.heading, ghost.position);

  // if nearPath found, randomly choose between the following options:
  // going on new path and, if multiple directions possibly, randomly choose direction
  // staying in current path
  const nearPath = getNearPath(ghost.heading, ghost.position, paths);
  if (nearPath && Math.random() > 0.7) {
    const validHeadings = getHeadingsByAxis(getPathAxis(nearPath)).filter(
      (heading) => !atEndOfPath(nearPath, heading, ghost.position)
    );
    const heading = getRandomListItem(validHeadings);
    const updatedGhost = {
      ...ghost,
      heading,
      position: {
        x: snap(ghost.position.x, INC * 2),
        y: snap(ghost.position.y, INC * 2),
      },
    };
    return moveForward(updatedGhost);
  }

  if (atEndOfPath(path, ghost.heading, ghost.position)) {
    return reverseHeading(ghost);
  }

  return moveForward(ghost);
};

const snap = (n: number, tolerance: number): number => {
  if (Math.abs(Math.floor(n) - n) < tolerance) return Math.floor(n);
  if (Math.abs(Math.ceil(n) - n) < tolerance) return Math.ceil(n);
  return n;
};

type KeyMap = Record<string, Heading>;

export const KeyMapArrows: KeyMap = {
  ArrowUp: Heading.UP,
  ArrowDown: Heading.DOWN,
  ArrowLeft: Heading.LEFT,
  ArrowRight: Heading.RIGHT,
};

export const KeyMapWasd: KeyMap = {
  KeyW: Heading.UP,
  KeyS: Heading.DOWN,
  KeyA: Heading.LEFT,
  KeyD: Heading.RIGHT,
};

export const KeyMapIjlk: KeyMap = {
  KeyI: Heading.UP,
  KeyK: Heading.DOWN,
  KeyJ: Heading.LEFT,
  KeyL: Heading.RIGHT,
};

export const createPlayerMovement = (
  store: StateStore,
  playerIndex: number,
  keyMap: KeyMap
) => {
  let requestedHeading: Heading | undefined;

  window.addEventListener(
    "keydown",
    (e) => {
      const heading = keyMap[e.code];
      if (heading == null || heading === requestedHeading) return;
      requestedHeading = keyMap[e.code];
    },
    false
  );

  window.addEventListener(
    "keyup",
    (e) => {
      const heading = keyMap[e.code];
      if (heading == null || heading !== requestedHeading) return;
      requestedHeading = undefined;
    },
    false
  );

  setInterval(() => {
    const state = store.getState();
    const players = state.players.map((player, idx) => {
      if (idx === playerIndex) {
        return movePlayer(player, getEnabledPaths(state), requestedHeading);
      }
      return player;
    });
    store.setState({
      ...state,
      players,
    });
  }, 20);
};

export const createGhostMovement = (store: StateStore) => {
  setInterval(() => {
    const state = store.getState();
    const ghosts = state.ghosts.map((ghost) => {
      return moveGhost(ghost, getEnabledPaths(state));
    });
    store.setState({
      ...state,
      ghosts,
    });
  }, 20);
};

export const detectCollisions = (store: StateStore) => {
  store.subscribe((state) => {
    if (state.status !== GameStatus.Playing) return;
    const isClose = (ghost: Ghost) =>
      state.players.find((player) =>
        pointsAreClose(player.position, 0.5)(ghost.position)
      );
    const closeGhost = state.ghosts.find(isClose);
    if (closeGhost != null) {
      store.setState({
        ...state,
        status: GameStatus.Lose,
      });
    }
  });
};
