import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.sectionContent} ${className || ''}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;

