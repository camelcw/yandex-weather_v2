import React, { lazy, Suspense, useContext } from "react";
import { IForecast } from "../../../../../models/Coords";
import { observer } from "mobx-react-lite";
import { fetchCoords } from "../../../../../services/fetchCoords";
import {
  COORD_URL,
  TOWN_URL,
  X_Yandex_API_Key,
} from "../../../../../utils/constants";
import { Context } from "../../../../_app";
import { Store } from "../../../../../store/store";
import MyLoader from "../../../../../components/layout/loader/MyLoader";

const ForecastLayout = lazy(
  () => import("../../../../../components/layout/ForecastLayout"),
);
/** Страница подробный погоды */
const index = (forecast: IForecast) => {
  const { defaultRegions } = (useContext(Context) as Store).DefaultRegions;
  return (
    <div>
      <Suspense fallback={<MyLoader />}>
        <ForecastLayout
          defaultRegions={defaultRegions.defaultRegions}
          forecast={forecast}
        />
      </Suspense>
    </div>
  );
};

export default observer(index);
/** Получение данных о подробной погоде в городе */
export async function getServerSideProps(context: any) {
  const forecast = await fetchCoords(
    TOWN_URL,
    context.params.coords,
    COORD_URL,
    X_Yandex_API_Key,
  );

  return {
    props: { forecast },
  };
}
