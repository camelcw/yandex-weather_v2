import axios from "axios";
import { IWeather } from "../models/Weather";

/** Сервис для запросов погоды по URl*/
export async function fetchWeather(URL: string) {
    const response = await fetch(
        URL,
        {
          headers: {
            "X-Yandex-API-Key": "9aaa4334-f2ce-4dc2-b14d-d0b858aeb282",
          },
        }
      );
      const data  = await response.json();
      return data;
}