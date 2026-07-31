# AURA Framework Project Structure & Layer Responsibility Guide

This guide explains the directory layout, layer boundaries, and file responsibilities within AURA Framework.

---

## High-Level Monorepo Overview

```text
aura-framework/
├── apps/
│   ├── frontend/          # Web presentation application (React + Vite)
│   └── backend/           # Modular Monolith server application (NestJS)
├── packages/
│   ├── shared-domain/     # Pure core domain primitives (Entity, ValueObject, IRepository)
│   ├── shared-types/      # Monorepo-wide DTOs and contracts
│   ├── shared-ui/         # Reusable UI component design system
│   ├── shared-utils/      # General-purpose helper functions
│   └── eslint-config/     # Shared linting rules
├── docs/                  # Architecture documentation, ADRs, & roadmap
└── scripts/               # Automation scripts (e.g. CLI generator)
```

---

## 4-Layer Feature Architecture

Every feature or module inside `apps/frontend/src/domains/` and `apps/backend/src/domains/` is structured into four distinct layers:

### 1. Domain Layer (`domain/`)
- **Responsibility**: Contains core business rules, domain entities, value objects, and domain events.
- **Rules**:
  - Pure TypeScript code only.
  - Zero imports from React, Next.js, NestJS, Prisma, or Axios.
  - Independent of external storage or delivery mechanisms.

### 2. Application Layer (`application/`)
- **Responsibility**: Orchestrates application workflows, business Use Cases, Input/Output DTOs, and Repository Interfaces (`IRepository`).
- **Rules**:
  - Implements application Use Cases (e.g. `LoginUserUseCase`).
  - Interacts strictly with Repository interfaces, never with concrete database classes.
  - Free from framework dependencies.

### 3. Infrastructure Layer (`infrastructure/`)
- **Responsibility**: Concrete technical implementations of interfaces defined in Application/Domain layers.
- **Examples**:
  - Database repositories (Prisma, TypeORM, SQL queries).
  - HTTP API clients (Axios, Fetch adapters).
  - Cache providers (Redis memory adapters).
  - Auth services (JWT, Bcrypt).

### 4. Presentation Layer (`presentation/`)
- **Responsibility**: User interaction and external protocol delivery.
- **Examples**:
  - Frontend: React components, custom hooks, page views.
  - Backend: NestJS Controllers, HTTP request handlers, Swagger docs.
- **Rules**:
  - Delegates input validation and command execution to Application Use Cases.
  - Contains no raw database queries or direct business rules.

---

## Summary Matrix

| Layer | Depends On | Framework Allowed? | Database Allowed? |
| :--- | :--- | :--- | :--- |
| **Domain** | None | No | No |
| **Application** | Domain | No | No (Interfaces only) |
| **Infrastructure** | Application, Domain | Yes | Yes (Concrete ORMs) |
| **Presentation** | Application, Domain | Yes (React/NestJS) | No |
