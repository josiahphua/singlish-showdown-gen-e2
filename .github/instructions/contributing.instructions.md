---
applyTo: '**'
---
# Contributing Guidelines

## Getting Started

1. Fork and clone the repository.
2. Install dependencies: `pnpm install`
3. Create a feature branch: `git checkout -b feature/your-feature`

## Commit Messages

- Use [Conventional Commits](https://www.conventionalcommits.org/).
  - `feat: add user login`
  - `fix: correct auth bug`
  - `test: add e2e for signup`

## Pull Requests

- Reference related issues.
- Include a clear description and screenshots if UI changes.
- Ensure all tests and linters pass.
- Update documentation as needed.

## Code Review

- All PRs require at least one approval.
- Address all review comments.
- Be respectful and constructive.

## Communication

- Use GitHub Discussions or Issues for questions and proposals.
- Document architectural or process changes in `/docs/`.

## CI/CD

- All checks must pass before merging.
- Do not commit directly to `main`/`master`.

## Extensibility

- Propose changes to guidelines via PR.
- Keep guidelines up to date as the stack evolves.
