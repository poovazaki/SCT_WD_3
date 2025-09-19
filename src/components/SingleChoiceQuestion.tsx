import React from 'react';
import { Check } from 'lucide-react';
import { Question, UserAnswer } from '../types/quiz';

interface SingleChoiceQuestionProps {
  question: Question;
  userAnswer?: UserAnswer;
  onAnswer: (answer: UserAnswer) => void;
}

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({ 
  question, 
  userAnswer, 
  onAnswer 
}) => {
  const handleOptionClick = (optionIndex: number) => {
    onAnswer({
      selectedOptions: [optionIndex],
      textAnswer: ''
    });
  };

  return (
    <div className="space-y-4">
      {question.options?.map((option, index) => {
        const isSelected = userAnswer?.selectedOptions.includes(index);
        
        return (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`
              w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105
              border-2 flex items-center justify-between group
              ${isSelected 
                ? 'border-blue-500 bg-blue-50 shadow-md' 
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }
            `}
          >
            <span className={`text-lg font-medium ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
              {option}
            </span>
            <div className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
              ${isSelected 
                ? 'border-blue-500 bg-blue-500' 
                : 'border-gray-300 group-hover:border-gray-400'
              }
            `}>
              {isSelected && <Check className="w-4 h-4 text-white" />}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default SingleChoiceQuestion;