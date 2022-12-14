import axios from "axios";
import { IRegion } from "../models/Region";
/** Функция для запроса на получение регионов */
export async function fetchRegion(url: string) {
  try {
    const response = await axios.get(url);
    const data: IRegion = response?.data?.areas;
    return data;
  } catch (e) {
    console.log("Error");
  }
}
