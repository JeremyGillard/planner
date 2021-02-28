import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const words = getWords();
    const word = words.pop();
    setLearningWords(words);
    setCurrentWord(word);
  }, []);

  useEffect(() => {
    if (
      learningWords.length === 0 &&
      currentWord === '' &&
      reviewingWords !== 0 &&
      masteredWords.length !== 0
    ) {
      const words = [...reviewingWords];
      const word = words.pop();
      setReviewingWords(words);
      setCurrentWord(word);
    }
  }, [
    currentWord,
    setCurrentWord,
    learningWords,
    reviewingWords,
    setReviewingWords,
    masteredWords,
  ]);

  const handleKeyPressed = (e) => {
    if (e.key === 'Enter') {
      handleResponse();
    }
  };

  const handleResponse = () => {
    if (answer === currentWord.translation) {
      const words = [...learningWords];
      const word = words.pop();
      setLearningWords(words);
      setMasteredWords([...masteredWords, currentWord]);
      setCurrentWord(word);
    } else {
      const words = [...learningWords];
      const word = words.pop();
      setLearningWords(words);
      setReviewingWords([...reviewingWords, currentWord]);
      setCurrentWord(word);
    }
    setAnswer('');
  };

  const renderedLearningWord = currentWord
    ? currentWord.word
    : 'No more words today';

  return (
    <div className="app">
      <div className="reviewer">
        <div className="indicators">
          <div className="indicator">
            <div className="indicator__tablet indicator__tablet--blue"></div>
            <p className="indicator__title">Learning</p>
            <p className="indicator__number">
              {learningWords.length ? learningWords.length + 1 : 0}
            </p>
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
        <section className="flashcard flashcard--blue">
          <p className="flashcard__word">{renderedLearningWord}</p>
          <input
            type="text"
            className="flashcard__translation"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyPress={handleKeyPressed}
          />
        </section>
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
