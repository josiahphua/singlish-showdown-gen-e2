---
applyTo: '**'
---
# Naming Conventions

## General Principles

- Use **descriptive, consistent, and unambiguous** names.
- Prefer clarity over brevity.
- Use American English.

## Files & Folders

- **Folders**: `kebab-case` (e.g., `user-profile`)
- **Files**: `PascalCase` for components, `camelCase` for utilities, `kebab-case` for pages.
  - `Button.tsx`, `useAuth.ts`, `formatDate.ts`, `user-profile.tsx`
- **Test files**: Suffix with `.test.ts(x)` or `.spec.ts(x)` (e.g., `Button.test.tsx`)
- **tRPC routers**: Suffix with `Router` (e.g., `userRouter.ts`)
- **Prisma models**: Singular, `PascalCase` (e.g., `User`, `Post`)

## Variables & Functions

- **Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Functions**: `camelCase`, verbs for actions (`fetchUser`, `createPost`)
- **React Components**: `PascalCase`
- **Hooks**: Prefix with `use` (e.g., `useAuth`)

## Database

- **Tables/Models**: Singular, `PascalCase`
- **Fields**: `camelCase`

## Examples

```ts
// Good
const userProfile = { ... };
function fetchUserData() { ... }
const MAX_RETRIES = 3;

// Bad
const User_profile = { ... };
function Fetch_user_data() { ... }
const maxRetries = 3;
```

## Extensibility

- Document any new naming patterns in `/docs/naming.md`.
- Review naming in code reviews.
