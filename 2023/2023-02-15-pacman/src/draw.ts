import {
  Heading,
  Point,
  GhostColor,
  GameState,
  Path,
  Player,
  Ghost,
  Crumb,
  GameStatus,
} from "./types";

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

type RendererOptions = {
  canvas: HTMLCanvasElement;
  displayPaths: boolean;
};

export const createCanvasRenderer = (opts: RendererOptions) => {
  const { canvas } = opts;
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

  const drawOpenJail = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(416, 400, 64, 20);
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
    const spriteCol =
      SPRITE_GHOSTS_HEADING_TO_COLS_MAP[ghost.heading][variation];
    ctx.drawImage(
      img,
      SPRITE_GHOSTS_TL.x +
        (SPRITE_GHOST_SIZE + SPRITE_GHOST_GUTTER) * spriteCol,
      SPRITE_GHOSTS_TL.y +
        (SPRITE_GHOST_SIZE + SPRITE_GHOST_GUTTER) * spriteRow,
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

  const drawCrumb = (crumb: Crumb) => {
    const radius = crumb.isBig ? 3 * SCALE_FACTOR : SCALE_FACTOR;
    const x =
      crumb.position.x * CELL_SIZE * SCALE_FACTOR +
      (CELL_SIZE * SCALE_FACTOR) / 2;
    const y =
      crumb.position.y * CELL_SIZE * SCALE_FACTOR +
      (CELL_SIZE * SCALE_FACTOR) / 2;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
  };

  const drawPath = (path: Path, isJailOpen: boolean) => {
    // compute
    const startX =
      path.start.x * CELL_SIZE * SCALE_FACTOR + (CELL_SIZE * SCALE_FACTOR) / 2;
    const startY =
      path.start.y * CELL_SIZE * SCALE_FACTOR + (CELL_SIZE * SCALE_FACTOR) / 2;
    const endX =
      path.end.x * CELL_SIZE * SCALE_FACTOR + (CELL_SIZE * SCALE_FACTOR) / 2;
    const endY =
      path.end.y * CELL_SIZE * SCALE_FACTOR + (CELL_SIZE * SCALE_FACTOR) / 2;

    // draw line
    ctx.strokeStyle = path.isJailExit && !isJailOpen ? "red" : "white";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // draw path id text
    ctx.font = "12px sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText(path.label, (startX + endX) / 2, (startY + endY) / 2);
  };

  const drawWin = () => {
    ctx.font = "160px sans-serif";
    ctx.fillStyle = "yellow";
    ctx.fillText("You Win!", 130, 500);
  };

  const drawLose = () => {
    ctx.font = "160px sans-serif";
    ctx.fillStyle = "yellow";
    ctx.fillText("You Lose!", 120, 500);
  };

  const renderGameState = (state: GameState) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBoard();

    if (state.isJailOpen) {
      drawOpenJail();
    }

    if (state.status === GameStatus.Win) {
      drawWin();
      return;
    } else if (state.status === GameStatus.Lose) {
      drawLose();
      return;
    }

    if (opts.displayPaths) {
      for (let path of state.paths) {
        drawPath(path, state.isJailOpen);
      }
    }

    for (let crumb of state.crumbs.filter((c) => !c.consumed)) {
      drawCrumb(crumb);
    }

    for (let ghost of state.ghosts) {
      drawGhost(ghost, state.ghostVariation);
    }

    for (let player of state.players) {
      drawPacMan(player, state.pacManVariation);
    }
  };

  return {
    renderGameState,
  };
};
