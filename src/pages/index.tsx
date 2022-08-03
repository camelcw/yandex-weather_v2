import React from "react";
import "../../node_modules/antd/dist/antd.css";
import axios from "axios";
import { IRegion } from "../models/Region";
import LayoutRegion from "../components/layout/LayoutRegion";

/** Главная страница */
const index = (regions: IRegion[]) => {
  //Попробуй изменить получение данных
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
/** Получение данных о регионах */
export async function getStaticProps(context: any) {
  const response = await axios.get("https://api.hh.ru/areas/113");

  console.log(response.data.areas);

  const regions = response?.data.areas;
  return {
    props: { regions },
  };
}
