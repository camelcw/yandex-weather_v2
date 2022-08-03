import React, { FC } from "react";
import { Layout } from "antd";
import RegionCard from "../pages/Region/RegionCard";
import { IRegion } from "../../models/Region";
import HeaderRegion from "./header/HeaderRegion";
import ContentList from "./content/ContentList";

interface LayoutRegionProps {
  regions: IRegion[];
}
/** Главный Layout*/
const LayoutRegion: FC<LayoutRegionProps> = ({ regions }) => {
  return (
    <Layout className="layout">
      <HeaderRegion />
      <ContentList
        items={regions}
        renderItem={(region) => (
          <RegionCard id={region.id} key={region.id} name={region.name} />
        )}
      />
    </Layout>
  );
};

export default LayoutRegion;
