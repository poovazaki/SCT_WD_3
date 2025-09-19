import { mathQuizData } from './mathQuiz';
import { englishQuizData } from './englishQuiz';
import { scienceQuizData } from './scienceQuiz';
import { generalQuizData } from './generalQuiz';
import { pythonQuizData } from './pythonQuiz';

export const getQuizData = (category: string) => {
  switch (category) {
    case 'math':
      return mathQuizData;
    case 'english':
      return englishQuizData;
    case 'science':
      return scienceQuizData;
    case 'general':
      return generalQuizData;
    case 'python':
      return pythonQuizData;
    default:
      return mathQuizData;
  }
};

export const getCategoryName = (category: string) => {
  switch (category) {
    case 'math':
      return 'Mathematics';
    case 'english':
      return 'English';
    case 'science':
      return 'Science';
    case 'general':
      return 'General Knowledge';
    case 'python':
      return 'Python Programming';
    default:
      return 'Quiz';
  }
};