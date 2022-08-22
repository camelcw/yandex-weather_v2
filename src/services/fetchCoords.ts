import axios, { AxiosRequestConfig } from "axios";
import { Towns } from "../models/Town";

export async function fetchTown(url: string, params: AxiosRequestConfig) {
  try {
    const response = await axios.get(url, {
      params: {
        term: params,
      },
    });
    const data = response?.data;
    return data;
  } catch (e) {
    console.log("Error");
  }
}

export async function fetchCoords(
  townUrl: string,
  paramsTown: AxiosRequestConfig,
  coordUrl: string,
  headers: string,
) {
  try {
    const town = await fetchTown(townUrl, paramsTown);
    const valuesArray: Towns[] = Object.values(town);
    let townObject: Towns = {
      geo_center: {
        lat: "0",
        lon: "0",
      },
      name_display: "",
      area: 0,
    };

    valuesArray.map((tw) => {
      townObject = tw;
    });

    const response = await axios.get(coordUrl, {
      params: {
        lon: townObject.geo_center.lon,
        lat: townObject.geo_center.lat,
      },
      headers: {
        "X-Yandex-API-Key": headers,
      },
    });
    const data = response?.data;
    return data;
  } catch (e) {
    console.log("Error");
  }
}
