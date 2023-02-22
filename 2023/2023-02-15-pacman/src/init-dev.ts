import { createCanvasRenderer } from "./draw";
import { GameState, Heading, GameStatus, GhostColor } from "./types";
import { createStateStore } from "./state-store";
import { cycleVariations } from "./cycle-variations";
import {
  createKeyboardControlledMovement,
  createGhostMovement,
  detectCollisions,
  KeyMapArrows,
  KeyMapWasd,
  KeyMapIjlk,
} from "./movement";
import { paths } from "./paths";
import { createStandardCrumbs, eatCrumbs } from "./crumbs";
import { createRandomGhosts } from "./ghosts";

const players = [
  {
    heading: Heading.LEFT,
    position: { x: 26, y: 26 },
  },
  {
    heading: Heading.DOWN,
    position: { x: 6, y: 1 },
  },
  {
    heading: Heading.RIGHT,
    position: { x: 1, y: 20 },
  },
];

const numPlayers = 2;

export const initDev = () => {
  const canvas = document.getElementById(
    "game-canvas"
  ) as HTMLCanvasElement | null;
  if (canvas == null) throw new Error("cannot find canvas element");

  const state: GameState = {
    status: GameStatus.Paused,
    players: players.slice(0, numPlayers),
    ghosts: [...createRandomGhosts(paths, 3)],
    pacManVariation: 0,
    ghostVariation: 0,
    paths,
    crumbs: createStandardCrumbs(),
    isJailOpen: false,
  };

  const keyMaps = [KeyMapWasd, KeyMapIjlk];

  const store = createStateStore(state);
  const renderer = createCanvasRenderer({ canvas, displayPaths: false });
  store.subscribe(renderer.renderGameState);
  cycleVariations(store);
  for (let i = 0; i < numPlayers; i++) {
    createKeyboardControlledMovement(store, i, keyMaps[i]);
  }
  createGhostMovement(store, [0, 1]);
  createKeyboardControlledMovement(store, 2, KeyMapArrows, true);

  eatCrumbs(store);
  detectCollisions(store);

  // game is paused briefly at start so players can get oriented
  setTimeout(() => {
    store.setState({
      ...store.getState(),
      status: GameStatus.Playing,
    });

    // toggle paused on spacebar
    window.addEventListener("keypress", (e) => {
      if (e.code === "Space") {
        const state = store.getState();
        store.setState({
          ...state,
          status:
            state.status === GameStatus.Paused
              ? GameStatus.Playing
              : GameStatus.Paused,
        });
      }
    });
  }, 3000);

  // open jail after timeout
  setTimeout(() => {
    store.setState({
      ...store.getState(),
      isJailOpen: true,
    });
  }, 10000);
};
