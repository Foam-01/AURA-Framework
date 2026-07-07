# 🚀 AURA Fullstack Starter

> **A production-ready fullstack starter template built with React, NestJS, Prisma, and Clean Architecture.**

AURA Fullstack Starter is an opinionated monorepo template designed to build scalable business applications. It provides a solid foundation with Clean Architecture, Domain-Driven Design (DDD), Repository Pattern, and Modular Monolith architecture, allowing projects to grow from a simple internal application to an enterprise-scale system.

The goal of this template is to provide a reusable architecture that can be cloned and used for almost every business application without redesigning the project structure.

---

# ✨ Features

- ⚛️ React + Vite + TypeScript
- 🎨 Tailwind CSS
- ⚡ React Query
- 🌐 Axios
- 🛡️ NestJS
- 🗄️ Prisma ORM
- 🗃️ SQL Server / PostgreSQL
- 🔐 JWT Authentication
- 🔄 Refresh Token
- 👤 Role Based Access Control (RBAC)
- 📋 Audit Log
- 📦 Modular Monolith
- 🏛️ Clean Architecture
- 🧱 Domain-Driven Design (DDD)
- 🔄 Repository Pattern
- 🧪 Ready for Unit Testing
- 📚 Swagger API
- 🐳 Docker Ready
- 🚀 Ready to evolve into Microservices

---

# 📖 Why AURA Starter?

Most projects start with a simple folder structure.

```
src
├── components
├── pages
├── services
├── hooks
└── utils
```

As the project grows, the codebase becomes difficult to maintain.

Business logic starts spreading across Components, Services, Controllers, and Database layers.

This template organizes code around **Business Domains** instead of Frameworks.

Instead of asking

> "Where should I put this React component?"

we ask

> "Which business domain does this belong to?"

This makes the project easier to understand, easier to maintain, and easier to scale.

---

# 🏛 Architecture

This project combines multiple software architecture concepts.

| Pattern | Purpose |
|----------|----------|
| Clean Architecture | Separate business logic from frameworks |
| Modular Monolith | Scale within a single application |
| Domain-Driven Design (DDD) | Organize code by business domain |
| Repository Pattern | Decouple business logic from persistence |
| SOLID Principles | Improve maintainability |
| Dependency Injection | Loose coupling |
| Feature-Based Architecture | Organize frontend by feature |

---

# 📁 Repository Structure

```text
aura-fullstack-starter
│
├── apps
│   ├── frontend
│   └── backend
│
├── packages
│   ├── shared-types
│   ├── shared-utils
│   ├── shared-ui
│   └── eslint-config
│
├── docker
│
├── docs
│
├── scripts
│
├── .github
│
├── docker-compose.yml
│
└── README.md
```

---

# 📦 Frontend Architecture

```text
apps/frontend
│
├── public
│
├── src
│
├── app
│   ├── layouts
│   ├── providers
│   ├── routes
│   ├── store
│   ├── App.tsx
│   └── main.tsx
│
├── core
│   ├── api
│   ├── config
│   ├── constants
│   ├── hooks
│   ├── services
│   ├── types
│   └── utils
│
├── shared
│   ├── components
│   ├── helpers
│   ├── icons
│   ├── styles
│   └── validators
│
└── domains
```

---

# 🌍 Business Domains

Every business capability lives inside its own Domain.

```text
domains

├── identity
│
├── employee
│
├── inventory
│
├── purchasing
│
├── sales
│
├── accounting
│
├── report
│
└── notification
```

---

# 📂 Example Domain Structure

Every domain follows the same architecture.

```text
employee
│
├── search
│
├── profile
│
├── department
│
├── attendance
│
├── leave
│
└── payroll
```

Each Feature follows this structure.

```text
search
│
├── domain
│   ├── entities
│   ├── repositories
│   ├── services
│   └── value-objects
│
├── application
│   ├── use-cases
│   ├── dto
│   └── presenters
│
├── infrastructure
│   ├── api
│   ├── repositories
│   └── cache
│
├── presentation
│   ├── pages
│   ├── components
│   └── hooks
│
└── index.ts
```

---

# 🖥 Backend Architecture

```text
apps/backend
│
├── src
│
├── core
│   ├── cache
│   ├── config
│   ├── database
│   ├── decorators
│   ├── filters
│   ├── guards
│   ├── interceptors
│   ├── logger
│   ├── middleware
│   ├── prisma
│   ├── queue
│   ├── scheduler
│   └── utils
│
├── shared
│   ├── constants
│   ├── dto
│   ├── enums
│   ├── interfaces
│   └── mapper
│
└── domains
```

---

# 📂 Backend Domain

```text
identity

├── auth

├── user

├── role

└── permission
```

Each Module

```text
auth
│
├── domain
│   ├── entities
│   ├── repositories
│   ├── services
│   └── value-objects
│
├── application
│   ├── use-cases
│   ├── dto
│   └── presenters
│
├── infrastructure
│   ├── prisma
│   ├── repositories
│   ├── jwt
│   ├── bcrypt
│   └── redis
│
├── presentation
│   ├── controllers
│   ├── validators
│   ├── pipes
│   └── swagger
│
└── auth.module.ts
```

---

# 🔄 Request Flow

## Frontend

```text
User

↓

Page

↓

Hook

↓

Use Case

↓

Repository Interface

↓

Axios Repository

↓

Backend API
```

---

## Backend

```text
HTTP Request

↓

Controller

↓

Use Case

↓

Repository Interface

↓

Prisma Repository

↓

Database
```

---

# 📈 Scaling Strategy

This project is intentionally built as a **Modular Monolith**.

```
Frontend

↓

Backend

↓

Database
```

This architecture is sufficient for most startups and enterprise applications.

As the application grows, individual domains can be extracted into independent services.

```
Frontend

↓

API Gateway

↓

Identity Service

Employee Service

Inventory Service

Sales Service

Notification Service
```

Because each domain is isolated from the beginning, migration to Microservices becomes straightforward.

---

# 🚀 Technology Stack

## Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- React Query
- Axios
- React Hook Form
- Zod

---

## Backend

- NestJS
- Prisma ORM
- SQL Server
- PostgreSQL
- JWT
- Refresh Token
- RBAC
- Swagger

---

## DevOps

- Docker
- Docker Compose
- Nginx
- GitHub Actions

---

## Future Scaling

- Redis
- RabbitMQ
- Kafka
- Kubernetes
- API Gateway
- Microservices

---

# 🎯 Philosophy

Frameworks change.

Libraries change.

Databases change.

Business rules remain.

This template is designed so that business logic is independent from frameworks and infrastructure, making applications easier to maintain, test, and evolve over time.

---

# 📜 License

MIT License

---

Made with ❤️ by AURA Framework
