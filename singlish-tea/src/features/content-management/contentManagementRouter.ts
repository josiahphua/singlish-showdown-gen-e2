import { z } from 'zod';
import { publicProcedure, router } from '@/src/server/trpc';

let questions = [
  { id: '1', text: 'What does "lah" mean in Singlish?', answer: 'emphasis' },
  { id: '2', text: 'Translate "shiok" to English.', answer: 'delicious' },
];

export const contentManagementRouter = router({
  getAll: publicProcedure.query(() => questions),
  create: publicProcedure
    .input(z.object({ text: z.string().min(1), answer: z.string().min(1) }))
    .mutation(async ({ input }) => {
      const newQ = { ...input, id: String(Date.now()) };
      questions.push(newQ);
      return newQ;
    }),
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      questions = questions.filter(q => q.id !== input.id);
      return { success: true };
    }),
  // Update mutation can be added here
});

export type ContentManagementRouter = typeof contentManagementRouter;
