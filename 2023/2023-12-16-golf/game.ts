const { inspect } = require('node:util')

type Suit = 'spade' | 'club' | 'heart' | 'daimond';
type Kind = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'a' | 'k' | 'q' | 'j';
type Card = {
    kind: Kind;
    suit: Suit;
}
const suits: Suit[] = ['spade' , 'club' , 'heart' , 'daimond'];
const kinds: Kind[] = ['2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , 'a' , 'k' , 'q' , 'j'];

const deck: Card[] = []

for (let suit of suits) {
    for (let kind of kinds) {
        deck.push({suit, kind});
    }
}

const draw = (deck: Card[]) => {
    const card = deck.pop()
    if (card === undefined) throw new Error('no more cards')
    return card
}

deck.sort(() => Math.random() - 0.5);

type HandCardDetail = {
    card: Card,
    isLocked: boolean
}
type Hand = [Card, Card, Card, Card];

const buildHand = (deck: Card[]): Hand => {
    return [
        draw(deck),
        draw(deck),
        draw(deck),
        draw(deck),
    ]
}

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