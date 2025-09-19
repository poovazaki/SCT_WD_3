import { Question } from '../types/quiz';

export const scienceQuizData: Question[] = [
  {
    id: 1,
    type: 'single',
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'NaCl', 'O2'],
    correctAnswer: 0
  },
  {
    id: 2,
    type: 'fillblank',
    question: 'How many bones are in the adult human body?',
    correctAnswers: ['206', 'two hundred six'],
    hint: 'It\'s more than 200 but less than 210'
  },
  {
    id: 3,
    type: 'single',
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Earth', 'Mercury', 'Mars'],
    correctAnswer: 2
  },
  {
    id: 4,
    type: 'multiple',
    question: 'Which of these are states of matter?',
    options: ['Solid', 'Heavy', 'Liquid', 'Fast', 'Gas'],
    correctAnswers: [0, 2, 4] // Solid, Liquid, Gas
  },
  {
    id: 5,
    type: 'fillblank',
    question: 'What gas do plants absorb from the atmosphere during photosynthesis?',
    correctAnswers: ['carbon dioxide', 'co2'],
    hint: 'It\'s the same gas humans exhale'
  },
  {
    id: 6,
    type: 'single',
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Cytoplasm'],
    correctAnswer: 1
  },
  {
    id: 7,
    type: 'multiple',
    question: 'Which of these are renewable energy sources?',
    options: ['Solar', 'Coal', 'Wind', 'Oil', 'Hydroelectric'],
    correctAnswers: [0, 2, 4] // Solar, Wind, Hydroelectric
  },
  {
    id: 8,
    type: 'fillblank',
    question: 'What is the speed of light in a vacuum? (in km/s)',
    correctAnswers: ['299792458', '300000000', '3x10^8'],
    hint: 'It\'s approximately 300,000 kilometers per second'
  }
];