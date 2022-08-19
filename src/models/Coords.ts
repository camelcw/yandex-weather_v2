/** Интерфейс для фактов */
interface IFact {
    cloudness: number,
    condition: string,
    daytime: string,
    feels_like: number,
    icon: string,
    season: string,
    temp: number,
    soil_temp: number,
    temp_min: number,
}
/** Интерфейс для информации о широте и долготе */
interface IInfo {
    lat: number,
    lon: number,
}
/** Интерфейс для времени суток*/
interface IParts {
    day: IFact,
    evening: IFact,
    morning: IFact,
    night: IFact,
    day_short: IFact,
}
/** Интерфейс для погоды по часам*/
interface IHours {
    hour_ts: number,
    cloudness: number,
    condition: string,
    feels_like: number,
    hour: string,
    icon: string,
    soil_temp: number
    temp: number,
    wind_dir: string,
    wind_gust: number,
    wind_speed: number,
}
/** Интерфейс для подробной погоды*/
interface IForecasts {
    date: string,
    moon_code: number,
    rise_begin: string,
    set_end: string,
    sunrise: string,
    sunset: string,
    week: number,
    date_ts: number,
    hours: IHours[],
    parts: IParts,
    condition: string,
    wind_speed: number,
    pressure_mm: number,
    humidity: number,
    feels_like: number,
    icon: string,
    temp_avg: number,
}
/** Интерфейс вчерашней погоды*/
interface IYesterday {
    temp: number
}
/** Интерфейс для города*/
interface ILocality {
    id: number,
    name: string,
}
/** Интерфейс для региона*/
interface IProvince {
    id: number,
    name: string,
}
/** Интерфейс для геолокации*/
interface IGeo {
    locality: ILocality,
    province: IProvince,
}
/** Интерфейс для погоды в городе*/
export interface ICoords {
    fact: IFact,
    forecasts: IForecasts[],
    parts?: IParts,
    yesterday: IYesterday,
    info?: IInfo,
    now_dt?: string,
    geo_object: IGeo,

}
/** Интерфейс для погоды в городах*/
export interface ICoord{
    coords: ICoords,
}
/** Интерфейс для подробной погоды*/
export interface IForecast {
    forecast: ICoords
}
