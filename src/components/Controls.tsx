import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  total: number;
}

export const Controls: React.FC<ControlsProps> = ({
  onNext,
  onPrevious,
  currentIndex,
  total,
}) => {
  return (
    <div className="flex items-center gap-6 mt-8">
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <span className="text-gray-400">
        {currentIndex + 1} / {total}
      </span>
      <button
        onClick={onNext}
        disabled={currentIndex === total - 1}
        className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};