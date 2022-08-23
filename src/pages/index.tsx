import React, { useContext, lazy, Suspense } from "react";
import "../../node_modules/antd/dist/antd.css";
import { IRegion } from "../models/Region";
import { observer } from "mobx-react-lite";
import { fetchRegion } from "../services/fetchRegion";
import { REGION_URL } from "../utils/constants";
import { Context } from "./_app";
import { Store } from "../store/store";
import MyLoader from "../components/layout/loader/MyLoader";

const MainLayout = lazy(() => import("../components/layout/MainLayout"));

/** Главная страница */
const index = observer((defaultRegions: IRegion) => {
  const { setDefaultRegion } = (useContext(Context) as Store).DefaultRegions;
  setDefaultRegion(defaultRegions);
  return (
    <div>
      <Suspense fallback={<MyLoader />}>
        <MainLayout defaultRegions={defaultRegions.defaultRegions} />
      </Suspense>
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
