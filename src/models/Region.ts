import { ICity } from "./City";

export interface IRegion {
    name: string;
    id: string ;
    cities?: ICity[];
}