import { Question } from '../types/quiz';

export const generalQuizData: Question[] = [
  {
    id: 1,
    type: 'single',
    question: 'Which country has the largest population in the world?',
    options: ['India', 'China', 'United States', 'Indonesia'],
    correctAnswer: 1
  },
  {
    id: 2,
    type: 'fillblank',
    question: 'What is the capital of Australia?',
    correctAnswers: ['canberra'],
    hint: 'It\'s not Sydney or Melbourne'
  },
  {
    id: 3,
    type: 'single',
    question: 'In which year did World War II end?',
    options: ['1944', '1945', '1946', '1947'],
    correctAnswer: 1
  },
  {
    id: 4,
    type: 'multiple',
    question: 'Which of these are continents?',
    options: ['Asia', 'Russia', 'Africa', 'Brazil', 'Europe'],
    correctAnswers: [0, 2, 4] // Asia, Africa, Europe
  },
  {
    id: 5,
    type: 'fillblank',
    question: 'What is the longest river in the world?',
    correctAnswers: ['nile', 'nile river'],
    hint: 'It flows through Egypt and several other African countries'
  },
  {
    id: 6,
    type: 'single',
    question: 'Which mountain range contains Mount Everest?',
    options: ['Andes', 'Rocky Mountains', 'Himalayas', 'Alps'],
    correctAnswer: 2
  },
  {
    id: 7,
    type: 'multiple',
    question: 'Which of these are official languages of the United Nations?',
    options: ['English', 'German', 'French', 'Italian', 'Spanish'],
    correctAnswers: [0, 2, 4] // English, French, Spanish
  },
  {
    id: 8,
    type: 'fillblank',
    question: 'How many time zones are there in the world?',
    correctAnswers: ['24', 'twenty-four', 'twenty four'],
    hint: 'Think about how many hours are in a day'
  }
];