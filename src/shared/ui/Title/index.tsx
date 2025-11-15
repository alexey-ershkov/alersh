import classNames from 'classnames';
import { type FC, type PropsWithChildren } from 'react';

import styles from './styles.module.css';

interface Props {
  className?: string;
}

const Title: FC<PropsWithChildren<Props>> = ({ children, className = '' }) => {
  return <div className={classNames(styles.title, className)}>{children}</div>;
};

export default Title;
