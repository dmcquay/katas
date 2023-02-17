import { StateStore } from "./state-store";

export const cycleVariations = (store: StateStore) => {
  const MAX_GHOST_VARIATION = 1;
  const MAX_PLAYER_VARIATION = 2;

  setInterval(() => {
    const state = store.getState();
    let { ghostVariation, pacManVariation } = state;

    ghostVariation++;
    if (ghostVariation > MAX_GHOST_VARIATION) ghostVariation = 0;

    pacManVariation++;
    if (pacManVariation > MAX_PLAYER_VARIATION) pacManVariation = 0;

    store.setState({
      ...state,
      pacManVariation,
      ghostVariation,
    });
  }, 250);
};
