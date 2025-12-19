import React from 'react';
import styles from './HighlightText.module.css';

/**
 * HighlightText Component
 * 
 * Text highlighting and emphasis component
 * 
 * @example
 * <HighlightText>Build-time DI</HighlightText>
 * 
 * @example
 * <HighlightText color="success">Zero reflection</HighlightText>
 */
export default function HighlightText({ 
  children, 
  color = 'primary',
  variant = 'default'
}) {
  const className = `${styles.highlight} ${styles[`highlight--${color}`]} ${styles[`highlight--${variant}`]}`;
  
  return (
    <span className={className} role="mark">
      {children}
    </span>
  );
}
