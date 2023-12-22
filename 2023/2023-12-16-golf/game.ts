const { inspect } = require('node:util')



const buildHands = (deck: Card[], numPlayers: number) => {
    const hands: Hand[] = []
    for (let i = 0; i < numPlayers; i++) {
        hands.push(buildHand(deck));
    }
    return hands;
}

const hands = buildHands(deck, 2);

const turn = (deck: Card[], hands: Hand[]) => {
    
}