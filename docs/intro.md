---
sidebar_position: 1
---

# Introduction to Korus Framework

Korus Framework is a **Build-Time Dependency Injection (BT-DI)** framework designed for **ultra-fast Java applications**.  
It removes reflection, classpath scanning, and runtime dependency wiring entirely — delivering performance comparable to Quarkus and Micronaut while preserving a clean, Spring-like developer experience.

Created and maintained by **Vinit Shinde** (Aug 2025 – Present).  
GitHub Repository: **[korus-projects](http://github.com/korus-projects/)**

---

## What is Korus?

Korus is a modern Java framework built around **annotation processing**, **compile-time bean creation**, and a **lightweight Undertow runtime**.  
All routing, dependency wiring, configuration metadata, and validation logic is generated **during compilation**, not at runtime.

This enables:

- **Zero Reflection**
- **Zero Classpath Scanning**
- **Zero Dynamic Proxies**
- **Instant Startup Times**
- **Low Memory Footprint**
- **Strict Compile-time Safety**

Korus aims to provide the ergonomics of Spring Boot with the performance profile of Quarkus and Micronaut.

---

## Architecture Overview

Korus uses a **two-module architecture**:

### **1. Korus Processor (Build-Time Engine)**
Responsible for:
- Annotation scanning & model building
- Generating bean wiring at compile time
- Creating DI registries
- Performing circular dependency detection
- Generating route metadata
- Jandex-based indexing for fast lookups
- Auto-generating a `KorusMain` boot class
- Eliminating the need for a user-defined `main()` method

### **2. Korus Framework (Runtime Engine)**
A lightweight Undertow-powered runtime that:
- Loads pre-generated classes instantly
- Does not perform any reflection
- Does not scan classpath packages
- Uses static indexes + generated registries
- Boots in ~0.12s – 0.25s

---


## Build-Time Dependency Injection

Korus generates concrete bean classes and wiring logic **during compilation**:

- Direct constructor/method injection written into generated Java files
- Deterministic topological sort for bean initialization
- Compile-time detection of circular dependencies
- Complete removal of runtime scanning and proxies

This gives Korus its signature performance benefits.

---

## Performance Comparison

Below is an approximate comparison of startup times and memory usage:

| Framework | DI Style | Startup Time | Memory |
|----------|----------|--------------|--------|
| Spring Boot | Runtime | 1.5s – 2.5s | 120–250MB |
| Quarkus | Build-Time | 0.8s – 1.5s | 60–90MB |
| Micronaut | Build-Time | 0.6s – 1.2s | 50–150MB |
| **Korus** | **Build-Time** | **0.12s – 0.25s** | **~50MB** |

Korus competes in the same category as Quarkus/Micronaut —  
but focuses on having a **cleaner compilation model** and a **simpler runtime**.

---

## Roadmap & Future Improvements

Planned enhancements:

- **Multi-Module Architecture** (Core, Web, Data)
- Better separation of runtime components
- Source-level architecture improvements inspired by Micronaut
- More flexible configuration system
- First-class modularity support

---

## Next Steps

Now that you understand what Korus is, you can explore:

- How Korus boots with build-time compilation
- How dependency injection works at compile time
- How routes, beans, and registries are generated
- How to create your first Korus application

Check out the documentation to learn more about Korus Framework.

