import React from 'react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className={styles.pageHeaderContainer}>
      <h2 className={styles.pageHeader}>{title}</h2>
    </div>
  );
};

export default PageHeader;

