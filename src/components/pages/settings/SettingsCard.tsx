import { Button, Card } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";
import { ICoord, ICoords } from "../../../models/Coords";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import styles from "../../../styles/SettingsCard.module.scss";

interface SettingsCardProps {
  town: ICoord;
  index: number;
}

const SettingsCard: FC<SettingsCardProps> = ({ town, index }) => {
  const { towns, hrefs } = (useContext(Context) as Store).FavouriteTown;

  return (
    <section className={styles.settings__card}>
      <div key={town.coords.now_dt}>
        <Link href={hrefs[index]}>
          <a className={styles.settings__cardDescription}>
            <img
              className={styles.settings__cardDescriptionIcon}
              alt={town.coords.fact.icon}
              src={` https://yastatic.net/weather/i/icons/funky/dark/${town.coords.fact.icon}.svg`}
            ></img>
            <div>+{town.coords.fact.soil_temp}</div>
            <div>{town.coords.geo_object.locality.name}</div>
          </a>
        </Link>
      </div>
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
