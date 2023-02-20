import { createCanvasRenderer } from "./draw";
import { GameState, Heading, GameStatus } from "./types";
import { createStateStore } from "./state-store";
import { cycleVariations } from "./cycle-variations";
import {
  createPlayerMovement,
  createGhostMovement,
  detectCollisions,
  KeyMapArrows,
  KeyMapWasd,
} from "./movement";
import { paths } from "./paths";
import { createStandardCrumbs, eatCrumbs } from "./crumbs";
import { createRandomGhosts } from "./ghosts";

export const initDev = () => {
  const canvas = document.getElementById(
    "game-canvas"
  ) as HTMLCanvasElement | null;
  if (canvas == null) throw new Error("cannot find canvas element");

  const state: GameState = {
    status: GameStatus.Playing,
    players: [
      {
        heading: Heading.LEFT,
        position: { x: 26, y: 26 },
      },
      {
        heading: Heading.RIGHT,
        position: { x: 1, y: 20 },
      },
    ],
    ghosts: createRandomGhosts(paths, 4),
    pacManVariation: 0,
    ghostVariation: 0,
    paths,
    crumbs: createStandardCrumbs(),
  };

  const store = createStateStore(state);
  const renderer = createCanvasRenderer({ canvas, displayPaths: false });
  store.subscribe(renderer.renderGameState);
  cycleVariations(store);
  createPlayerMovement(store, 0, KeyMapArrows);
  createPlayerMovement(store, 1, KeyMapWasd);
  createGhostMovement(store);
  eatCrumbs(store);
  detectCollisions(store);
};
