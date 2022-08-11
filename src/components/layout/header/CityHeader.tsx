import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/Header.module.scss";
import { useRouter } from "next/router";
/** Header для городов в регионе */
const CityHeader = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Header className={styles.header}>
      <Button onClick={() => router.back()} type="primary">
        Назад
      </Button>
      <Link className={styles.header__link} href="/">
        Главная
      </Link>
      <Link className={styles.header__link} href="/settings">
        Настройки
      </Link>
    </Header>
  );
};

export default CityHeader;
