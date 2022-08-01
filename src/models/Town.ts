interface IGeoCenter {
    lon: string,
    lat: string,
}

export interface ITown {
    geo_center: IGeoCenter,
    name_display: string,
    area: number,
}