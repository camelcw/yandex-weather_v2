import React, { FC, useContext, useState } from "react";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import theme from "../../styles/Theme.module.scss";
import {
  SettingOutlined,
  BarsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Input, MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { IRegion, Regions } from "../../models/Region";
import Link from "next/link";
import MainHeader from "./header/MainHeader";
import MainContent from "./content/MainContent";
import MainFooter from "./footer/MainFooter";
import styles from "../../styles/Content.module.scss";
import { City } from "../../models/City";

const { Sider } = Layout;

interface RegionLayoutProps {
  region: IRegion;
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

const MainLayout: FC<RegionLayoutProps> = ({ region }) => {
  const { active } = (useContext(Context) as Store).Theme;
  const [collapsed, setCollapsed] = useState(false);
  const [searchFiledRegion, setSearchFieldRegion] = useState<string>("");
  const [searchFiledCity, setSearchFieldCity] = useState<string>("");

  const filteredRegions = region.regions.filter((reg) =>
    reg.name.toLowerCase().includes(searchFiledRegion.toLowerCase()),
  );
  // const filteredCities: City[] = filteredRegions.map((reg) =>
  //   reg.areas?.filter((city) =>
  //     city.name.toLowerCase().includes(searchFiledCity.toLowerCase()),
  //   ),
  // );
  const handleChangeRegion = (event: any) => {
    setSearchFieldRegion(event.target.value);
  };
  const handleChangeCities = (event: any) => {
    setSearchFieldCity(event.target.value);
  };

  const items: MenuItem[] = [
    getItem(<Link href="/settings">Настройки</Link>, "1", <SettingOutlined />),
    getItem("Регионы", "sub1", <BarsOutlined />, [
      getItem(
        "Search",
        "2342",
        <Input
          placeholder="Поиск..."
          onChange={handleChangeRegion}
          className={
            active ? styles.lightTheme : styles.region__search_darkTheme
          }
        />,
        filteredRegions.slice(0, 10).map((reg) =>
          getItem(`${reg.name}`, `${reg.id}`, <UnorderedListOutlined />, [
            getItem(
              "Поиск...",
              "123124",
              <Input
                placeholder="Поиск..."
                onChange={handleChangeCities}
                className={
                  active ? styles.lightTheme : styles.region__search_darkTheme
                }
              />,
              reg.areas?.map((city) =>
                getItem(
                  <Link href={`/region/${reg.id}/${city?.name}`}>
                    {city?.name}
                  </Link>,
                  `${city?.id}`,
                ),
              ),
            ),
          ]),
        ),
      ),
    ]),
  ];
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
            mode="inline"
            items={items}
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
