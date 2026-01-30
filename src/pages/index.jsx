import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import {
    HeroSection,
    CTACards,
    ComparisonSection,
    KeyFeatures,
    SuccessStories
} from '@site/src/components/features';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title} - Build-time Java Framework`}
            description="Build-time Java framework for full-stack applications with zero configuration.  No main method required, instant startup, minimal memory footprint."
        >
            {/* Hero Section */}
            <HeroSection />

            {/* Three CTA Cards - Docs, Guides, Launch */}
            <CTACards />

            {/* Comparison - Preonus way vs Old way */}
            <ComparisonSection />

            {/* Key Features - Six feature cards */}
            <KeyFeatures />

            {/* Success Stories - Three use case tiles */}
            <SuccessStories />
        </Layout>
    );
}