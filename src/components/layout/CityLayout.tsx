import { Input, Layout } from "antd";
import React, { FC, useContext, useState } from "react";
import { ICity } from "../../models/City";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import CityCard from "../pages/Region/City/CityCard";
import styles from "../../styles/Theme.module.scss";
import CityHeader from "./header/CityHeader";
import RegionAndCityContent from "./content/RegionAndCityContent";
/** Интерфейс для  CityLayout*/
interface CityLayoutProps {
  cities: ICity;
}
/** Страница городов в регионе*/
const CityLayout: FC<CityLayoutProps> = ({ cities }) => {
  const { active } = (useContext(Context) as Store).Theme;
  const [searchFiled, setSearchField] = useState<string>("");

  const filteredCities = cities.cities.filter((city) =>
    city.name.toLowerCase().includes(searchFiled.toLowerCase())
  );
  const handleChange = (event: any) => {
    setSearchField(event.target.value);
  };

  return (
    <Layout>
      <CityHeader />
      <Input
        placeholder="Поиск..."
        onChange={handleChange}
        className={active ? styles.lightTheme : styles.region__search_darkTheme}
      />
      <RegionAndCityContent
        items={filteredCities}
        renderItem={(city) => (
          <CityCard id={city.id} name={city.name} key={city.id} />
        )}
      />
    </Layout>
  );
};

export default CityLayout;
