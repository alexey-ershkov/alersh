import { type FC } from 'react';

import Text from '../Text';

import styles from './styles.module.css';

interface Props {
  boldText: string;
  text: string;
}

const TextWithBoldNaming: FC<Props> = ({ boldText, text }) => {
  return (
    <div className={styles.container}>
      <Text className="w-full">
        <div className={styles.boldText}>{boldText}</div>
        {text}
      </Text>
    </div>
  );
};

export default TextWithBoldNaming;
