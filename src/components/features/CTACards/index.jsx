import React from 'react';
import { FeatureCard } from '../../shared';
import { CTA_CARDS } from '@site/src/data';
import styles from './CTACards.module.css';


export default function CTACards() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
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

