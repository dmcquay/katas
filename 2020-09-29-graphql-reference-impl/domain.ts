export interface RollDiceArgs {
  numDice: number;
  numSides?: number;
}

export interface User {
  id: number;
  name: string;
}

export interface DB {
  message: string;
  users: { [key: number]: User };
}
