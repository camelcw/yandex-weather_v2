import { Layout } from "antd";
import React, { FC } from "react";
import { ICoord } from "../../models/Coords";
import CoordsCard from "../pages/Region/City/Coords/CoordsCard";
import FooterCoords from "./footer/FooterCoords";
import HeaderCoords from "./header/HeaderCoords";
import ContentPage from "./content/ContentPage";

interface LayoutCoordsProps {
  coords: ICoord[];
  coord: ICoord;
}
/** Страница погоды города*/
const LayoutCoords: FC<LayoutCoordsProps> = ({ coords, coord }) => {
  return (
    <Layout>
      <HeaderCoords tw={coord} town={coords}></HeaderCoords>
      <ContentPage>
        <CoordsCard
          key={coord.coords.geo_object.locality.id}
          forecasts={coord.coords.forecasts}
          yesterday={coord.coords.yesterday}
          geo_object={coord.coords.geo_object}
          fact={coord.coords.fact}
        />
      </ContentPage>
      <FooterCoords />
    </Layout>
  );
};

export default LayoutCoords;
