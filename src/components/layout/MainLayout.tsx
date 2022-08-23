import React, { FC, useContext, useState } from "react";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import theme from "../../styles/Theme.module.scss";
import { Layout } from "antd";
import { Regions } from "../../models/Region";
import MainHeader from "./header/MainHeader";
import MainContent from "./content/MainContent";
import MainFooter from "./footer/MainFooter";
import styles from "../layout/content/Content.module.scss";
import MySider from "./sider/MySider";
import { getMenuItems } from "../../services/getMenuItems";

interface RegionLayoutProps {
  defaultRegions: Regions[];
}

/** Главная страница */
const MainLayout: FC<RegionLayoutProps> = ({ defaultRegions = [] }) => {
  const { active } = (useContext(Context) as Store).Theme;
  const [collapsed, setCollapsed] = useState(false);
  const items = getMenuItems(defaultRegions);

  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
        <MySider
          width={300}
          collapsedWidth={60}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          items={items}
        />
        <Layout style={{ minHeight: "100vh" }}>
          <MainHeader headerTitle="Аналог Яндекс погоды" title="" />
          <MainContent className={styles.content}>
            <MainFooter />
          </MainContent>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
