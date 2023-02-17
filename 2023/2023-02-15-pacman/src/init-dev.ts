import { renderGameState } from "./draw";
import { GameState, Heading, GhostColor } from "./types";
import { createStateStore } from "./state-store";
import { cycleVariations } from "./cycle-variations";
import { createMovement } from "./movement";

export const initDev = () => {
  const state: GameState = {
    players: [],
    ghosts: [],
    pacManVariation: 0,
    ghostVariation: 0,
  };

  const headings = [Heading.RIGHT, Heading.LEFT, Heading.UP, Heading.DOWN];
  const ghostColors = [
    GhostColor.RED,
    GhostColor.PINK,
    GhostColor.CYAN,
    GhostColor.ORANGE,
  ];

  let y = 1;
  for (let heading of headings) {
    state.players.push({
      heading,
      position: { x: 1, y },
    });
    y += 2;
  }

  let x = 3;
  for (let color of ghostColors) {
    y = 1;
    for (let heading of headings) {
      state.ghosts.push({
        heading,
        color,
        position: { x, y },
      });
      y += 2;
    }
    x += 2;
  }

  const store = createStateStore(state);
  store.subscribe(renderGameState);
  cycleVariations(store);
  createMovement(store);
};
