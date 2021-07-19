import React, { useState } from 'react';
import styles from './header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrShop } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import { menuItems } from '../../fixtures/menu_item';

const Header = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  const handleClick = () => {
    setExpandMenu(!expandMenu);
  };

  return (
    <>
      <nav className={styles.header}>
        <div className={styles.header_left}>
          <h1 className={styles.title}>
            WOO<span className={styles.title_red}>P</span>OSE
          </h1>
        </div>
        <ul
          className={
            expandMenu ? `${styles.menu} ${styles.menu_show}` : styles.menu
          }
        >
          <li className={styles.menu_item}>
            <button className={styles.btn_item}>Home</button>
          </li>
          <li className={styles.menu_item}>
            <button className={styles.btn_item}>About</button>
          </li>
          <li className={styles.menu_item}>
            <button className={styles.btn_item}>Gallery</button>
          </li>
          <li className={styles.menu_item}>
            <button className={styles.btn_item}>Services</button>
          </li>
          <li className={styles.menu_item}>
            <button className={styles.btn_item}>Pages</button>
          </li>
          <li className={styles.menu_item}>
            <button className={styles.btn_item}>Blog</button>
          </li>
          <li className={styles.menu_item}>
            <button className={styles.btn_item}>Contact</button>
          </li>
        </ul>
        <div className={styles.header_right}>
          <button className={styles.btn_menu} onClick={handleClick}>
            <GiHamburgerMenu className={styles.icon} />
          </button>
          <button className={styles.btn_search}>
            <GoSearch className={styles.icon} />
          </button>
          <button className={styles.btn_cart}>
            <GrShop className={styles.icon} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
