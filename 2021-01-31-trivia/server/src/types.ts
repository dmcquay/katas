export interface GameState {
  questions: Question[];
  answers: Answer[];
}

export interface QuestionOption {
  id: string;
  content: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  user: string;
  content: string;
  options: QuestionOption[];
}

export interface Answer {
  id: string;
  user: string;
  questionId: string;
  optionId: string;
  isCorrect: boolean;
}
