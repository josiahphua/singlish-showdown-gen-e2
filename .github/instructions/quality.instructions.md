---
applyTo: '**'
---
# Code Quality Guidelines

## General Principles

- Maintain a high standard of code quality, readability, and maintainability.
- All code must be peer-reviewed before merging.
- No code should be merged with failing tests or lint errors.

## Design Patterns

- **Feature-based modularity**: Group related logic, UI, and state by feature.
- **Repository pattern**: Use for all database access via Prisma.
- **Service pattern**: Encapsulate business logic in service modules.
- **Hooks**: Use custom React hooks for reusable stateful logic.
- **Presentational/Container split**: Separate UI from logic for complex components.
- **Dependency Injection**: Use for testability and decoupling where appropriate.

## Code Reviews

- All PRs require at least one approval from a senior developer.
- Reviewers must check for:
  - Adherence to guidelines.
  - Test coverage and meaningful assertions.
  - Clear, maintainable, and DRY code.
  - Proper use of TypeScript types.
  - Security and performance considerations.

## Static Analysis

- Use ESLint and Prettier in CI.
- Use TypeScript strict mode.
- Use `ts-prune` or similar to detect unused exports.
- Use `depcheck` or similar to detect unused dependencies.

## Documentation

- All public APIs, complex logic, and business rules must be documented.
- Update `/docs/` with any new patterns or architectural decisions.

## Extensibility

- Propose quality improvements via PR.
- Review and update these guidelines as the stack evolves.
