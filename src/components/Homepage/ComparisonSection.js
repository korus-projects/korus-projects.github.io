import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { COMPARISON_CONTENT } from './constants';
import '@site/src/components/css/ComparisonSection.css';

/**
 * Comparison section: Korus way vs The old way
 */
export default function ComparisonSection() {
    const { sectionTitle, sectionSubtitle, korusWay, oldWay } = COMPARISON_CONTENT;

    return (
        <SectionWrapper
            id="comparison"
            title={sectionTitle}
            subtitle={sectionSubtitle}
            className="comparison-section"
        >
            <div className="comparison-grid">
                {/* The Korus Way */}
                <div className="comparison-column comparison-column--korus">
                    <div className="comparison-column__header">
                        <CheckIcon />
                        <h3>{korusWay.title}</h3>
                    </div>
                    <ul className="comparison-list">
                        {korusWay.points.map((point, index) => (
                            <li key={index} className="comparison-item comparison-item--positive">
                                <div className="comparison-item__icon">
                                    <CheckCircleIcon />
                                </div>
                                <div className="comparison-item__content">
                                    <strong>{point.heading}</strong>
                                    <p>{point.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* The Old Way */}
                <div className="comparison-column comparison-column--old">
                    <div className="comparison-column__header">
                        <XIcon />
                        <h3>{oldWay.title}</h3>
                    </div>
                    <ul className="comparison-list">
                        {oldWay.points.map((point, index) => (
                            <li key={index} className="comparison-item comparison-item--negative">
                                <div className="comparison-item__icon">
                                    <XCircleIcon />
                                </div>
                                <div className="comparison-item__content">
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