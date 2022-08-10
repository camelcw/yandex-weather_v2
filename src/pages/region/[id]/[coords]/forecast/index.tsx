import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ITown } from "../../../../../models/Town";
import { ICoord, ICoords, IForecast } from "../../../../../models/Coords";
import LayoutForecast from "../../../../../components/layout/LayoutForecast";
import { observer } from "mobx-react-lite";
/** Страница подробный погоды */
const index = (forecast: IForecast) => {
  return (
    <div>
      <LayoutForecast forecast={forecast} />
    </div>
  );
};

export default observer(index);
/** Получение данных о подробной погоде в городе */
export async function getServerSideProps(context: any) {
  //Запрос на получение координат города
  const response = await axios.get(
    "https://api.geotree.ru/search.php?key=xOtdrrGA2BN1&level=4&limit=1",
    {
      params: {
        term: context.params.coords,
      },
    }
  );

  const town = response.data;
  // Попробуй изменить получение данных
  const valuesArray = Object.values(town);
  let townObject: ITown = {
    geo_center: {
      lat: "0",
      lon: "0",
    },
    name_display: "",
    area: 0,
  };
  function getArray(valuesArray: any[]) {
    valuesArray.map((tw) => {
      townObject = tw;
    });
  }
  getArray(valuesArray);
  //Запрос на подробную погоду по координатам
  const responseForecast = await axios.get(
    "https://api.weather.yandex.ru/v2/forecast",
    {
      params: {
        lon: townObject.geo_center.lon,
        lat: townObject.geo_center.lat,
      },
      headers: {
        "X-Yandex-API-Key": "9aaa4334-f2ce-4dc2-b14d-d0b858aeb282",
      },
    }
  );

  const forecast = responseForecast.data;

  return {
    props: { forecast }, // will be passed to the page component as props
  };
}
