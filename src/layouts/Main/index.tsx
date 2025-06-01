import React from 'react';
import styles from './main.module.css';

const MainLayout: React.FunctionComponent = ({ children }) => (
  <>
    <header>

    </header>
    {children}
    <footer className={styles.footer}>
        <a
          href="https://kacpermalachowski.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 
        </a>
        
    </footer>
  </>
);

export default MainLayout;
