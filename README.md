# AURA Framework

Production-Ready Fullstack Enterprise Architecture Framework based on Clean Architecture, Domain-Driven Design (DDD), Repository Pattern, and Modular Monolith principles.

AURA Framework decouples core business logic from UI frameworks, backend engines, ORMs, and third-party libraries, ensuring that application domain rules remain independent of external infrastructure choices.

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
- Shared Pure Domain Package (`@aura/domain`)
- Strict layer isolation and feature boundaries

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
│   ├── domain/               # Pure Core Business Domain & Interfaces (Framework Agnostic)
│   ├── shared-types/         # Global Type Definitions & Contracts
│   ├── shared-ui/            # Cross-Platform Design System Components
│   ├── shared-utils/         # Common Helper Functions & Utilities
│   └── eslint-config/        # Monorepo Code Quality & Lint Rules
│
├── docker/                   # Containerization & Compose Configurations
├── docs/                     # Architecture Documentation
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

#### Example: Incorrect vs Correct Pattern

```typescript
// Incorrect: Directly importing Prisma inside UseCase
import { prisma } from '@prisma/client';

export class RegisterUserUseCase {
  async execute(input: RegisterUserDto) {
    return prisma.user.create({ data: input });
  }
}
```

```typescript
// Correct: Injecting Repository Interface inside UseCase
import { UserRepository } from '@aura/domain';

export class RegisterUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(input: RegisterUserDto) {
    return this.userRepo.save(input);
  }
}
```

---

## Example Domains Guide

Starter features use `example-` prefixes to indicate boilerplate sample domains:

```text
domains/
├── example-auth/           # Authentication & Token Management
├── example-user/           # User Management Sample Domain
└── example-product/        # Product Catalog Sample Domain
```

### Replacing Sample Domains
Replace `example-*` modules with your specific business capabilities:

```text
domains/
├── hr/                     # Human Resources
├── crm/                    # Customer Relationship Management
├── erp/                    # Enterprise Resource Planning
├── e-commerce/             # E-Commerce Module
├── pos/                    # Point of Sale System
├── hospital/               # Healthcare Operations
└── school/                 # Academic Management
```

---

## Philosophy

Frameworks are temporary. Business is permanent.

Frameworks, libraries, and databases inevitably change over time, but business rules remain constant. AURA Framework ensures that business logic stays decoupled from delivery mechanisms and persistent storage.

This structure allows seamless transitions:
- UI evolution from React to Next.js or React Native
- Architecture evolution from Modular Monolith to Microservices
- Storage evolution from SQL Server to PostgreSQL or MongoDB

...all without rewriting underlying business logic.

---

## License

MIT
