import { Button, Layout, Menu, MenuProps } from 'antd';
import React, { useContext, useState } from 'react';
import { Context } from '../../pages/_app';
import { Store } from '../../store/store';
import SettingsCard from '../pages/settings/SettingsCard';
import styles from '../../styles/SettingsLayout.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  RollbackOutlined,
  AppstoreAddOutlined,
  DeleteOutlined,
  SwapOutlined,
} from '@ant-design/icons';
import Sider from 'antd/lib/layout/Sider';
import MainHeader from './header/MainHeader';
import MainContent from './content/MainContent';
import { observer } from 'mobx-react-lite';

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
/** Страница настроек */
const SettingsLayout = () => {
  const router = useRouter();
  const { clearTowns, clearAll, towns } = (useContext(Context) as Store).FavouriteTown;
  const { active, Toggle } = (useContext(Context) as Store).Theme;
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = [
    getItem(<Link href="/">Главная</Link>, '1', <AppstoreAddOutlined />),
    getItem(
      <Button type="primary" ghost onClick={() => router.back()}>
        Назад
      </Button>,
      '2',
      <RollbackOutlined />,
    ),
    getItem(
      <Button type="primary" ghost onClick={clearAll}>
        Очистить всё
      </Button>,
      '3',
      <DeleteOutlined />,
    ),
    getItem(
      <Button type="primary" ghost onClick={Toggle}>
        Сменить тему
      </Button>,
      '4',
      <SwapOutlined />,
    ),
  ];
  return (
    <div>
      <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
        <Sider
          width={250}
          collapsedWidth={60}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}>
          <Menu theme="dark" defaultSelectedKeys={['1']} items={items} mode="inline" />
        </Sider>
        <Layout>
          <MainHeader title="Погода в избранных городах" />
          <MainContent className="">
            {towns.map((town, index) => (
              <div key={index} className={styles.layout}>
                <SettingsCard index={index} town={town} />
                <Button type={active ? 'default' : 'primary'} onClick={() => clearTowns(town)}>
                  Удалить
                </Button>
              </div>
            ))}
          </MainContent>
        </Layout>
      </Layout>
    </div>
  );
};

export default observer(SettingsLayout);
