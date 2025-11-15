import React from 'react';

import { InfoContainer, Text, Title } from '@/shared/ui';

import styles from './styles.module.css';

const Languages = () => {
  return (
    <InfoContainer>
      <Title>Languages</Title>
      <Text className={styles.text}>Russian (Native){'\n'} English (B2, FCE Approved)</Text>
    </InfoContainer>
  );
};

export default Languages;
