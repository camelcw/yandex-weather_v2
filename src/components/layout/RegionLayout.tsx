import React, { FC, useContext } from "react";
import { Input, Layout } from "antd";
import RegionCard from "../pages/Region/RegionCard";
import { IRegion } from "../../models/Region";
import styles from "../../styles/Theme.module.scss";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import { useState } from "react";
import RegionHeader from "./header/RegionHeader";
import RegionAndCityContent from "./content/RegionAndCityContent";

/** Интерфейс для  RegionLayout*/
interface RegionLayoutProps {
  region: IRegion;
}
/** Главный Layout*/
const RegionLayout: FC<RegionLayoutProps> = ({ region }) => {
  const { active } = (useContext(Context) as Store).Theme;
  const [searchFiled, setSearchField] = useState<string>("");

  const filteredRegions = region.regions.filter((reg) =>
    reg.name.toLowerCase().includes(searchFiled.toLowerCase())
  );
  const handleChange = (event: any) => {
    setSearchField(event.target.value);
  };

  return (
    <div className={active ? styles.lightTheme : styles.darkTheme}>
      <Layout className="layout">
        <RegionHeader />
        <Input
          placeholder="Поиск..."
          onChange={handleChange}
          className={
            active ? styles.lightTheme : styles.region__search_darkTheme
          }
        />
        <RegionAndCityContent
          items={filteredRegions}
          renderItem={(region) => (
            <RegionCard id={region.id} key={region.id} name={region.name} />
          )}
        />
      </Layout>
    </div>
  );
};

export default RegionLayout;
