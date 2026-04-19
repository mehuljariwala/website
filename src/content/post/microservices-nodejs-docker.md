---
title: "Microservices Architecture with Node.js and Docker"
description: "Lessons from building and deploying microservices at scale — service communication, containerization, and observability patterns."
pubDate: 2024-01-05
readers: 3700
tags: ["nodejs", "docker", "microservices", "devops"]
---

Microservices architecture sounds straightforward in theory. In practice, it introduces complexity that monoliths don't have. Here's what I've learned building microservices at IBM and Publicis Sapient.

## When to Use Microservices

Don't start with microservices. Start with a well-structured monolith. Move to microservices when:

- Different parts of your system need to **scale independently**
- Teams need to **deploy independently**
- You need **different tech stacks** for different domains
- Your monolith is becoming a **deployment bottleneck**

## Service Communication Patterns

### Synchronous (REST/gRPC)
Best for request-response patterns where the caller needs an immediate answer.

```javascript
// Simple REST call between services
const response = await fetch("http://user-service:3001/api/users/123");
const user = await response.json();
```

### Asynchronous (Message Queues)
Best for fire-and-forget operations and event-driven workflows.

```javascript
// Publishing an event to Kafka
await producer.send({
  topic: "order-created",
  messages: [{ value: JSON.stringify(order) }],
});
```

I prefer **async-first** architectures. They're more resilient — if a downstream service is down, messages queue up instead of failing.

## Docker Best Practices

### Multi-stage Builds

Keep your images small:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["node", "server.js"]
```

### Health Checks

Always include health checks:

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000/health || exit 1
```

## Observability

The #1 challenge with microservices is debugging across service boundaries.

**Three pillars:**
1. **Logging** — structured JSON logs with correlation IDs (ELK Stack)
2. **Metrics** — request rate, error rate, latency (Prometheus + Grafana)
3. **Tracing** — distributed tracing across services (OpenTelemetry)

Without all three, debugging production issues becomes a nightmare.

## Key Takeaways

1. **Start simple** — you can always split later, but merging is painful
2. **Async over sync** — message queues make systems more resilient
3. **Observability first** — add logging, metrics, and tracing before going to production
4. **Service mesh** — consider Istio or Linkerd for service-to-service communication at scale
5. **Database per service** — shared databases defeat the purpose of microservices
