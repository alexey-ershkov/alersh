import { type FC, memo, type ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  icon: ReactNode;
  text: string;
}

const TextWithIcon: FC<Props> = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default memo(TextWithIcon);
