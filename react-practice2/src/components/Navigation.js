import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li>
          <Link to="/" className={styles.navLink}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink}>
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
