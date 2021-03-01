import React from 'react';

function getStatusClass(status) {
  if (status === 'learning') {
    return 'flashcard--blue';
  } else if (status === 'mastered') {
    return 'flashcard--green';
  } else {
    return 'flashcard--grey';
  }
}

export default function FlashCard({
  wordStatus,
  renderedLearningWord,
  answer,
  setAnswer,
  handleKeyPressed,
}) {
  return (
    <section className={`flashcard ${getStatusClass(wordStatus)}`}>
      <p className="flashcard__word">{renderedLearningWord}</p>
      <input
        type="text"
        className="flashcard__translation flashcard__translation--blue"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyPress={handleKeyPressed}
        disabled={wordStatus === 'mastered'}
      />
    </section>
  );
}
