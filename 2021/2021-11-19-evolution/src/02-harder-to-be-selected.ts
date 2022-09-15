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
const GENERATIONS = 1000;
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

const validLetters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-=|]}[{'\";:/?.>,<".split(
    ""
  );

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
  //
  // let's try "the more a's, the higher chance of survival"
  // that worked better, but next we want to make survival more challenging
  // const chanceOfSurvival =
  //   creature.genome.split("").filter((x) => x === "a").length /
  //   creature.genome.length;
  // return Math.random() <= chanceOfSurvival;
  //
  // let's try looking for more unique combinations of letters
  const chanceOfSurvivalA =
    (creature.genome.split("").filter((x) => x === "a").length /
      creature.genome.length) *
    0.1;
  return Math.random() <= chanceOfSurvivalA || creature.genome.includes("asd");
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
  // console.log(state.generations.map((x) => x.survivalRate));
  console.log({
    firstGenerations: state.generations.slice(0, 20).map((x) => x.survivalRate),
    middleGenerations: state.generations
      .slice(state.generations.length / 2, state.generations.length / 2 + 20)
      .map((x) => x.survivalRate),
    lastGenerations: state.generations.slice(-20).map((x) => x.survivalRate),
  });
};

main();
