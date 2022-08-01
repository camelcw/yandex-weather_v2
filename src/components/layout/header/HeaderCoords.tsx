import { Breadcrumb, Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../../styles/HeaderMain.module.scss";

const HeaderCoords = () => {
  const router = useRouter();
  console.log(router);
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
        <Link className={styles.header__link} href="/">
          Главная
        </Link>
      </div>
    </Header>
  );
};

export default HeaderCoords;
