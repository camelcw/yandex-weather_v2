import React from "react";
import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import { ITown } from "../../../../models/Town";
import { ICoords } from "../../../../models/Coords";
import CoordsCard from "../../../../components/pages/Region/City/Coords/CoordsCard";
import LayoutCoords from "../../../../components/layout/LayoutCoords";

export default function handler(townTest: any) {
  const { query } = useRouter();
  const valuesArray: ICoords[] = Object.values(townTest);
  return (
    <div>
      <LayoutCoords coords={valuesArray} />
    </div>
  );
}

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
