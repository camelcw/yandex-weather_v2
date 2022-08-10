import { Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { City, ICity } from "../../../../models/City";
import styles from "../../../../styles/CityCard.module.scss";

/** Компонет для отображения городов на странице региона*/
const CityCard: FC<City> = ({ name, id }) => {
  const router = useRouter();
  return (
    <Card.Grid style={{ width: 250, marginBottom: 15 }}>
      <Link href={`/region/${router.query.id}/${name}`}>
        <a>
          <h2>{name}</h2>
        </a>
      </Link>
    </Card.Grid>
  );
};

export default CityCard;
