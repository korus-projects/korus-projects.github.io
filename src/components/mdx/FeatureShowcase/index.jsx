import React from 'react';
import styles from './FeatureShowcase.module.css';

/**
 * FeatureShowcase Component
 * 
 * Feature showcase grid system
 * 
 * @example
 * <FeatureShowcase>
 *   <FeatureShowcase.Item 
 *     icon="⚡" 
 *     title="Fast Startup"
 *     description="Sub-200ms startup time"
 *   />
 * </FeatureShowcase>
 */
export default function FeatureShowcase({ children, columns = 3 }) {
  return (
    <div 
      className={styles.grid} 
      style={{ '--columns': columns }}
    >
      {children}
    </div>
  );
}

FeatureShowcase.Item = function FeatureShowcaseItem({ 
  icon, 
  title, 
  description, 
  link = null 
}) {
  const content = (
    <>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </>
  );
  
  if (link) {
    return (
      <a href={link} className={`${styles.item} ${styles['item--link']}`}>
        {content}
      </a>
    );
  }
  
  return (
    <div className={styles.item}>
      {content}
    </div>
  );
};
