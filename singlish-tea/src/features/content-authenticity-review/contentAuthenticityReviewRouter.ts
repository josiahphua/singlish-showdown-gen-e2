import { z } from 'zod';
import { publicProcedure, createTRPCRouter } from '~/server/api/trpc';

export const contentAuthenticityReviewRouter = createTRPCRouter({
  submitReview: publicProcedure
    .input(z.object({
      questionId: z.string(),
      reason: z.string().min(5),
    }))
    .mutation(async ({ input }) => {
      // TODO: Persist the review to DB or send to moderation queue
      // For now, just log it
      console.log('Content authenticity review submitted:', input);
      return { success: true };
    }),
});

export type ContentAuthenticityReviewRouter = typeof contentAuthenticityReviewRouter;
