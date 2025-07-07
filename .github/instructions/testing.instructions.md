---
applyTo: '**'
---
# Testing Guidelines

## Tools

- **Unit/Integration**: [Vitest](https://vitest.dev/)
- **E2E**: [Playwright](https://playwright.dev/)
- **Component/UI**: [Testing Library](https://testing-library.com/)

## Requirements

- All new code must include tests.
- All features must have:
  - Unit tests for logic.
  - Integration tests for API and DB.
  - E2E tests for critical flows.
- Minimum coverage: **90%** for statements, branches, and functions.

## Test Organization

- **Colocate** tests with code when possible.
- Use `/e2e` for Playwright tests.
- Use `.test.ts(x)` or `.spec.ts(x)` suffix.

**Example:**
```
src/features/auth/AuthForm.test.tsx
src/server/routers/userRouter.test.ts
e2e/login.spec.ts
```

## Test Structure

- Use descriptive test names.
- Arrange-Act-Assert pattern.
- Mock external dependencies.
- Use factories for test data.

**Example:**
```ts
describe('AuthForm', () => {
  it('submits credentials', async () => {
    // Arrange
    // Act
    // Assert
  });
});
```

## CI Integration

- All tests must pass in CI before merging.
- Add new tests for bug fixes and features.

## Extensibility

- Add new test utilities to `/src/test-utils`.
- Update `/docs/testing.md` for new patterns.
