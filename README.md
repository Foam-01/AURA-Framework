# AURA Framework

Production-Ready Fullstack Enterprise Architecture Framework based on Clean Architecture, Domain-Driven Design (DDD), Repository Pattern, and Modular Monolith principles.

AURA Framework decouples core business logic from UI frameworks, backend engines, ORMs, and third-party libraries, ensuring that application domain rules remain independent of external infrastructure choices.

---

## Principles

- **Framework Agnostic**: Core business domain logic has zero dependencies on UI libraries or backend frameworks.
- **Business First**: Code is organized around business domain capabilities rather than technical framework boundaries.
- **Dependency Rule**: Code dependencies point strictly inward toward the pure Domain layer.
- **Feature Isolation**: Each feature operates as an independent module with explicit barrel exports.
- **Modular by Default**: Designed as a Modular Monolith, ready to be extracted into Microservices when scaling demands.
- **Testability**: Use Cases and Domain Entities can be unit tested in isolation without mocking databases or HTTP servers.
- **Scalable**: Supports multi-team development with clear architectural boundaries.
- **Maintainable**: Single responsibility per class and strict architectural conventions.

---

## Features

### Frontend
- **React + Vite** as default presentation target
- **Next.js Ready**: Migrate to SSR/SSG without modifying application or domain layers
- **React Native Ready**: Share domain entities, contracts, and use cases directly with mobile targets

### Backend
- **NestJS** application module structure
- **Framework & ORM Agnostic**: Infrastructure supports Prisma, TypeORM, or custom DB drivers
- **Modular Monolith**: Clean module isolation ready for microservices extraction

### Core Architecture
- Pure Domain-Driven Design (DDD)
- Explicit Dependency Inversion & Repository Pattern
- Shared Pure Domain Package (`@aura/shared-domain`)
- Strict layer isolation and feature boundaries

---

## Why Clean Architecture?

| Architecture Pattern | Business Logic Isolation | Framework Independence | Scalability for Large Teams |
| :--- | :--- | :--- | :--- |
| **Traditional MVC** | Low (Coupled to Controllers & DB) | Low (Tightly bound to framework) | Low (Lead to God Controllers) |
| **Layered (3-Tier)** | Medium (Business depends on DB) | Medium | Medium |
| **Feature Folders Only** | Low (No layer enforcement) | Low | Medium |
| **AURA Clean Architecture** | **High (100% Isolated Domain)** | **High (Framework Agnostic)** | **High (Enforced Boundaries)** |

### Architecture Decisions
- **Why not MVC?** MVC couples business rules to controllers and ORM models, leading to fat controllers that are difficult to unit test and maintain.
- **Why not Layered Architecture?** Traditional 3-tier architecture places the Database at the bottom, forcing the business layer to depend directly on database schemas.
- **Why Clean Architecture + DDD?** Clean Architecture inverts the database dependency, ensuring business logic depends only on abstractions (`IRepository`), making databases and delivery mechanisms interchangeable.

---

## Supported Frontends

| Platform | Status | Domain Reusability |
| :--- | :--- | :--- |
| **React + Vite** | Active | Shared Business Logic |
| **Next.js** | Supported | Shared Business Logic |
| **React Native** | Planned | Shared Business Logic |
| **Electron** | Planned | Shared Business Logic |

---

## Supported Frameworks & Engines

| Layer | Current Engine | Supported Alternatives |
| :--- | :--- | :--- |
| **Frontend UI** | React + Vite | Next.js, React Native, Remix |
| **Backend Engine** | NestJS | Fastify, Express, Bun, Deno |
| **Database & ORM** | Prisma | PostgreSQL, SQL Server, MongoDB, TypeORM |
| **Transport** | REST / Fetch API | GraphQL, gRPC, WebSockets |

---

## Repository Structure

