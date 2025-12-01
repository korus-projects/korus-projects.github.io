---
slug: introducing-korus-framework
title: "Introducing Korus Framework"
description: "A new ultra-fast Java framework powered by build-time dependency injection and zero reflection."
authors: [vinit]
tags: [korus, java, framework, dependency-injection, release]
---

# Introducing Korus Framework
**Build-Time Dependency Injection for Ultra-Fast Java Applications**

Korus Framework is a modern Java framework designed around one core idea:

### **Move everything possible to compile time.**

Reflection, classpath scanning, proxies, and runtime bean creation all slow down traditional Java frameworks. Korus eliminates all of them by generating:

- Dependency wiring
- DI registries
- Routing metadata
- Bootstrapping code

**during compilation**, not at runtime.

The result:

- **120–250 ms startup time**
- **~50 MB memory footprint**
- **Zero reflection**
- **Deterministic, safe DI graph**
- **Lightweight Undertow runtime**

---

## Why I Built Korus

While working with Spring Boot and Micronaut, I noticed a common issue:

> *Even build-time DI frameworks keep some runtime magic.*

Some still rely on reflection, some use proxies, some still scan packages.  
This inspired the architecture of Korus:

- Pure annotation processing
- Pure compile-time registry generation
- No runtime analysis
- No surprises

Korus aims to bring:

- The **developer experience of Spring**
- The **performance of Quarkus/Micronaut**
- And a **clean, minimal runtime**

---

## Architecture Overview

Korus consists of **two independent modules**:

### **1. Korus Processor (Build-Time Engine)**
Responsible for:

- Scanning source code
- Building the DI graph
- Performing Jandex indexing
- Generating wiring and route registries
- Auto-generating `KorusMain`

### **2. Korus Framework (Runtime Engine)**
A lightweight Undertow-based runtime that:

- Loads pre-generated classes instantly
- Does not use reflection
- Does not scan the classpath
- Boots in under **0.25 seconds**

---

## Where We Are Today

- 20,000+ lines of Java code
- Two-module architecture
- Stable build-time DI engine
- Fast Jandex-based lookup
- Hibernate + HikariCP integration

---

## What’s Next?

- Multi-module architecture (Core, Web, Data)
- Korus CLI (“korus new app”)
- Simpler configuration API
- New Data access module
- Build-time validation improvements

---

Korus is now open to the Java community.  
I built it to solve real problems, and I’m excited to see what developers create with it.

👉 GitHub: **https://github.com/korus-projects/**

