import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import React from "react";
import { IRegion } from "../../../models/Region";
import styles from "../../../styles/HeaderMain.module.scss";
/** Header для регионв */
const HeaderRegion = () => {
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

export default HeaderRegion;
