import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface HintProps {
  hints: string[];
}

const Hint: React.FC<HintProps> = ({ hints }) => {
  const [hintLevel, setHintLevel] = useState(0);

  const showNextHint = () => {
    if (hintLevel < hints.length) {
      setHintLevel(hintLevel + 1);
    }
  };

  return (
    <div className="ml-4 mt-2">
      {hints.slice(0, hintLevel).map((hint, index) => (
        <p key={index} className="text-gray-800 mb-2">
          ヒント{index + 1}: {hint}
        </p>
      ))}
      {hintLevel < hints.length && (
        <button
          onClick={showNextHint}
          className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-200"
        >
          <ChevronDown size={16} className="mr-1" />
          次のヒントを表示
        </button>
      )}
    </div>
  );
};

interface SubQuestionProps {
  title: string;
  hints: string[];
}

interface QuizSectionProps {
  title: string;
  subQuestions: SubQuestionProps[];
  hints: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ title, subQuestions, hints, isOpen, onToggle }) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden border border-blue-200 transform transition-all duration-300 hover:scale-102">
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white"
        onClick={onToggle}
      >
        <span className="text-2xl font-semibold">{title}</span>
        {isOpen ? <ChevronUp size={24} className="text-gold" /> : <ChevronDown size={24} className="text-gold" />}
      </button>
      {isOpen && (
        <div className="p-6 space-y-6">
          {subQuestions.map((subQuestion, index) => (
            <div key={index} className="border-b border-blue-100 pb-4 last:border-b-0 last:pb-0">
              <h3 className="font-semibold text-blue-900 mb-3 text-xl">{subQuestion.title}</h3>
              <Hint hints={subQuestion.hints} />
            </div>
          ))}
          <div className="mt-8">
            <h3 className="font-semibold text-blue-900 mb-3 text-xl">{title}のヒント</h3>
            <Hint hints={hints} />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSection;