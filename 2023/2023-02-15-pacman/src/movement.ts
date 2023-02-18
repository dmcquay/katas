import { StateStore } from "./state-store";
import { GameState, Ghost, Player, Heading } from "./types";

const INC = 0.1;

const movePlayerOrGhost = (player: Player): Player => {
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
      x: player.position.x + xInc,
      y: player.position.y + yInc,
    },
  };
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
  window.addEventListener(
    "keyup",
    (e) => {
      const heading = KEY_TO_HEADING_MAP[e.code];
      if (heading == null) return;

      const state = store.getState();
      const players = state.players.map((player, idx) => {
        if (idx === playerIndex) {
          return {
            ...player,
            heading,
          };
        }
        return player;
      });
      store.setState({
        ...state,
        players,
      });
    },
    false
  );

  setInterval(() => {
    const state = store.getState();
    const players = state.players.map((player, idx) => {
      if (idx === playerIndex) {
        return movePlayerOrGhost(player);
      }
      return player;
    });
    store.setState({
      ...state,
      players,
    });
  }, 50);
};
