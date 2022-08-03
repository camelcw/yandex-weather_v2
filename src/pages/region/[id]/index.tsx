import React, { useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { IRegion } from "../../../models/Region";
import LayoutCity from "../../../components/layout/LayoutCity";
import { ICity } from "../../../models/City";
import { Context } from "../../_app";
import { Store } from "../../../store/store";
/** Страница города */
const index = (cities: ICity[]) => {
  //Попробуй изменить получение данных
  const valuesArray = Object.values(cities);
  let cityArray: ICity[] = [];
  function getArray(valuesArray: any[]) {
    valuesArray.map((region) => {
      cityArray = region;
    });
  }
  getArray(valuesArray);

  const { town } = (useContext(Context) as Store).FavouriteTown;
  console.log(town);

  return (
    <div>
      <LayoutCity cities={cityArray} />
    </div>
  );
};

export default index;
/** Получение данных о погоде в городе */
export async function getServerSideProps(context: any) {
  const response = await axios.get(
    `https://api.hh.ru/areas/${context?.params?.id}`
  );
  const cities = response?.data.areas;
  return {
    props: { cities },
  };
}
