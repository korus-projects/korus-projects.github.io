import React from 'react';
import styles from './APICard.module.css';

/**
 * APICard Component
 * 
 * API documentation card layout
 * 
 * @example
 * <APICard 
 *   title="@Service" 
 *   type="Annotation"
 *   description="Marks a class as a service bean"
 * />
 */
export default function APICard({ 
  title, 
  type = 'API',
  description, 
  signature,
  children,
  deprecated = false,
  since = null
}) {
  return (
    <div className={`${styles.card} ${deprecated ? styles['card--deprecated'] : ''}`}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.type}>{type}</span>
        </div>
        <div className={styles.badges}>
          {deprecated && <span className={styles.badge} data-variant="danger">Deprecated</span>}
          {since && <span className={styles.badge} data-variant="info">Since {since}</span>}
        </div>
      </div>
      
      {signature && (
        <div className={styles.signature}>
          <code>{signature}</code>
        </div>
      )}
      
      {description && (
        <p className={styles.description}>{description}</p>
      )}
      
      {children && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
}
