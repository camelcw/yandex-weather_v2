import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";
import { ICoord } from "../../../models/Coords";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import styles from "../../../styles/Header.module.scss";
/** Интерфейс для CoordsHeader*/
interface CoordsHeaderProps {
  town: ICoord[];
  tw: ICoord;
}

/** Header погоды в городе*/
const CoordsHeader: FC<CoordsHeaderProps> = ({ town, tw }) => {
  const { query } = useRouter();
  const { uniqTows } = (useContext(Context) as Store).FavouriteTown;
  const setFavouriteTown = (town: ICoord) => {
    uniqTows(town, `/region/${query.id}/${query.coords}`);
  };

  const router = useRouter();
  return (
    <Header>
      <div className={styles.header}>
        <Button onClick={() => router.back()} type="primary">
          Назад
        </Button>
        <Link
          className={styles.header__link}
          href={`/region/${router.query.id}/${router.query.coords}/forecast`}
        >
          Прогноз на 10 дней
        </Link>
        <div>
          <Button
            className={styles.header__btn}
            type="primary"
            onClick={() => setFavouriteTown(tw)}
          >
            Добавить в избранное
          </Button>
          <Link className={styles.header__link} href="/">
            Главная
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default CoordsHeader;
