export interface RollDiceArgs {
  numDice: number;
  numSides?: number;
}

export interface User {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  userId: number;
  body: string;
}

export interface DB {
  message: string;
  messages: Message[];
  users: { [key: number]: User };
}
