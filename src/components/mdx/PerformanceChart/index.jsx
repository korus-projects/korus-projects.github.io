import React from 'react';
import styles from './PerformanceChart.module.css';

/**
 * PerformanceChart Component
 * 
 * Performance comparison visualizations
 * 
 * @example
 * <PerformanceChart 
 *   data={[
 *     { name: 'Spring Boot', value: 2000 },
 *     { name: 'Korus', value: 185 }
 *   ]}
 *   metric="Startup Time (ms)"
 * />
 */
export default function PerformanceChart({ 
  data = [], 
  metric = 'Value',
  highlightName = 'Korus',
  unit = '',
  lowerIsBetter = true
}) {
  // Guard against empty data
  if (!data || data.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>{metric}</h3>
        </div>
        <div className={styles.emptyState}>No data available</div>
      </div>
    );
  }
  
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{metric}</h3>
        {lowerIsBetter && (
          <span className={styles.note}>Lower is better</span>
        )}
      </div>
      
      <div className={styles.chart}>
        {data.map((item, index) => {
          const percentage = (item.value / maxValue) * 100;
          const isHighlight = item.name === highlightName;
          const isBest = lowerIsBetter 
            ? item.value === minValue 
            : item.value === maxValue;
          
          return (
            <div 
              key={item.name} 
              className={styles.row}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.label}>
                <span className={styles.name}>{item.name}</span>
                {isBest && <span className={styles.badge}>Best</span>}
              </div>
              <div className={styles.barContainer}>
                <div
                  className={`${styles.bar} ${isHighlight ? styles['bar--highlight'] : ''}`}
                  style={{ 
                    width: `${percentage}%`,
                    backgroundColor: item.color || 'var(--ifm-color-primary)'
                  }}
                >
                  <span className={styles.value}>
                    {item.value}{unit}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
