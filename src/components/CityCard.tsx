import Link from "next/link";
import React, { FC } from "react";
import { ICity } from "../models/City";
/** Компонет для отображения городов на странице региона*/
const CityCard: FC<ICity> = ({ name, id, zip, type }) => {
  return (
    <Link href="/">
      <h2>{name}</h2>
      <div>Id: {id}</div>
      <div>ZIP: {zip}</div>
      <div>Type: {type}</div>
    </Link>
  );
};

export default CityCard;
