import classNames from 'classnames';
import { type FC, type PropsWithChildren } from 'react';

import styles from './styles.module.css';

interface Props {
  className?: string;
}

const Text: FC<PropsWithChildren<Props>> = ({ children, className = '' }) => {
  return <div className={classNames(styles.text, className)}>{children}</div>;
};

export default Text;
