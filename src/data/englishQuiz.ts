import { Question } from '../types/quiz';

export const englishQuizData: Question[] = [
  {
    id: 1,
    type: 'single',
    question: 'Which of these is a synonym for "happy"?',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    correctAnswer: 1
  },
  {
    id: 2,
    type: 'fillblank',
    question: 'Complete the sentence: "She _____ to the store yesterday."',
    correctAnswers: ['went', 'walked', 'drove', 'ran'],
    hint: 'Use the past tense of a movement verb'
  },
  {
    id: 3,
    type: 'single',
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 1
  },
  {
    id: 4,
    type: 'multiple',
    question: 'Which of these are parts of speech?',
    options: ['Noun', 'Paragraph', 'Verb', 'Chapter', 'Adjective'],
    correctAnswers: [0, 2, 4] // Noun, Verb, Adjective
  },
  {
    id: 5,
    type: 'fillblank',
    question: 'What is the plural form of "child"?',
    correctAnswers: ['children'],
    hint: 'This is an irregular plural form'
  },
  {
    id: 6,
    type: 'single',
    question: 'Which sentence is grammatically correct?',
    options: [
      'Me and him went to the store',
      'Him and I went to the store', 
      'He and I went to the store',
      'Me and he went to the store'
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    type: 'multiple',
    question: 'Which of these are vowels?',
    options: ['A', 'B', 'E', 'F', 'I'],
    correctAnswers: [0, 2, 4] // A, E, I
  },
  {
    id: 8,
    type: 'fillblank',
    question: 'What literary device compares two things using "like" or "as"?',
    correctAnswers: ['simile'],
    hint: 'It\'s different from a metaphor which makes direct comparisons'
  }
];