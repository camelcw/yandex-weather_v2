import { Card } from "antd";
import React, { FC } from "react";
import { ICoords } from "../../../../../../models/Coords";
import styles from "../../../../../../styles/ForecastCard.module.scss";

const ForecastCard: FC<ICoords> = ({
  forecasts,
  fact,
  yesterday,
  geo_object,
}) => {
  return (
    <div>
      {forecasts.map((forecast) => (
        <Card key={forecast.date_ts} title={`${forecast.date}`} bordered={true}>
          <div className={styles.forecast__card}>
            <section className={styles.forecast__cardLeftSection}>
              <div>
                <h4>Утром</h4>
                <p>
                  +{forecast.parts.morning.temp_min}...+
                  {forecast.parts.morning.soil_temp}
                </p>
              </div>
              <div>
                <h4>Днём</h4>
                <p>
                  +{forecast.parts.day_short.temp_min}...+
                  {forecast.parts.day_short.soil_temp}
                </p>
              </div>

              <div>
                <h4>Вечером</h4>
                <p>
                  +{forecast.parts.evening.temp_min}...+
                  {forecast.parts.evening.soil_temp}
                </p>
              </div>
              <div>
                <h4>Ночью</h4>
                <p>
                  +{forecast.parts.night.temp_min}...+
                  {forecast.parts.night.soil_temp}
                </p>
              </div>
            </section>
            <section className={styles.forecast__cardRightSection}>
              <div>
                <img
                  className={styles.forecast__cardRightSection_img}
                  alt={forecast.parts.morning.icon}
                  src={` https://yastatic.net/weather/i/icons/funky/dark/${forecast.parts.morning.icon}.svg`}
                ></img>
                <div>{fact.condition}</div>
              </div>
              <div>
                <img
                  className={styles.forecast__cardRightSection_img}
                  alt={forecast.parts.day_short.icon}
                  src={` https://yastatic.net/weather/i/icons/funky/dark/${forecast.parts.day_short.icon}.svg`}
                ></img>
                <div>{fact.condition}</div>
              </div>
              <div>
                <img
                  className={styles.forecast__cardRightSection_img}
                  alt={forecast.parts.evening.icon}
                  src={` https://yastatic.net/weather/i/icons/funky/dark/${forecast.parts.evening.icon}.svg`}
                ></img>
                <div>{fact.condition}</div>
              </div>
              <div>
                <img
                  className={styles.forecast__cardRightSection_img}
                  alt={forecast.parts.night.icon}
                  src={` https://yastatic.net/weather/i/icons/funky/dark/${forecast.parts.night.icon}.svg`}
                ></img>
                <div>{fact.condition}</div>
              </div>
            </section>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ForecastCard;
