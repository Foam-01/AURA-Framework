# 🚀 AURA Framework

> **Production-Ready Fullstack Enterprise Architecture Framework**
> *Clean Architecture • Domain-Driven Design (DDD) • Repository Pattern • Modular Monolith • Framework Agnostic*

AURA Framework is an enterprise-grade monorepo architecture framework designed to build scalable, resilient, and maintainable software systems. It decouples core business logic from UI frameworks, backend engines, ORMs, and third-party libraries—ensuring your application's domain rules outlast framework lifecycles.

---

## ✨ Key Features

### ⚛️ Frontend
- **React + Vite** (Active Default)
- **Next.js Ready** (Seamless migration without altering Application or Domain layers)
- **React Native Ready** (Share domain models and use-case logic directly with mobile apps)

### 🛡️ Backend
- **NestJS & Express/Fastify Support**
- **Prisma / TypeORM / Drizzle ORM Agnostic Infrastructure**
- **Modular Monolith** (Easily refactor modules into independent Microservices)

### 🧱 Core Architecture
- **Pure Domain Driven Design (DDD)**
- **Strict Dependency Injection & Inversion**
- **Repository Pattern Enforcement**
- **Shared Pure Domain Package (`@aura/domain`)**
- **Feature Isolation & Modular Boundaries**

---

## 💻 Supported Frontends

| Platform | Status | Domain Reusability |
| :--- | :--- | :--- |
| **React + Vite** | ✔ Active | 100% Shared Business Rules |
| **Next.js** | ✔ Supported | 100% Shared Business Rules |
| **React Native** | ✔ Future Ready | 100% Shared Business Rules |
| **Electron** | ✔ Future Ready | 100% Shared Business Rules |

---

## ⚡ Supported Frameworks & Engines

| Layer | Current Engine | Supported Alternatives |
| :--- | :--- | :--- |
| **Frontend UI** | React + Vite | Next.js, React Native, Remix |
| **Backend Engine** | NestJS | Fastify, Express, Bun, Deno |
| **Database & ORM** | Prisma | PostgreSQL, SQL Server, MongoDB, TypeORM |
| **HTTP / Transport** | Axios / Fetch API | GraphQL, gRPC, WebSockets |

---

## 📂 Repository Structure

```text
aura-framework/
│
├── apps/
│   ├── frontend/             # Single-Page App or SSR Presentation Targets
│   └── backend/              # Enterprise Backend Modular Monolith / Microservices
│
├── packages/
│   ├── domain/               # 💎 Pure Core Business Domain & Interfaces (Framework Agnostic)
│   ├── shared-types/         # Global Type Definitions & Contracts
│   ├── shared-ui/            # Cross-Platform Design System & Components
│   ├── shared-utils/         # Common Helper Functions & Utilities
│   └── eslint-config/        # Monorepo Linting & Code Quality Standards
│
├── docker/                   # Containerization & Compose Configurations
├── docs/                     # Architecture Specifications & ADRs
├── scripts/                  # Setup & Build Scripts
└── package.json
```

---

## 🏛️ Architecture Layers

AURA Framework follows strict Clean Architecture & DDD layer boundaries:

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
Receives HTTP requests or user UI actions. Delegates command processing to Application Use Cases. Has zero knowledge of SQL or database schemas.

### 2. Application Layer
Contains application-specific business rules and orchestration logic (Use Cases, Input/Output DTOs). Interacts **only** with Repository Interfaces.

### 3. Domain Layer
The heart of the application. Contains domain entities, value objects, domain events, and core interfaces. Has **zero dependencies** on external libraries or frameworks.

### 4. Infrastructure Layer
Implements domain & application interfaces (e.g. Prisma ORM repository implementations, Axios HTTP adapters, Redis cache). External frameworks live strictly here.

---

## 🚫 Dependency Rule

Dependencies always point **inward** toward the Domain layer.

```text
Presentation   ──────►   Application   ──────►   Domain
                                                    ▲
Infrastructure ─────────────────────────────────────┘
```

### Strict Restrictions

> [!IMPORTANT]
> **Business Logic (Domain & Application Layers) MUST NEVER import:**
> 
> ❌ `Prisma` / ORMs  
> ❌ `Axios` / HTTP Clients  
> ❌ `React` / `Next.js`  
> ❌ `NestJS` / Server Frameworks  

```typescript
// ❌ WRONG: Importing Prisma inside UseCase
import { prisma } from '@prisma/client'; // BREAKS CLEAN ARCHITECTURE

// ✅ CORRECT: Injecting Repository Interface inside UseCase
import { UserRepository } from '@aura/domain';

export class RegisterUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}
}
```

---

## 📂 Example Domains Guide

To keep the starter framework intuitive for open-source contributors, sample domains are named with `example-` prefixes:

```text
domains/
├── example-auth/           # Authentication & Token Use Cases
├── example-user/           # User Management Sample Domain
└── example-product/        # Product Catalog Sample Domain
```

### Replacing Example Domains with Business Domains
When building your production enterprise system, replace `example-*` folders with your actual business capabilities:

```text
domains/
├── hr/                     # Human Resources Domain
├── crm/                    # Customer Relationship Management
├── erp/                    # Enterprise Resource Planning
├── e-commerce/             # Online Store Domain
├── pos/                    # Point of Sale System
├── hospital/               # Healthcare Domain
└── school/                 # Education Domain
```

---

## 🎯 Philosophy

> **Frameworks are temporary. Business is permanent.**

*Frameworks change. Libraries change. Databases change. Business rules remain.*

AURA Framework is designed so that business logic is independent from UI frameworks, backend frameworks, databases, and external libraries.

This architecture empowers applications to evolve:
- From **React** to **Next.js** or **React Native**
- From **Modular Monolith** to **Microservices**
- From **SQL Server** to **PostgreSQL** or **MongoDB**

...without rewriting a single line of business rules.

---

## 📜 License

MIT License © AURA Framework
