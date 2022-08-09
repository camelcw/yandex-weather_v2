import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { IRegion } from "../../../models/Region";
import LayoutCity from "../../../components/layout/LayoutCity";
import { ICity } from "../../../models/City";

const handler = (cities: ICity[]) => {
  const { query } = useRouter();
  console.log(cities);

  const valuesArray = Object.values(cities);
  let cityArray: ICity[] = [];
  function getArray(valuesArray: any[]) {
    valuesArray.map((region) => {
      cityArray = region;
    });
  }
  getArray(valuesArray);

  return (
    <div>
      <LayoutCity cities={cityArray} />
    </div>
  );
};

export default handler;

export async function getServerSideProps(context: any) {
  const response = await axios.get(
    `https://api.hh.ru/areas/${context?.params?.id}`
  );
  const cities = response?.data.areas;
  return {
    props: { cities }, // will be passed to the page component as props
  };
}
