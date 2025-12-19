import React from 'react';
import styles from './PerformanceHighlight.module.css';

/**
 * PerformanceHighlight Component
 * 
 * Performance optimization highlights
 * 
 * @example
 * <PerformanceHighlight 
 *   metric="Startup Time" 
 *   value="185ms"
 *   improvement="10x faster than Spring Boot"
 * />
 */
export default function PerformanceHighlight({ 
  metric, 
  value, 
  improvement = null,
  icon = '⚡',
  variant = 'primary'
}) {
  return (
    <div className={`${styles.container} ${styles[`container--${variant}`]}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <div className={styles.metric}>{metric}</div>
        <div className={styles.value}>{value}</div>
        {improvement && (
          <div className={styles.improvement}>{improvement}</div>
        )}
      </div>
    </div>
  );
}
