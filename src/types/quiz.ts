export interface Question {
  id: number;
  type: 'single' | 'multiple' | 'fillblank';
  question: string;
  options?: string[];
  correctAnswer?: number; // For single choice
  correctAnswers?: number[] | string[]; // For multiple choice or fill blank
  hint?: string; // For fill blank questions
}

export interface UserAnswer {
  selectedOptions: number[];
  textAnswer: string;
}