import { Heading, Point, GhostColor, GameState, Player, Ghost } from "./types";

const CELL_SIZE = 8;
const ROW_COUNT = 31;
const COL_COUNT = 28;
const EMPTY_BOARD_START_X = 228;
const BOARD_WIDTH = CELL_SIZE * COL_COUNT;
const BOARD_HEIGHT = CELL_SIZE * ROW_COUNT;
const SCALE_FACTOR = 4;

const SPRITE_PACMAN_SIZE = 13;
const SPRITE_PACMAN_GUTTER = 3;
const SPRITE_PACMAN_TL: Point = { x: 457, y: 1 };

const SPRITE_GHOST_SIZE = 14;
const SPRITE_GHOST_GUTTER = 2;
const SPRITE_GHOSTS_TL: Point = { x: 457, y: 65 };

const SPRITE_PACMAN_CELL_MAP: Record<Heading, Point[]> = {
  [Heading.RIGHT]: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
  ],
  [Heading.LEFT]: [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 0 },
  ],
  [Heading.UP]: [
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 0 },
  ],
  [Heading.DOWN]: [
    { x: 0, y: 3 },
    { x: 1, y: 3 },
    { x: 2, y: 0 },
  ],
};

const SPRITE_GHOSTS_COLOR_TO_ROW_MAP: Record<GhostColor, number> = {
  [GhostColor.RED]: 0,
  [GhostColor.PINK]: 1,
  [GhostColor.CYAN]: 2,
  [GhostColor.ORANGE]: 3,
};

const SPRITE_GHOSTS_HEADING_TO_COLS_MAP: Record<Heading, number[]> = {
  [Heading.RIGHT]: [0, 1],
  [Heading.LEFT]: [2, 3],
  [Heading.UP]: [4, 5],
  [Heading.DOWN]: [6, 7],
};

const canvas = document.getElementById(
  "game-canvas"
) as HTMLCanvasElement | null;
if (canvas == null) throw new Error("cannot find canvas element");

const ctx = canvas.getContext("2d");
if (ctx == null) throw new Error("failed to get 2d canvas context");
ctx.canvas.width = BOARD_WIDTH * SCALE_FACTOR;
ctx.canvas.height = BOARD_HEIGHT * SCALE_FACTOR;

let img = document.getElementById("sprite") as CanvasImageSource;
if (img == null) throw new Error("failed to locate image sprite");

const drawBoard = () => {
  ctx.drawImage(
    img,
    EMPTY_BOARD_START_X,
    0,
    BOARD_WIDTH,
    BOARD_HEIGHT,
    0,
    0,
    BOARD_WIDTH * SCALE_FACTOR,
    BOARD_HEIGHT * SCALE_FACTOR
  );
};

const drawPacMan = (player: Player, variation: number) => {
  const spriteCell = SPRITE_PACMAN_CELL_MAP[player.heading][variation];
  ctx.drawImage(
    img,
    SPRITE_PACMAN_TL.x +
      (SPRITE_PACMAN_SIZE + SPRITE_PACMAN_GUTTER) * spriteCell.x,
    SPRITE_PACMAN_TL.y +
      (SPRITE_PACMAN_SIZE + SPRITE_PACMAN_GUTTER) * spriteCell.y,
    SPRITE_PACMAN_SIZE,
    SPRITE_PACMAN_SIZE,
    player.position.x * CELL_SIZE * SCALE_FACTOR +
      (CELL_SIZE * SCALE_FACTOR) / 2 -
      (SPRITE_PACMAN_SIZE * SCALE_FACTOR) / 2,
    player.position.y * CELL_SIZE * SCALE_FACTOR +
      (CELL_SIZE * SCALE_FACTOR) / 2 -
      (SPRITE_PACMAN_SIZE * SCALE_FACTOR) / 2,
    SPRITE_PACMAN_SIZE * SCALE_FACTOR,
    SPRITE_PACMAN_SIZE * SCALE_FACTOR
  );
};

const drawGhost = (ghost: Ghost, variation: number) => {
  const spriteRow = SPRITE_GHOSTS_COLOR_TO_ROW_MAP[ghost.color];
  const spriteCol = SPRITE_GHOSTS_HEADING_TO_COLS_MAP[ghost.heading][variation];
  ctx.drawImage(
    img,
    SPRITE_GHOSTS_TL.x + (SPRITE_GHOST_SIZE + SPRITE_GHOST_GUTTER) * spriteCol,
    SPRITE_GHOSTS_TL.y + (SPRITE_GHOST_SIZE + SPRITE_GHOST_GUTTER) * spriteRow,
    SPRITE_GHOST_SIZE,
    SPRITE_GHOST_SIZE,
    ghost.position.x * CELL_SIZE * SCALE_FACTOR +
      (CELL_SIZE * SCALE_FACTOR) / 2 -
      (SPRITE_GHOST_SIZE * SCALE_FACTOR) / 2,
    ghost.position.y * CELL_SIZE * SCALE_FACTOR +
      (CELL_SIZE * SCALE_FACTOR) / 2 -
      (SPRITE_GHOST_SIZE * SCALE_FACTOR) / 2,
    SPRITE_GHOST_SIZE * SCALE_FACTOR,
    SPRITE_GHOST_SIZE * SCALE_FACTOR
  );
};

export const renderGameState = (state: GameState) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBoard();

  for (let player of state.players) {
    drawPacMan(player, state.pacManVariation);
  }

  for (let ghost of state.ghosts) {
    drawGhost(ghost, state.ghostVariation);
  }
};
