import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/HeaderMain.module.scss";
import { useRouter } from "next/router";
/** Header для городов в регионе */
const HeaderCity = () => {
  const router = useRouter();
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

export default HeaderCity;
