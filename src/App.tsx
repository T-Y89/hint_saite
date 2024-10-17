import React, { useState } from 'react';
import QuizSection from './components/QuizSection';

function App() {
  const [openSectionId, setOpenSectionId] = useState<number | null>(null);

  const quizSections = [
    {
      id: 1,
      title: '大門1',
      subQuestions: [
        { title: '小門1', hints: ['ヒント1-1', 'ヒント1-2', 'ヒント1-3'] },
        { title: '小門2', hints: ['ヒント2-1', 'ヒント2-2', 'ヒント2-3'] },
      ],
      hints: ['大門1ヒント1', '大門1ヒント2', '大門1ヒント3'],
    },
    {
      id: 2,
      title: '大門2',
      subQuestions: [
        { title: '小門1', hints: ['ヒント1-1', 'ヒント1-2', 'ヒント1-3'] },
        { title: '小門2', hints: ['ヒント2-1', 'ヒント2-2', 'ヒント2-3'] },
      ],
      hints: ['大門2ヒント1', '大門2ヒント2', '大門2ヒント3'],
    },
    {
      id: 3,
      title: '大門3',
      subQuestions: [
        { title: '小門1', hints: ['ヒント1-1', 'ヒント1-2', 'ヒント1-3'] },
        { title: '小門2', hints: ['ヒント2-1', 'ヒント2-2', 'ヒント2-3'] },
      ],
      hints: ['大門3ヒント1', '大門3ヒント2', '大門3ヒント3'],
    },
    {
      id: 4,
      title: '大門4',
      subQuestions: [
        { title: '小門1', hints: ['ヒント1-1', 'ヒント1-2', 'ヒント1-3'] },
        { title: '小門2', hints: ['ヒント2-1', 'ヒント2-2', 'ヒント2-3'] },
      ],
      hints: ['大門4ヒント1', '大門4ヒント2', '大門4ヒント3'],
    },
    {
      id: 5,
      title: '大門5',
      subQuestions: [
        { title: '小門1', hints: ['ヒント1-1', 'ヒント1-2', 'ヒント1-3'] },
        { title: '小門2', hints: ['ヒント2-1', 'ヒント2-2', 'ヒント2-3'] },
      ],
      hints: ['大門5ヒント1', '大門5ヒント2', '大門5ヒント3'],
    },
  ];

  const handleSectionToggle = (id: number) => {
    setOpenSectionId(openSectionId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-white shadow-text">クイズゲームヒント</h1>
        <div className="space-y-8">
          {quizSections.map((section) => (
            <QuizSection
              key={section.id}
              {...section}
              isOpen={openSectionId === section.id}
              onToggle={() => handleSectionToggle(section.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;