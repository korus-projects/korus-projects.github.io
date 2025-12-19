import React, { useState } from 'react';
import styles from './APIReference.module.css';

/**
 * APIReference Component
 * 
 * API reference quick-access sections
 * 
 * @example
 * <APIReference 
 *   sections={[
 *     { 
 *       category: 'Annotations', 
 *       items: [
 *         { name: '@Service', description: '...' }
 *       ]
 *     }
 *   ]}
 * />
 */
export default function APIReference({ 
  sections = [],
  searchable = true
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(sections[0]?.category || '');
  
  const filteredSections = sections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>API Reference</h3>
        
        {searchable && (
          <input
            type="text"
            placeholder="Search API..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.search}
          />
        )}
      </div>
      
      <div className={styles.categories}>
        {filteredSections.map(section => (
          <button
            key={section.category}
            onClick={() => setActiveCategory(section.category)}
            className={`${styles.categoryTab} ${
              activeCategory === section.category ? styles['categoryTab--active'] : ''
            }`}
          >
            {section.category}
            <span className={styles.count}>{section.items.length}</span>
          </button>
        ))}
      </div>
      
      <div className={styles.content}>
        {filteredSections
          .filter(section => section.category === activeCategory)
          .map(section => (
            <div key={section.category} className={styles.section}>
              {section.items.map((item, index) => (
                <div key={index} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <code className={styles.itemName}>{item.name}</code>
                    {item.type && (
                      <span className={styles.itemType}>{item.type}</span>
                    )}
                  </div>
                  
                  {item.description && (
                    <p className={styles.itemDescription}>{item.description}</p>
                  )}
                  
                  {item.signature && (
                    <div className={styles.signature}>
                      <code>{item.signature}</code>
                    </div>
                  )}
                  
                  {item.example && (
                    <details className={styles.example}>
                      <summary>Example</summary>
                      <pre><code>{item.example}</code></pre>
                    </details>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
