

import { useState, useCallback, useEffect } from 'react';
import { api } from '~/trpc/react';

export type QuizQuestion = {
  id: string;
  text: string;
  choices: string[];
  answer: string;
  // difficulty: string; // No longer used
};

function shuffle<T>(array: T[]): T[] {
  // Fisher-Yates shuffle
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const useQuizGame = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [finished, setFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [score, setScore] = useState(0);

  // Fetch all questions from API
  const { data: questions, isLoading, refetch } = api.quizGame.getQuestions.useQuery();

  // Shuffle and set questions on first load or refetch, limit to 10
  useEffect(() => {
    if (questions && questions.length > 0) {
      setShuffledQuestions(shuffle(questions).slice(0, 10));
      setQuestionIndex(0);
      setFinished(false);
      setAnswer('');
      setIsCorrect(null);
      setScore(0);
    }
  }, [questions]);

  const currentQuestion = shuffledQuestions[questionIndex];
  const totalQuestions = shuffledQuestions.length;

  const submitAnswer = useCallback(() => {
    if (!currentQuestion) return;
    const correct = answer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase();
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  }, [answer, currentQuestion]);

  const nextQuestion = useCallback(() => {
    setIsCorrect(null);
    setAnswer('');
    if (questionIndex + 1 < totalQuestions) {
      setQuestionIndex(q => q + 1);
    } else {
      setFinished(true);
    }
  }, [questionIndex, totalQuestions]);

  const resetQuiz = useCallback(() => {
    if (questions && questions.length > 0) {
      setShuffledQuestions(shuffle(questions).slice(0, 10));
      setQuestionIndex(0);
      setFinished(false);
      setAnswer('');
      setIsCorrect(null);
      setScore(0);
    } else {
      void refetch();
    }
  }, [questions, refetch]);

  return {
    currentQuestion,
    answer,
    setAnswer,
    submitAnswer,
    isCorrect,
    isLoading,
    nextQuestion,
    questionNumber: questionIndex + 1,
    totalQuestions,
    finished,
    resetQuiz,
    score,
  };
};
