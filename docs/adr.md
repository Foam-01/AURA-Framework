# Architecture Decision Records (ADR)

This document records architectural choices, tradeoffs, and rationale behind the design of AURA Framework.

---

## ADR 001: Selection of Clean Architecture over Traditional Paradigms

### Context
When scaling software applications, teams encounter friction with traditional folder structures and framework-coupled patterns.

### Evaluated Alternatives

#### 1. Why not Traditional MVC (Model-View-Controller)?
- **Limitation**: MVC tightly couples business logic with controllers and ORM models. As features grow, controllers become "God Controllers" containing business validation, database queries, and response formatting.
- **Decision**: Rejected for enterprise systems.

#### 2. Why not Layered Architecture (3-Tier)?
- **Limitation**: In traditional 3-Tier architecture (Presentation → Business → Database), the Business layer directly depends on the Database layer. Changing ORMs or DB schemas breaks core business logic.
- **Decision**: Rejected in favor of Dependency Inversion.

#### 3. Why not Simple Feature Folders?
- **Limitation**: Feature folders improve organization but do not enforce layer boundaries. Developers frequently mix UI hooks, database queries, and business rules inside single feature files.
- **Decision**: Rejected for core business domain logic.

### Rationale for Clean Architecture & DDD
Clean Architecture combined with Domain-Driven Design (DDD) separates software into isolated concentric layers:
1. **Domain Layer**: Independent of frameworks, DBs, and UI.
2. **Application Layer**: Contains Use Cases and business workflows.
3. **Infrastructure Layer**: Pluggable implementations (Prisma, Axios, Redis).
4. **Presentation Layer**: Pluggable delivery mechanisms (React, Next.js, NestJS Controllers).

---

## ADR 002: Monorepo Package Strategy (`@aura/shared-domain`)

### Context
Sharing domain models between frontend, backend, and future mobile applications can cause package boundary confusion.

### Decision
Core domain abstractions (`Entity`, `AggregateRoot`, `ValueObject`, `DomainEvent`, `IRepository`) live inside `packages/shared-domain` (`@aura/shared-domain`). Use Cases reside within the Application layer of their respective domain features, preserving DDD layer purity.
