import { Button, Input, Layout, Menu, MenuProps } from "antd";
import Sider from "antd/lib/layout/Sider";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect, useState } from "react";
import { ICoord } from "../../models/Coords";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import CoordsCard from "../pages/Region/City/Coords/CoordsCard";
import MainContent from "./content/MainContent";
import MainHeader from "./header/MainHeader";
import theme from "../../styles/Theme.module.scss";
import styles from "../layout/content/Content.module.scss";
import MainFooter from "./footer/MainFooter";
import { Regions } from "../../models/Region";
import {
  SettingOutlined,
  BarsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
/** Интерфейс для  CoordsLayout*/
interface CoordsLayoutProps {
  coord: ICoord;
  defaultRegions: Regions[];
}
/** Страница погоды города*/
const CoordsLayout: FC<CoordsLayoutProps> = ({
  coord,
  defaultRegions = [],
}) => {
  const { query } = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const { active } = (useContext(Context) as Store).Theme;
  const { uniqTows } = (useContext(Context) as Store).FavouriteTown;
  const setFavouriteTown = (town: ICoord) => {
    uniqTows(town, `/region/${query.id}/${query.coords}`);
  };
  const [searchFiledRegion, setSearchFieldRegion] = useState<string>("");
  const [searchFiledCity, setSearchFieldCity] = useState<string>("");

  const handleChangeRegion = (event: any) => {
    setSearchFieldRegion(event.target.value);
  };

  const handleChangeCities = (event: any) => {
    setSearchFieldCity(event.target.value);
  };
  type MenuItem = Required<MenuProps>["items"][number];

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
  const getMenuItems = (regionFilter = "", cityFilter = "") => {
    let regions = [...defaultRegions];

    if (regionFilter.length > 0) {
      regions = regions.filter((region) =>
        region.name.toLowerCase().includes(regionFilter.toLowerCase()),
      );
    }

    const regionsAndCitiesTree = regions.map((region) => {
      let cities = [...(region.areas ?? [])];

      if (cityFilter.length > 0) {
        cities = cities.filter((city) =>
          city.name.toLowerCase().includes(cityFilter.toLowerCase()),
        );
      }

      return {
        id: region.id,
        name: region.name,
        cities: cities,
      };
    });

    return [
      getItem(
        <Link href="/settings">Настройки</Link>,
        "1",
        <SettingOutlined />,
      ),
      getItem("Регионы", "2", <BarsOutlined />, [
        getItem(
          <Input
            placeholder="Поиск..."
            onChange={handleChangeRegion}
            className={
              active ? styles.lightTheme : styles.region__search_darkTheme
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          />,
          "2-0",
          <></>,
        ),
        ...regionsAndCitiesTree.map((region) =>
          getItem(
            `${region.name}`,
            `2-${region.id}`,
            <UnorderedListOutlined />,
            [
              getItem(
                <Input
                  placeholder="Поиск..."
                  onChange={handleChangeCities}
                  className={
                    active ? styles.lightTheme : styles.region__search_darkTheme
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />,
                `3-${region.id}-1`,
                <></>,
              ),
              ...(region.cities?.map((city) =>
                getItem(
                  <Link href={`/region/${region.id}/${city.name}`}>
                    {city.name}
                  </Link>,
                  `3-${region.id}-${city.id}`,
                ),
              ) ?? []),
            ],
          ),
        ),
      ]),
    ];
  };

  const [items, setItems] = useState<MenuItem[]>(getMenuItems());

  useEffect(() => {
    setItems(getMenuItems(searchFiledRegion, searchFiledCity));
  }, [searchFiledRegion, searchFiledCity]);
  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
        <Sider
          width={250}
          collapsedWidth={60}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["2"]}
            items={items}
            mode="vertical"
          />
        </Sider>
        <Layout>
          <MainHeader title={coord.coords.geo_object.locality.name}>
            <Button type="primary" onClick={() => setFavouriteTown(coord)}>
              Добавить в избранное
            </Button>
          </MainHeader>
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
