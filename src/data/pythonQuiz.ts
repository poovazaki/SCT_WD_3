import { Question } from '../types/quiz';

export const pythonQuizData: Question[] = [
  {
    id: 1,
    type: 'single',
    question: 'Which of these is the correct way to create a list in Python?',
    options: ['list = {1, 2, 3}', 'list = [1, 2, 3]', 'list = (1, 2, 3)', 'list = <1, 2, 3>'],
    correctAnswer: 1
  },
  {
    id: 2,
    type: 'fillblank',
    question: 'What keyword is used to define a function in Python?',
    correctAnswers: ['def'],
    hint: 'It\'s a 3-letter keyword that starts with \'d\''
  },
  {
    id: 3,
    type: 'single',
    question: 'What will len("Hello") return?',
    options: ['4', '5', '6', 'Error'],
    correctAnswer: 1
  },
  {
    id: 4,
    type: 'multiple',
    question: 'Which of these are Python data types?',
    options: ['int', 'varchar', 'str', 'boolean', 'list'],
    correctAnswers: [0, 2, 4] // int, str, list (note: Python uses 'bool', not 'boolean')
  },
  {
    id: 5,
    type: 'fillblank',
    question: 'What operator is used for exponentiation in Python?',
    correctAnswers: ['**', 'double asterisk'],
    hint: 'It uses two of the same symbol used for multiplication'
  },
  {
    id: 6,
    type: 'single',
    question: 'Which method is used to add an element to the end of a list?',
    options: ['add()', 'append()', 'insert()', 'push()'],
    correctAnswer: 1
  },
  {
    id: 7,
    type: 'multiple',
    question: 'Which of these are valid Python variable names?',
    options: ['my_var', '2var', '_private', 'class', 'user_name'],
    correctAnswers: [0, 2, 4] // my_var, _private, user_name
  },
  {
    id: 8,
    type: 'fillblank',
    question: 'What does the range(5) function return as its last number?',
    correctAnswers: ['4', 'four'],
    hint: 'Python range() is exclusive of the end value'
  }
];