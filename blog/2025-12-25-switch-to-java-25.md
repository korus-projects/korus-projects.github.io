---
slug: switch-to-java-25
title: "Switching Baseline to Java 25"
description: "We are updating our project baseline to Java 25 to leverage the latest JVM innovations and native performance."
authors: [vinit]
tags: [java-25, java, updates]
---

# Update: Switching Baseline to Java 25

To build the fastest dependency injection framework for the modern era, we need tools that match that ambition. Today, we are announcing that our project is moving its minimum requirement to **Java 25**.

While many projects still use Java 17, we found that staying on older versions forced us to use "hacks" and heavy third-party libraries that slowed down the development and performance of the framework.

## Why not stay on Java 17?

Java 17 was a great milestone, but for modern framework development, it lacks the native power available in the latest releases. Sticking to a Java 17 baseline would mean:

* **Heavy Dependencies:** We would be forced to keep using external libraries like ASM or ByteBuddy for bytecode manipulation. Java 25 provides this natively.
* **More Boilerplate:** Java 17 lacks the advanced Pattern Matching and Record features that make our internal code clean and high-performing.
* **Slower Startup:** Java 17 doesn't support the new "Compact Object Headers" or the refined Virtual Thread stability that makes modern applications scale effortlessly.

## What makes Java 25 better for this Framework?

By switching to Java 25, we have unlocked three major "superpowers" that improve every application built with our tools:

### 1. The Native Class-File API
In Java 17, reading or generating a class file required a third-party library. In Java 25, we use the **Standard Class-File API**. This makes our build-time processing smaller, faster, and much more stable across different environments.

### 2. Compact Object Headers
Java 25 introduces **Compact Object Headers**, which reduce the memory footprint of every single object. For a framework that manages thousands of components, this translates to a **significant reduction in heap memory** usage automatically.

### 3. Stable Values
We now leverage the new **Stable Values API**. This tells the JVM that once a dependency is injected, it will *never* change. This allows the JIT compiler to optimize your code as if you used `static final` constants, making your application run at peak hardware speed.

**We are building for the next 10 years of Java, not the last 10.**