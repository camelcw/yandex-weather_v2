import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import Link from "next/link";
import styles from "../styles/HeaderMain.module.scss";
import { useRouter } from "next/router";
/** Header для городов */
const HeaderCity = () => {
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
    </Header>
  );
};

export default HeaderCity;
