## Description
Briefly summarize the changes introduced by this PR and the architectural problem it resolves.

## Type of Change
- [ ] New Clean Architecture feature / domain
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] Documentation update (README, ADR, Conventions)
- [ ] Infrastructure / CI tooling update

## Architectural Verification Checklist
- [ ] Business logic in Domain and Application layers has ZERO dependencies on React, Next.js, NestJS, Prisma, or Axios.
- [ ] Use Cases interact strictly with Repository Interfaces (`IRepository`), not concrete database classes.
- [ ] Coding conventions (`[Verb][Entity]UseCase`, `I[Entity]Repository`, `[Entity]Controller`) are followed.
- [ ] Code passes all linting and type checks.
