import axios from "axios";
import React from "react";
import HeaderCity from "../components/HeaderCity";
import { IWeather } from "../models/Weather";
/** Страница Moskow(пока в разработке) */
const moskow = (weather: IWeather) => {
  console.log(weather);
  return (
    <div>
      <HeaderCity></HeaderCity>
      Moskow
    </div>
  );
};

export default moskow;

export async function getStaticProps(context: any) {
  const response = await axios.get<IWeather>(
    "https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=true",
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
