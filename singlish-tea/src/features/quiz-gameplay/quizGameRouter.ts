import { publicProcedure, createTRPCRouter } from '~/server/api/trpc';
import { db } from '~/server/db';

export const quizGameRouter = createTRPCRouter({
  getQuestions: publicProcedure.query(async () => {
    const questions = await db.question.findMany();
    return questions.map(q => ({
      id: q.id,
      text: q.text,
      choices: q.choices,
      answer: q.answer,
      difficulty: q.difficulty,
    }));
  }),
  // Add more procedures as needed
});

export type QuizGameRouter = typeof quizGameRouter;
