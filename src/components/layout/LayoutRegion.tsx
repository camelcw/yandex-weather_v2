import React, { FC } from "react";
import { Layout } from "antd";
import RegionCard from "../pages/Region/RegionCard";
import { IRegion } from "../../models/Region";
import ContentRegion from "./content/ContentRegion";
import HeaderRegion from "./header/HeaderRegion";

interface LayoutRegionProps {
  regions: IRegion[];
  defaultValue?: string;
  onChange?: (event: any) => void;
  value?: string;
}
/** Главный Layout,  не подгружает компоненты(  */
const LayoutRegion: FC<LayoutRegionProps> = ({
  regions,
  defaultValue,
  onChange,
  value,
}) => {
  return (
    <Layout className="layout">
      <HeaderRegion />
      {/* <MySelect defaultValue={defaultValue} onChange={onChange} value={value} /> */}
      <ContentRegion
        items={regions}
        renderItem={(region) => (
          <RegionCard id={region.id} key={region.id} name={region.name} />
        )}
      />
    </Layout>
  );
};

export default LayoutRegion;
