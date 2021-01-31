import { fstat } from "fs";
import readline from "readline";
import { promises as fs } from "fs";
import * as uuid from "uuid";

import { Answer, GameState, Question, QuestionOption } from "./types";

const INITIAL_STATE: GameState = { questions: [], answers: [] };

const readState = async (): Promise<GameState> => {
  try {
    const data = await fs.readFile("state.json", { encoding: "utf-8" });
    return JSON.parse(data);
  } catch (err) {
    return INITIAL_STATE;
  }
};

const writeState = async (state: GameState) => {
  await fs.writeFile("state.json", JSON.stringify(state, null, 2));
};

const rl = readline.createInterface(process.stdin, process.stdout);
const getText = async (text: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(`${text}: `, resolve);
  });
};

const getBool = async (text: string): Promise<boolean> => {
  const answer = await getText(`${text} (y/n)`);
  return answer === "y";
};

const getNumber = async (
  min: number,
  max: number,
  text = "Enter a number"
): Promise<number> => {
  let num: number | null = null;
  while (num === null || isNaN(num) || num < min || num > max) {
    const input = await getText(`${text} (${min}-${max})`);
    num = parseInt(input);
  }
  return num;
};

const choose = async <T>(
  description: string,
  options: { content: string; value: T }[]
): Promise<T> => {
  console.log(description);
  let i = 1;
  options.forEach((opt) => console.log(`${i++}: ${opt.content}`));
  const choice = await getNumber(1, options.length);
  return options[choice - 1].value;
};

const getQuestion = async (user: string): Promise<Question> => {
  const qContent = await getText("Question");
  const options: QuestionOption[] = [];
  let moreAnswers = true;
  let i = 1;
  while (moreAnswers) {
    const aContent = await getText(`Answer ${i}`);
    const aIsCorrect = await getBool("Is this a correct answer?");
    options.push({
      id: uuid.v4(),
      content: aContent,
      isCorrect: aIsCorrect,
    });
    moreAnswers = await getBool("More answers?");
    i++;
  }
  const question: Question = {
    id: uuid.v4(),
    user,
    content: qContent,
    options,
  };
  return question;
};

const getAnswer = async (user: string, question: Question) => {
  const option = await choose(
    question.content,
    question.options.map((opt) => ({ content: opt.content, value: opt }))
  );
  const answer: Answer = {
    id: uuid.v4(),
    user,
    questionId: question.id,
    optionId: option.id,
    isCorrect: option.isCorrect,
  };
  return answer;
};

const addQuestion = async (
  user: string,
  state: GameState
): Promise<GameState> => {
  const question = await getQuestion(user);
  const newState = { ...state, questions: [...state.questions, question] };
  writeState(newState);
  return newState;
};

const answerQuestion = async (
  user: string,
  question: Question,
  state: GameState
): Promise<GameState> => {
  const answer = await getAnswer(user, question);
  const newState = { ...state, answers: [...state.answers, answer] };
  writeState(newState);
  return newState;
};

const answerRandomQuestion = async (
  user: string,
  state: GameState
): Promise<GameState> => {
  const idx = Math.floor(Math.random() * (state.questions.length - 1));
  const question = state.questions[idx];
  return await answerQuestion(user, question, state);
};

const addQuestions = async (
  user: string,
  state: GameState
): Promise<GameState> => {
  let more = true;
  let newState = state;
  while (more) {
    newState = await addQuestion(user, newState);
    more = await getBool("Add another question?");
  }
  return newState;
};

const takeQuiz = async (user: string, state: GameState): Promise<GameState> => {
  const count = await getNumber(
    1,
    state.questions.length,
    "How many questions do you want to answer?"
  );
  for (let i = 0; i < count; i++) {
    state = await answerRandomQuestion(user, state);
  }
  return state;
};

const main = async () => {
  let state = await readState();
  const user = await getText("What is your name?");
  const choice = await choose("What would you like to do?", [
    { content: "Add Questions", value: "add-questions" },
    { content: "Take Quiz", value: "quiz" },
  ]);
  if (choice === "add-questions") {
    state = await addQuestions(user, state);
  } else if (choice === "quiz") {
    state = await takeQuiz(user, state);
  } else {
    throw new Error("unexpected choice: " + choice);
  }
  rl.close();
};

main();
