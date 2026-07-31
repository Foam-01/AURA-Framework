# AURA Framework Roadmap

This document outlines the strategic evolution and release roadmap of AURA Framework.

---

## Release Milestones

### Version 1.0 — Modular Monolith Core (Active)
- [x] Shared pure domain primitives (`@aura/shared-domain`)
- [x] Clean Architecture 4-layer isolation (`domain`, `application`, `infrastructure`, `presentation`)
- [x] React + Vite frontend single-page presentation
- [x] NestJS backend modular monolith
- [x] Pure Repository Pattern abstraction
- [x] CLI domain generator script (`npm run aura:create-domain`)
- [x] Open source community documentation & ADRs

---

### Version 2.0 — Multi-Platform Presentation & Caching (Active Development)
- [ ] Next.js (SSR / SSG) presentation package target
- [ ] React Native mobile presentation starter
- [ ] Redis caching infrastructure adapters
- [ ] Multi-tenant domain partitioning
- [ ] Automated domain layer boundary linter rules

---

### Version 3.0 — CQRS & Event-Driven Architecture (Planned)
- [ ] Command Query Responsibility Segregation (CQRS) handler pattern
- [ ] Outbox pattern for reliable domain event publishing
- [ ] RabbitMQ / Kafka event bus infrastructure adapters
- [ ] Read-model projections for high-performance reporting

---

### Version 4.0 — Microservices & Cloud-Native Scaling (Future)
- [ ] Domain extraction tooling (Modular Monolith → Independent Microservices)
- [ ] gRPC inter-service transport adapters
- [ ] API Gateway configuration & service mesh integration
- [ ] Kubernetes helm charts & GitOps deployment specs
