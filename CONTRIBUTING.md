# Contributing to AURA Framework

Thank you for your interest in contributing to AURA Framework! We welcome contributions from the community to help keep this architecture framework production-ready, clean, and maintainable.

---

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Architectural Guidelines

Before submitting pull requests, ensure your changes strictly comply with AURA Clean Architecture principles:

1. **Pure Domain Logic**: Code inside `@aura/shared-domain` or domain entities must remain 100% framework-agnostic. Do not import React, NestJS, Prisma, or Axios in Domain or Application layers.
2. **Layer Dependencies**: Dependencies must point inward toward the Domain layer (`Presentation` → `Application` → `Domain` ← `Infrastructure`).
3. **Coding Conventions**: Follow the suffix naming conventions outlined in [docs/conventions.md](docs/conventions.md) (`[Verb][Entity]UseCase`, `I[Entity]Repository`, `[Entity]Controller`).
4. **Feature Scaffolding**: Use `npm run aura:create-domain <name>` to create new domain features.

---

## Pull Request Process

1. Fork the repository and create a feature branch (`git checkout -b feature/my-feature`).
2. Implement your changes adhering to architectural conventions.
3. Ensure all code passes linting and type checks.
4. Open a Pull Request referencing the issue or feature request.
