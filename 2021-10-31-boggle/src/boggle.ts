import { stringify } from "querystring";

export type Board = string[][];

export type Location = {
  col: number;
  row: number;
};

export type Solution = {
  word: string;
  locations: Location[];
};

export const boardToLocations = (board: Board): Location[] => {
  const locations: Location[] = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      locations.push({ row, col });
    }
  }
  return locations;
};

export const findChar = (
  board: Board,
  locs: Location[],
  char: string
): Location[] => locs.filter((loc) => board[loc.row][loc.col] === char);

export const findSurroundingLocations = (
  board: Board,
  loc: Location
): Location[] => {
  const candidates: Location[] = [
    { row: loc.row - 1, col: loc.col - 1 },
    { row: loc.row - 1, col: loc.col },
    { row: loc.row - 1, col: loc.col + 1 },

    { row: loc.row, col: loc.col - 1 },
    { row: loc.row, col: loc.col + 1 },

    { row: loc.row + 1, col: loc.col - 1 },
    { row: loc.row + 1, col: loc.col },
    { row: loc.row + 1, col: loc.col + 1 },
  ];

  const maxRow = board.length - 1;
  const maxCol = board[0].length - 1;
  return candidates.filter(
    (loc) =>
      loc.row >= 0 && loc.row <= maxRow && loc.col >= 0 && loc.col <= maxCol
  );
};

export const findWord =
  (board: Board) =>
  (locs: Location[]) =>
  (word: string): Solution[] => {
    const char = word[0];
    const rest = word.substr(1);
    const charLocs = findChar(board, locs, char);

    return charLocs.flatMap((loc) => {
      if (rest.length > 0) {
        const surroundingLocs = findSurroundingLocations(board, loc);
        const solutions = findWord(board)(surroundingLocs)(rest);
        return solutions.map((solution) => ({
          word,
          locations: [loc, ...solution.locations],
        }));
      } else {
        return {
          word,
          locations: [loc],
        };
      }
    });
  };

const hasNoDuplicateLocs = (solution: Solution): boolean => {
  const seen: Record<string, true> = {};
  for (let loc of solution.locations) {
    const key = `${loc.col}:${loc.row}`;
    if (seen[key]) return false;
    seen[key] = true;
  }
  return true;
};

export const solve = (dictionary: string[], board: Board): Solution[] => {
  const allLocs = boardToLocations(board);
  const solutions = dictionary.flatMap(findWord(board)(allLocs));
  return solutions.filter(hasNoDuplicateLocs);
};
