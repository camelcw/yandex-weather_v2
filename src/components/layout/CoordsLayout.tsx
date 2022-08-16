import { Button, Layout, Menu, MenuProps } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useContext, useState } from 'react';
import { ICoord } from '../../models/Coords';
import { Context } from '../../pages/_app';
import { Store } from '../../store/store';
import CoordsCard from '../pages/Region/City/Coords/CoordsCard';
import CoordsAndForecastContent from './content/CoordsAndForecastContent';
import MainContent from './content/MainContent';
import CoordsFooter from './footer/CoordsFooter';
import CoordsHeader from './header/CoordsHeader';
import MainHeader from './header/MainHeader';
import {
  StarOutlined,
  SettingOutlined,
  BarsOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
/** Интерфейс для  CoordsLayout*/
interface CoordsLayoutProps {
  coords: ICoord[];
  coord: ICoord;
}
/** Страница погоды города*/
const CoordsLayout: FC<CoordsLayoutProps> = ({ coords, coord }) => {
  const { query } = useRouter();
  const [collapsed, setCollapsed] = useState(false);
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
    // getItem(
    //   <Button
    //     // className={styles.header__btn}
    //     type="primary"
    //     onClick={() => setFavouriteTown(coord)}>
    //     Добавить в избранное
    //   </Button>,
    //   '1',
    //   <StarOutlined />,
    // ),
    getItem(<Link href="/settings">Настройки</Link>, '2', <StarOutlined />),
  ];
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          width={300}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        {/* <Layout>
        <MainHeader title="" />
        <MainContent>
          <CoordsCard
            key={coord.coords.geo_object.locality.id}
            forecasts={coord.coords.forecasts}
            yesterday={coord.coords.yesterday}
            geo_object={coord.coords.geo_object}
            fact={coord.coords.fact}
          />
        </MainContent>
        <CoordsFooter />
      </Layout> */}
      </Layout>
    </div>
  );
};

export default CoordsLayout;
