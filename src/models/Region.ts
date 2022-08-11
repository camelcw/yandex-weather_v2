import { ICity } from "./City";
/** Интерфейс для погоды в регионе*/
export interface Regions {
    name: string;
    id: string ;
    cities?: ICity[];
}
/** Интерфейс для погоды в регионах*/
export interface IRegion {
    regions: Regions[]
}