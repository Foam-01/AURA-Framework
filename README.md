# 🚀 AURA Starter Template

AURA Starter Template is a monorepo starter for building business applications with a modular and scalable architecture. It is designed to be cloned and reused for ERP, HR, POS, Inventory, CRM, E-Commerce, Dashboard, and internal systems.

## Why this template

- Start quickly with a ready frontend and backend foundation.
- Organize code by domain from the beginning.
- Reuse shared libraries across multiple applications.
- Scale from a modular monolith into separate services later without rewriting the core design.

## Repository structure

```text
aura-template/
├── apps/
│   ├── frontend/
│   └── backend/
├── packages/
│   ├── shared-types/
│   ├── shared-utils/
│   ├── shared-ui/
│   └── eslint-config/
├── docker/
├── docs/
├── scripts/
├── .github/
├── docker-compose.yml
└── README.md
```

## Frontend structure

```text
apps/frontend/
├── public/
├── src/
│   ├── app/
│   │   ├── layouts/
│   │   ├── providers/
│   │   ├── routes/
│   │   └── store/
│   ├── core/
│   │   ├── api/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── domains/
│   └── shared/
│       ├── components/
│       ├── helpers/
│       ├── icons/
│       ├── styles/
│       └── validators/
```

## Backend structure

```text
apps/backend/
├── src/
│   ├── core/
│   │   ├── cache/
│   │   ├── config/
│   │   ├── database/
│   │   ├── decorators/
│   │   ├── filters/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── logger/
│   │   ├── middleware/
│   │   ├── prisma/
│   │   ├── queue/
│   │   ├── scheduler/
│   │   └── utils/
│   ├── domains/
│   └── shared/
│       ├── constants/
│       ├── dto/
│       ├── enums/
│       ├── interfaces/
│       └── mapper/
```

## Domain model

The template is organized by domain from the start:

- identity
- employee
- inventory
- sales
- purchasing
- accounting
- report
- notification

Each domain can later be extracted into its own service if the business grows.

## Application flow

### Frontend

```text
Page -> Hook -> Use Case -> Repository -> Axios -> Backend
```

### Backend

```text
Controller -> Use Case -> Repository Interface -> Prisma Repository -> Database
```

## Scaling strategy

When one domain becomes heavily used, it can be moved out as a separate service without changing the overall architecture. For example:

- identity -> identity-service
- employee -> employee-service

This makes the starter template suitable for both small internal systems and larger enterprise products.
