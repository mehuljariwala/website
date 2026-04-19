---
title: "Advanced TypeScript Patterns for Enterprise Applications"
description: "Type-safe patterns for building large-scale TypeScript applications — discriminated unions, branded types, and generic constraints."
pubDate: 2024-07-07
readers: 3200
tags: ["typescript", "javascript", "patterns"]
---

TypeScript's type system is remarkably powerful when you go beyond basic annotations. These patterns have helped me build more maintainable codebases at scale.

## Discriminated Unions

The most useful pattern for modeling domain state:

```typescript
type ApiResponse<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

function handleResponse<T>(response: ApiResponse<T>) {
  switch (response.status) {
    case "loading":
      return <Spinner />;
    case "success":
      return <Data data={response.data} />;
    case "error":
      return <Error message={response.error} />;
  }
}
```

TypeScript narrows the type inside each branch — no runtime type checks needed.

## Branded Types

Prevent mixing up primitive types that represent different things:

```typescript
type UserId = string & { __brand: "UserId" };
type OrderId = string & { __brand: "OrderId" };

function createUserId(id: string): UserId {
  return id as UserId;
}

function getUser(id: UserId) { /* ... */ }

const userId = createUserId("abc-123");
const orderId = "def-456" as OrderId;

getUser(userId);   // OK
getUser(orderId);  // Type error!
```

This catches bugs where you accidentally pass an order ID where a user ID is expected.

## Generic Constraints

Write functions that work with any type meeting specific requirements:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type HasId = { id: string };

function updateEntity<T extends HasId>(entities: T[], updated: T): T[] {
  return entities.map((e) => (e.id === updated.id ? updated : e));
}
```

## Template Literal Types

Build type-safe string patterns:

```typescript
type EventName = `on${Capitalize<string>}`;
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiRoute = `/${string}`;
type Endpoint = `${HttpMethod} ${ApiRoute}`;

const route: Endpoint = "GET /api/users"; // OK
```

## Utility Type Patterns

### DeepPartial
```typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
```

### StrictOmit
```typescript
type StrictOmit<T, K extends keyof T> = Omit<T, K>;
```

## Practical Tips

1. **Prefer unions over enums** — they're more flexible and tree-shake better
2. **Use `satisfies`** — validates types without widening: `const config = { ... } satisfies Config`
3. **`as const`** — makes objects and arrays readonly with literal types
4. **Avoid `any`** — use `unknown` when you don't know the type
5. **Type predicates** — write custom type guards for complex narrowing

TypeScript's type system is a tool for encoding business rules. The more rules you encode in types, the fewer bugs make it to production.
