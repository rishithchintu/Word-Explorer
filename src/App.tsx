import React, { useState } from 'react';
import { WordCard } from './components/WordCard';
import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { commonWords } from './data/words';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < commonWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <Header />
      <WordCard
        {...commonWords[currentIndex]}
        isVisible={true}
      />
      <Controls
        onNext={handleNext}
        onPrevious={handlePrevious}
        currentIndex={currentIndex}
        total={commonWords.length}
      />
    </div>
  );
}

export default App;