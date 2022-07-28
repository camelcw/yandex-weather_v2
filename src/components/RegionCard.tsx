import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { IRegion } from "../models/Region";
import styles from "../styles/RegionCard.module.scss";

interface RegionCardProps {
  region: IRegion;
}
/** Карта для отображения регионов на главной странице */
const RegionCard: FC<IRegion> = ({ value }) => {
  return (
    <div>
      <Link href="/region/tatarstan">
        <a className={styles.content__link}>{value}</a>
      </Link>
    </div>
  );
};

export default RegionCard;
