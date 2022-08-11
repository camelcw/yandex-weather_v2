import React from "react";
import axios from "axios";
import { ICity } from "../../../models/City";
import { observer } from "mobx-react-lite";
import CityLayout from "../../../components/layout/CityLayout";

/** Страница города */
const index = observer((cities: ICity) => {
  return (
    <div>
      <CityLayout cities={cities} />
    </div>
  );
});

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
