import React from 'react';
import styles from './service_card.module.css';

const ServiceCard = ({ card }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={card.imagePath} alt='icon' />
      <h1 className={styles.card_title}>{card.title}</h1>
      <p className={styles.card_desc}>{card.desc}</p>
      <button className={styles.button}>LEARN MORE</button>
    </div>
  );
};

export default ServiceCard;
