"use client";
import dynamic from "next/dynamic";

const Leaderboard = dynamic(() => import("../../features/leaderboard-competition/Leaderboard"), { ssr: false });

export default function LeaderboardPage() {
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">Leaderboard</h2>
      <Leaderboard />
    </main>
  );
}
