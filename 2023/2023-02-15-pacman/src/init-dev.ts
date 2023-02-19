import { createCanvasRenderer } from "./draw";
import { GameState, Heading, GhostColor } from "./types";
import { createStateStore } from "./state-store";
import { cycleVariations } from "./cycle-variations";
import { createPlayerMovement } from "./movement";
import { paths } from "./paths";

export const initDev = () => {
  const canvas = document.getElementById(
    "game-canvas"
  ) as HTMLCanvasElement | null;
  if (canvas == null) throw new Error("cannot find canvas element");

  const state: GameState = {
    players: [],
    ghosts: [],
    pacManVariation: 0,
    ghostVariation: 0,
    paths,
  };

  const headings = [Heading.RIGHT, Heading.LEFT, Heading.UP, Heading.DOWN];
  const ghostColors = [
    GhostColor.RED,
    GhostColor.PINK,
    GhostColor.CYAN,
    GhostColor.ORANGE,
  ];

  // pacman to test movement
  state.players.push({
    heading: Heading.RIGHT,
    position: { x: 1, y: 20 },
  });

  // pacman in all headings
  // let y = 1;
  // for (let heading of headings) {
  //   state.players.push({
  //     heading,
  //     position: { x: 1, y },
  //   });
  //   y += 2;
  // }

  // // all ghosts in all headings
  // let x = 3;
  // for (let color of ghostColors) {
  //   y = 1;
  //   for (let heading of headings) {
  //     state.ghosts.push({
  //       heading,
  //       color,
  //       position: { x, y },
  //     });
  //     y += 2;
  //   }
  //   x += 2;
  // }

  const store = createStateStore(state);
  const renderer = createCanvasRenderer({ canvas, displayPaths: false });
  store.subscribe(renderer.renderGameState);
  cycleVariations(store);
  createPlayerMovement(store, 0);
};
