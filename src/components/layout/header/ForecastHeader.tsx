import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/Header.module.scss";
/** Header подробной погоды*/
const ForecastHeader = () => {
  const router = useRouter();
  return (
    <Header>
      <div className={styles.header}>
        <Button onClick={() => router.back()} type="primary">
          Назад
        </Button>
        <Link href="/">Главная</Link>
        <Link className={styles.header__link} href="/settings">
          Настройки
        </Link>
      </div>
    </Header>
  );
};

export default ForecastHeader;
