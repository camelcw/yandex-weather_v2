import axios from "axios";
import React from "react";
import LayoutCity from "../../components/LayoutCity";
import { ICity } from "../../models/City";

const tatarstan = (cities: ICity[]) => {
  const helperCitiesArray = Object.values(cities);
  let citiesArray: ICity[] = [];
  function getCity(helperCitiesArray: ICity[]) {
    helperCitiesArray.map((helperCityArray) => {
      const secondHelperCityArray2 = Object.values(helperCityArray);
      secondHelperCityArray2.map((secondHelperCityArray) => {
        citiesArray = secondHelperCityArray;
      });
    });
  }
  getCity(helperCitiesArray);
  return (
    <div>
      <LayoutCity cities={citiesArray} />
      Tatarstan
    </div>
  );
};

export default tatarstan;

export async function getStaticProps(context: any) {
  const response = await axios.get<ICity>(
    "https://kladr-api.ru/api.php?contentType=city&regionId=1600000000000&typeCode=1"
  );
  const cities = response?.data;
  return {
    props: { cities }, // will be passed to the page component as props
  };
}
