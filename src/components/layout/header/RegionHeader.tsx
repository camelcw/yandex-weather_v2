import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/Header.module.scss";
/** Header для регионов */
const RegionHeader = () => {
  return (
    <Header>
      <div className={styles.header}>
        <Link className={styles.header__link} href="/">
          Погода в России
        </Link>
        <Link className={styles.header__link} href="/settings">
          Настройки
        </Link>
      </div>
    </Header>
  );
};

export default RegionHeader;
