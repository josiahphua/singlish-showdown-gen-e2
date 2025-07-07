
import Link from "next/link";
import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import dynamic from "next/dynamic";
const QuizGame = dynamic(() => import("../features/quiz-gameplay/QuizGame"), { ssr: false });
const Leaderboard = dynamic(() => import("../features/leaderboard-competition/Leaderboard"), { ssr: false });
const ContentManager = dynamic(() => import("../features/content-management/ContentManager"), { ssr: false });
const DifficultySelector = dynamic(() => import("../features/difficulty-levels/DifficultySelector"), { ssr: false });

import { useState } from "react";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  // Client-side state for difficulty
  // This will only be used on the client, so we use a wrapper component
  function MainClient() {
    const [difficulty, setDifficulty] = useState("easy");
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem] mb-4">
            Singlish Showdown
          </h1>
          <div className="w-full max-w-2xl bg-white/10 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-2">Play Quiz</h2>
            <DifficultySelector value={difficulty} onChange={setDifficulty} />
            <QuizGame difficulty={difficulty} />
          </div>
          <div className="w-full max-w-2xl bg-white/10 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-2">Leaderboard</h2>
            <Leaderboard />
          </div>
          <div className="w-full max-w-2xl bg-white/10 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-2">Content Management</h2>
            <ContentManager />
          </div>
          <div className="flex flex-col items-center gap-2 mt-8">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
          {session?.user && <LatestPost />}
        </div>
      </main>
    );
  }

  return (
    <HydrateClient>
      <MainClient />
    </HydrateClient>
  );
}
