import { Header } from "antd/lib/layout/layout";
import React from "react";
import { IRegion } from "../models/Region";

const HeaderRegion = (region: IRegion) => {
  return (
    <Header>
      <h2>Погода в {region?.value}</h2>
    </Header>
  );
};

export default HeaderRegion;
