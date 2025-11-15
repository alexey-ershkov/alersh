import classNames from 'classnames';
import { type FC } from 'react';

import styles from './styles.module.css';

interface Props {
  className?: string;
}

const Divider: FC<Props> = ({ className = '' }) => {
  return <div className={classNames(styles.divider, className)} />;
};

export default Divider;
