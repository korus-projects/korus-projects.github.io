import React from 'react';
import { SectionWrapper, FeatureCard } from '../../shared';
import { SUCCESS_STORIES } from '@site/src/data';
import styles from './SuccessStories.module.css';


export default function SuccessStories() {
    return (
        <SectionWrapper
            id="success-stories"
            title="Preonus in Action"
            subtitle="See what you can build with Preonus"
            className={styles.section}
        >
            <div className={styles.grid}>
                {SUCCESS_STORIES.map((story) => (
                    <div key={story.id} className={styles.card}>
                        <div className={styles.badge}>{story.useCase}</div>
                        <FeatureCard
                            title={story.title}
                            description={story.description}
                            icon={story.icon}
                            variant="story"
                        />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}

