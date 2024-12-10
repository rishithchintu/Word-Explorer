import React from 'react';
import { BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="w-8 h-8 text-purple-400" />
        <h1 className="text-4xl font-bold text-white">Word Explorer</h1>
      </div>
      <p className="text-gray-400 text-center max-w-md">
        Explore synonyms for common English words. Navigate through the collection to expand your vocabulary.
      </p>
    </div>
  );
};