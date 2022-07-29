import Link from "next/link";
import React, { FC } from "react";
import { ICity } from "../../../../../models/City";
import { IRegion } from "../../../../../models/Region";

interface CoordsCardProps {
  city: ICity;
  region: IRegion;
}

const CoordsCard: FC<CoordsCardProps> = ({ city, region }) => {
  return <div>Погода</div>;
};

export default CoordsCard;
