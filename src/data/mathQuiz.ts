import { Question } from '../types/quiz';

export const mathQuizData: Question[] = [
  {
    id: 1,
    type: 'single',
    question: 'What is the value of π (pi) rounded to 2 decimal places?',
    options: ['3.12', '3.14', '3.16', '3.18'],
    correctAnswer: 1
  },
  {
    id: 2,
    type: 'fillblank',
    question: 'What is the square root of 144?',
    correctAnswers: ['12', 'twelve'],
    hint: 'Think about what number multiplied by itself equals 144'
  },
  {
    id: 3,
    type: 'single',
    question: 'In a right triangle, what is the relationship between the sides called?',
    options: ['Pythagorean Theorem', 'Quadratic Formula', 'Law of Cosines', 'Binomial Theorem'],
    correctAnswer: 0
  },
  {
    id: 4,
    type: 'multiple',
    question: 'Which of these are prime numbers?',
    options: ['2', '4', '7', '9', '11'],
    correctAnswers: [0, 2, 4] // 2, 7, 11
  },
  {
    id: 5,
    type: 'fillblank',
    question: 'What is 15% of 200?',
    correctAnswers: ['30', 'thirty'],
    hint: 'Convert percentage to decimal and multiply'
  },
  {
    id: 6,
    type: 'single',
    question: 'What is the formula for the area of a circle?',
    options: ['πr²', '2πr', 'πd', 'r²'],
    correctAnswer: 0
  },
  {
    id: 7,
    type: 'multiple',
    question: 'Which of these are even numbers?',
    options: ['8', '15', '22', '33', '46'],
    correctAnswers: [0, 2, 4] // 8, 22, 46
  },
  {
    id: 8,
    type: 'fillblank',
    question: 'If x + 5 = 12, what is the value of x?',
    correctAnswers: ['7', 'seven'],
    hint: 'Subtract 5 from both sides of the equation'
  }
];