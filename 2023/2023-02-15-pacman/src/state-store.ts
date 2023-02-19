import { GameState } from "./types";

export type StateStoreSubscriber = (
  newState: GameState,
  prevState: GameState
) => void;

export interface StateStore {
  getState: () => GameState;
  setState: (state: GameState) => void;
  subscribe: (cb: StateStoreSubscriber) => void;
}

export const createStateStore = (initialState: GameState): StateStore => {
  let _state: GameState = initialState;
  const subscribers: StateStoreSubscriber[] = [];
  return {
    getState() {
      return _state;
    },
    setState(state: GameState) {
      const prevState = _state;
      _state = state;
      for (let sub of subscribers) {
        sub(state, prevState);
      }
    },
    subscribe(cb: StateStoreSubscriber) {
      subscribers.push(cb);
    },
  };
};
