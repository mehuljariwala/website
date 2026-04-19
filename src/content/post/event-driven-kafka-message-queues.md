---
title: "Event-Driven Architecture with Kafka and Message Queues"
description: "Designing resilient, scalable systems with Kafka, RabbitMQ, and event-driven patterns — producers, consumers, and exactly-once semantics."
pubDate: 2023-11-30
readers: 2900
tags: ["kafka", "architecture", "nodejs", "microservices"]
---

Event-driven architecture decouples services by communicating through events instead of direct calls. It's the backbone of every large-scale system I've worked on.

## Why Event-Driven?

In a synchronous architecture, if the email service is down, your signup flow fails. In an event-driven architecture, you emit a `UserCreated` event — the email service processes it when it's back up.

**Benefits:**
- **Loose coupling** — services don't know about each other
- **Resilience** — failures don't cascade
- **Scalability** — add consumers independently
- **Audit trail** — events create a natural history

## Kafka vs RabbitMQ

### Apache Kafka
Best for: **high-throughput event streaming**

- Messages persist on disk (configurable retention)
- Consumer groups for parallel processing
- Exactly-once semantics (with configuration)
- Ordered within partitions

```javascript
const { Kafka } = require("kafkajs");
const kafka = new Kafka({ brokers: ["localhost:9092"] });

const producer = kafka.producer();
await producer.send({
  topic: "order-events",
  messages: [
    {
      key: orderId,
      value: JSON.stringify({ type: "ORDER_CREATED", data: order }),
    },
  ],
});
```

### RabbitMQ
Best for: **task queues and routing**

- Message acknowledgment and retry
- Flexible routing (direct, topic, fanout)
- Dead letter queues for failed messages
- Simpler operational model

```javascript
const amqp = require("amqplib");
const connection = await amqp.connect("amqp://localhost");
const channel = await connection.createChannel();

await channel.assertQueue("email-queue", { durable: true });
channel.sendToQueue("email-queue", Buffer.from(JSON.stringify(emailData)));
```

### When to Use Which

| Scenario | Choice |
|----------|--------|
| High-throughput event log | Kafka |
| Task/work queue | RabbitMQ |
| Event replay needed | Kafka |
| Complex routing rules | RabbitMQ |
| Stream processing | Kafka |
| Simple pub/sub | Either |

## Event Design

### Event Schema

Every event should have:

```typescript
interface DomainEvent {
  id: string;
  type: string;
  source: string;
  timestamp: string;
  version: number;
  data: Record<string, unknown>;
  metadata: {
    correlationId: string;
    userId?: string;
  };
}
```

### Event Naming
Use past tense — events describe things that **happened**:
- `OrderCreated` (not `CreateOrder`)
- `PaymentProcessed` (not `ProcessPayment`)
- `UserEmailVerified` (not `VerifyEmail`)

## Handling Failures

### Dead Letter Queues
Messages that fail repeatedly go to a DLQ for investigation:

```javascript
channel.assertQueue("email-dlq", { durable: true });
channel.assertQueue("email-queue", {
  durable: true,
  arguments: {
    "x-dead-letter-exchange": "",
    "x-dead-letter-routing-key": "email-dlq",
    "x-message-ttl": 30000,
  },
});
```

### Idempotency
Consumers must handle duplicate messages:
- Use event IDs for deduplication
- Design operations to be idempotent
- Store processed event IDs in a dedup table

## Production Tips

1. **Schema registry** — enforce event schemas (Confluent Schema Registry or custom)
2. **Monitoring** — track consumer lag, throughput, and error rates
3. **Partitioning** — partition by entity ID for ordering guarantees
4. **Backpressure** — don't let producers overwhelm consumers
5. **Testing** — use embedded Kafka/RabbitMQ for integration tests

Event-driven architecture adds complexity upfront but pays for itself in resilience and scalability as your system grows.
