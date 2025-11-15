import React from 'react';

import { Title } from '@/shared/ui';

import styles from './styles.module.css';
import Image from 'next/image';

const MainInfo = () => {
  return (
    <div className={styles.container}>
      <Image src="/portrait.jpg" alt="Alexey Ershkov Photo" width={224} height={224} className={styles.portrait} />
      <Title>Alexey Ershkov</Title>
      <div className={styles.subtitle}>Frontend Web Developer</div>
    </div>
  );
};

export default MainInfo;
