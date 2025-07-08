
import React from 'react';
import { useQuizGame } from './useQuizGame';
import { ScreenReaderOnly } from '../accessibility/ScreenReaderOnly';

/**
 * QuizGame - Multiple choice UI for the quiz experience.
 * Now: No difficulty selection, questions are randomized, each asked once per run.
 */
export const QuizGame: React.FC = () => {
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
    score,
  } = useQuizGame();


  if (isLoading) return <div className="p-4" role="status" aria-live="polite">Loading...</div>;
  if (finished)
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2" tabIndex={0}>Quiz Complete!</h2>
        <div className="text-lg mb-4">Your score: {score} / 10</div>
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
      <div className="flex flex-col gap-3">
        {currentQuestion?.choices?.map((choice: string, idx: number) => (
          <button
            key={idx}
            className={`btn w-full ${answer === choice ? 'btn-primary' : 'btn-outline'} ${isCorrect !== null ? (choice === currentQuestion.answer ? 'border-green-500' : (answer === choice ? 'border-red-500' : '')) : ''}`}
            onClick={() => {
              if (isCorrect === null) setAnswer(choice);
            }}
            disabled={isCorrect !== null}
            aria-pressed={answer === choice}
            aria-label={choice}
          >
            {choice}
          </button>
        ))}
      </div>
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
};

export default QuizGame;
