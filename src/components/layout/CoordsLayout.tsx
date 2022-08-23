import { Button, Layout } from "antd";
import { useRouter } from "next/router";
import React, { FC, useContext, useState } from "react";
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
import MySider from "./sider/MySider";
import { getMenuItems } from "../../services/getMenuItems";
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
  const items = getMenuItems(defaultRegions);
  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
        <MySider
          width={250}
          collapsedWidth={60}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          items={items}
        />
        <Layout>
          <MainHeader headerTitle='Погода в городе' title={coord.coords.geo_object.locality.name}>
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
