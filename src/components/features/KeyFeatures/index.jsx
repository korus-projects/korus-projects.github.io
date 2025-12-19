import React from 'react';
import { SectionWrapper, FeatureCard } from '../../shared';
import { KEY_FEATURES } from '@site/src/data';
import styles from './KeyFeatures.module.css';


export default function KeyFeatures() {
    return (
        <SectionWrapper
            id="features"
            title="Key features"
            subtitle="Everything you need to build modern Java applications"
            className={styles.section}
            dark
        >
            <div className={styles.grid}>
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

