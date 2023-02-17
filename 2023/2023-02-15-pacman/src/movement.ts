import { StateStore } from "./state-store";
import { Ghost, Player } from "./types";

const movePlayerOrGhost = <T extends Player | Ghost>(obj: T): T => {
  return {
    ...obj,
    position: {
      x: obj.position.x + 0.1,
      y: obj.position.y,
    },
  };
};

export const createMovement = (store: StateStore) => {
  setInterval(() => {
    const state = store.getState();
    const players = state.players.map(movePlayerOrGhost);
    const ghosts = state.ghosts.map(movePlayerOrGhost);
    store.setState({
      ...state,
      players,
      ghosts,
    });
  }, 100);
};
