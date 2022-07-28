import React from "react";
import LayoutMain from "../components/LayoutMain";
import "../../node_modules/antd/dist/antd.css";
import axios from "axios";
import { IRegion } from "../models/Region";
import * as https from "https";
import Link from "next/link";
/** Главная страница, удивительные данные приходят) */
const index = (regions: IRegion[]) => {
  const valuesArray = Object.values(regions);
  let regionArray: IRegion[] = [];
  function getArray(valuesArray: any[]) {
    console.log(Object.keys(valuesArray));
    valuesArray.map((region) => {
      regionArray = region;
    });
  }
  getArray(valuesArray);
  return (
    <div>
      <LayoutMain regions={Object.values(regionArray)} />
    </div>
  );
};

export default index;

// export async function getStaticProps(context: any) {
//   const moskow = await fetchWeather(
//     "https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=true"
//   );
//   const kazan = await fetchWeather(
//     "https://api.weather.yandex.ru/v2/forecast?lat=55.796289&lon=49.108795"
//   );
//   const peter = await fetchWeather(
//     "https://api.weather.yandex.ru/v2/forecast?lat=59.93909836&lon=30.31587601"
//   );

//   return {
//     props: { moskow, peter, kazan }, // will be passed to the page component as props
//   };
// }

export async function getStaticProps(context: any) {
  const response = await axios.get<IRegion>(
    "https://api.geotree.ru/search.php?key=xOtdrrGA2BN1&level=1"
  );
  const regions = response?.data;
  return {
    props: { regions }, // will be passed to the page component as props
  };
}
