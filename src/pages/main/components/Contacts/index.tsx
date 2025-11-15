import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AtSymbolIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { TextWithIcon, Title } from '@/shared/ui';

import styles from './styles.module.css';

const Contacts = (): React.ReactElement => {
  return (
    <div className={styles.container}>
      <Title>Contacts & Social</Title>
      <div className={styles.contactsList}>
        <TextWithIcon icon={<MapPinIcon />} text="Moscow, Russia" />
        <TextWithIcon icon={<AtSymbolIcon />} text="alexey.ershkov@gmail.com" />
        <TextWithIcon icon={<AtSymbolIcon />} text="ale.rsh@ya.ru" />
        <TextWithIcon icon={<FontAwesomeIcon size="2x" icon={faTelegram} />} text="@alexey_ershkov" />
      </div>
    </div>
  );
};

export default Contacts;
