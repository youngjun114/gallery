import React from 'react';
import styles from './pricing.module.css';
import { pricing } from '../../fixtures/pricing';
import PricingCard from '../pricing_card/pricing_card';

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <h2 className={styles.title}>PRICING PLAN</h2>
      <h1 className={styles.header}>REASONABLE PRICING PLAN</h1>
      <div className={styles.cards}>
        {pricing.map((item) => {
          return <PricingCard label={item.title} card={item} />;
        })}
      </div>
    </section>
  );
};

export default Pricing;
