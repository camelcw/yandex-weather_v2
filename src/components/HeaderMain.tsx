import React, { FC } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import styles from "../styles/HeaderMain.module.scss";
import RegionCard from "./RegionCard";
import axios from "axios";
import { IRegion } from "../models/Region";
/** Header на главной странице */
const HeaderMain = () => {
  const { Header } = Layout;
  return (
    <Header>
      <Link className={styles.header__link} href="/">
        Погода в России
      </Link>
    </Header>
  );
};

export default HeaderMain;
