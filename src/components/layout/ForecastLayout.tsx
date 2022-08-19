import { Button, Layout, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { IForecast } from '../../models/Coords';
import ForecastCard from '../pages/Region/City/Coords/Forecast/ForecastCard';
import { RollbackOutlined, SettingOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import Sider from 'antd/lib/layout/Sider';
import MainHeader from './header/MainHeader';
import MainContent from './content/MainContent';
import styles from '../../styles/Content.module.scss';

/** Интерфейс для  ForecastLayout*/
interface ForecastLayoutProps {
  forecast: IForecast;
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
/** Страница подробной погоды*/
const ForecastLayout: FC<ForecastLayoutProps> = ({ forecast }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const items: MenuItem[] = [
    getItem(<Link href="/settings">Настройки</Link>, '1', <SettingOutlined />),
    getItem(<Link href="/">Главная</Link>, '2', <AppstoreAddOutlined />),
    getItem(
      <Button type="primary" ghost onClick={() => router.back()}>
        Назад
      </Button>,
      '3',
      <RollbackOutlined />,
    ),
  ];
  return (
    <div>
      <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
        <Sider
          width={150}
          collapsedWidth={60}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}>
          <Menu theme="dark" defaultSelectedKeys={['2']} items={items} mode="inline" />
        </Sider>
        <Layout>
          <MainHeader title="Подробный прогноз погоды на 7 дней" />
          <MainContent className={styles.content}>
            <ForecastCard
              key={forecast.forecast.geo_object.locality.id}
              forecasts={forecast.forecast.forecasts}
              yesterday={forecast.forecast.yesterday}
              geo_object={forecast.forecast.geo_object}
              fact={forecast.forecast.fact}
            />
          </MainContent>
        </Layout>
      </Layout>
    </div>
  );
};

export default ForecastLayout;
