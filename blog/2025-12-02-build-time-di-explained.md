---
slug: build-time-dependency-injection-explained
title: "Build-Time Dependency Injection Explained"
description: "Learn how Preonus generates dependency injection graphs at compile time, eliminating runtime reflection and proxies to deliver instant startup and minimal memory footprint."
authors: [vinit]
tags: [preonus, java, dependency-injection, build-time, aot]
keywords: [build-time di, dependency injection, preonus, java, aot, compile-time, performance, internals, reflection]
---

# Build-Time Dependency Injection Explained

Most Java frameworks use **runtime DI**, where objects are created and wired when the application starts.  
This works — but it's slow, unpredictable, and memory-heavy.

Preonus takes a different approach:

> **All dependency injection is generated at compile time.**

No reflection.  
No proxies.  
No classpath scanning.

<!-- truncate -->

---

## Why Build-Time DI?

Build-time DI solves three major problems:

### **Slow Startup**
Runtime DI frameworks scan the classpath and perform reflection when the app boots.

Preonus eliminates this entirely.

### **Hidden Runtime Errors**
Many DI issues (circular dependencies, missing beans) are discovered only when you run the app.

Preonus validates the entire DI graph *at compile time*.

### **Large Memory Footprint**
Reflection metadata, runtime registries, proxies — all reduce performance.

Preonus generates **pure Java code** instead.

---

## How Preonus Generates the DI Graph

During compilation, the Preonus processor:

1. Scans your source code
2. Builds an internal DI model
3. Sorts beans with a topological algorithm
4. Generates:
    - Constructor injection code
    - Method injection code
    - Singleton registries
    - Route metadata
    - A full `PreonusMain` bootstrap class

Everything is resolved before your application even runs.

---

## Example Generated Code (Simplified)

```java
public final class UserService$$PreonusBean {
    private final UserRepository repo;

    public UserService$$PreonusBean(UserRepository repo) {
        this.repo = repo;
    }

    public UserService get() {
        return new UserService(repo);
    }
}
```
