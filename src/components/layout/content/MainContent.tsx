import React, { FC, useContext } from 'react';
import theme from '../../../styles/Theme.module.scss';
import { Content } from 'antd/lib/layout/layout';
import { Context } from '../../../pages/_app';
import { Store } from '../../../store/store';
/** Интерфейс для контента на страницах*/
interface MainContentProps {
  children: React.ReactNode | React.ReactChild;
  className: string | undefined;
}
/** Контент на страницах */
const MainContent: FC<MainContentProps> = ({ children, className }) => {
  const { active } = (useContext(Context) as Store).Theme;
  return (
    <div className={active ? theme.weather__tenDay_lightTheme : theme.weather__tenDay_darkTheme}>
      <Content className={className}>{children}</Content>
    </div>
  );
};

export default MainContent;
