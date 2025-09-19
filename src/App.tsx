import React from 'react';
import { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import Quiz from './components/Quiz';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {selectedCategory ? (
        <Quiz 
          category={selectedCategory} 
          onBackToCategories={handleBackToCategories}
        />
      ) : (
        <CategorySelector onSelectCategory={handleSelectCategory} />
      )}
    </div>
  );
}

export default App;