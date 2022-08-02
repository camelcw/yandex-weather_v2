import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ITown } from "../../../../../models/Town";
import { ICoords } from "../../../../../models/Coords";
import LayoutForecast from "../../../../../components/layout/LayoutForecast";

const handler = (townTest: any) => {
  const { query } = useRouter();
  const valuesArray: ICoords[] = Object.values(townTest);

  console.log(valuesArray);

  return (
    <div>
      <LayoutForecast coords={valuesArray} />
    </div>
  );
};

export default handler;

export async function getServerSideProps(context: any) {
  const response = await axios.get(
    "https://api.geotree.ru/search.php?key=xOtdrrGA2BN1&level=4&limit=1",
    {
      params: {
        term: context.params.coords,
      },
    }
  );

  const town = response.data;

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

  const responseTown = await axios.get(
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

  const townTest = responseTown.data;

  return {
    props: { townTest }, // will be passed to the page component as props
  };
}
