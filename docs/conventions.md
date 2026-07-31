# AURA Framework Coding Conventions

This document specifies the strict architectural and naming conventions enforced across all applications and packages within AURA Framework.

---

## 1. Feature & Module Structure Convention

Every feature or module in `apps/frontend/src/domains/` and `apps/backend/src/domains/` must follow the four Clean Architecture sub-layers:

```text
feature-name/
├── domain/                  # Pure Domain Entities, Value Objects, Domain Services
│   ├── entities/
│   ├── value-objects/
│   └── services/
│
├── application/             # Application Use Cases, DTOs, Presenters
│   ├── use-cases/
│   ├── dto/
│   └── presenters/
│
├── infrastructure/          # Concrete API, Repositories, Database, Caching
│   ├── api/
│   ├── repositories/
│   └── cache/
│
├── presentation/            # UI Components, Custom Hooks, Pages, Controllers
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   └── controllers/
│
└── index.ts                 # Explicit Barrel Export for the Feature
```

---

## 2. Class & Interface Naming Conventions

To maintain consistency across large development teams, adhere strictly to the following class and interface suffix conventions:

| Artifact Type | Convention Pattern | Example |
| :--- | :--- | :--- |
| **Use Case Class** | `[Verb][Entity]UseCase` | `LoginUserUseCase`, `CreateOrderUseCase`, `SearchEmployeeUseCase` |
| **Repository Interface** | `I[Entity]Repository` | `IUserRepository`, `IOrderRepository`, `IProductRepository` |
| **Repository Implementation** | `[Technology][Entity]Repository` | `PrismaUserRepository`, `AuthApiRepository`, `RedisCacheRepository` |
| **Presenter Class** | `[Entity]Presenter` | `UserPresenter`, `OrderPresenter` |
| **Controller Class** | `[Entity]Controller` | `UserController`, `OrderController` |
| **Input/Output DTO** | `[UseCase]InputDto` / `[UseCase]OutputDto` | `LoginUserInputDto`, `LoginUserOutputDto` |

---

## 3. Dependency Injection Rules

1. Use Cases must depend **only** on Repository Interfaces (`IUserRepository`), never on concrete implementation classes.
2. Concrete Repositories are instantiated or injected via Dependency Injection in the Infrastructure layer.
3. Use Case classes must be framework agnostic. Do not import `@nestjs/common`, `react`, `@prisma/client`, or `axios` inside Use Cases.

---

## 4. Barrel Exports (`index.ts`)

Every feature module must expose a public interface using a single root `index.ts`. Private implementation details internal to `infrastructure` or `domain` must remain encapsulated within the feature module unless explicitly exported via `index.ts`.
