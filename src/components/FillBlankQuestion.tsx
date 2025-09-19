import React from 'react';
import { Question, UserAnswer } from '../types/quiz';

interface FillBlankQuestionProps {
  question: Question;
  userAnswer?: UserAnswer;
  onAnswer: (answer: UserAnswer) => void;
}

const FillBlankQuestion: React.FC<FillBlankQuestionProps> = ({ 
  question, 
  userAnswer, 
  onAnswer 
}) => {
  const handleInputChange = (value: string) => {
    onAnswer({
      selectedOptions: [],
      textAnswer: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <label htmlFor="answer-input" className="block text-sm font-medium text-gray-700 mb-3">
          Your Answer:
        </label>
        <input
          id="answer-input"
          type="text"
          value={userAnswer?.textAnswer || ''}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
          autoComplete="off"
        />
      </div>
      
      {question.hint && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-blue-800 text-sm">
            <span className="font-medium">Hint:</span> {question.hint}
          </p>
        </div>
      )}
    </div>
  );
};

export default FillBlankQuestion;