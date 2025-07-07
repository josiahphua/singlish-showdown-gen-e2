import { z } from 'zod';
import { publicProcedure, router } from '@/src/server/trpc';

const mockLeaderboard = [
  { id: '1', name: 'Alice', score: 10 },
  { id: '2', name: 'Bob', score: 8 },
  { id: '3', name: 'Charlie', score: 7 },
];

export const leaderboardRouter = router({
  getTop: publicProcedure.query(() => mockLeaderboard),
  submitScore: publicProcedure
    .input(z.object({ name: z.string(), score: z.number().int().min(0) }))
    .mutation(async ({ input }) => {
      // TODO: Persist score to DB
      mockLeaderboard.push({ id: String(mockLeaderboard.length + 1), ...input });
      return { success: true };
    }),
});

export type LeaderboardRouter = typeof leaderboardRouter;
