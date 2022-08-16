import React, { FC, useContext, useState } from 'react';
import { Context } from '../../pages/_app';
import { Store } from '../../store/store';
import styles from '../../styles/Theme.module.scss';
import {
  StarOutlined,
  SettingOutlined,
  BarsOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Input, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import CoordsFooter from './footer/CoordsFooter';
import RegionHeader from './header/RegionHeader';
import { IRegion } from '../../models/Region';
import Link from 'next/link';
import MainHeader from './header/MainHeader';
import MainContent from './content/MainContent';

const { Content, Sider } = Layout;

interface RegionLayoutProps {
  region: IRegion;
}

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

const MainLayout: FC<RegionLayoutProps> = ({ region }) => {
  const { active } = (useContext(Context) as Store).Theme;
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = [
    getItem(<Link href="/settings">Настройки</Link>, '1', <SettingOutlined />),
    getItem(
      'Регионы',
      'sub1',
      <BarsOutlined />,

      region.regions.map((reg) =>
        getItem(
          `${reg.name}`,
          `${reg.id}`,
          <UnorderedListOutlined />,
          reg?.areas?.map((city) =>
            getItem(<Link href={`/region/${reg.id}/${city.name}`}>{city.name}</Link>, `${city.id}`),
          ),
        ),
      ),
    ),
  ];
  return (
    <div className={active ? styles.lightTheme : styles.darkTheme}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          width={300}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <MainHeader title="" />
          <MainContent>
            <CoordsFooter />
          </MainContent>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
