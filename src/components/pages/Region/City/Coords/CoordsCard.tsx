import { Button, Card, Carousel } from "antd";
import { Swiper } from "antd-mobile";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";
import { ICoords } from "../../../../../models/Coords";
import { Context } from "../../../../../pages/_app";
import { Store } from "../../../../../store/store";
import styles from "../../../../../styles/CoordsCard.module.scss";
import theme from "../../../../../styles/Theme.module.scss";
import moment from "moment";

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
  const { active } = (useContext(Context) as Store).Theme;
  return (
    <div className={styles.weather}>
      <div className={styles.weather__description}>
        <Card.Grid className={active ? theme.lightTheme : theme.darkTheme}>
          <div>
            <h2>{`${geo_object.locality.name}, ${geo_object.province.name}`}</h2>
            <p>
              Сейчас {date.getHours()}:{date.getMinutes()}. Вчера в это время +
              {yesterday.temp}
            </p>
          </div>
          <section
            className={
              active
                ? styles.weather__shortDescription
                : theme.weather__shortDescription_darkTheme
            }
          >
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
              <Carousel
                autoplay
                dotPosition="bottom"
                dots={true}
                className={active ? theme.lightTheme : theme.darkTheme}
              >
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
        </Card.Grid>
      </div>
      <Card.Grid className={active ? theme.lightTheme : theme.darkTheme}>
        <h2>Прогноз погоды на 7 дней</h2>
        <section className={styles.weather__tenDay}>
          {forecasts.map((forecast) => (
            <Link
              href={`/region/${router.query.id}/${router.query.coords}/forecast`}
              key={forecast.date_ts}
            >
              <a className={styles.weather__teDay_card}>
                <p>{moment(forecast.date).format("dddd")}</p>
                <img
                  className={styles.weather__tenDay_icon}
                  alt={forecast.parts.day_short.icon}
                  src={` https://yastatic.net/weather/i/icons/funky/dark/${forecast.parts.day_short.icon}.svg`}
                ></img>
                <p>+{forecast.parts.day_short.soil_temp}</p>
                <p>+{forecast.parts.day_short.temp_min}</p>
                <p>{fact.condition}</p>
              </a>
            </Link>
          ))}
        </section>
      </Card.Grid>
    </div>
  );
};

export default CoordsCard;
