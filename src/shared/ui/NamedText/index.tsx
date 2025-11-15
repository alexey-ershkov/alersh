import { type FC } from 'react';

import styles from './styles.module.css';

export interface NamedTextProps {
  name: string;
  text: string;
}

const NamedText: FC<NamedTextProps> = ({ name, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div>{text}</div>
    </div>
  );
};

export default NamedText;
