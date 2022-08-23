import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import theme from "../../styles/Theme.module.scss";
import {
  SettingOutlined,
  BarsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { Layout, Menu } from "antd";
import { Regions } from "../../models/Region";
import Link from "next/link";
import MainHeader from "./header/MainHeader";
import MainContent from "./content/MainContent";
import MainFooter from "./footer/MainFooter";
import styles from "../layout/content/Content.module.scss";
import { getItem, MenuItem } from "../../services/getMenuItems";
const { Sider } = Layout;

interface RegionLayoutProps {
  defaultRegions: Regions[];
}

/** Главная страница */
const MainLayout: FC<RegionLayoutProps> = ({ defaultRegions = [] }) => {
  const { active } = (useContext(Context) as Store).Theme;
  const [collapsed, setCollapsed] = useState(false);
  const [searchFiledRegion, setSearchFieldRegion] = useState<string>("");
  const [searchFiledCity, setSearchFieldCity] = useState<string>("");

  const handleChangeRegion = (event: any) => {
    setSearchFieldRegion(event.target.value);
  };

  const handleChangeCities = (event: any) => {
    setSearchFieldCity(event.target.value);
  };

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
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          width={300}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="vertical"
            items={items}
            triggerSubMenuAction={"click"}
          />
        </Sider>
        <Layout style={{ minHeight: "100vh" }}>
          <MainHeader title="" />
          <MainContent className={styles.content}>
            <MainFooter />
          </MainContent>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
