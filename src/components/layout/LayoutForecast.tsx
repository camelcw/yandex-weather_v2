import { Layout } from "antd";
import React, { FC } from "react";
import { ICoords } from "../../models/Coords";
import ForecastCard from "../pages/Region/City/Coords/Forecast/ForecastCard";
import ContentList from "./content/ContentList";
import HeaderForecast from "./header/HeaderForecast";

interface LayoutForecastProps {
  coords: ICoords[];
}
/** Страница подробной погоды*/
const LayoutForecast: FC<LayoutForecastProps> = ({ coords }) => {
  return (
    <Layout>
      <HeaderForecast />
      <ContentList
        items={coords}
        renderItem={(coord) => (
          <ForecastCard
            key={coord.geo_object.locality.id}
            forecasts={coord.forecasts}
            yesterday={coord.yesterday}
            geo_object={coord.geo_object}
            fact={coord.fact}
          />
        )}
      />
    </Layout>
  );
};

export default LayoutForecast;
