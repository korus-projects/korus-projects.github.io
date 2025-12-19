import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';
import Details from '@theme/Details';

import CodeTabs from '@site/src/components/mdx/CodeTabs';
import CopyButton from '@site/src/components/mdx/CopyButton';
import HighlightText from '@site/src/components/mdx/HighlightText';
import APICard from '@site/src/components/mdx/APICard';
import FeatureShowcase from '@site/src/components/mdx/FeatureShowcase';
import PerformanceChart from '@site/src/components/mdx/PerformanceChart';
import DependencyBadge from '@site/src/components/mdx/DependencyBadge';
import FrameworkComparison from '@site/src/components/mdx/FrameworkComparison';
import PerformanceHighlight from '@site/src/components/mdx/PerformanceHighlight';
import BuildTimeExplanation from '@site/src/components/mdx/BuildTimeExplanation';
import MigrationGuide from '@site/src/components/mdx/MigrationGuide';
import APIReference from '@site/src/components/mdx/APIReference';


export default {
  ...MDXComponents,
  
  Tabs,
  TabItem,
  Admonition,
  CodeBlock,
  Details,

  // Custom MDX Components
  CodeTabs,
  CopyButton,
  HighlightText,
  APICard,
  FeatureShowcase,
  PerformanceChart,
  DependencyBadge,
  FrameworkComparison,
  PerformanceHighlight,
  BuildTimeExplanation,
  MigrationGuide,
  APIReference,
};
