---
applyTo: '**'
---
# Code Style Guidelines

## Formatting

- Use [Prettier](https://prettier.io/) for code formatting.
- Use [ESLint](https://eslint.org/) with T3 stack plugins.
- Enforce formatting and linting in CI.

## TypeScript

- Always use explicit types for function signatures and exports.
- Prefer `type` over `interface` unless extending.
- Avoid `any`; use `unknown` with type guards if necessary.

## React

- Use function components and hooks.
- Prefer composition over inheritance.
- Use Tailwind CSS for styling; avoid inline styles.
- Use `className` for Tailwind classes.

## tRPC

- Validate all inputs with Zod.
- Use type inference for API responses.

## Prisma

- Use generated types.
- Never expose raw queries in the API.

## Examples

```tsx
// Good
type User = { id: string; name: string };
const Button: React.FC<Props> = ({ children }) => (
  <button className="px-4 py-2">{children}</button>
);

// Bad
interface User { id; name }
function Button(props) {
  return <button style={{ padding: 8 }}>{props.children}</button>
}
```

## Comments & Documentation

- Use JSDoc for exported functions and complex logic.
- Remove commented-out code before merging.

## Extensibility

- Update `/docs/style.md` for new conventions.
- Propose style changes via PR.
