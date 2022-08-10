import { ICity } from "./City";

export interface Regions {
    name: string;
    id: string ;
    cities?: ICity[];
}

export interface IRegion {
    regions: Regions[]
}