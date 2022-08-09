import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { ICity } from "../../../../models/City";
import styles from "../../../../styles/CityCard.module.scss";

/** Компонет для отображения городов на странице региона*/
const CityCard: FC<ICity> = ({ name, id }) => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Link href={`/region/${router.query.id}/${id}`}>
        <a>
          <h2>{name}</h2>
        </a>
      </Link>
      <div>
        <div>Id: {id}</div>
      </div>
    </div>
  );
};

export default CityCard;
