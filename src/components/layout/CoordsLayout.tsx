import { Layout } from "antd";
import React, { FC } from "react";
import { ICoord } from "../../models/Coords";
import CoordsCard from "../pages/Region/City/Coords/CoordsCard";
import CoordsAndForecastContent from "./content/CoordsAndForecastContent";
import CoordsFooter from "./footer/CoordsFooter";
import CoordsHeader from "./header/CoordsHeader";
/** Интерфейс для  CoordsLayout*/
interface CoordsLayoutProps {
  coords: ICoord[];
  coord: ICoord;
}
/** Страница погоды города*/
const CoordsLayout: FC<CoordsLayoutProps> = ({ coords, coord }) => {
  return (
    <Layout>
      <CoordsHeader tw={coord} town={coords}></CoordsHeader>
      <CoordsAndForecastContent>
        <CoordsCard
          key={coord.coords.geo_object.locality.id}
          forecasts={coord.coords.forecasts}
          yesterday={coord.coords.yesterday}
          geo_object={coord.coords.geo_object}
          fact={coord.coords.fact}
        />
      </CoordsAndForecastContent>
      <CoordsFooter />
    </Layout>
  );
};

export default CoordsLayout;
