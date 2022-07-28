import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { IRegion } from "../models/Region";

interface RegionCardProps {
  region: IRegion;
}
/** Карта для отображения регионов на главной странице */
const RegionCard: FC<RegionCardProps> = ({ region }) => {
  return (
    <div>
      <Link href="/">
        <a>{region?.value}</a>
      </Link>
    </div>
  );
};

export default RegionCard;
