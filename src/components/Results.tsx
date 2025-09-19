import React from 'react';
import { Trophy, RotateCcw, Clock, Target, CheckCircle, XCircle } from 'lucide-react';
import { Question, UserAnswer } from '../types/quiz';

interface ResultsProps {
  categoryName: string;
  questions: Question[];
  userAnswers: UserAnswer[];
  timeTaken: number;
  onRestart: () => void;
  onBackToCategories: () => void;
}

const Results: React.FC<ResultsProps> = ({ 
  categoryName, 
  questions, 
  userAnswers, 
  timeTaken, 
  onRestart, 
  onBackToCategories 
}) => {
  const calculateScore = () => {
    let correct = 0;
    let total = 0;

    questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (!userAnswer) return;

      total++;
      
      switch (question.type) {
        case 'single':
          if (userAnswer.selectedOptions.length === 1 && 
              userAnswer.selectedOptions[0] === question.correctAnswer) {
            correct++;
          }
          break;
        case 'multiple':
          const correctAnswers = question.correctAnswers || [];
          const userSelected = userAnswer.selectedOptions.sort();
          const correctSorted = correctAnswers.sort();
          if (JSON.stringify(userSelected) === JSON.stringify(correctSorted)) {
            correct++;
          }
          break;
        case 'fillblank':
          const userText = userAnswer.textAnswer?.toLowerCase().trim();
          const correctTexts = question.correctAnswers?.map(answer => answer.toLowerCase()) || [];
          if (correctTexts.includes(userText || '')) {
            correct++;
          }
          break;
      }
    });

    return { correct, total };
  };

  const { correct, total } = calculateScore();
  const percentage = Math.round((correct / total) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    if (percentage >= 90) return 'Outstanding! 🎉';
    if (percentage >= 80) return 'Excellent work! 👏';
    if (percentage >= 70) return 'Good job! 👍';
    if (percentage >= 60) return 'Not bad! 🙂';
    return 'Keep practicing! 💪';
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
            <Trophy className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white font-medium">{categoryName} Quiz Complete!</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {getScoreMessage()}
          </h1>
        </div>

        {/* Score Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 mb-8">
          <div className="text-center mb-8">
            <div className={`text-6xl md:text-7xl font-bold ${getScoreColor()} mb-4`}>
              {percentage}%
            </div>
            <p className="text-xl text-gray-600 mb-6">
              You got {correct} out of {total} questions correct
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-800">Accuracy</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
              </div>
              
              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Correct</span>
                </div>
                <div className="text-2xl font-bold text-green-600">{correct}</div>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-4">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-purple-600 mr-2" />
                  <span className="font-semibold text-purple-800">Time</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">{formatTime(timeTaken)}</div>
              </div>
            </div>
          </div>

          {/* Question Review */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Question Review</h3>
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              let isCorrect = false;
              
              switch (question.type) {
                case 'single':
                  isCorrect = userAnswer?.selectedOptions[0] === question.correctAnswer;
                  break;
                case 'multiple':
                  const correctAnswers = question.correctAnswers || [];
                  const userSelected = userAnswer?.selectedOptions.sort() || [];
                  isCorrect = JSON.stringify(userSelected) === JSON.stringify(correctAnswers.sort());
                  break;
                case 'fillblank':
                  const userText = userAnswer?.textAnswer?.toLowerCase().trim();
                  const correctTexts = question.correctAnswers?.map(answer => answer.toLowerCase()) || [];
                  isCorrect = correctTexts.includes(userText || '');
                  break;
              }

              return (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 mr-4">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-gray-800">
                      Question {index + 1}: {question.question}
                    </p>
                    <p className={`text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Restart Button */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onRestart}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-lg rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Retake Quiz
            </button>
            
            <button
              onClick={onBackToCategories}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold text-lg rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Choose Different Category
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;