import Link from "next/link";
import React, { FC } from "react";
import { ICity } from "../models/City";
import styles from "../styles/CityCard.module.scss";

/** Компонет для отображения городов на странице региона*/
const CityCard: FC<ICity> = ({ name, id, zip, type }) => {
  return (
    <div>
      <Link href="/">
        <a>
          <h2>{name}</h2>
        </a>
      </Link>
      <div>
        <div>Id: {id}</div>
        <div>ZIP: {zip}</div>
        <div>Type: {type}</div>
      </div>
    </div>
  );
};

export default CityCard;
