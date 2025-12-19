import React from 'react';
import { SectionWrapper } from '../../shared';
import { COMPARISON_CONTENT } from '@site/src/data';
import styles from './ComparisonSection.module.css';


export default function ComparisonSection() {
    const { sectionTitle, sectionSubtitle, korusWay, oldWay } = COMPARISON_CONTENT;

    return (
        <SectionWrapper
            id="comparison"
            title={sectionTitle}
            subtitle={sectionSubtitle}
            className={styles.section}
        >
            <div className={styles.grid}>
                {/* The Korus Way */}
                <div className={`${styles.column} ${styles['column--korus']}`}>
                    <div className={styles.header}>
                        <CheckIcon />
                        <h3>{korusWay.title}</h3>
                    </div>
                    <ul className={styles.list}>
                        {korusWay.points.map((point, index) => (
                            <li key={index} className={`${styles.item} ${styles['item--positive']}`}>
                                <div className={styles.icon}>
                                    <CheckCircleIcon />
                                </div>
                                <div className={styles.content}>
                                    <strong>{point.heading}</strong>
                                    <p>{point.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* The Old Way */}
                <div className={`${styles.column} ${styles['column--old']}`}>
                    <div className={styles.header}>
                        <XIcon />
                        <h3>{oldWay.title}</h3>
                    </div>
                    <ul className={styles.list}>
                        {oldWay.points.map((point, index) => (
                            <li key={index} className={`${styles.item} ${styles['item--negative']}`}>
                                <div className={styles.icon}>
                                    <XCircleIcon />
                                </div>
                                <div className={styles.content}>
                                    <strong>{point.heading}</strong>
                                    <p>{point.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
}

// Icon components
function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

function CheckCircleIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}

function XCircleIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
    );
}

