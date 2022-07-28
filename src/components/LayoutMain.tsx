import React, { FC, useId } from "react";
import { Layout } from "antd";
import HeaderMain from "../components/HeaderMain";
import ContentMain from "../components/ContentMain";
import RegionCard from "../components/RegionCard";
import { IRegion } from "../models/Region";

interface LayoutMainProps {
  regions: IRegion[];
}
/** Главный Layout  */
const LayoutMain: FC<LayoutMainProps> = ({ regions }) => {
  return (
    <Layout className="layout">
      <HeaderMain />
      <ContentMain
        items={regions}
        renderItem={(region) => (
          <RegionCard key={region.area} region={region} />
        )}
      />
    </Layout>
  );
};

export default LayoutMain;
