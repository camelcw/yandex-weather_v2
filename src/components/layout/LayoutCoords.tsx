import { Layout } from "antd";
import React, { FC } from "react";
import { ICoords } from "../../models/Coords";
import CoordsCard from "../pages/Region/City/Coords/CoordsCard";
import ContentList from "./content/ContentList";
import HeaderCoords from "./header/HeaderCoords";

interface LayoutCoordsProps {
  coords: ICoords[];
}

const LayoutCoords: FC<LayoutCoordsProps> = ({ coords }) => {
  return (
    <Layout>
      <HeaderCoords></HeaderCoords>
      <ContentList
        items={coords}
        renderItem={(coord) => (
          <CoordsCard
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

export default LayoutCoords;
