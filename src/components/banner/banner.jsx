import React from 'react';
import Button from '../button/button';
import styles from './banner.module.css';
const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.col_1}>
        <div className={styles.content}>
          <h4 className={styles.sub_title}>IMAGES THAT TELL STORY</h4>
          <h1 className={styles.title}>
            FASHION <span className={styles.title_red}>MODEL</span>
          </h1>
          <p className={styles.desc}>
            Us seed dominion isn't brought from over likeness in under first fow
            were likeness kind years gathering may that after dantly
          </p>
          <Button label='VIEW GALLERY' />
        </div>
        <div className={styles.col_2}></div>
      </div>
    </section>
  );
};

export default Banner;
