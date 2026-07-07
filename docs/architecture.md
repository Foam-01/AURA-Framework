# Architecture Notes

## Overview

AURA Starter Template uses a modular monorepo structure with clear separation between frontend, backend, shared packages, and infrastructure concerns. The goal is to provide a flexible foundation for business applications that can grow over time.

## Frontend architecture

The frontend is organized by domain and layered by responsibility:

- app: routing, layouts, providers, and global store
- core: API client, config, hooks, services, shared types, and utilities
- domains: feature-specific modules such as identity, employee, inventory, and sales
- shared: reusable UI components, icons, styles, helpers, and validators

The preferred flow is:

```text
Page -> Hook -> Use Case -> Repository -> Axios -> Backend
```

## Backend architecture

The backend follows a domain-oriented structure and clean architecture-inspired layers:

- core: cross-cutting concerns such as config, database, cache, logging, guards, middleware, queue, scheduler, and utilities
- shared: shared DTOs, enums, constants, interfaces, and mappers
- domains: feature-specific modules with their own use cases, repositories, and presentation layers

The preferred flow is:

```text
Controller -> Use Case -> Repository Interface -> Prisma Repository -> Database
```

## Domain-driven design

Each domain is kept independent so it can evolve separately. This allows the template to support many business types, including ERP, HR, POS, inventory management, CRM, e-commerce, dashboards, and internal tools.

## Scaling approach

The template is designed so that when a domain grows significantly, it can be extracted into its own service without changing the overall architecture model. This makes the system ready for future modularization and distributed services.
