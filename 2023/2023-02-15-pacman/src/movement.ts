import { StateStore } from "./state-store";
import { Path, Player, Heading, Ghost, Point } from "./types";

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

const reverseHeadingIfAtEndOfPath = <T extends Player | Ghost>(
  obj: T,
  path: Path
): T | undefined => {
  if (
    obj.heading === Heading.RIGHT &&
    obj.position.x === Math.max(path.start.x, path.end.x)
  ) {
    return { ...obj, heading: Heading.LEFT };
  } else if (
    obj.heading === Heading.LEFT &&
    obj.position.x === Math.min(path.start.x, path.end.x)
  ) {
    return { ...obj, heading: Heading.RIGHT };
  } else if (
    obj.heading === Heading.UP &&
    obj.position.y === Math.min(path.start.y, path.end.y)
  ) {
    return { ...obj, heading: Heading.DOWN };
  } else if (
    obj.heading === Heading.DOWN &&
    obj.position.y === Math.max(path.start.y, path.end.y)
  ) {
    return { ...obj, heading: Heading.UP };
  } else {
    return undefined;
  }
};

const reverseHeadingIfRequested = (
  player: Player,
  requestedHeading?: Heading
): Player | undefined => {
  if (requestedHeading == null) return;
  if (
    (player.heading === Heading.RIGHT && requestedHeading === Heading.LEFT) ||
    (player.heading === Heading.LEFT && requestedHeading === Heading.RIGHT) ||
    (player.heading === Heading.UP && requestedHeading === Heading.DOWN) ||
    (player.heading === Heading.DOWN && requestedHeading === Heading.UP)
  ) {
    return {
      ...player,
      heading: requestedHeading,
    };
  }
  return undefined;
};

const getHeadingAxis = (heading: Heading): "vertical" | "horizontal" => {
  if ([Heading.UP, Heading.DOWN].includes(heading)) return "vertical";
  else return "horizontal";
};

const headingsAreParallel = (h1: Heading, h2: Heading): boolean => {
  return getHeadingAxis(h1) === getHeadingAxis(h2);
};

const movePlayer = (
  player: Player,
  paths: Path[],
  requestedHeading?: Heading
): Player => {
  const reversedByRequest = reverseHeadingIfRequested(player, requestedHeading);
  if (reversedByRequest) return reversedByRequest;

  // if there is a near path and player has requested new heading that aligns with it,
  // then switch heading and snap to that path

  if (
    requestedHeading != null &&
    !headingsAreParallel(requestedHeading, player.heading)
  ) {
    for (let path of paths) {
      if (
        (getHeadingAxis(player.heading) === "horizontal" &&
          path.start.x === path.end.x &&
          Math.abs(player.position.x - path.start.x) < INC &&
          ((requestedHeading === Heading.UP &&
            Math.min(path.start.y, path.end.y) < player.position.y) ||
            (requestedHeading === Heading.DOWN &&
              Math.max(path.start.y, path.end.y) > player.position.y))) ||
        (getHeadingAxis(player.heading) === "vertical" &&
          path.start.y === path.end.y &&
          Math.abs(player.position.y - path.start.y) < INC &&
          ((requestedHeading === Heading.LEFT &&
            Math.min(path.start.x, path.end.x) < player.position.x) ||
            (requestedHeading === Heading.RIGHT &&
              Math.max(path.start.x, path.end.x) > player.position.x)))
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
  }

  const path = findPath(paths, player.heading, player.position);

  const reversedPlayer = reverseHeadingIfAtEndOfPath(player, path);
  if (reversedPlayer) return reversedPlayer;

  return moveForward(player);
};

const moveGhost = (ghost: Ghost, paths: Path[]): Ghost => {
  const path = findPath(paths, ghost.heading, ghost.position);

  // if nearPath found, randomly choose between the following options:
  // going on new path and, if multiple directions possibly, randomly choose direction
  // staying in current path

  const reversedGhost = reverseHeadingIfAtEndOfPath(ghost, path);
  if (reversedGhost) return reversedGhost;

  return moveForward(ghost);
};

const snap = (n: number, tolerance: number): number => {
  if (Math.abs(Math.floor(n) - n) < tolerance) return Math.floor(n);
  if (Math.abs(Math.ceil(n) - n) < tolerance) return Math.ceil(n);
  return n;
};

const KEY_TO_HEADING_MAP: Record<string, Heading> = {
  ArrowUp: Heading.UP,
  ArrowDown: Heading.DOWN,
  ArrowLeft: Heading.LEFT,
  ArrowRight: Heading.RIGHT,
};

export const createPlayerMovement = (
  store: StateStore,
  playerIndex: number
) => {
  let requestedHeading: Heading | undefined;

  window.addEventListener(
    "keydown",
    (e) => (requestedHeading = KEY_TO_HEADING_MAP[e.code]),
    false
  );

  window.addEventListener(
    "keyup",
    (e) => (requestedHeading = undefined),
    false
  );

  setInterval(() => {
    const state = store.getState();
    const players = state.players.map((player, idx) => {
      if (idx === playerIndex) {
        return movePlayer(player, state.paths, requestedHeading);
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
      return moveGhost(ghost, state.paths);
    });
    store.setState({
      ...state,
      ghosts,
    });
  }, 20);
};
