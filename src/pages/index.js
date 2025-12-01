import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// Import all homepage components
import {
    HeroSection,
    CTACards,
    ComparisonSection,
    KeyFeatures,
    SuccessStories
} from '@site/src/components/Homepage';

/**
 * Main homepage component
 * Composed of modular sections for maintainability
 */
export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title} - Build-time Java Framework`}
            description="Build-time Java framework for full-stack applications with zero configuration.  No main method required, instant startup, minimal memory footprint."
        >
            {/* Hero Section - No code blocks, clear value proposition */}
            <HeroSection />

            {/* Three CTA Cards - Docs, Guides, Launch */}
            <CTACards />

            {/* Comparison - Korus way vs Old way */}
            <ComparisonSection />

            {/* Key Features - Six feature cards */}
            <KeyFeatures />

            {/* Success Stories - Three use case tiles */}
            <SuccessStories />
        </Layout>
    );
}