type Creature = {
  genome: string;
};

type GenerationMeta = {
  survivalRate: number;
};

type GameState = {
  creatures: Creature[];
  generations: GenerationMeta[];
};

const POPULATION_SIZE = 1000;
const GENERATIONS = 100;
const CHANCE_OF_MUTATION = 0.01;

const generateCreature = (): Creature => {
  return {
    genome: "aaaaaaaaaa".split("").map(getRandomLetter).join(""),
  };
};

const createInitialGameState = (): GameState => {
  const creatures: Creature[] = [];
  for (let i = 0; i < POPULATION_SIZE; i++) {
    creatures.push(generateCreature());
  }
  return {
    creatures,
    generations: [],
  };
};

const validLetters = "abcdefghijklmnopqrstuvwxyz".split("");

const getRandomLetter = (): string => {
  return validLetters[Math.floor(Math.random() * validLetters.length) - 1];
};

const replicate = (creature: Creature): Creature => {
  const letters = creature.genome.split("");
  const newLetters = letters.map((l) => {
    if (Math.random() <= CHANCE_OF_MUTATION) {
      return getRandomLetter();
    } else {
      return l;
    }
  });
  return {
    genome: newLetters.join(""),
  };
};

const select = (creature: Creature): boolean => {
  // too simple. survival rate shoots up to 100% immediately.
  // return creature.genome.split("").filter((x) => x === "a").length > 0;
  // let's try "the more a's, the higher chance of survival"
  const chanceOfSurvival =
    creature.genome.split("").filter((x) => x === "a").length /
    creature.genome.length;
  return Math.random() <= chanceOfSurvival;
};

const tick = (state: GameState): GameState => {
  const selectedCreatures = state.creatures.filter(select);
  const survivalRate = selectedCreatures.length / POPULATION_SIZE;
  const newCreatures: Creature[] = [];
  let i = 0;
  while (newCreatures.length < POPULATION_SIZE) {
    newCreatures.push(replicate(selectedCreatures[i]));
    i++;
    if (i > selectedCreatures.length - 1) i = 0;
  }
  return {
    creatures: newCreatures,
    generations: [
      ...state.generations,
      {
        survivalRate,
      },
    ],
  };
};

const main = () => {
  let state = createInitialGameState();
  for (let i = 0; i < GENERATIONS; i++) {
    state = tick(state);
  }
  console.log(state.generations.map((x) => x.survivalRate));
};

main();
