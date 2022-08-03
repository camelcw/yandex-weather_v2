import { Button, Card, Carousel } from "antd";
import { Swiper } from "antd-mobile";
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
    <div className={styles.weather}>
      <div className={styles.weather__description}>
        <Card
          title={`${geo_object.locality.name}, ${geo_object.province.name}`}
          bordered={true}
        >
          <div>
            <p>
              Сейчас {date.getHours()}:{date.getMinutes()}. Вчера в это время +
              {yesterday.temp}
            </p>
          </div>
          <section className={styles.weather__shortDescription}>
            <div className={styles.weather__shortDescription_leftSection}>
              <div>+{fact.temp}</div>
              <img
                className={styles.weather__shortDescription_leftSectionIcon}
                alt={fact?.icon}
                src={` https://yastatic.net/weather/i/icons/funky/dark/${fact.icon}.svg`}
              ></img>
            </div>
            <div className={styles.weather__shortDescription_rightSection}>
              <div>{fact.condition}</div>
              <div>Ощущается как +{fact.feels_like}</div>
            </div>
          </section>
          <section>
            <div className={styles.weather__carousel}>
              <Carousel autoplay dotPosition="right" dots={false}>
                {forecasts[0].hours.map((hour) => (
                  <div
                    key={hour.hour_ts}
                    className={styles.weather__shortDescription_toDay}
                  >
                    <div className={styles.weather__carouselText}>
                      <div>{Number(hour.hour) + 1}:00</div>
                      <div>+{hour.temp}</div>
                      <img
                        className={styles.weather__carouselIcon}
                        alt={hour.icon}
                        src={` https://yastatic.net/weather/i/icons/funky/dark/${hour.icon}.svg`}
                      ></img>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </section>
        </Card>
      </div>
      <Card title="Прогноз погоды на 7 дней" bordered={false}>
        <section className={styles.weather__tenDay}>
          {forecasts.map((forecast) => (
            <Link
              href={`/region/${router.query.id}/${router.query.coords}/forecast`}
              key={forecast.date_ts}
            >
              <a className={styles.weather__teDay_card}>
                <div>{forecast.date}</div>
                <img
                  className={styles.weather__tenDay_icon}
                  alt={forecast.parts.day_short.icon}
                  src={` https://yastatic.net/weather/i/icons/funky/dark/${forecast.parts.day_short.icon}.svg`}
                ></img>
                <div>+{forecast.parts.day_short.soil_temp}</div>
                <div>+{forecast.parts.day_short.temp_min}</div>
                <div>{fact.condition}</div>
              </a>
            </Link>
          ))}
        </section>
      </Card>
    </div>
  );
};

export default CoordsCard;
