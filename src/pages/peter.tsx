import axios from "axios";
import React from "react";
import HeaderCity from "../components/layout/header/HeaderCity";
import { IWeather } from "../models/Weather";
/** Страница Saint-Peterburg(пока в разработке) */
const peter = (weather: IWeather) => {
  console.log(weather);
  return (
    <div>
      <HeaderCity></HeaderCity>
      Peter
    </div>
  );
};

export default peter;

export async function getStaticProps(context: any) {
  const response = await axios.get<IWeather>(
    "https://api.weather.yandex.ru/v2/forecast?lat=59.93909836&lon=30.31587601",
    {
      headers: {
        "X-Yandex-API-Key": "9aaa4334-f2ce-4dc2-b14d-d0b858aeb282",
      },
    }
  );
  const weather: IWeather = response?.data;
  return {
    props: { weather }, // will be passed to the page component as props
  };
}
