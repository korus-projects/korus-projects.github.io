import React from 'react';
import styles from './BuildTimeExplanation.module.css';

/**
 * BuildTimeExplanation Component
 * 
 * Build-time vs runtime explanation block
 * 
 * @example
 * <BuildTimeExplanation 
 *   buildTime="All beans are wired during compilation"
 *   runtime="Just load pre-generated classes"
 * />
 */
export default function BuildTimeExplanation({ 
  buildTime, 
  runtime,
  title = 'Build-Time vs Runtime'
}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      
      <div className={styles.comparison}>
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <span className={styles.label}>Build Time</span>
          </div>
          <div className={styles.content}>
            {buildTime}
          </div>
        </div>
        
        <div className={styles.arrow}>→</div>
        
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <span className={styles.label}>Runtime</span>
          </div>
          <div className={styles.content}>
            {runtime}
          </div>
        </div>
      </div>
    </div>
  );
}
