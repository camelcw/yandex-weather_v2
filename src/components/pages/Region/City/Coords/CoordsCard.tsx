import { Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { ICoords } from "../../../../../models/Coords";
import styles from "../../../../../styles/CoordsCard.module.scss";

interface CoordsCardProps {
  town: ICoords;
}

const CoordsCard: FC<ICoords> = ({
  fact,
  forecasts,
  parts,
  yesterday,
  info,
  now_dt,
  geo_object,
}) => {
  const date = new Date();
  const router = useRouter();
  return (
    <div>
      <Card
        title={`${geo_object.locality.name}, ${geo_object.province.name}`}
        bordered={true}
        style={{ width: 400 }}
      >
        <div>
          <p>
            Сейчас {date.getHours()}:{date.getMinutes()}. Вчера в это время +
            {yesterday.temp}
          </p>
        </div>
        <section>
          <div>{fact.temp}</div>
          <div>{fact.condition}</div>
          <div>{fact.feels_like}</div>
          <img
            alt={fact?.icon}
            src={` https://yastatic.net/weather/i/icons/funky/dark/${fact.icon}.svg`}
          ></img>
        </section>
        <section>
          {forecasts[0].hours.map((hour) => (
            <div key={hour.hour_ts} className={styles.small_description}>
              <div>В: {Number(hour.hour) + 1}</div>
              <div>Температура: {hour.temp}</div>
              <img
                alt={hour.icon}
                src={` https://yastatic.net/weather/i/icons/funky/dark/${hour.icon}.svg`}
              ></img>
            </div>
          ))}
        </section>
      </Card>
      <Card
        title="Прогноз погоды на 7 дней"
        bordered={true}
        style={{ width: 600 }}
      >
        <section className={styles.tenDay_description}>
          {forecasts.map((forecast) => (
            <Link
              href={`/region/${router.query.id}/${router.query.coords}/forecast`}
              key={forecast.date_ts}
            >
              <a>
                <Card>
                  <div className={styles.weatherCard}>
                    <div>{forecast.date}</div>
                    <div>{forecast.parts.day_short.soil_temp}</div>
                    <div>{forecast.parts.day_short.temp_min}</div>
                    <img
                      alt={forecast.parts.day_short.icon}
                      src={` https://yastatic.net/weather/i/icons/funky/dark/${forecast.parts.day_short.icon}.svg`}
                    ></img>
                  </div>
                </Card>
              </a>
            </Link>
          ))}
        </section>
      </Card>
    </div>
  );
};

export default CoordsCard;
