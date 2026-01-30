// docusaurus.config.js (ESM)
import {themes as prismThemes} from 'prism-react-renderer';
const lastUpdated = new Date().toISOString();

const config = {
  title: 'Preonus Framework',
  tagline: 'Modern Java framework for full-stack development with zero configuration',
  favicon: 'img/logo1.png',

  // Deployment
  url: 'https://preonus-projects.github.io',
  baseUrl: '/',

  organizationName: 'preonus-projects',
  projectName: 'preonus-projects.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable extra themes/features
  themes: [
    '@docusaurus/theme-mermaid',        // diagrams
    '@docusaurus/theme-live-codeblock', // live playgrounds
  ],

  // Markdown + hooks
  markdown: {
    mermaid: true,
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/preonus-projects/preonus-projects.github.io/tree/main/',
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          docItemComponent: '@theme/DocItem',
          docTagDocListComponent: '@theme/DocTagDocListPage',
          docTagsListComponent: '@theme/DocTagsListPage',
          docCategoryGeneratedIndexComponent: '@theme/DocCategoryGeneratedIndexPage',
          path: 'docs',
        },

        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/preonus-projects/preonus-projects.github.io/tree/main/',
          authorsMapPath: 'authors.yml',
          postsPerPage: 5,
          routeBasePath: 'blog',
          path: 'blog',
          sortPosts: 'descending',

          blogTitle: 'Preonus Framework Blog',
          blogDescription: 'Build-time DI, performance insights, and framework updates',
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 10,

          readingTime: ({content, frontMatter, defaultReadingTime}) => {
            return frontMatter.hide_reading_time
                ? undefined
                : defaultReadingTime({content, options: {wordsPerMinute: 200}});
          },

          feedOptions: {
            type: ['rss', 'atom', 'json'],
            title: 'Preonus Framework Blog',
            description: 'Java framework with build-time dependency injection - Latest updates, tutorials, and insights',
            copyright: `Copyright © ${new Date().getFullYear()} Preonus Framework. All rights reserved.`,
            language: 'en',
            limit: 20,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 20),
                ...rest,
              });
            },
          },

          truncateMarker: /<!--\s*truncate\s*-->/,

          include: ['**/*.{md,mdx}'],

        },


        theme: {
          customCss: './src/css/custom.css',
        },

        gtag: {
          trackingID: process.env.GTAG_ID || 'G-XBMXMW86X8',
          anonymizeIP: true,
        },

        sitemap: {
          lastmod: 'date',
          changefreq: 'daily',
          priority: null,
          ignorePatterns: ['/tags/**', '/blog/archive', '/blog/authors'],
          filename: 'sitemap.xml',

          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);

            return items.map((item) => {
              if (item.url === 'https://preonus-projects.github.io/') {
                return {...item, priority: 1.0, changefreq: 'daily'};
              }
              if (item.url.includes('/docs/')) {
                return {...item, priority: 0.8, changefreq: 'daily'};
              }
              if (item.url.includes('/blog/') && !item.url.includes('/tags/')) {
                return {...item, priority: 0.7, changefreq: 'weekly'};
              }
              return item;
            });
          },
        },
      },
    ],
  ],

  plugins: [
    // PWA
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {tagName: 'link', rel: 'icon', href: '/img/logo.png'},
          {tagName: 'link', rel: 'manifest', href: '/manifest.json'},
          {tagName: 'meta', name: 'theme-color', content: '#0d1117'},
        ],
      },
    ],

    // Redirects
    ['@docusaurus/plugin-client-redirects', {}],

    // Images
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 75,
        sizes: [320, 640, 960, 1200, 1600, 2000],
        disableInDev: true,
      },
    ],

    // Local Search
    [require.resolve("@easyops-cn/docusaurus-search-local"), {
      hashed: true,
      language: ["en"],
      explicitSearchResultPath: true,
      docsRouteBasePath: '/docs',
      blogRouteBasePath: '/blog',
    }],

    // Vercel Analytics
    // '@docusaurus/plugin-vercel-analytics',


    'docusaurus-plugin-sass',
  ],


  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'Gygy4FgsbWRDVK9dZfXN-hQqp1iI2I3w56hFCS6Ko1E',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'sitemap',
        type: 'application/xml',
        href: '/sitemap.xml',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://github.com/Vin-it-9/#identity",
          "name": "Vinit Shinde",
          "alternateName": "Vineet Shinde",
          "url": "https://github.com/Vin-it-9",
          "image": "https://vin-it-9.github.io/portfolio/img/profile.jpg",
          "jobTitle": "Framework Architect",
          "description": "Software Engineer specializing in Java Development, Build-time Dependency Injection, and Enterprise Java Solutions. Creator of Preonus Framework.",
          "worksFor": {
            "@type": "Organization",
            "name": "Preonus Projects",
            "url": "https://preonus-projects.github.io",
            "logo": "https://preonus-projects.github.io/img/logo.png"
          },
          "sameAs": [
            "https://github.com/preonus-projects",
            "https://github.com/preonus-projects/preonus-projects.github.io",
            "https://www.linkedin.com/company/preonus-framework/",
            "https://github.com/Vin-it-9",
            "https://portfolio-vin-it-9s-projects.vercel.app/",
            "https://vin-it-9.github.io/portfolio/",
            "https://linktr.ee/vineetshinde24",
            "https://linktr.ee/vinit_projects"
          ],
          "knowsAbout": [
            "Java Framework Development",
            "Build-time Dependency Injection",
            "Ahead-of-Time Compilation",
            "Enterprise Java",
            "Annotation Processing",
            "Performance Optimization",
            "Java Virtual Machine",
            "Microservices Architecture",
            "RESTful API Development",
            "Software Architecture Design",
            "Preonus Framework",
            "Undertow Web Server",
            "Jandex Indexing",
            "Maven Build Tools",
            "Spring Framework",
            "Micronaut Framework",
            "Quarkus Framework"
          ],
          "award": [
            "Creator of Preonus Framework - Modern Java Build-time DI Framework"
          ],
          "nationality": "IN",
          "disambiguatingDescription": "Software engineer and framework architect who created the Preonus Framework, a modern Java framework with build-time dependency injection and zero reflection."
        },
        // SoftwareApplication Object - Preonus Framework
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Preonus Framework",
          "@id": "https://preonus-projects.github.io/#software",
          "alternateName": ["Preonus", "Preonus Java Framework", "Preonus JVM Framework", "Preonus Framework", "Preonus-projects"],
          "description": "Modern Java framework with build-time dependency injection, zero reflection, and sub-200ms startup. Micronaut/Quarkus alternative with AOT compilation, Undertow web server, and Jandex-based component scanning.",
          "abstract": "Preonus is a next-generation Java framework that performs dependency injection at compile-time rather than runtime, eliminating reflection overhead and achieving ultra-fast startup times under 200ms.",
          "softwareVersion": "1.0.0",
          "datePublished": "2025-12-01",
          "dateModified": new Date().toISOString().split('T')[0],
          "author": {
            "@type": "Person",
            "@id": "https://github.com/Vin-it-9/#identity",
            "name": "Vinit Shinde",
            "url": "https://github.com/Vin-it-9"
          },
          "creator": {
            "@type": "Person",
            "@id": "https://github.com/Vin-it-9/#identity",
            "name": "Vinit Shinde",
            "url": "https://github.com/Vin-it-9"
          },
          "contributor": [
            {
              "@type": "Person",
              "@id": "https://github.com/Vin-it-9/#identity",
              "name": "Vinit Shinde",
              "url": "https://github.com/Vin-it-9"
            }
          ],
          "publisher": {
            "@type": "Organization",
            "name": "Preonus Projects",
            "url": "https://preonus-projects.github.io",
            "logo": {
              "@type": "ImageObject",
              "url": "https://preonus-projects.github.io/img/logo.png"
            },
            "sameAs": [
              "https://github.com/preonus-projects",
              "https://www.linkedin.com/company/preonus-framework/"
            ]
          },
          "about": [
            {
              "@type": "Thing",
              "name": "Build-time Dependency Injection",
              "description": "Compile-time resolution of dependencies without runtime reflection"
            },
            {
              "@type": "Thing",
              "name": "Ahead-of-Time Compilation",
              "description": "AOT compilation for faster startup and reduced memory footprint"
            },
            {
              "@type": "Thing",
              "name": "Java Framework",
              "description": "Enterprise-grade framework for building Java applications"
            }
          ],
          "audience": {
            "@type": "Audience",
            "audienceType": [
              "Java Developers",
              "Software Engineers",
              "Backend Developers",
              "Enterprise Developers",
              "Microservices Architects",
              "Full-stack Developers"
            ]
          },

          "sameAs": [
            "https://github.com/preonus-projects",
            "https://github.com/preonus-projects/preonus-projects.github.io",
            "https://www.linkedin.com/company/preonus-framework/",
            "https://github.com/Vin-it-9",
            "https://portfolio-vin-it-9s-projects.vercel.app/",
            "https://vin-it-9.github.io/portfolio/",
            "https://linktr.ee/vineetshinde24",
            "https://linktr.ee/vinit_projects"
          ],
          "url": "https://preonus-projects.github.io",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "url": "https://preonus-projects.github.io"
          },
          "applicationCategory": "DeveloperApplication",
          "applicationSubCategory": "Dependency Injection Framework",
          "operatingSystem": "Java 25+",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "releaseNotes": "https://preonus-projects.github.io/blog",
          "isFamilyFriendly": true,
          "image": "https://preonus-projects.github.io/img/logo1.png",
          "screenshot": "https://preonus-projects.github.io/img/logo1.png",
          "license": "https://opensource.org/licenses/Apache-2.0",
          "codeRepository": "https://github.com/preonus-projects",
          "programmingLanguage": {
            "@type": "ComputerLanguage",
            "name": "Java",
            "url": "https://www.java.com"
          },
          "runtimePlatform": "JVM (Java Virtual Machine)",
          "keywords": [
            "Preonus",
            "Preonus Framework",
            "Preonus Java Framework",
            "Preonus JVM Framework",
            "Java Framework",
            "Build-time Dependency Injection",
            "Build-time DI",
            "Compile-time DI",
            "AOT Compilation",
            "Ahead-of-Time Compilation",
            "Zero Reflection Java",
            "No Reflection Framework",
            "Fast Startup Java",
            "Sub-200ms Startup",
            "Undertow Web Server",
            "Jandex Indexing",
            "Jandex Component Scanning",
            "Enterprise Java Framework",
            "Microservices Framework",
            "Java Microservices",
            "Micronaut Alternative",
            "Quarkus Alternative",
            "Spring Alternative",
            "Modern Java Framework",
            "Next-Generation Java",
            "Java Annotation Processing",
            "Java Compiler Plugin",
            "Dependency Injection Framework",
            "Lightweight Java Framework",
            "High-Performance Java",
            "RESTful API Framework",
            "Web Framework Java",
            "Backend Framework Java",
            "Java 25 Framework",
            "Maven Plugin Java",
            "Full-stack Java Framework"
          ],
          "featureList": [
            "Build-time Dependency Injection",
            "Zero Runtime Reflection",
            "Sub-200ms Startup Time",
            "Undertow Web Server Integration",
            "Jandex-based Component Scanning",
            "AOT (Ahead-of-Time) Compilation",
            "Annotation-driven Configuration",
            "REST API Development",
            "Enterprise-grade Performance"
          ],
          "downloadUrl": "https://github.com/preonus-projects/preonus-projects.github.io/releases",
          "installUrl": "https://preonus-projects.github.io/docs/intro",
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Java Developer Community"
              },
              "datePublished": "2025-12-01",
              "reviewBody": "Preonus Framework delivers exceptional build-time dependency injection with zero reflection overhead. The sub-200ms startup time is impressive for enterprise Java applications.",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              }
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "ratingCount": "1",
            "bestRating": "5",
            "worstRating": "1"
          },
          "inLanguage": "en-US",
          "availableLanguage": [
            "en-US",
            "en-GB",
            "en-IN"
          ],
          "supportedLocales": [
            "en-US",
            "en-GB",
            "en-IN"
          ],
          "softwareRequirements": "Java 25 or higher, Maven 3.6+",
          "softwareHelp": {
            "@type": "CreativeWork",
            "url": "https://preonus-projects.github.io/docs"
          },
          "maintainer": {
            "@type": "Person",
            "@id": "https://github.com/Vin-it-9/#identity",
            "name": "Vinit Shinde",
            "url": "https://github.com/Vin-it-9"
          },
          "isAccessibleForFree": true,
          "copyrightYear": 2025,
          "copyrightHolder": {
            "@type": "Person",
            "@id": "https://github.com/Vin-it-9/#identity",
            "name": "Vinit Shinde"
          },
          "availableOnDevice": "Any device with JVM",
          "memoryRequirements": "Minimum 512MB RAM",
          "storageRequirements": "Minimum 50MB disk space",
          "processorRequirements": "Any modern CPU with JVM support"
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://preonus-projects.github.io"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Documentation",
              "item": "https://preonus-projects.github.io/docs"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Blog",
              "item": "https://preonus-projects.github.io/blog"
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://preonus-projects.github.io/#website",
          "url": "https://preonus-projects.github.io",
          "name": "Preonus Framework",
          "publisher": {
            "@id": "https://preonus-projects.github.io/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://preonus-projects.github.io/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://preonus-projects.github.io/#organization",
          "name": "Preonus Framework",
          "url": "https://preonus-projects.github.io",
          "logo": "https://preonus-projects.github.io/img/logo.png",
          "foundingDate": "2025",
          "founder": {
            "@type": "Person",
            "@id": "https://github.com/Vin-it-9/#identity"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Technical Support",
            "url": "https://github.com/preonus-projects/preonus-projects.github.io/issues"
          },
          "sameAs": [
            "https://github.com/preonus-projects",
            "https://www.linkedin.com/company/preonus-framework/"
          ]
        }
      ])
    }

  ],

  themeConfig: {
    image: 'img/logo.png',

    // SEO metadata and social tags
    metadata: [
      // Basic SEO
      { name: 'keywords', content: 'Preonus, Preonus Framework, Preonus Java Framework, Preonus JVM Framework, Java framework, Dependency Injection, Build-time DI, Compile-time DI, AOT Java, Ahead-of-Time Compilation, Zero Reflection, No Reflection Framework, Undertow, Undertow Web Server, Jandex, Jandex Indexing, Micronaut alternative, Quarkus alternative, Spring Boot alternative, Spring Alternative, Fast Java framework, Sub-200ms startup, Ultra-fast startup, Java compiler plugins, Annotation Processing, Java Annotation Processing, Enterprise Java, Enterprise Java Framework, Microservices Framework, Java Microservices, RESTful API Framework, Backend Framework, Modern Java Framework, Next-Generation Java, Lightweight Java Framework, High-Performance Java, Java 25, Java 25 Framework, Maven Plugin, Full-stack Java' },
      { name: 'description', content: 'Preonus Framework — Ultra-fast Java framework with build-time dependency injection, zero reflection, pre-generated DI graph, and sub-200ms startup time. Modern alternative to Spring, Micronaut, and Quarkus with AOT compilation and Undertow runtime.' },
      { name: 'author', content: 'Vinit Shinde' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'copyright', content: 'Vinit Shinde' },
      { name: 'owner', content: 'Vinit Shinde' },
      { name: 'creator', content: 'Vinit Shinde' },

      // Canonical & Language
      { name: 'canonical', content: 'https://preonus-projects.github.io/' },
      { rel: 'canonical', href: 'https://preonus-projects.github.io/' },

      // Language alternatives (add more as you translate)
      { rel: 'alternate', hreflang: 'en', href: 'https://preonus-projects.github.io/' },
      { rel: 'alternate', hreflang: 'x-default', href: 'https://preonus-projects.github.io/' },

      // Open Graph (Facebook, Discord, LinkedIn)
      { property: 'og:title', content: 'Preonus Framework — Ultra-Fast Java Build-Time DI' },
      { property: 'og:description', content: 'Zero reflection • Build-time dependency injection • Undertow runtime • 120–250ms startup • Modern Java framework for the future. Alternative to Spring, Micronaut, and Quarkus.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://preonus-projects.github.io/img/preonus-social-card.png' },
      { property: 'og:image:alt', content: 'Preonus Framework — Ultra-fast Java build-time DI framework' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:url', content: 'https://preonus-projects.github.io' },
      { property: 'og:site_name', content: 'Preonus Framework' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:updated_time', content: lastUpdated },
      { property: 'og:see_also', content: 'https://github.com/preonus-projects' },
      { property: 'og:see_also', content: 'https://www.linkedin.com/company/preonus-framework/' },
      { property: 'article:author', content: 'Vinit Shinde' },
      { property: 'article:section', content: 'Technology' },
      { property: 'article:tag', content: 'Java Framework' },
      { property: 'linkedin:owner', content: 'company/preonus-framework' },


      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Preonus Build-Time DI Java Framework' },
      { name: 'twitter:description', content: 'A next-generation Java framework powered by build-time DI, Jandex indexing and zero reflection. Sub-200ms startup for enterprise applications.' },
      { name: 'twitter:image', content: 'https://preonus-projects.github.io/img/preonus-social-card.png' },
      { name: 'twitter:creator', content: '@Vinit_Shinde_' },
      { name: 'twitter:site', content: '@Vinit_Shinde_' },
      { name: 'twitter:domain', content: 'preonus-projects.github.io' },
      { name: 'twitter:label1', content: 'Framework Type' },
      { name: 'twitter:data1', content: 'Build-time DI' },
      { name: 'twitter:label2', content: 'Startup Time' },
      { name: 'twitter:data2', content: 'Sub-200ms' },

      // Mobile Web App
      { name: 'theme-color', content: '#0d1117' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Preonus Framework' },

      // Performance & Caching
      { httpEquiv: 'Cache-Control', content: 'public, max-age=31536000, immutable' },
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' },
      { rel: 'preconnect', href: 'https://github.com' },
      { rel: 'dns-prefetch', href: 'https://github.com' },

      // AI Crawlers & Search Engines
      { name: 'ai-content', content: 'This site documents Preonus Framework — a Java build-time DI engine with zero reflection, AOT compilation, and sub-200ms startup time.' },
      { name: 'search-engine', content: 'AI-enabled' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'target', content: 'all' },
      { name: 'audience', content: 'Java Developers, Software Engineers, Backend Developers, Full Stack Developers, Microservices Engineers, Cloud Engineers, DevOps Engineers, Solution Architects, Software Architects, Tech Leads, API Developers, Platform Engineers, Distributed Systems Engineers, Spring Boot Developers, Quarkus Developers, Micronaut Developers, System Designers, Enterprise Application Developers, Scalability Engineers, Performance Engineers' },
      { name: 'classification',content: 'Java Framework, Dependency Injection, Software Development, Microservices Architecture, Inversion of Control, Backend Engineering, REST API Development, Cloud-Native Applications, JVM Technologies, Enterprise Applications, Modular Architecture, Reactive Programming, Application Performance, Build Tools, Design Patterns, API Security, Framework Design, Open-Source Development'},

      // Ownership / verification
      { name: 'google-site-verification', content: 'Gygy4FgsbWRDVK9dZfXN-hQqp1iI2I3w56hFCS6Ko1E' },
      { name: 'msvalidate.01', content: '8C5366C6C194F663DAFC654956C69E18' },

      // Geographic targeting
      { name: 'geo.region', content: 'US' },
      { name: 'geo.placename', content: 'Global' },

      { name: 'app:category', content: 'Developer Tools' },
      { property: 'product:category', content: 'Software Development Tools' },

      // Schema.org hints
      { name: 'application-name', content: 'Preonus Framework Documentation' },
      { name: 'category', content: 'Software Development, Backend Development, Java Development, Microservices, Cloud Computing, Framework Engineering, API Development, System Design, Distributed Systems, DevOps, Application Architecture, Enterprise Software, JVM Ecosystem, Full Stack Development, RESTful Services, Event-Driven Architecture, CI/CD, Software Engineering Practices, Platform Engineering, Open Source Software, High-Performance Computing, Scalability Engineering, Security Engineering, Application Deployment'},
    ],


    // Announcement bar
    announcementBar: {
      id: 'preonus_announcement_v1',
      content:
          '⭐️ Preonus Framework is now live! ' +
          'Join the community on <a href="https://github.com/preonus-projects" target="_blank" rel="noopener noreferrer">GitHub</a> 🚀',
      isCloseable: true,
    },

    navbar: {
      title: 'Preonus',
      hideOnScroll: true,
      logo: {
        alt: 'Preonus Logo',
        src: 'img/logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {href: 'https://github.com/preonus-projects', label: 'GitHub', position: 'right'},
        {href: 'https://www.linkedin.com/company/preonus-framework/', label: 'LinkedIn', position: 'right'},
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/intro'},
            {label: 'Tutorial', to: '/docs/intro'},
            {label: 'API Reference', href: 'https://github.com/preonus-projects'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/preonus-projects'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/company/preonus-framework/'},
            {label: 'Discussions', href: 'https://github.com/preonus-projects/preonus-projects.github.io/discussions'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'Roadmap', href: 'https://github.com/preonus-projects/preonus-projects.github.io/milestones'},
            {label: 'Contributing', href: 'https://github.com/preonus-projects/preonus-projects.github.io/blob/main/CONTRIBUTING.md'},
            {label: 'Issues', href: 'https://github.com/preonus-projects/preonus-projects.github.io/issues'},
          ],
        },
      ],
    },

    // Docs UX tweaks (hideable/auto-collapsing sidebar)
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // Mermaid theme for dark/light
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },

    // Syntax highlighting
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['java', 'groovy', 'properties', 'kotlin', 'bash', 'json', 'yaml', 'toml'],
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },

};

export default config;