import React from 'react';
import { useQuizGame } from './useQuizGame';
import { ScreenReaderOnly } from '../accessibility/ScreenReaderOnly';
import type { Difficulty } from '../difficulty-levels/DifficultySelector';

/**
 * QuizGame - Main gameplay UI for the quiz experience.
 */
export const QuizGame: React.FC<{ difficulty: Difficulty }> = ({ difficulty }) => {
  const {
    currentQuestion,
    answer,
    setAnswer,
    submitAnswer,
    isCorrect,
    isLoading,
    nextQuestion,
    questionNumber,
    totalQuestions,
    finished,
    resetQuiz,
  } = useQuizGame(difficulty);

  if (isLoading) return <div className="p-4" role="status" aria-live="polite">Loading...</div>;
  if (finished)
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2" tabIndex={0}>Quiz Complete!</h2>
        <button className="btn btn-primary" onClick={resetQuiz} autoFocus aria-label="Restart quiz">
          Restart
        </button>
      </div>
    );

  return (
    <div className="p-4 max-w-md md:max-w-lg lg:max-w-xl mx-auto" role="main">
      <div className="mb-4 text-sm text-gray-500" id="question-progress">
        <ScreenReaderOnly>Progress: </ScreenReaderOnly>
        Question {questionNumber} of {totalQuestions}
      </div>
      <div className="mb-6 text-lg font-semibold" id="question-text" tabIndex={0} aria-live="polite">
        {currentQuestion?.text}
      </div>
      <label htmlFor="quiz-answer" className="sr-only">Your answer</label>
      <input
        id="quiz-answer"
        className="input input-bordered w-full mb-4"
        type="text"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        disabled={isCorrect !== null}
        placeholder="Type your answer..."
        aria-label="Type your answer"
        aria-describedby="question-text question-progress"
        autoFocus
        onKeyDown={e => {
          if (e.key === 'Enter' && !isCorrect && answer) submitAnswer();
        }}
      />
      {isCorrect !== null && (
        <div
          className={isCorrect ? 'text-green-600' : 'text-red-600'}
          role="status"
          aria-live="polite"
        >
          {isCorrect ? 'Correct!' : 'Incorrect.'}
        </div>
      )}
      <div className="mt-4 flex gap-2">
        <button
          className="btn btn-primary"
          onClick={submitAnswer}
          disabled={isCorrect !== null || !answer}
          aria-label="Submit answer"
        >
          Submit
        </button>
        {isCorrect !== null && (
          <button className="btn" onClick={nextQuestion} aria-label="Next question" autoFocus>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizGame;
