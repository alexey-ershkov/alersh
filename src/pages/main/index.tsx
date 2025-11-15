'use client';

import React, { useEffect } from 'react';

import Contacts from './components/Contacts';
import Details from './components/Details';
import MainInfo from './components/MainInfo';

import styles from './styles.module.css';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <MainInfo />
        <Contacts />
      </div>
      <Details />
    </div>
  );
};

export default HomePage;
