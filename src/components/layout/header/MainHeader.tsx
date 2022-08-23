import { Header } from "antd/lib/layout/layout";
import Head from "next/head";
import React, { FC } from "react";
import styles from "./Header.module.scss";

interface MainHeaderProps {
  title: string;
  children?: React.ReactNode | React.ReactChild;
  headerTitle: string;
}

const MainHeader: FC<MainHeaderProps> = ({ title, children, headerTitle }) => {
  return (
    <Header>
      <Head>
        <title>{headerTitle}</title>
        <meta property="og:title" content={headerTitle} key="title" />
        <link
      
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles.header}>
        <div>{title}</div>
        {children}
      </div>
    </Header>
  );
};

export default MainHeader;
