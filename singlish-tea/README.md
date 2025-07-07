# Singlish Showdown

## Requirements

- Node.js 18+
- npm (project is configured for npm)
- PostgreSQL (or your configured Prisma database)

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure environment:**
   - Copy `.env.example` to `.env` and fill in your database and secret values.

3. **Prepare the database:**
   - Run Prisma migrations:
     ```sh
     npx prisma migrate dev
     ```
   - Seed the database with quiz questions:
     ```sh
     cd prisma/seed
     npx ts-node seed-questions.ts
     ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at http://localhost:3000

## Features

- Quiz gameplay with difficulty selection
- Audio pronunciation (if audio URLs are provided)
- Content authenticity review
- Accessibility & responsive design
- Leaderboard & competition
- Content management (CRUD)
- Modular, type-safe tRPC API

## Testing

- Run all tests:
  ```sh
  npm test
  ```

## Notes

- Make sure your database is running before starting the app.
- For production, set up environment variables and run `npm run build` then `npm start`.
# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
