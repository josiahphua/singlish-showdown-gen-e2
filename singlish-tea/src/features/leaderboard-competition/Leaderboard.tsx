import React from 'react';
import { useLeaderboard } from './useLeaderboard';

/**
 * Leaderboard - Displays top scores for competition.
 */
export const Leaderboard: React.FC = () => {
  const { leaderboard, isLoading } = useLeaderboard();

  if (isLoading) return <div className="p-4">Loading leaderboard...</div>;

  return (
    <div className="p-4 max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <ol className="list-decimal pl-6">
        {leaderboard.map((entry, idx) => (
          <li key={entry.id} className="mb-2 flex justify-between">
            <span>{idx + 1}. {entry.name}</span>
            <span className="font-mono">{entry.score}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
