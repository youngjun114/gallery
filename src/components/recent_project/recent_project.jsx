import React from 'react';
import styles from './recent_project.module.css';
import { images } from '../../fixtures/images';

const RecentProject = () => {
  return (
    <section className={styles.projects}>
      <h3 className={styles.title}>RECENT PROJECT</h3>
      <h1 className={styles.header}>BEST PHOTOGRAPHY SHOWCASE</h1>
      <div className={styles.image_grid}>
        {images.map((image) => {
          return (
            <div key={image.id} className={styles.image_container}>
              <div className={styles.overlay}>{image.label}</div>
              <img
                className={styles.image}
                src={image.imagePath}
                alt={image.id}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProject;
