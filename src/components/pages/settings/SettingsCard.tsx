import { Button, Card } from "antd";
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
  const clearTowns = (crd: ICoords) => {
    coords.filter((coor) => coor === crd);
  };
  return (
    <section className={styles.settings__card}>
      {coords.map((coord) => (
        <Link href={`/`} key={coord.now_dt}>
          <a>
            <img
              className={styles.settings__cardDescriptionIcon}
              alt={coord.fact.icon}
              src={` https://yastatic.net/weather/i/icons/funky/dark/${coord.fact.icon}.svg`}
            ></img>
            <div>+{coord.fact.soil_temp}</div>
            <div>{coord.geo_object.locality.name}</div>
            <Button onClick={() => clearTowns(coord)}>Удалить</Button>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default SettingsCard;
