import { Button, Card } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";
import { ICoords } from "../../../models/Coords";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import styles from "../../../styles/SettingsCard.module.scss";

interface SettingsCardProps {
  coords: ICoords[];
}

const SettingsCard: FC<SettingsCardProps> = ({ coords }) => {
  const { hrefs } = (useContext(Context) as Store).FavouriteTown;
  console.log(coords);
  return (
    <section className={styles.settings__card}>
      {coords.map((coord, index) => (
        <div key={coord.now_dt}>
          <Link href={hrefs[index]}>
            <a className={styles.settings__cardDescription}>
              <img
                className={styles.settings__cardDescriptionIcon}
                alt={coord.fact.icon}
                src={` https://yastatic.net/weather/i/icons/funky/dark/${coord.fact.icon}.svg`}
              ></img>
              <div>+{coord.fact.soil_temp}</div>
              <div>{coord.geo_object.locality.name}</div>
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default SettingsCard;

/** Получение данных о погоде в городе */
export async function getServerSideProps(context: any) {
  const response = await axios.get(
    `https://api.hh.ru/areas/${context?.params?.id}`
  );
  const cities = response?.data.areas;
  return {
    props: { cities },
  };
}
