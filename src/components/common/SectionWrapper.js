import React from 'react';
import './SectionWrapper.css';

/**
 * Reusable section wrapper for consistent spacing and structure
 */
export default function SectionWrapper({
                                           id,
                                           title,
                                           subtitle,
                                           children,
                                           className = '',
                                           dark = false
                                       }) {
    return (
        <section
            id={id}
            className={`section-wrapper ${dark ? 'section-dark' : ''} ${className}`}
        >
            <div className="container">
                {(title || subtitle) && (
                    <div className="section-header">
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}