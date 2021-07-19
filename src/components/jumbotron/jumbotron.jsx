import React from 'react';
import styles from './jumbotron.module.css';

const Jumbotron = () => {
  return (
    <div className={styles.image_container}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>LIFESTYLE PHOTOGRAPHY</h1>
        <p className={styles.desc}>Photo Session</p>
      </div>
      <img className={styles.image} src='/images/bg3.jpg' alt='bg' />
    </div>
  );
};

export default Jumbotron;
