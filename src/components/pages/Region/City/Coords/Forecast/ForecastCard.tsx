import { Card } from "antd";
import React, { FC, useContext } from "react";
import { ICoords } from "../../../../../../models/Coords";
import { Context } from "../../../../../../pages/_app";
import { Store } from "../../../../../../store/store";
import styles from "./ForecastCard.module.scss";
import theme from "../../../../../../styles/Theme.module.scss";
import moment from "moment";

const ForecastCard: FC<ICoords> = ({
  forecasts,
  fact,
  yesterday,
  geo_object,
}) => {
  const { active } = (useContext(Context) as Store).Theme;
  return (
    <div>
      {forecasts.map((forecast) => (
        <Card.Grid
          style={{ marginBottom: 15 }}
          key={forecast.date_ts}
          className={active ? theme.lightTheme : theme.darkTheme}
        >
          <h2>{moment(forecast.date).format("dddd")}</h2>
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
                  src={`/assets/icons/${forecast.parts.morning.icon}.svg`}
                ></img>
                <div>{fact.condition}</div>
              </div>
              <div>
                <img
                  className={styles.forecast__cardRightSection_img}
                  alt={forecast.parts.day_short.icon}
                  src={`/assets/icons/${forecast.parts.day_short.icon}.svg`}
                ></img>
                <div>{fact.condition}</div>
              </div>
              <div>
                <img
                  className={styles.forecast__cardRightSection_img}
                  alt={forecast.parts.evening.icon}
                  src={`/assets/icons/${forecast.parts.evening.icon}.svg`}
                ></img>
                <div>{fact.condition}</div>
              </div>
              <div>
                <img
                  className={styles.forecast__cardRightSection_img}
                  alt={forecast.parts.night.icon}
                  src={`/assets/icons/${forecast.parts.night.icon}.svg`}
                ></img>
                <div>{fact.condition}</div>
              </div>
            </section>
          </div>
        </Card.Grid>
      ))}
    </div>
  );
};

export default ForecastCard;
