## Prisma

To view and manage your database with Prisma Studio, run:

```sh
npx prisma studio
```

Make sure your database server (e.g., PostgreSQL) is running before running migrations, seeding, or starting the app.
# Singlish Showdown

## Requirements

- Node.js 18+
- npm (project is configured for npm)
- PostgreSQL (or your configured Prisma database)



## 🚀 Quick Start (Recommended: Docker Compose)

The fastest way to run everything (app + PostgreSQL) is with Docker Compose. This handles all dependencies and setup for you.

1. Copy `.env.example` to `.env` in `singlish-tea/` and fill in your values. Set `DATABASE_URL` to:
   ```
   postgres://postgres:postgres@db:5432/singlish_showdown
   ```
2. Start everything (from the project root):
   ```sh
   docker-compose up --build
   ```
   The app will be available at http://localhost:3000

To stop and remove containers:
```sh
docker-compose down
```

All migrations and seeding are handled automatically by the app container on first run. No need to run manual setup steps unless you want to.

---

## Dockerfile (App Only)

The app can be built and run in a container using the provided `Dockerfile` in `singlish-tea/`. For Vercel deployment, you must use an external PostgreSQL provider (Vercel does not host databases).

## Deploying to Vercel

- Deploy only the Next.js app to Vercel (do not deploy the database).
- Use a managed PostgreSQL provider (e.g., Supabase, Neon, Railway, or similar).
- Set your production `DATABASE_URL` in Vercel's environment variables.


## Manual Setup (Advanced/Optional)

If you prefer not to use Docker, you can run everything manually:

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure environment:**
   - Copy `.env.example` to `.env` and fill in your database and secret values.

3. **Start PostgreSQL:**
   - Make sure your PostgreSQL server is running and matches your `.env` config.

4. **Prepare the database:**
   - Run Prisma migrations:
     ```sh
     npx prisma migrate dev
     ```
   - Seed the database with quiz questions:
     ```sh
     cd prisma/seed
     npx ts-node seed-questions.ts
     ```

5. **Start the development server:**
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
