---
title: "System Design: How We Built a Real-Time Analytics Platform at IBM"
description: "The architecture behind a cloud-native analytics platform processing millions of events daily across AWS, Azure, and GCP — with Kafka, Kubernetes, and custom ML models."
pubDate: 2025-08-10
readers: 8700
tags: ["system-design", "kafka", "kubernetes", "ibm"]
---

At IBM Labs, I led the engineering of a customer analytics platform that processes **millions of events per day** across three cloud providers. This is the system design behind it.

## Requirements

- **Ingest** 10M+ user interaction events daily
- **Real-time dashboards** with < 5 second latency
- **ML predictions** — churn probability, next-best-action, anomaly detection
- **Multi-cloud** — must run on AWS, Azure, and GCP simultaneously
- **99.9% uptime** — financial services clients don't tolerate downtime

## High-Level Architecture

```
Clients → API Gateway → Kafka → Stream Processor → TimescaleDB
                                      ↓
                              ML Inference Service → Prediction Store
                                      ↓
                              Dashboard API → React Frontend
```

## Event Ingestion

We chose **Apache Kafka** as the backbone. Every user interaction (page view, click, form submit, error) becomes an event:

```json
{
  "event_id": "uuid-v4",
  "type": "page_view",
  "user_id": "u-123",
  "timestamp": "2025-08-10T14:30:00Z",
  "properties": {
    "page": "/dashboard",
    "duration_ms": 4500,
    "referrer": "/login"
  }
}
```

Kafka handles **50K events/second** at peak with 3-day retention. We partition by `user_id` for ordering guarantees within a user's session.

## Stream Processing

A custom stream processor (built with FastAPI + asyncio) consumes from Kafka and:

1. **Enriches** events with user metadata from CosmosDB
2. **Aggregates** into 1-minute, 5-minute, and 1-hour windows
3. **Detects anomalies** using statistical models (Z-score on rolling averages)
4. **Writes** to TimescaleDB for time-series queries

## ML Pipeline

Three models run in production:

- **Churn prediction** — gradient boosting on 90-day behavioral features
- **Anomaly detection** — isolation forests on traffic patterns
- **Next-best-action** — collaborative filtering for feature recommendations

Models retrain weekly on the latest data. We use **Hugging Face** for embeddings and **TensorFlow Serving** for inference at < 50ms P99.

## Observability Stack

You can't operate what you can't observe:

- **Prometheus + Grafana** for infrastructure metrics
- **OpenTelemetry** for distributed tracing across services
- **ELK Stack** for centralized logging
- **PagerDuty** integration for alerting

We track four golden signals: latency, traffic, errors, and saturation.

## Lessons Learned

1. **Kafka is not a database** — don't use it for long-term storage
2. **Multi-cloud is hard** — abstract cloud-specific APIs behind interfaces
3. **Observability > testing** — in distributed systems, you need both but observability catches what tests miss
4. **Start with batch, graduate to streaming** — prove value with batch processing before investing in real-time

This platform now serves 200+ enterprise clients and processes over **300M events monthly**.
