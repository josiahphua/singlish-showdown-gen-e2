import { api } from '~/trpc/react';

export type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
};

export const useLeaderboard = () => {
  const { data = [], isLoading } = api.leaderboard.getTop.useQuery();
  return { leaderboard: data as LeaderboardEntry[], isLoading };
};
