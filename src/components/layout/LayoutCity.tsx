import { Input, Layout } from "antd";
import React, { FC, useState } from "react";
import { ICity } from "../../models/City";
import CityCard from "../pages/Region/City/CityCard";
import ContentList from "./content/ContentList";
import HeaderCity from "./header/HeaderCity";

interface LayoutCityProps {
  cities: ICity[];
}
/** Страница городов в регионе*/
const LayoutCity: FC<LayoutCityProps> = ({ cities }) => {
  const [searchFiled, setSearchField] = useState<string>("");

  const filteredCities: ICity[] = cities.filter((city) =>
    city.name.toLowerCase().includes(searchFiled.toLowerCase())
  );

  const handleChange = (event: any) => {
    setSearchField(event.target.value);
  };
  return (
    <Layout>
      <HeaderCity />
      <Input placeholder="Поиск..." onChange={handleChange} />
      <ContentList
        items={filteredCities}
        renderItem={(city) => (
          <CityCard id={city.id} name={city.name} key={city.id} />
        )}
      />
    </Layout>
  );
};

export default LayoutCity;
