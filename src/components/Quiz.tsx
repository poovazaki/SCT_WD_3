import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Trophy, Clock, ArrowLeft } from 'lucide-react';
import QuestionCard from './QuestionCard';
import Results from './Results';
import { getQuizData, getCategoryName } from '../data/quizData';
import { Question, UserAnswer } from '../types/quiz';

interface QuizProps {
  category: string;
  onBackToCategories: () => void;
}

const Quiz: React.FC<QuizProps> = ({ category, onBackToCategories }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [startTime] = useState(Date.now());
  const [endTime, setEndTime] = useState<number | null>(null);

  const quizData = getQuizData(category);
  const categoryName = getCategoryName(category);
  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  const handleAnswer = (answer: UserAnswer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setEndTime(Date.now());
      setIsQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsQuizCompleted(false);
    setEndTime(null);
  };

  const isAnswered = () => {
    const answer = userAnswers[currentQuestionIndex];
    if (!answer) return false;
    
    switch (currentQuestion.type) {
      case 'single':
        return answer.selectedOptions.length > 0;
      case 'multiple':
        return answer.selectedOptions.length > 0;
      case 'fillblank':
        return answer.textAnswer && answer.textAnswer.trim() !== '';
      default:
        return false;
    }
  };

  if (isQuizCompleted) {
    return (
      <Results 
        categoryName={categoryName}
        questions={quizData}
        userAnswers={userAnswers}
        timeTaken={endTime ? Math.floor((endTime - startTime) / 1000) : 0}
        onRestart={handleRestart}
        onBackToCategories={onBackToCategories}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={onBackToCategories}
            className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Categories
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
            <Trophy className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white font-medium">{categoryName} Quiz</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {categoryName} Challenge
          </h1>
          <p className="text-white/80 text-lg">
            Answer all questions to see your final score
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/80 text-sm font-medium">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </span>
            <div className="flex items-center text-white/80 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>{Math.floor((Date.now() - startTime) / 1000)}s</span>
            </div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          userAnswer={userAnswers[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />

        {/* Navigation */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleNext}
            disabled={!isAnswered()}
            className={`
              inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform
              ${isAnswered() 
                ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:scale-105 hover:shadow-lg' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {isLastQuestion ? 'Complete Quiz' : 'Next Question'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;