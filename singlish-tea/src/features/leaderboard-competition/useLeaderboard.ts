import { trpc } from '@/src/trpc/react';

export type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
};

export const useLeaderboard = () => {
  const { data = [], isLoading } = trpc.leaderboard.getTop.useQuery();
  return { leaderboard: data as LeaderboardEntry[], isLoading };
};
