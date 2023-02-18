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
        label: "H1A",
        start: { x: 1, y: 1 },
        end: { x: 12, y: 1 },
      },
      {
        label: "H1B",
        start: { x: 15, y: 1 },
        end: { x: 26, y: 1 },
      },
      {
        label: "H2",
        start: { x: 1, y: 5 },
        end: { x: 26, y: 5 },
      },
      {
        label: "H3A",
        start: { x: 1, y: 8 },
        end: { x: 6, y: 8 },
      },
      {
        label: "H3B",
        start: { x: 9, y: 8 },
        end: { x: 12, y: 8 },
      },
      {
        label: "H3C",
        start: { x: 15, y: 8 },
        end: { x: 18, y: 8 },
      },
      {
        label: "H3D",
        start: { x: 21, y: 8 },
        end: { x: 26, y: 8 },
      },
      {
        label: "H4",
        start: { x: 9, y: 11 },
        end: { x: 18, y: 11 },
      },
      {
        label: "H5A",
        start: { x: 0, y: 14 },
        end: { x: 9, y: 14 },
      },
      {
        label: "H5B",
        start: { x: 18, y: 14 },
        end: { x: 27, y: 14 },
      },
      {
        label: "H6",
        start: { x: 9, y: 17 },
        end: { x: 18, y: 17 },
      },
      {
        label: "H7A",
        start: { x: 1, y: 20 },
        end: { x: 12, y: 20 },
      },
      {
        label: "H7B",
        start: { x: 15, y: 20 },
        end: { x: 26, y: 20 },
      },
      {
        label: "H8A",
        start: { x: 1, y: 23 },
        end: { x: 3, y: 23 },
      },
      {
        label: "H8B",
        start: { x: 6, y: 23 },
        end: { x: 21, y: 23 },
      },
      {
        label: "H8C",
        start: { x: 24, y: 23 },
        end: { x: 26, y: 23 },
      },
      {
        label: "H9A",
        start: { x: 1, y: 26 },
        end: { x: 6, y: 26 },
      },
      {
        label: "H9B",
        start: { x: 9, y: 26 },
        end: { x: 12, y: 26 },
      },
      {
        label: "H9C",
        start: { x: 15, y: 26 },
        end: { x: 18, y: 26 },
      },
      {
        label: "H9D",
        start: { x: 21, y: 26 },
        end: { x: 26, y: 26 },
      },
      {
        label: "H10",
        start: { x: 26, y: 29 },
        end: { x: 1, y: 29 },
      },
      {
        label: "V1A",
        start: { x: 1, y: 1 },
        end: { x: 1, y: 8 },
      },
      {
        label: "V1B",
        start: { x: 1, y: 20 },
        end: { x: 1, y: 23 },
      },
      {
        label: "V1C",
        start: { x: 1, y: 26 },
        end: { x: 1, y: 29 },
      },
      {
        label: "V2",
        start: { x: 3, y: 23 },
        end: { x: 3, y: 26 },
      },
      {
        label: "V3",
        start: { x: 6, y: 1 },
        end: { x: 6, y: 26 },
      },
      {
        label: "V4A",
        start: { x: 9, y: 5 },
        end: { x: 9, y: 8 },
      },
      {
        label: "V4B",
        start: { x: 9, y: 11 },
        end: { x: 9, y: 20 },
      },
      {
        label: "V4C",
        start: { x: 9, y: 23 },
        end: { x: 9, y: 26 },
      },
      {
        label: "V5A",
        start: { x: 12, y: 1 },
        end: { x: 12, y: 5 },
      },
      {
        label: "V5B",
        start: { x: 12, y: 8 },
        end: { x: 12, y: 11 },
      },
      {
        label: "V5C",
        start: { x: 12, y: 20 },
        end: { x: 12, y: 23 },
      },
      {
        label: "V5D",
        start: { x: 12, y: 26 },
        end: { x: 12, y: 29 },
      },
      {
        label: "V6A",
        start: { x: 15, y: 1 },
        end: { x: 15, y: 5 },
      },
      {
        label: "V6B",
        start: { x: 15, y: 8 },
        end: { x: 15, y: 11 },
      },
      {
        label: "V6C",
        start: { x: 15, y: 20 },
        end: { x: 15, y: 23 },
      },
      {
        label: "V6D",
        start: { x: 15, y: 26 },
        end: { x: 15, y: 29 },
      },
      {
        label: "V7A",
        start: { x: 18, y: 5 },
        end: { x: 18, y: 8 },
      },
      {
        label: "V7B",
        start: { x: 18, y: 11 },
        end: { x: 18, y: 20 },
      },
      {
        label: "V7C",
        start: { x: 18, y: 23 },
        end: { x: 18, y: 26 },
      },
      {
        label: "V8",
        start: { x: 21, y: 1 },
        end: { x: 21, y: 26 },
      },
      {
        label: "V9",
        start: { x: 24, y: 23 },
        end: { x: 24, y: 26 },
      },
      {
        label: "V10A",
        start: { x: 26, y: 1 },
        end: { x: 26, y: 8 },
      },
      {
        label: "V10B",
        start: { x: 26, y: 20 },
        end: { x: 26, y: 23 },
      },
      {
        label: "V10C",
        start: { x: 26, y: 26 },
        end: { x: 26, y: 29 },
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
