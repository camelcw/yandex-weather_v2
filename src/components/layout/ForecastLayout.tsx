import { Layout } from "antd";
import React, { FC } from "react";
import { IForecast } from "../../models/Coords";
import ForecastCard from "../pages/Region/City/Coords/Forecast/ForecastCard";
import CoordsAndForecastContent from "./content/CoordsAndForecastContent";
import ForecastHeader from "./header/ForecastHeader";
/** Интерфейс для  ForecastLayout*/
interface ForecastLayoutProps {
  forecast: IForecast;
}
/** Страница подробной погоды*/
const ForecastLayout: FC<ForecastLayoutProps> = ({ forecast }) => {
  console.log(forecast.forecast.now_dt);
  return (
    <Layout>
      <ForecastHeader />
      <CoordsAndForecastContent>
        <ForecastCard
          key={forecast.forecast.geo_object.locality.id}
          forecasts={forecast.forecast.forecasts}
          yesterday={forecast.forecast.yesterday}
          geo_object={forecast.forecast.geo_object}
          fact={forecast.forecast.fact}
        />
      </CoordsAndForecastContent>
    </Layout>
  );
};

export default ForecastLayout;
