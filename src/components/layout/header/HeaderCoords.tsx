import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";
import { ICoords } from "../../../models/Coords";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import styles from "../../../styles/HeaderMain.module.scss";

interface HeaderCoordsProps {
  town: ICoords[];
}

/** Header погоды в городе*/
const HeaderCoords: FC<HeaderCoordsProps> = ({ town }) => {
  const { query } = useRouter();
  const { setTown, setHrefs } = (useContext(Context) as Store).FavouriteTown;

  const setTownAndClick = (town: ICoords[]) => {
    setTown(town);
    setHrefs(`/region/${query.id}/${query.coords}`);
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
            onClick={() => setTownAndClick(town)}
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

export default HeaderCoords;
