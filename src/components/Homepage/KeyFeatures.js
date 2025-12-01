import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import FeatureCard from '../common/FeatureCard';
import { KEY_FEATURES } from './constants';

/**
 * Key features section with six feature cards
 */
export default function KeyFeatures() {
    return (
        <SectionWrapper
            id="features"
            title="Key features"
            subtitle="Everything you need to build modern Java applications"
            className="key-features-section"
            dark
        >
            <div className="features-grid">
                {KEY_FEATURES.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        variant="default"
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}