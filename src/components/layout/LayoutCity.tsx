import { Layout } from "antd";
import React, { FC } from "react";
import { ICity } from "../../models/City";
import CityCard from "../pages/Region/City/CityCard";
import ContentList from "./content/ContentList";
import HeaderCity from "./header/HeaderCity";

interface LayoutCityProps {
  cities: ICity[];
}

const LayoutCity: FC<LayoutCityProps> = ({ cities }) => {
  return (
    <Layout>
      <HeaderCity />
      <ContentList
        items={cities}
        renderItem={(cities) => (
          <CityCard id={cities.id} name={cities.name} key={cities.id} />
        )}
      />
    </Layout>
  );
};

export default LayoutCity;
