"use client";

// import { LatestPost } from "~/app/_components/post";
import { api } from "~/trpc/react";
import dynamic from "next/dynamic";
import { useState } from "react";


const QuizGame = dynamic(() => import("../features/quiz-gameplay/QuizGame"), { ssr: false });

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem] mb-4">
          Singlish Showdown
        </h1>
        <div className="w-full max-w-2xl bg-white/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2">Play Quiz</h2>
          <QuizGame />
        </div>
        {/* Leaderboard and Content Management have their own pages now */}
        <div className="flex flex-col items-center gap-2 mt-8">
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
        {/* Temporarily disabled to avoid build issues */}
        {/* <LatestPost /> */}
      </div>
    </main>
  );
}
