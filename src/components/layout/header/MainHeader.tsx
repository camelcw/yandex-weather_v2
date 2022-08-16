import { Header } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import styles from '../../../styles/Header.module.scss';

interface MainHeaderProps {
  title: string;
}

const MainHeader: FC<MainHeaderProps> = ({ title }) => {
  return (
    <Header>
      <div className={styles.header}>{title}</div>
    </Header>
  );
};

export default MainHeader;
