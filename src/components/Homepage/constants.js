// All content data for the homepage - makes it easy to update text without touching components

export const HERO_CONTENT = {
    eyebrow: 'Build time framework',
    title: 'Korus Framework',
    tagline: 'Build time Java framework for full stack applications',
    description: `Korus performs all dependency injection, configuration binding, and route registration at compile time — not runtime. No main method, no classpath scanning, no reflection proxies.`,
    version: 'v1.0.0',
    javaVersion: 'Java 17+',
    license: 'MIT License'
};

export const CTA_CARDS = [
    {
        id: 'docs',
        title: 'View the documentation',
        description: 'Comprehensive guides covering every aspect of the Korus Framework, from installation to advanced topics.',
        link: '/docs/intro',
        icon: 'docs'
    },
    {
        id: 'tutorial',
        title: 'Browse the tutorial',
        description: 'Step-by-step tutorials to help you build real applications with Korus quickly and efficiently.',
        link: '/docs/intro',
        icon: 'guides'
    },
    {
        id: 'github',
        title: 'Explore on GitHub',
        description: 'Check out the source code, contribute to the project, and stay updated with the latest releases.',
        link: 'https://github.com/korus-projects',
        icon: 'launch'
    }
];

export const COMPARISON_CONTENT = {
    sectionTitle: 'Reimagine startup time and memory consumption',
    sectionSubtitle: 'See how Korus transforms Java application performance',
    korusWay: {
        title: 'The Korus way',
        points: [
            {
                heading: 'Build-time dependency wiring',
                description: 'All beans are resolved and wired during compilation.  No runtime discovery needed.'
            },
            {
                heading: 'Pre-generated beans & routes',
                description: 'Routes, controllers, and service bindings are generated as bytecode at compile time.'
            },
            {
                heading: 'Low, stable startup',
                description: 'Applications start in milliseconds with consistent, predictable startup times.'
            },
            {
                heading: 'Minimal memory footprint',
                description: 'No reflection metadata, no proxy classes — just the code your application needs.'
            }
        ]
    },
    oldWay: {
        title: 'The old way',
        points: [
            {
                heading: 'Reflection-based IoC',
                description: 'Runtime reflection scans classes, builds dependency graphs, and injects beans dynamically.'
            },
            {
                heading: 'Classpath scanning',
                description: 'Every startup triggers a full scan of the classpath to discover components and configurations.'
            },
            {
                heading: 'Runtime proxies',
                description: 'AOP and transactional behavior require dynamic proxy generation at runtime.'
            },
            {
                heading: 'Scaling issues',
                description: 'Startup time and memory grow linearly with application size, causing cold-start problems.'
            }
        ]
    }
};

export const KEY_FEATURES = [
    {
        id: 'build-time-di',
        title: 'Build-time dependency injection',
        description: 'Dependencies are resolved and injected at compile time, eliminating runtime overhead and enabling instant startup.',
        icon: 'compile'
    },
    {
        id: 'zero-config',
        title: 'Zero-configuration startup',
        description: 'No main class required.  Korus auto-generates the entry point, so you focus purely on business logic.',
        icon: 'zeroConfig'
    },
    {
        id: 'fullstack',
        title: 'Full-stack & microservices ready',
        description: 'Build everything from monoliths to microservices with built-in HTTP server, REST clients, and data access.',
        icon: 'fullstack'
    },
    {
        id: 'familiar-annotations',
        title: 'Familiar Spring-style annotations',
        description: 'Use annotations you already know — @Service, @Repository, @Transactional, @Controller — with zero learning curve.',
        icon: 'annotations'
    },
    {
        id: 'native-friendly',
        title: 'Native-friendly by design',
        description: 'GraalVM-ready out of the box. No reflection means seamless native image compilation without extra configuration.',
        icon: 'native'
    },
    {
        id: 'fast-testing',
        title: 'Fast, focused testing',
        description: 'Small runtime and instant startup mean your tests run in milliseconds, not seconds.',
        icon: 'testing'
    }
];

export const SUCCESS_STORIES = [
    {
        id: 'rest-apis',
        title: 'REST APIs',
        description: 'Build high-performance REST APIs that start instantly and handle thousands of requests per second with minimal memory.',
        useCase: 'API Development',
        icon: 'api'
    },
    {
        id: 'data-backends',
        title: 'Data-intensive backends',
        description: 'Process large datasets efficiently with built-in connection pooling, transaction management, and optimized data access.',
        useCase: 'Backend Services',
        icon: 'database'
    },
    {
        id: 'cloud-native',
        title: 'Cloud-native microservices',
        description: 'Deploy to Kubernetes, AWS Lambda, or any cloud platform with sub-second cold starts and minimal resource consumption.',
        useCase: 'Cloud & Serverless',
        icon: 'cloud'
    }
];

export const NAV_ITEMS = [
    { label: 'Docs', href: '/docs/intro' },
    { label: 'Blog', href: '/blog' },
    { label: 'GitHub', href: 'https://github.com/korus-projects', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/korus-framework', external: true }
];