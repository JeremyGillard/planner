import React, { useEffect, useState } from 'react';
import FlashCard from './FlashCard';

const words = [
  {
    word: 'Hello',
    translation: 'Bonjour',
  },
  {
    word: 'Hi',
    translation: 'Salut',
  },
  {
    word: 'When',
    translation: 'Quand',
  },
  {
    word: 'Where',
    translation: 'Où',
  },
  {
    word: 'Indicator',
    translation: 'Indicateur',
  },
];

words.forEach((word) => (word.id = Math.floor(Math.random() * 100)));

function getWords() {
  return words;
}

export default function App() {
  const [learningWords, setLearningWords] = useState([]);
  const [reviewingWords, setReviewingWords] = useState([]);
  const [masteredWords, setMasteredWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [answer, setAnswer] = useState('');
  const [wordStatus, setWordStatus] = useState('learning');

  useEffect(() => {
    const words = getWords();
    setLearningWords(words);
    setCurrentWord(words[0]);
  }, []);

  const handleKeyPressed = (e) => {
    if (e.key === 'Enter') {
      handleResponse();
    }
  };

  const handleResponse = () => {
    if (learningWords.length !== 0) {
      if (answer === currentWord.translation) {
        const words = [...learningWords];
        words.shift();
        setLearningWords(words);
        setMasteredWords([...masteredWords, currentWord]);
        setCurrentWord(words[0]);
      } else {
        const words = [...learningWords];
        words.shift();
        setLearningWords(words);
        setReviewingWords([...reviewingWords, currentWord]);
        setCurrentWord(words[0]);
      }
    } else {
      if (answer === currentWord.translation) {
        const words = [...reviewingWords];
        words.shift();
        setReviewingWords(words);
        setMasteredWords([...masteredWords, currentWord]);
        setCurrentWord(words[0]);
      } else {
        const words = [...reviewingWords];
        words.shift();
        setReviewingWords([...words, currentWord]);
        setCurrentWord(words[0]);
      }
    }
    setAnswer('');
  };

  useEffect(() => {
    if (learningWords.length === 0 && reviewingWords.length !== 0) {
      setWordStatus('reviewing');
      setCurrentWord(reviewingWords[0]);
    } else if (
      learningWords.length === 0 &&
      reviewingWords.length === 0 &&
      masteredWords.length !== 0
    ) {
      setWordStatus('mastered');
    }
  }, [learningWords, reviewingWords, masteredWords, setCurrentWord]);

  const renderedLearningWord = currentWord
    ? currentWord.word
    : masteredWords[0].word;

  return (
    <div className="app">
      <div className="reviewer">
        <div className="indicators">
          <div className="indicator">
            <div className="indicator__tablet indicator__tablet--blue"></div>
            <p className="indicator__title">Learning</p>
            <p className="indicator__number">{learningWords.length}</p>
          </div>
          <div className="indicator">
            <div className="indicator__tablet indicator__tablet--grey"></div>
            <p className="indicator__title">Reviewing</p>
            <p className="indicator__number">{reviewingWords.length}</p>
          </div>
          <div className="indicator">
            <div className="indicator__tablet indicator__tablet--green"></div>
            <p className="indicator__title">Mastered</p>
            <p className="indicator__number">{masteredWords.length}</p>
          </div>
        </div>
        <FlashCard
          wordStatus={wordStatus}
          renderedLearningWord={renderedLearningWord}
          answer={answer}
          setAnswer={setAnswer}
          handleKeyPressed={handleKeyPressed}
        />
        <div className="actions">
          <button className="actions__addition">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <button className="actions__review" onClick={handleResponse}>
            <i className="fa fa-eye" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
