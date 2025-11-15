import classNames from 'classnames';
import { type FC, type PropsWithChildren } from 'react';

import styles from './styles.module.css';

interface Props {
  alignRight?: boolean;
}

const InfoContainer: FC<PropsWithChildren<Props>> = ({ children, alignRight = false }) => {
  return <div className={classNames(styles.container, alignRight ? styles.containerAlignEnd : styles.containerAlignStart)}>{children}</div>;
};

export default InfoContainer;
