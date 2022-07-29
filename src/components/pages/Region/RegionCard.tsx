import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { IRegion } from "../../../models/Region";
import styles from "../../../styles/RegionCard.module.scss";

interface RegionCardProps {
  region: IRegion;
}
/** Карта для отображения регионов на главной странице */
const RegionCard: FC<IRegion> = ({ name, id }) => {
  return (
    <div>
      <Link href={`/region/${id}`} key={id}>
        <a className={styles.content__link}>{name}</a>
      </Link>
    </div>
  );
};

export default RegionCard;
