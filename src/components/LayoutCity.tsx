import { Layout } from "antd";
import React, { FC } from "react";
import { ICity } from "../models/City";
import CityCard from "./CityCard";
import ContentCity from "./ContentCity";
import HeaderCity from "./HeaderCity";

interface LayoutCityProps {
  cities: ICity[];
}

const LayoutCity: FC<LayoutCityProps> = ({ cities }) => {
  return (
    <Layout>
      <HeaderCity />
      <ContentCity
        items={cities}
        renderItem={(cities) => (
          <CityCard
            id={cities.id}
            name={cities.name}
            type={cities.type}
            zip={cities.zip}
            key={cities.id}
          />
        )}
      />
    </Layout>
  );
};

export default LayoutCity;
