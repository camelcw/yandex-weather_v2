import { City, ICity } from "./City";
/** Интерфейс для погоды в регионе*/
export interface Regions {
  name: string;
  id: string;
  areas?: City[];
}
/** Интерфейс для погоды в регионах*/
export interface IRegion {
  areas: IRegion;
  regions: Regions[];
}
