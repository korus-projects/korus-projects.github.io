import React from 'react';
import FeatureCard from '../common/FeatureCard';
import { CTA_CARDS } from './constants';
import '@site/src/components/css/CTACards.css';

/**
 * Three primary call-to-action cards below the hero
 */
export default function CTACards() {
    return (
        <section className="cta-cards-section">
            <div className="container">
                <div className="cta-cards-grid">
                    {CTA_CARDS.map((card) => (
                        <FeatureCard
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                            link={card.link}
                            variant="cta"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}