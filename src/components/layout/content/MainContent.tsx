import React, { FC, useContext } from 'react';
import theme from '../../../styles/Theme.module.scss';
import { Content } from 'antd/lib/layout/layout';
import { Context } from '../../../pages/_app';
import { Store } from '../../../store/store';
import styles from '../../../styles/Content.module.scss';

interface MainContentProps {
  children: React.ReactNode | React.ReactChild;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
  const { active } = (useContext(Context) as Store).Theme;
  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Content className={styles.content}>{children}</Content>
    </div>
  );
};

export default MainContent;
