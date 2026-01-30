import React, { useState } from 'react';
import styles from './CopyButton.module.css';

/**
 * CopyButton Component
 * 
 * Copy-to-clipboard button for command snippets
 * 
 * @example
 * <CopyButton text="npm install @preonus/core" />
 * 
 * @example
 * <CopyButton>mvn clean install</CopyButton>
 */
export default function CopyButton({ text, children, showCommand = true }) {
  const [copied, setCopied] = useState(false);
  const contentToCopy = text || (typeof children === 'string' ? children : '');
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contentToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  return (
    <div className={styles.container}>
      {showCommand && (
        <code className={styles.command}>{contentToCopy}</code>
      )}
      <button
        onClick={handleCopy}
        className={styles.button}
        aria-label="Copy to clipboard"
        title={copied ? 'Copied!' : 'Copy to clipboard'}
      >
        {copied ? (
          <span className={styles.icon}>✓</span>
        ) : (
          <span className={styles.icon}>📋</span>
        )}
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
