import { Button, Layout } from "antd";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { IForecast } from "../../models/Coords";
import ForecastCard from "../pages/Region/City/Coords/Forecast/ForecastCard";

import MainHeader from "./header/MainHeader";
import MainContent from "./content/MainContent";
import styles from "../layout/content/Content.module.scss";
import { Regions } from "../../models/Region";

import MySider from "./sider/MySider";
import { getMenuItems } from "../../services/getMenuItems";

/** Интерфейс для  ForecastLayout*/
interface ForecastLayoutProps {
  forecast: IForecast;
  defaultRegions: Regions[];
}

/** Страница подробной погоды*/
const ForecastLayout: FC<ForecastLayoutProps> = ({
  forecast,
  defaultRegions = [],
}) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const items = getMenuItems(defaultRegions);
  return (
    <div>
      <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
        <MySider
          width={150}
          collapsedWidth={60}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          items={items}
        />
        <Layout>
          <MainHeader
            headerTitle="Подробный прогноз погоды в городе"
            title="Подробный прогноз погоды на 7 дней"
          >
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
