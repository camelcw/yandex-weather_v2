/** Интерфейс для города */
export interface City {
    id: string;
    name: string;
}
/** Интерфейс для городов */
export interface ICity {
    cities: City[]
}