import { postRouter } from "~/server/api/routers/post";
import { quizGameRouter } from "@/src/features/quiz-gameplay/quizGameRouter";
import { contentAuthenticityReviewRouter } from "@/src/features/content-authenticity-review/contentAuthenticityReviewRouter";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { leaderboardRouter } from "@/src/features/leaderboard-competition/leaderboardRouter";
import { contentManagementRouter } from "@/src/features/content-management/contentManagementRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  quizGame: quizGameRouter,
  contentAuthenticityReview: contentAuthenticityReviewRouter,
  leaderboard: leaderboardRouter,
  contentManagement: contentManagementRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
