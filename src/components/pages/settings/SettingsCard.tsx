import Link from "next/link";
import React, { FC, useContext } from "react";
import { ICoord } from "../../../models/Coords";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import styles from "../../../styles/SettingsCard.module.scss";

interface SettingsCardProps {
  town: ICoord;
  index: number;
}

const SettingsCard: FC<SettingsCardProps> = ({ town, index }) => {
  const { hrefs } = (useContext(Context) as Store).FavouriteTown;

  return (
    <section className={styles.settings__card}>
      <div key={town.coords.now_dt}>
        <Link href={hrefs[index]}>
          <a className={styles.settings__cardDescription}>
            <img
              className={styles.settings__cardDescriptionIcon}
              alt={town.coords.fact.icon}
              src={`/assets/icons/${town.coords.fact.icon}.svg`}
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
