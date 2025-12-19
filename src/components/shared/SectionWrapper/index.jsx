import React from 'react';
import styles from './SectionWrapper.module.css';
import { cn } from '@site/src/utils';

export default function SectionWrapper({
    id,
    title,
    subtitle,
    children,
    className = '',
    dark = false
}) {
    const sectionClasses = cn(
        styles.section,
        dark ? styles['section--dark'] : '',
        className
    );

    return (
        <section id={id} className={sectionClasses}>
            <div className="container">
                {(title || subtitle) && (
                    <div className={styles.header}>
                        {title && <h2 className={styles.title}>{title}</h2>}
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
