import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.title}>
            WOO<span className={styles.title_red}>P</span>OSE
          </h1>
        </footer>
    )
}

export default Footer
