interface ITzinfo {
    name: string,
    abbr: string,
    dst: boolean,
    offset: number,
}

interface IInfo {
    n: boolean,
    geoid: number,
    tzinfo: ITzinfo
}

export interface IWeather {
    now?: number,
    now_dt?: string,
    info?: IInfo
}