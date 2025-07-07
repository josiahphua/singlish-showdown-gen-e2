---
applyTo: '**'
---
# Architecture Guidelines

## Overview

This repository uses the T3 stack: **Next.js**, **TypeScript**, **tRPC**, **Prisma**, **Tailwind CSS**, **Vitest**, **Playwright**, and **Testing Library**. The architecture must be modular, scalable, and maintainable.

## File & Folder Structure

- **`/src`**: All application code.
  - **`/pages`**: Next.js pages (route handlers only, minimal logic).
  - **`/server`**: tRPC routers, procedures, and server logic.
  - **`/db`**: Prisma schema and database utilities.
  - **`/components`**: Reusable UI components.
  - **`/features`**: Feature-based modules (each with its own components, hooks, and logic).
  - **`/styles`**: Tailwind config and global styles.
  - **`/utils`**: Shared utilities and helpers.
  - **`/tests`**: Integration and e2e tests (if not colocated).
- **`/public`**: Static assets.
- **`/e2e`**: Playwright tests.
- **`/prisma`**: Prisma migrations and seed scripts.

**Example:**
```
src/
  components/
    Button.tsx
  features/
    auth/
      AuthForm.tsx
      useAuth.ts
      authRouter.ts
  server/
    trpc.ts
    routers/
      user.ts
  db/
    prisma.ts
  utils/
    formatDate.ts
  pages/
    index.tsx
    api/
      trpc/[trpc].ts
```

## Layered Responsibility

- **Pages**: Routing and minimal data fetching.
- **Features**: Encapsulate domain logic, UI, and state.
- **Components**: Pure, reusable, and stateless where possible.
- **Server**: All backend logic, validation, and data access.
- **DB**: Prisma schema and database access.

## Design Patterns

- **Feature-based modularity**: Group related logic, UI, and state by feature.
- **Hooks for state and side effects**: Use custom React hooks for stateful logic.
- **Repository pattern**: Abstract DB access in `/db` using Prisma.
- **Service pattern**: Encapsulate business logic in service modules.
- **tRPC for API**: All APIs must be type-safe and use tRPC.
- **Presentational/Container split**: Separate UI from logic where complexity warrants.

## Extensibility

- New features must be added under `/src/features`.
- Shared logic must be abstracted into `/src/utils` or `/src/components`.
- All new APIs must use tRPC and be type-safe end-to-end.
- Document architectural decisions in `/docs/architecture.md`.

## Dependency Management

- Use only necessary dependencies.
- Keep dependencies up to date.
- Remove unused packages regularly.

## Example PR Structure

- Each PR should update the architecture documentation if introducing new patterns or structures.
