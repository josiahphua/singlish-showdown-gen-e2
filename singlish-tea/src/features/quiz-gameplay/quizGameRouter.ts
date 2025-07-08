import { publicProcedure, createTRPCRouter } from '~/server/api/trpc';


const questions = [
  {
    id: '1',
    text: 'What does "lah" mean in Singlish?',
    choices: ['emphasis', 'question'],
    answer: 'emphasis',
    difficulty: 'easy' as const,
  },
  {
    id: '2',
    text: 'Translate "shiok" to English.',
    choices: ['delicious', 'boring'],
    answer: 'delicious',
    difficulty: 'medium' as const,
  },
  {
    id: '3',
    text: 'What is "kiasu"?',
    choices: ['afraid to lose', 'very happy'],
    answer: 'afraid to lose',
    difficulty: 'hard' as const,
  },
];

export const quizGameRouter = createTRPCRouter({
  getQuestions: publicProcedure.query(() => questions),
  // Add more procedures as needed
});

export type QuizGameRouter = typeof quizGameRouter;
