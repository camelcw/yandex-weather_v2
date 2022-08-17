/** Интерфейс для геолокации*/
interface IGeoCenter {
  lon: string;
  lat: string;
}
/** Интерфейс для погоды в городе*/
export interface Towns {
  geo_center: IGeoCenter;
  name_display: string;
  area: number;
}

export interface ITown {
  town: Towns[];
}
