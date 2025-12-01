import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import FeatureCard from '../common/FeatureCard';
import { SUCCESS_STORIES } from './constants';
import '@site/src/components/css/SuccessStories.css';

/**
 * Success stories section with three use case tiles
 */
export default function SuccessStories() {
    return (
        <SectionWrapper
            id="success-stories"
            title="Korus in Action"
            subtitle="See what you can build with Korus"
            className="success-stories-section"
        >
            <div className="stories-grid">
                {SUCCESS_STORIES.map((story) => (
                    <div key={story.id} className="story-card">
                        <div className="story-card__badge">{story.useCase}</div>
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