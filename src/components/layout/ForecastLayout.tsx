import { Button, Input, Layout, Menu, MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect, useState } from "react";
import { IForecast } from "../../models/Coords";
import ForecastCard from "../pages/Region/City/Coords/Forecast/ForecastCard";
import {
  SettingOutlined,
  BarsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";
import MainHeader from "./header/MainHeader";
import MainContent from "./content/MainContent";
import styles from "../../styles/Content.module.scss";
import { Regions } from "../../models/Region";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";

/** Интерфейс для  ForecastLayout*/
interface ForecastLayoutProps {
  forecast: IForecast;
  defaultRegions: Regions[];
}

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
/** Страница подробной погоды*/
const ForecastLayout: FC<ForecastLayoutProps> = ({
  forecast,
  defaultRegions = [],
}) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [searchFiledRegion, setSearchFieldRegion] = useState<string>("");
  const [searchFiledCity, setSearchFieldCity] = useState<string>("");
  const { active } = (useContext(Context) as Store).Theme;

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
    <div>
      <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
        <Sider
          width={150}
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
          <MainHeader title="Подробный прогноз погоды на 7 дней">
            <Button type="primary" ghost onClick={() => router.back()}>
              Назад
            </Button>
          </MainHeader>
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
