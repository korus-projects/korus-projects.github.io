import React from 'react';
import styles from './FrameworkComparison.module.css';

/**
 * FrameworkComparison Component
 * 
 * Framework comparison callout
 * 
 * @example
 * <FrameworkComparison 
 *   title="Korus vs Spring Boot"
 *   features={[
 *     { name: 'DI Style', korus: 'Build-time', spring: 'Runtime' }
 *   ]}
 * />
 */
export default function FrameworkComparison({ 
  title = 'Framework Comparison',
  features = [],
  frameworks = ['Korus', 'Spring Boot'],
  highlightFramework = 'Korus'
}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      
      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.cell}></div>
          {frameworks.map(framework => (
            <div 
              key={framework}
              className={`${styles.cell} ${styles.headerCell} ${
                framework === highlightFramework ? styles['headerCell--highlight'] : ''
              }`}
            >
              {framework}
            </div>
          ))}
        </div>
        
        {features.map((feature, index) => (
          <div key={index} className={styles.row}>
            <div className={`${styles.cell} ${styles.featureCell}`}>
              {feature.name}
            </div>
            {frameworks.map(framework => {
              const value = feature[framework.toLowerCase().replace(/\s+/g, '')];
              return (
                <div 
                  key={framework}
                  className={`${styles.cell} ${styles.valueCell} ${
                    framework === highlightFramework ? styles['valueCell--highlight'] : ''
                  }`}
                >
                  {value}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
