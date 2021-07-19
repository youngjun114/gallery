import React from 'react';
import styles from './service.module.css';
import { cards } from '../../fixtures/cards';
import ServiceCard from '../service_card/service_card';

const Service = () => {
  return (
    <section className={styles.service}>
      <h2 className={styles.title}>SPECIAL SERVICE</h2>
      <h1 className={styles.header}>MULTIPLE OFFER WE PROVIDE</h1>
      <div className={styles.cards}>
        {cards.map((card) => {
          return <ServiceCard ket={card.id} card={card} />;
        })}
      </div>
    </section>
  );
};

export default Service;
