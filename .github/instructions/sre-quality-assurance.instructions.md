---
applyTo: '**'
---
# SRE Quality Assurance & Integration Guidelines

## Purpose
This document provides Site Reliability Engineering (SRE) and integration best practices for all contributors. It ensures that any new code or feature added to the repository is:
- Well-tested (unit, integration, and e2e)
- Reliable and observable in production
- Compatible with the existing codebase
- Easy to debug and maintain

## SRE & Integration Principles
- **Reliability First:** All code must be robust, handle errors gracefully, and not degrade the user experience.
- **Automated Testing:** Every new feature or change must include automated tests (unit, integration, and e2e as appropriate).
- **Continuous Integration:** All code must pass CI checks (lint, type, test, build) before merging.
- **Observability:** Add logging, metrics, and error reporting for critical paths and new features.
- **Rollback Ready:** Code should be easy to revert or disable if issues arise in production.
- **Documentation:** All new endpoints, features, and operational changes must be documented.

## Required Steps for New Code
1. **Design for Integration:**
   - Follow the project’s modular and feature-based architecture.
   - Use clear interfaces and types for all modules and APIs.
   - Ensure backward compatibility unless a breaking change is justified and documented.

2. **Testing:**
   - Write unit tests for all logic and utility functions.
   - Write integration tests for API endpoints, DB access, and feature flows.
   - Write or update e2e tests for user-facing flows.
   - Ensure test coverage remains above 90%.
   - Mock external dependencies in tests.
   - Run all tests locally before pushing.

3. **Code Quality & Reliability:**
   - Use strict TypeScript types and avoid `any`.
   - Handle all errors and edge cases (e.g., network, DB, API failures).
   - Add logging for errors and important events.
   - Use feature flags or toggles for risky or experimental features.

4. **Integration & Deployment:**
   - Test new code in a staging environment before production.
   - Monitor logs and metrics after deployment.
   - Be ready to rollback or hotfix if issues are detected.

5. **Operational Readiness:**
   - Add or update runbooks for new features or operational changes.
   - Ensure alerts and dashboards are updated for new critical paths.
   - Document any new environment variables or secrets.

## SRE Review Checklist
- [ ] Code is modular and integrates cleanly with existing features
- [ ] All tests pass and coverage is sufficient
- [ ] Logging and error handling are present
- [ ] No breaking changes without migration plan
- [ ] Documentation and runbooks are updated
- [ ] Feature is observable and can be rolled back

## Extensibility
- Propose improvements to these guidelines via PR.
- SREs and maintainers should review and update this document as the stack and operational needs evolve.
