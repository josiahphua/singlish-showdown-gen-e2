import { z } from 'zod';
import { publicProcedure, router } from '@/src/server/trpc';

const questions = [
  { id: '1', text: 'What does "lah" mean in Singlish?', answer: 'emphasis' },
  { id: '2', text: 'Translate "shiok" to English.', answer: 'delicious' },
  { id: '3', text: 'What is "kiasu"?', answer: 'afraid to lose' },
];

export const quizGameRouter = router({
  getQuestions: publicProcedure.query(() => questions),
  // Add more procedures as needed
});

export type QuizGameRouter = typeof quizGameRouter;
