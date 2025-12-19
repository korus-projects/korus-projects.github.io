import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import styles from './CodeTabs.module.css';

/**
 * CodeTabs Component
 * 
 * Multi-language code tab switcher for build tools and languages
 * Supports Maven/Gradle and Java/Kotlin examples
 * 
 * @example
 * <CodeTabs
 *   maven={`<dependency>...</dependency>`}
 *   gradle={`implementation '...'`}
 * />
 * 
 * @example
 * <CodeTabs
 *   java={`public class Example { }`}
 *   kotlin={`class Example`}
 * />
 */
export default function CodeTabs({ 
  maven, 
  gradle, 
  java, 
  kotlin,
  mavenLabel = 'Maven',
  gradleLabel = 'Gradle',
  javaLabel = 'Java',
  kotlinLabel = 'Kotlin',
  groupId = 'build-tool',
  title = null
}) {
  // Determine which type of tabs to show
  const isBuildTool = maven || gradle;
  const isLanguage = java || kotlin;
  
  if (isBuildTool && isLanguage) {
    console.warn('CodeTabs: Both build tool and language options provided. Showing build tools.');
  }
  
  // Build tool tabs
  if (isBuildTool) {
    return (
      <div className={styles.container}>
        {title && <div className={styles.title}>{title}</div>}
        <Tabs groupId={groupId} className={styles.tabs}>
          {maven && (
            <TabItem value="maven" label={mavenLabel} default>
              <CodeBlock language="xml" className={styles.codeBlock}>
                {maven}
              </CodeBlock>
            </TabItem>
          )}
          {gradle && (
            <TabItem value="gradle" label={gradleLabel}>
              <CodeBlock language="groovy" className={styles.codeBlock}>
                {gradle}
              </CodeBlock>
            </TabItem>
          )}
        </Tabs>
      </div>
    );
  }
  
  // Language tabs
  if (isLanguage) {
    return (
      <div className={styles.container}>
        {title && <div className={styles.title}>{title}</div>}
        <Tabs groupId={groupId} className={styles.tabs}>
          {java && (
            <TabItem value="java" label={javaLabel} default>
              <CodeBlock language="java" className={styles.codeBlock}>
                {java}
              </CodeBlock>
            </TabItem>
          )}
          {kotlin && (
            <TabItem value="kotlin" label={kotlinLabel}>
              <CodeBlock language="kotlin" className={styles.codeBlock}>
                {kotlin}
              </CodeBlock>
            </TabItem>
          )}
        </Tabs>
      </div>
    );
  }
  
  return (
    <div className={styles.error}>
      CodeTabs: No valid content provided. Use maven/gradle or java/kotlin props.
    </div>
  );
}
