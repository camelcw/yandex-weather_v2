import React, { useContext } from "react";
import axios from "axios";
import { ITown } from "../../../../models/Town";
import { ICoord } from "../../../../models/Coords";
import { Context } from "../../../_app";
import { Store } from "../../../../store/store";
import { observer } from "mobx-react-lite";
import CoordsLayout from "../../../../components/layout/CoordsLayout";

/** Получение подробный погоды в городе */
const index = (coord: ICoord) => {
  const { towns } = (useContext(Context) as Store).FavouriteTown;
  return (
    <div>
      <CoordsLayout coord={coord} coords={towns} />
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
