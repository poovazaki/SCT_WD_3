import React from 'react';
import { Calculator, BookOpen, Atom, Globe, Code } from 'lucide-react';

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

interface CategorySelectorProps {
  onSelectCategory: (categoryId: string) => void;
}

const categories: QuizCategory[] = [
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Test your mathematical skills with algebra, geometry, and arithmetic',
    icon: <Calculator className="w-8 h-8" />,
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'english',
    name: 'English',
    description: 'Grammar, vocabulary, literature, and language comprehension',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Physics, chemistry, biology, and scientific principles',
    icon: <Atom className="w-8 h-8" />,
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    id: 'general',
    name: 'General Knowledge',
    description: 'History, geography, current affairs, and world facts',
    icon: <Globe className="w-8 h-8" />,
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'python',
    name: 'Python Programming',
    description: 'Python syntax, concepts, libraries, and best practices',
    icon: <Code className="w-8 h-8" />,
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-purple-600'
  }
];

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelectCategory }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Choose Your Quiz
          </h1>
          <p className="text-white/80 text-xl">
            Select a category to test your knowledge
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-left"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900">
                {category.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {category.description}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-medium">
                <span className={`${category.color} group-hover:underline`}>
                  Start Quiz →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;