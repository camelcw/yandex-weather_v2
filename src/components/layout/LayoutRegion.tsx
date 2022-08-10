import React, { FC, useContext } from "react";
import { Input, Layout } from "antd";
import RegionCard from "../pages/Region/RegionCard";
import { IRegion } from "../../models/Region";
import HeaderRegion from "./header/HeaderRegion";
import ContentList from "./content/ContentList";
import styles from "../../styles/Theme.module.scss";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";

import { useState } from "react";

interface LayoutRegionProps {
  region: IRegion;
}
/** Главный Layout*/
const LayoutRegion: FC<LayoutRegionProps> = ({ region }) => {
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
        <HeaderRegion />
        <Input placeholder="Поиск..." onChange={handleChange} />
        <ContentList
          items={filteredRegions}
          renderItem={(region) => (
            <RegionCard id={region.id} key={region.id} name={region.name} />
          )}
        />
      </Layout>
    </div>
  );
};

export default LayoutRegion;
