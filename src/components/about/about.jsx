import React from 'react';
import Button from '../button/button';
import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h3 className={styles.title}>ABOUT OUR COMPANY</h3>
      <h1 className={styles.header}>
        CREATING A TIMELESS LOOK, COUPLED WITH THE MAIN FLAWLESS MOMENT
      </h1>
      <p className={styles.desc}>
        Firmament earth winged set multiply together, grass called whose. Image
        make one you're to whales on which lights moveth have rule his have his
        let tree all there thing seed gathered without, whales you night very
        sixth was two Own. Fruit toge appear form. Whales whose land life
        brought divided. Place you're abundantly that forth. Under second given
        gathered earth You'll replenish you're bring one. Created man morning
        had which, for fly very telented person in rule creeping
      </p>
      <Button label='READ MORE' />
    </section>
  );
};

export default About;
