import React, { useContext } from "react";
import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import { ITown } from "../../../../models/Town";
import { ICoord, ICoords } from "../../../../models/Coords";
import CoordsCard from "../../../../components/pages/Region/City/Coords/CoordsCard";
import LayoutCoords from "../../../../components/layout/LayoutCoords";
import { Context } from "../../../_app";
import { Store } from "../../../../store/store";
import { observer } from "mobx-react-lite";
/** Получение подробный погоды в городе */
const index = (coord: ICoord) => {
  const { query } = useRouter();

  const { towns } = (useContext(Context) as Store).FavouriteTown;

  // const valuesArray: ICoord[] = Object.values(coords);
  console.log(towns);
  return (
    <div>
      <LayoutCoords coord={coord} coords={towns} />
    </div>
  );
};

export default observer(index);
/** Получение данных о погоде в городе по координатам*/
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
  const responseCoords = await axios.get(
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
  const coords = responseCoords.data;

  return {
    props: { coords },
  };
}
