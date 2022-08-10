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

interface IInfo {
    lat: number,
    lon: number,
}

interface IParts {
    day: IFact,
    evening: IFact,
    morning: IFact,
    night: IFact,
    day_short: IFact,
}

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

interface IYesterday {
    temp: number
}

interface ILocality {
    id: number,
    name: string,
}

interface IProvince {
    id: number,
    name: string,
}

interface IGeo {
    locality: ILocality,
    province: IProvince,
}

export interface ICoords {
    fact: IFact,
    forecasts: IForecasts[],
    parts?: IParts,
    yesterday: IYesterday,
    info?: IInfo,
    now_dt?: string,
    geo_object: IGeo,

}

export interface ICoord{
    coords: ICoords,
}

export interface IForecast {
    forecast: ICoords
}
