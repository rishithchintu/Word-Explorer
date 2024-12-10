import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Word } from '../types/words';

interface WordCardProps extends Word {
  isVisible: boolean;
}

export const WordCard: React.FC<WordCardProps> = ({ word, synonyms, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-xl p-8 shadow-xl max-w-md w-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-6 h-6 text-purple-400" />
        <h2 className="text-3xl font-bold text-white">{word}</h2>
      </div>
      <div className="space-y-3">
        {synonyms.map((synonym, index) => (
          <motion.div
            key={synonym}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-700 p-3 rounded-lg text-gray-200"
          >
            {synonym}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};