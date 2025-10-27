import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.logo}>
          <NavLink to="/">JT</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Resume
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Coding Projects
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Design Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

