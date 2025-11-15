import { type FC } from 'react';

import Text from '../Text';

import styles from './styles.module.css';

export interface LevelerProps {
  width: number; // Percentage from 0 to 100
  name: string;
}

const LinearGrade: FC<LevelerProps> = ({ name, width }) => {
  return (
    <div className={styles.container}>
      <Text>{name}</Text>
      <div className={styles.barContainer}>
        <div className={styles.bar} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

export default LinearGrade;
