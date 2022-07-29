import React from "react";
import "../../node_modules/antd/dist/antd.css";
import axios from "axios";
import { IRegion } from "../models/Region";
import LayoutRegion from "../components/layout/LayoutRegion";

/** Главная страница, удивительные данные приходят) */
//https://api.hh.ru/areas/113
const index = (regions: IRegion[]) => {
  const valuesArray = Object.values(regions);
  let regionArray: IRegion[] = [];
  function getArray(valuesArray: any[]) {
    valuesArray.map((region) => {
      regionArray = region;
    });
  }
  getArray(valuesArray);
  return (
    <div>
      <LayoutRegion regions={regionArray} />
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
  const response = await axios.get("https://api.hh.ru/areas/113");

  console.log(response.data.areas);

  const regions = response?.data.areas;
  return {
    props: { regions }, // will be passed to the page component as props
  };
}
