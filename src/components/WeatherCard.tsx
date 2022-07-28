import { Card } from "antd";
import React from "react";
import { IWeather } from "../models/Weather";
/** Карта для отображения погоды(пока в разработке) */
const WeatherCard = (moskow: IWeather, peter: IWeather, kazan: IWeather) => {
  return (
    <Card title="Прогноз погоды" bordered={false} style={{ width: 300 }}>
      <div>
        <p>{moskow?.info?.geoid}</p>
        <p>{kazan?.info?.geoid}</p>
        <p>{peter?.info?.geoid}</p>
      </div>
    </Card>
  );
};

export default WeatherCard;
