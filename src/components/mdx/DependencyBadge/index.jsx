import React from 'react';
import styles from './DependencyBadge.module.css';

/**
 * DependencyBadge Component
 * 
 * Dependency version badge display
 * 
 * @example
 * <DependencyBadge name="preonus-core" version="1.0.0" />
 */
export default function DependencyBadge({ 
  name, 
  version, 
  scope = null,
  link = null,
  color = 'primary'
}) {
  const content = (
    <>
      <span className={styles.name}>
        {scope && <span className={styles.scope}>{scope}/</span>}
        {name}
      </span>
      {version && (
        <span className={styles.version}>{version}</span>
      )}
    </>
  );
  
  const className = `${styles.badge} ${styles[`badge--${color}`]}`;
  
  if (link) {
    return (
      <a href={link} className={`${className} ${styles['badge--link']}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  
  return (
    <span className={className}>
      {content}
    </span>
  );
}
