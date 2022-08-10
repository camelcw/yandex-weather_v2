import { Layout } from "antd";
import React, { FC } from "react";
import { ICoord, ICoords, IForecast } from "../../models/Coords";
import ForecastCard from "../pages/Region/City/Coords/Forecast/ForecastCard";
import ContentList from "./content/ContentList";
import ContentPage from "./content/ContentPage";
import HeaderForecast from "./header/HeaderForecast";

interface LayoutForecastProps {
  forecast: IForecast;
}
/** Страница подробной погоды*/
const LayoutForecast: FC<LayoutForecastProps> = ({ forecast }) => {
  console.log(forecast.forecast.now_dt);
  return (
    <Layout>
      <HeaderForecast />
      <ContentPage>
        <ForecastCard
          key={forecast.forecast.geo_object.locality.id}
          forecasts={forecast.forecast.forecasts}
          yesterday={forecast.forecast.yesterday}
          geo_object={forecast.forecast.geo_object}
          fact={forecast.forecast.fact}
        />
      </ContentPage>
    </Layout>
  );
};

export default LayoutForecast;
