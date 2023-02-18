import { createCanvasRenderer } from "./draw";
import { GameState, Heading, GhostColor } from "./types";
import { createStateStore } from "./state-store";
import { cycleVariations } from "./cycle-variations";
import { createPlayerMovement } from "./movement";
import { start } from "repl";

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
    paths: [
      {
        label: "1",
        start: { x: 1, y: 20 },
        end: { x: 12, y: 20 },
      },
      {
        label: "2",
        start: { x: 1, y: 20 },
        end: { x: 1, y: 23 },
      },
      {
        label: "3",
        start: { x: 1, y: 23 },
        end: { x: 3, y: 23 },
      },
      {
        label: "4",
        start: { x: 12, y: 20 },
        end: { x: 12, y: 23 },
      },
      {
        label: "5",
        start: { x: 6, y: 1 },
        end: { x: 6, y: 26 },
      },
      {
        label: "6",
        start: { x: 3, y: 23 },
        end: { x: 3, y: 26 },
      },
      {
        label: "7",
        start: { x: 1, y: 26 },
        end: { x: 6, y: 26 },
      },
      {
        label: "8",
        start: { x: 1, y: 1 },
        end: { x: 1, y: 8 },
      },
      {
        label: "9",
        start: { x: 1, y: 1 },
        end: { x: 12, y: 1 },
      },
      {
        label: "10",
        start: { x: 1, y: 5 },
        end: { x: 26, y: 5 },
      },
      {
        label: "11",
        start: { x: 1, y: 8 },
        end: { x: 6, y: 8 },
      },
    ],
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
  const renderer = createCanvasRenderer({ canvas, displayPaths: true });
  store.subscribe(renderer.renderGameState);
  cycleVariations(store);
  createPlayerMovement(store, 0);
};
