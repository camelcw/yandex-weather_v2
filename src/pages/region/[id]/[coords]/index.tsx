import React, { useContext } from "react";
import { ICoord } from "../../../../models/Coords";
import { observer } from "mobx-react-lite";
import CoordsLayout from "../../../../components/layout/CoordsLayout";
import { fetchCoords } from "../../../../services/fetchCoords";
import {
  COORD_URL,
  REGION_URL,
  TOWN_URL,
  X_Yandex_API_Key,
} from "../../../../utils/constants";
import { fetchRegion } from "../../../../services/fetchRegion";
import { IRegion } from "../../../../models/Region";
import { Context } from "../../../_app";
import { Store } from "../../../../store/store";

/** Получение подробный погоды в городе */
const index = (coord: ICoord) => {
  const { defaultRegions } = (useContext(Context) as Store).DefaultRegions;

  return (
    <div>
      <CoordsLayout
        defaultRegions={defaultRegions.defaultRegions}
        coord={coord}
      />
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
