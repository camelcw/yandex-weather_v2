import React from "react";
import { IForecast } from "../../../../../models/Coords";
import { observer } from "mobx-react-lite";
import ForecastLayout from "../../../../../components/layout/ForecastLayout";
import { fetchCoords } from "../../../../../services/fetchCoords";
import {
  COORD_URL,
  TOWN_URL,
  X_Yandex_API_Key,
} from "../../../../../utils/constants";
/** Страница подробный погоды */
const index = (forecast: IForecast) => {
  return (
    <div>
      <ForecastLayout forecast={forecast} />
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
