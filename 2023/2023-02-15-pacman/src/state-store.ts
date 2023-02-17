import { GameState } from "./types";

export interface StateStore {
  getState: () => GameState;
  setState: (state: GameState) => void;
  subscribe: (cb: (state: GameState) => void) => void;
}

export const createStateStore = (initialState: GameState): StateStore => {
  let _state: GameState = initialState;
  const subscribers: ((state: GameState) => void)[] = [];
  return {
    getState() {
      return _state;
    },
    setState(state: GameState) {
      _state = state;
      for (let sub of subscribers) {
        sub(state);
      }
    },
    subscribe(cb: (state: GameState) => void) {
      subscribers.push(cb);
    },
  };
};
