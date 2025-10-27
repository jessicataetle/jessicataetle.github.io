import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navigation />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;

