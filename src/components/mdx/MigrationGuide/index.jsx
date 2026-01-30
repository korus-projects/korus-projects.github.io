import React, { useState } from 'react';
import styles from './MigrationGuide.module.css';

/**
 * MigrationGuide Component
 * 
 * Migration guide specialized formatting
 * 
 * @example
 * <MigrationGuide 
 *   from="Spring Boot"
 *   steps={[
 *     { title: 'Update dependencies', content: '...' }
 *   ]}
 * />
 */
export default function MigrationGuide({ 
  from, 
  to = 'Preonus',
  steps = [],
  estimatedTime = null
}) {
  const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          Migrating from {from} to {to}
        </h3>
        {estimatedTime && (
          <div className={styles.time}>
            <span className={styles.timeIcon}>⏱️</span>
            Estimated time: {estimatedTime}
          </div>
        )}
      </div>
      
      <div className={styles.progress}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        <div className={styles.progressText}>
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>
      
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`${styles.step} ${
              index === currentStep ? styles['step--active'] : ''
            } ${index < currentStep ? styles['step--completed'] : ''}`}
            onClick={() => setCurrentStep(index)}
          >
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                {index < currentStep ? '✓' : index + 1}
              </div>
              <div className={styles.stepTitle}>{step.title}</div>
            </div>
            
            {index === currentStep && (
              <div className={styles.stepContent}>
                {step.content}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className={styles.navigation}>
        <button 
          className={styles.navButton}
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          ← Previous
        </button>
        <button 
          className={styles.navButton}
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
