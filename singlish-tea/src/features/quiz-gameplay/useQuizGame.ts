
import { useState, useCallback } from 'react';
import { trpc } from '@/src/trpc/react';
import type { Difficulty } from '../difficulty-levels/DifficultySelector';

export type QuizQuestion = {
  id: string;
  text: string;
  answer: string;
  difficulty: Difficulty;
};


export const useQuizGame = (difficulty: Difficulty) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [finished, setFinished] = useState(false);

  // Fetch questions from API
  const { data: questions, isLoading, refetch } = trpc.quizGame.getQuestions.useQuery();

  // Filter questions by selected difficulty
  const filteredQuestions = questions?.filter((q: QuizQuestion) => q.difficulty === difficulty) || [];
  const currentQuestion = filteredQuestions[questionIndex];
  const totalQuestions = filteredQuestions.length;

  const submitAnswer = useCallback(() => {
    if (!currentQuestion) return;
    setIsCorrect(answer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase());
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
    setQuestionIndex(0);
    setAnswer('');
    setIsCorrect(null);
    setFinished(false);
    refetch();
  }, [refetch]);

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
    setDifficulty,
  };
};
