---
title: "Unifying Data from 12 Tools into a Single Dashboard"
description: "Building a real-time data platform that consolidated HubSpot, Salesforce, Stripe, and 9 other tools for a Series B startup."
pubDate: 2024-07-10
readers: 1800
tags: ["data", "full-stack", "case-study"]
---

A Series B MarTech startup had a common problem: their data lived in **12 different tools** — HubSpot, Salesforce, Stripe, Intercom, and more. Nobody had a single source of truth.

## The Problem

Every Monday morning, the leadership team spent 2 hours pulling reports from different tools and trying to reconcile numbers. Marketing said one thing, sales said another, finance had a third version.

## The Solution

I built a unified data platform that:

- **Connects to 12 data sources** via APIs and webhooks
- **Normalizes and deduplicates** data in real-time
- **Powers a single dashboard** with AI-generated insights
- **Alerts on anomalies** using statistical models

## Tech Stack

- **Next.js** for the dashboard frontend
- **Node.js** for API integrations and data pipelines
- **GCP** for infrastructure
- **BigQuery** for the data warehouse
- **dbt** for data transformations

## Results

- **5 hours/week saved** per team member
- MRR increased by **35%** through data-driven decisions
- Leadership has instant access to unified business metrics
- Monday morning report meetings eliminated entirely

The takeaway: most companies don't need a fancy AI solution — they need their existing data connected and accessible in one place.