```text
aura-framework/
│
├── apps/
│   ├── frontend/             # Single-Page App or SSR Presentation Targets
│   └── backend/              # Modular Monolith / Microservices Backend
│
├── packages/
│   ├── shared-domain/        # Pure Core Domain Abstractions & Contracts (Entity, ValueObject, IRepository)
│   ├── shared-types/         # Global Type Definitions & Contracts
│   ├── shared-ui/            # Cross-Platform Design System Components
│   ├── shared-utils/         # Common Helper Functions & Utilities
│   └── eslint-config/        # Monorepo Code Quality & Lint Rules
│
├── docker/                   # Containerization & Compose Configurations
├── docs/                     # Architecture Documentation (conventions.md, adr.md)
├── scripts/                  # Automation & Build Scripts
└── package.json
```

---

## Architecture Layers

AURA Framework enforces strict Clean Architecture & DDD boundaries:

```text
       ┌────────────────────────────────────────┐
       │           Presentation Layer           │
       │     (React, Next.js, Controllers)      │
       └───────────────────┬────────────────────┘
                           │ (depends on)
                           ▼
       ┌────────────────────────────────────────┐
       │           Application Layer            │
       │         (Use Cases, DTOs)              │
       └───────────────────┬────────────────────┘
                           │ (depends on)
                           ▼
       ┌────────────────────────────────────────┐
       │             Domain Layer               │
       │     (Entities, Value Objects)          │
       └───────────────────▲────────────────────┘
                           │ (implements interfaces)
       ┌───────────────────┴────────────────────┐
       │          Infrastructure Layer          │
       │    (Prisma, Axios, Redis, Jwt, DB)     │
       └────────────────────────────────────────┘
```

### 1. Presentation Layer
Handles HTTP routes, controllers, and UI components. Delegates processing to Application Use Cases without database logic.

### 2. Application Layer
Orchestrates application-specific workflow and business rules through Use Cases and DTOs. Interacts strictly through Repository interfaces.

### 3. Domain Layer
Contains core domain models, business entities, value objects, and repository contracts. Free from any framework dependencies.

### 4. Infrastructure Layer
Implements domain and application contracts using concrete technologies (Prisma ORM, HTTP clients, Redis cache, JWT adapters).

---

## Dependency Rules

All code dependencies must point inward toward the Domain layer.

```text
Presentation   ──────►   Application   ──────►   Domain
                                                    ▲
Infrastructure ─────────────────────────────────────┘
```

### Allowed & Disallowed Imports

Domain and Application layers must not depend on external frameworks or infrastructure libraries:

- Forbidden in Business Logic: `Prisma`, `Axios`, `React`, `Next.js`, `NestJS`
- Allowed: Pure TypeScript, Domain Interfaces, Value Objects

---

## Sample Domains Guide

Starter features use standard domain names as boilerplate references:

```text
domains/
├── auth/                   # Authentication & Token Management
├── user/                   # User Management Sample Domain
└── product/                # Product Catalog Sample Domain
```

> **Note:** These are sample domains. Replace them with your own business domains (e.g., HR, CRM, ERP, E-Commerce, POS, Hospital, School).

---

## Coding Conventions

AURA Framework enforces strict naming and structural conventions across all modules:

- **Use Cases**: Must follow `[Verb][Entity]UseCase` (e.g., `LoginUserUseCase`, `CreateOrderUseCase`).
- **Repositories**: Interfaces follow `I[Entity]Repository` (`IUserRepository`), implementations follow `[Tech][Entity]Repository` (`PrismaUserRepository`).
- **Controllers & Presenters**: Follow `[Entity]Controller` and `[Entity]Presenter`.

For complete architectural conventions and detailed guidelines, see [docs/conventions.md](file:///c:/Users/GIGABYTE/Desktop/AURA-Framework/docs/conventions.md) and [docs/adr.md](file:///c:/Users/GIGABYTE/Desktop/AURA-Framework/docs/adr.md).

---

## Philosophy

Frameworks are temporary. Business is permanent.

Frameworks, libraries, and databases inevitably change over time, but business rules remain constant. AURA Framework ensures that business logic stays decoupled from delivery mechanisms and persistent storage.

---

## License

MIT
