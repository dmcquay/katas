import { createCanvasRenderer } from "./draw";
import { GameState, Heading, GhostColor } from "./types";
import { createStateStore } from "./state-store";
import { cycleVariations } from "./cycle-variations";
import { createPlayerMovement, createGhostMovement } from "./movement";
import { paths } from "./paths";
import { createStandardCrumbs, eatCrumbs } from "./crumbs";

export const initDev = () => {
  const canvas = document.getElementById(
    "game-canvas"
  ) as HTMLCanvasElement | null;
  if (canvas == null) throw new Error("cannot find canvas element");

  const state: GameState = {
    players: [
      {
        heading: Heading.RIGHT,
        position: { x: 1, y: 20 },
      },
    ],
    ghosts: [
      {
        heading: Heading.RIGHT,
        color: GhostColor.RED,
        position: paths.find((p) => p.label === "H1A")!.start,
      },
      {
        heading: Heading.DOWN,
        color: GhostColor.PINK,
        position: paths.find((p) => p.label === "V8")!.start,
      },
    ],
    pacManVariation: 0,
    ghostVariation: 0,
    paths,
    crumbs: createStandardCrumbs(),
  };

  const store = createStateStore(state);
  const renderer = createCanvasRenderer({ canvas, displayPaths: false });
  store.subscribe(renderer.renderGameState);
  cycleVariations(store);
  createPlayerMovement(store, 0);
  createGhostMovement(store);
  eatCrumbs(store);
};
