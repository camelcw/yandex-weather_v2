import React, { lazy, Suspense, useContext } from "react";
import { ICoord } from "../../../../models/Coords";
import { observer } from "mobx-react-lite";
import { fetchCoords } from "../../../../services/fetchCoords";
import {
  COORD_URL,
  TOWN_URL,
  X_Yandex_API_Key,
} from "../../../../utils/constants";
import { Context } from "../../../_app";
import { Store } from "../../../../store/store";
import MyLoader from "../../../../components/layout/loader/MyLoader";

const CoordsLayout = lazy(
  () => import("../../../../components/layout/CoordsLayout"),
);
/** Получение подробный погоды в городе */
const index = (coord: ICoord) => {
  const { defaultRegions } = (useContext(Context) as Store).DefaultRegions;

  return (
    <div>
      <Suspense fallback={<MyLoader />}>
        <CoordsLayout
          defaultRegions={defaultRegions.defaultRegions}
          coord={coord}
        />
      </Suspense>
    </div>
  );
};

export default observer(index);
/** Получение данных о погоде в городе по координатам*/
export async function getServerSideProps(context: any) {
  const coords = await fetchCoords(
    TOWN_URL,
    context.params.coords,
    COORD_URL,
    X_Yandex_API_Key,
  );
  return {
    props: {
      coords,
    },
  };
}
