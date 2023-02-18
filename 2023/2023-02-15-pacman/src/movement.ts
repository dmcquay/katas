import { StateStore } from "./state-store";
import { Path, Player, Heading } from "./types";

const INC = 0.1;

const movePlayerOrGhost = (
  player: Player,
  paths: Path[],
  requestedHeading: Heading | null | undefined
): Player => {
  // if requested heading is opposite of current heading, change it immediately
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

  // if there is a near path and player has requested new heading that aligns with it,
  // then switch heading and snap to that path
  if (requestedHeading != null && requestedHeading !== player.heading) {
    for (let path of paths) {
      if (
        ([Heading.LEFT, Heading.RIGHT].includes(player.heading) &&
          path.start.x === path.end.x &&
          Math.abs(player.position.x - path.start.x) < INC &&
          ((requestedHeading === Heading.UP &&
            Math.min(path.start.y, path.end.y) < player.position.y) ||
            (requestedHeading === Heading.DOWN &&
              Math.max(path.start.y, path.end.y) > player.position.y))) ||
        ([Heading.UP, Heading.DOWN].includes(player.heading) &&
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

  const path = paths.find((path) => {
    if ([Heading.LEFT, Heading.RIGHT].includes(player.heading)) {
      return (
        player.position.y === path.start.y &&
        player.position.y === path.end.y &&
        player.position.x >= Math.min(path.start.x, path.end.x) &&
        player.position.x <= Math.max(path.start.x, path.end.x)
      );
    } else {
      return (
        player.position.x === path.start.x &&
        player.position.x === path.end.x &&
        player.position.y >= Math.min(path.start.y, path.end.y) &&
        player.position.y <= Math.max(path.start.y, path.end.y)
      );
    }
  });
  if (path == null)
    throw new Error(
      `Expected PacMan to always be on a path, but no matching paths were found. Position: ${JSON.stringify(
        player.position
      )}`
    );

  // if at end of path, reverse heading
  if (
    player.heading === Heading.RIGHT &&
    player.position.x === Math.max(path.start.x, path.end.x)
  ) {
    return { ...player, heading: Heading.LEFT };
  } else if (
    player.heading === Heading.LEFT &&
    player.position.x === Math.min(path.start.x, path.end.x)
  ) {
    return { ...player, heading: Heading.RIGHT };
  } else if (
    player.heading === Heading.UP &&
    player.position.y === Math.min(path.start.y, path.end.y)
  ) {
    return { ...player, heading: Heading.DOWN };
  } else if (
    player.heading === Heading.DOWN &&
    player.position.y === Math.max(path.start.y, path.end.y)
  ) {
    return { ...player, heading: Heading.UP };
  }

  // if nothing else, just move forward
  const xInc =
    player.heading === Heading.RIGHT
      ? INC
      : player.heading === Heading.LEFT
      ? INC * -1
      : 0;
  const yInc =
    player.heading === Heading.DOWN
      ? INC
      : player.heading === Heading.UP
      ? INC * -1
      : 0;
  return {
    ...player,
    position: {
      x: snap(player.position.x + xInc, INC * 0.9),
      y: snap(player.position.y + yInc, INC * 0.9),
    },
  };
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
  let requestedHeading: Heading | null | undefined;

  window.addEventListener(
    "keydown",
    (e) => (requestedHeading = KEY_TO_HEADING_MAP[e.code]),
    false
  );

  window.addEventListener("keyup", (e) => (requestedHeading = null), false);

  setInterval(() => {
    const state = store.getState();
    const players = state.players.map((player, idx) => {
      if (idx === playerIndex) {
        return movePlayerOrGhost(player, state.paths, requestedHeading);
      }
      return player;
    });
    store.setState({
      ...state,
      players,
    });
  }, 50);
};
