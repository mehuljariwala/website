---
title: "Scaling Tesco's Online Grocery to Millions of Users Across 3 Continents"
description: "Inside the engineering challenges of building and scaling Tesco's omnichannel grocery platform for UK, Central Europe, and Asia Pacific."
pubDate: 2024-12-01
readers: 6300
tags: ["case-study", "react", "microservices", "enterprise"]
---

For nearly 3 years at Publicis Sapient, I worked on Tesco's online grocery platform — one of the largest e-commerce operations in the world. Here's what it takes to scale grocery delivery across three continents.

## The Scale

Tesco's online grocery isn't a typical e-commerce site:

- **Millions of active users** across UK, Central Europe (CEU), and Asia Pacific (APAC)
- **50,000+ SKUs** per store, with varying availability by location
- **Real-time inventory** — a customer adding milk to cart needs to see if their local store has it *right now*
- **Delivery slots** that fill up in minutes during peak hours
- **Perishable goods** — you can't ship eggs the same way you ship books

## Architecture Challenges

### Multi-Region Deployment

Each region (UK, CEU, APAC) has different:
- **Payment providers** and currencies
- **Delivery models** (vans in UK, mopeds in Thailand)
- **Regulatory requirements** (GDPR in Europe, different data laws in Asia)
- **Languages** and date/number formats

We solved this with a **shared core + regional adapters** pattern. The React frontend and Node.js BFF (Backend for Frontend) are shared, but region-specific logic lives in separate modules.

### The Thailand Moped Delivery System

One of my favorite projects: building a **lightweight on-demand delivery system** for Thailand using mopeds. Requirements:

- Deliver within **1 hour** of order
- Small basket sizes (< 10 items)
- Real-time rider tracking
- Integration with local payment providers

We built this with **Java + NestJS + Kafka**, using Google Maps API for route optimization and real-time ETA calculation.

### Bing Maps Booking Module

The store selection and delivery slot booking module was one of the highest-traffic components on the site. I built a **high-performance Bing Maps integration** using React, Redux, and Svelte:

- Interactive map with store locations and availability
- Delivery slot picker with real-time capacity
- Postcode-based store matching
- **Thousands of concurrent users** during peak booking hours

### Micro Frontend Architecture

With 20+ teams working on different parts of the platform, we adopted **micro frontends**:

- Each team owns a slice of the page (header, product listing, cart, checkout)
- Independent deployment — one team can ship without blocking others
- Shared design system built with **Webpack Module Federation**
- Performance monitoring with **Splunk, New Relic, and Grafana**

## Hard Lessons

1. **Inventory is the hardest problem** — not search, not payments, not delivery
2. **Localization isn't translation** — it's rebuilding UX for different cultures
3. **Peak traffic is 10x normal** — Christmas week breaks everything that wasn't load-tested
4. **Monitoring > debugging** — with millions of users, you find bugs through dashboards, not console.log

Working at Tesco's scale taught me that the boring problems (inventory sync, slot management, regional compliance) are the ones that actually matter.
