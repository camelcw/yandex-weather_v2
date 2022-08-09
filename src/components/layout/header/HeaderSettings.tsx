import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../../styles/HeaderMain.module.scss";

const HeaderSettings = () => {
  const router = useRouter();
  return (
    <Header>
      <div className={styles.header}>
        <Button onClick={() => router.back()} type="primary">
          Назад
        </Button>
        <Link href="/">Главная</Link>
      </div>
    </Header>
  );
};

export default HeaderSettings;
