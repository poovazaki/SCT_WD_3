import React from 'react';
import { Question, UserAnswer } from '../types/quiz';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import FillBlankQuestion from './FillBlankQuestion';

interface QuestionCardProps {
  question: Question;
  userAnswer?: UserAnswer;
  onAnswer: (answer: UserAnswer) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, userAnswer, onAnswer }) => {
  const renderQuestion = () => {
    switch (question.type) {
      case 'single':
        return (
          <SingleChoiceQuestion
            question={question}
            userAnswer={userAnswer}
            onAnswer={onAnswer}
          />
        );
      case 'multiple':
        return (
          <MultipleChoiceQuestion
            question={question}
            userAnswer={userAnswer}
            onAnswer={onAnswer}
          />
        );
      case 'fillblank':
        return (
          <FillBlankQuestion
            question={question}
            userAnswer={userAnswer}
            onAnswer={onAnswer}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 animate-fadeIn">
      <div className="mb-6">
        <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-4">
          <span className="text-sm font-medium text-purple-700 capitalize">
            {question.type === 'fillblank' ? 'Fill in the Blank' : 
             question.type === 'multiple' ? 'Multiple Select' : 'Single Select'}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          {question.question}
        </h2>
        {question.type === 'multiple' && (
          <p className="text-sm text-gray-600 mt-2">
            Select all correct answers
          </p>
        )}
      </div>

      {renderQuestion()}
    </div>
  );
};

export default QuestionCard;