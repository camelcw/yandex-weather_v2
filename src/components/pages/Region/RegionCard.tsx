import { Card } from "antd";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { IRegion, Regions } from "../../../models/Region";
import styles from "../../../styles/RegionCard.module.scss";

interface RegionCardProps {
  region: Regions;
}
/** Карта для отображения регионов на главной странице */
const RegionCard: FC<Regions> = ({ name, id }) => {
  return (
    <Card.Grid
      style={{
        width: 400,
        marginBottom: 15,
      }}
    >
      <Link href={`/region/${id}`} key={id}>
        <a className={styles.content__link}>{name}</a>
      </Link>
    </Card.Grid>
  );
};

export default RegionCard;
