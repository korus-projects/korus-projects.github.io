// docusaurus.config.js (ESM)
import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Korus Framework',
  tagline: 'Modern Java framework for full-stack development with zero configuration',
  favicon: 'img/logo1.png',

  // Deployment
  url: 'https://korus-projects.github.io',
  baseUrl: '/',

  organizationName: 'korus-projects',
  projectName: 'korus-projects.github.io',

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
          editUrl: 'https://github.com/korus-projects/korus-projects.github.io/tree/main/',
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },

        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/korus-projects/korus-projects.github.io/tree/main/',
          authorsMapPath: 'authors.yml',
          postsPerPage: 5,
          sortPosts: 'descending',
          readingTime: ({ content, defaultReadingTime }) =>
              defaultReadingTime({ content, wordsPerMinute: 250 }),
          // feedOptions: { type: ['rss', 'atom'] },
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
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },

      },
    ],
  ],

  plugins: [
    // Progressive Web App for offline/installable UX
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
    // Client redirects for future URL changes
    ['@docusaurus/plugin-client-redirects', {}],
    // Optimized responsive images for better performance
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 75,
        sizes: [320, 640, 960, 1200, 1600, 2000],
        disableInDev: true,
      },
    ],
    // plugin-sitemap is already included via preset-classic; no explicit entry needed
  ],

  themeConfig: {
    image: 'img/logo.png',

    // SEO metadata and social tags
    metadata: [
      // Basic SEO
      { name: 'keywords', content: 'Korus, Korus Framework, Java framework, Dependency Injection, Build-time DI, AOT Java, Undertow, Micronaut alternative, Quarkus alternative, Spring Boot alternative, Fast Java framework, Java compiler plugins, Annotation Processing, Jandex, Java startup time' },
      { name: 'description', content: 'Korus Framework — Ultra-fast Java framework with build-time dependency injection, zero reflection, pre-generated DI graph, and sub-200ms startup time.' },
      { name: 'author', content: 'Vinit Shinde' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph (Facebook, Discord, LinkedIn)
      { property: 'og:title', content: 'Korus Framework — Ultra-Fast Java Build-Time DI' },
      { property: 'og:description', content: 'Zero reflection • Build-time dependency injection • Undertow runtime • 120–250ms startup • Modern Java framework for the future.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/img/korus-social-card.png' },
      { property: 'og:url', content: 'https://korus-projects.github.io' },

      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Korus Framework — Ultra-Fast Java Build-Time DI' },
      { name: 'twitter:description', content: 'A next-generation Java framework powered by build-time DI, Jandex indexing and zero reflection.' },
      { name: 'twitter:image', content: '/img/korus-social-card.png' },
      { name: 'twitter:creator', content: '@korus_framework' },

      // Mobile Web App
      { name: 'theme-color', content: '#0d1117' },
      { name: 'mobile-web-app-capable', content: 'yes' },

      // Performance & Caching
      { httpEquiv: 'Cache-Control', content: 'public, max-age=31536000, immutable' },

      // AI Crawlers
      { name: 'ai-content', content: 'This site documents Korus Framework — a Java build-time DI engine.' },
      { name: 'search-engine', content: 'AI-enabled' }
    ],


    // Announcement bar
    announcementBar: {
      id: 'korus_announcement_v1',
      content: '⭐️ Korus Framework is now live! Join the community on GitHub 🚀',
      isCloseable: true,
    },

    navbar: {
      title: 'Korus',
      hideOnScroll: true,
      logo: {
        alt: 'Korus Logo',
        src: 'img/logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {href: 'https://github.com/korus-projects', label: 'GitHub', position: 'right'},
        {href: 'https://www.linkedin.com/company/korus-framework/', label: 'LinkedIn', position: 'right'},
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
            {label: 'API Reference', href: 'https://github.com/korus-projects'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/korus-projects'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/company/korus-framework/'},
            {label: 'Discussions', href: 'https://github.com/korus-projects/korus-projects.github.io/discussions'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'Roadmap', href: 'https://github.com/korus-projects/korus-projects.github.io/milestones'},
            {label: 'Contributing', href: 'https://github.com/korus-projects/korus-projects.github.io/blob/main/CONTRIBUTING.md'},
            {label: 'Issues', href: 'https://github.com/korus-projects/korus-projects.github.io/issues'},
          ],
        },
      ],
      copyright: `
        <div style="margin-top: 2px;">
          <p style="margin-bottom: 2px;">Copyright © ${new Date().getFullYear()} Korus Framework. All rights reserved.</p>
          <p style="font-size: 0.85rem; opacity: 0.8;">Built with ❤️ using Docusaurus</p>
        </div>
      `,
    },

    // Docs UX tweaks (hideable/auto-collapsing sidebar)
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // Search (Algolia DocSearch)
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || 'YOUR_APP_ID',
      apiKey: process.env.ALGOLIA_API_KEY || 'YOUR_SEARCH_API_KEY',
      indexName: process.env.ALGOLIA_INDEX_NAME || 'YOUR_INDEX_NAME',
      contextualSearch: true,
      searchPagePath: 'search',
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
