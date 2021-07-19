import React from 'react';
import Button from '../button/button';
import styles from './pricing_card.module.css';

const PricingCard = ({ card, label }) => {
  return (
    <div
      className={
        label !== 'WEDDING' ? styles.card : `${styles.card} ${styles.card_accent}`
      }
    >
      <img className={styles.card_img} src={card.imagePath} alt='icon' />
      <h1 className={styles.card_title}>{card.title}</h1>
      <h1 className={styles.card_price}>{card.price}</h1>
      <ul className={styles.services}>
        {card.services.map((item, index) => {
          return (
            <li key={index} className={styles.service_item}>
              {item}
            </li>
          );
        })}
        <Button label='BOOK NOW' />
      </ul>
    </div>
  );
};

export default PricingCard;
