import { Button, Input, Layout, Menu, MenuProps } from "antd";
import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import SettingsCard from "../pages/settings/SettingsCard";
import styles from "./SettingsLayout.module.scss";
import theme from "../../styles/Theme.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Sider from "antd/lib/layout/Sider";
import MainHeader from "./header/MainHeader";
import MainContent from "./content/MainContent";
import { observer } from "mobx-react-lite";
import { Regions } from "../../models/Region";
import { BarsOutlined, UnorderedListOutlined } from "@ant-design/icons";

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
interface RegionLayoutProps {
  defaultRegions: Regions[];
}
/** Страница настроек */
const SettingsLayout: FC<RegionLayoutProps> = ({ defaultRegions = [] }) => {
  const router = useRouter();
  const { clearTowns, clearAll, towns } = (useContext(Context) as Store)
    .FavouriteTown;
  const { active, Toggle } = (useContext(Context) as Store).Theme;
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
      getItem("Регионы", "2", <BarsOutlined />, [
        getItem(
          <Input
            placeholder="Поиск..."
            onChange={handleChangeRegion}
            className={
              active ? theme.lightTheme : theme.region__search_darkTheme
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
                    active ? theme.lightTheme : theme.region__search_darkTheme
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
    <div>
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
            defaultSelectedKeys={["1"]}
            items={items}
            mode="vertical"
          />
        </Sider>
        <Layout>
          <MainHeader title="Погода в избранных городах">
            <Button type="primary" ghost onClick={() => router.back()}>
              Назад
            </Button>
          </MainHeader>
          <div
            className={
              active ? styles.layout__btn : theme.settings__layout_darkTheme
            }
          >
            <Button type={active ? "default" : "primary"} onClick={clearAll}>
              Очистить всё
            </Button>
            <Button type={active ? "default" : "primary"} onClick={Toggle}>
              Сменить тему
            </Button>
          </div>

          <MainContent className="">
            {towns.map((town, index) => (
              <div key={index} className={styles.layout}>
                <SettingsCard index={index} town={town} />
                <Button
                  type={active ? "default" : "primary"}
                  onClick={() => clearTowns(town)}
                >
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
