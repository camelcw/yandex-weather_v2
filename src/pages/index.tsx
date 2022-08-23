import React, { useContext } from "react";
import "../../node_modules/antd/dist/antd.css";
import { IRegion } from "../models/Region";
import { observer } from "mobx-react-lite";
import MainLayout from "../components/layout/MainLayout";
import { fetchRegion } from "../services/fetchRegion";
import { REGION_URL } from "../utils/constants";
import { Context } from "./_app";
import { Store } from "../store/store";

/** Главная страница */
const index = observer((defaultRegions: IRegion) => {
  const { setDefaultRegion } = (useContext(Context) as Store).DefaultRegions;
  setDefaultRegion(defaultRegions);
  return (
    <div>
      <MainLayout defaultRegions={defaultRegions.defaultRegions} />
    </div>
  );
});

export default index;
/** Получение данных о регионах */
export async function getStaticProps(context: any) {
  const defaultRegions = await fetchRegion(REGION_URL);
  return {
    props: { defaultRegions: defaultRegions },
  };
}
