import { Button, Layout, Menu, MenuProps } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useContext, useState } from 'react';
import { ICoord } from '../../models/Coords';
import { Context } from '../../pages/_app';
import { Store } from '../../store/store';
import CoordsCard from '../pages/Region/City/Coords/CoordsCard';
import MainContent from './content/MainContent';
import MainHeader from './header/MainHeader';
import { StarOutlined, SettingOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import theme from '../../styles/Theme.module.scss';
import styles from '../../styles/Content.module.scss';
import MainFooter from './footer/MainFooter';
/** Интерфейс для  CoordsLayout*/
interface CoordsLayoutProps {
  coord: ICoord;
}
/** Страница погоды города*/
const CoordsLayout: FC<CoordsLayoutProps> = ({ coord }) => {
  const { query } = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const { active } = (useContext(Context) as Store).Theme;
  const { uniqTows } = (useContext(Context) as Store).FavouriteTown;
  const setFavouriteTown = (town: ICoord) => {
    uniqTows(town, `/region/${query.id}/${query.coords}`);
  };
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key?: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem(
      <Button type="primary" ghost onClick={() => setFavouriteTown(coord)}>
        Добавить в избранное
      </Button>,
      '1',
      <StarOutlined />,
    ),
    getItem(<Link href="/settings">Настройки</Link>, '2', <SettingOutlined />),
    getItem(<Link href="/">Главная</Link>, '3', <AppstoreAddOutlined />),
  ];
  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
        <Sider
          width={250}
          collapsedWidth={60}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}>
          <Menu theme="dark" defaultSelectedKeys={['2']} items={items} mode="inline" />
        </Sider>
        <Layout>
          <MainHeader title={coord.coords.geo_object.locality.name} />
          <MainContent className={styles.content}>
            <CoordsCard
              key={coord.coords.geo_object.locality.id}
              forecasts={coord.coords.forecasts}
              yesterday={coord.coords.yesterday}
              geo_object={coord.coords.geo_object}
              fact={coord.coords.fact}
            />
          </MainContent>
          <MainFooter />
        </Layout>
      </Layout>
    </div>
  );
};

export default CoordsLayout;
