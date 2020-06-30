import React, { useState } from 'react';
import FlashcardList from './FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return (
    <FlashcardList flashcards={flashcards}/>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: '안녕',
    answer: 'hello',
    options: [
      'hello',
      'yellow',
      'why',
      'no'
    ]
  },
  {
    id: 2,
    question: '네',
    answer: 'yes',
    options: [
      'yes',
      'no',
      'maybe',
      'so'
    ]
  }
]

export default App;
