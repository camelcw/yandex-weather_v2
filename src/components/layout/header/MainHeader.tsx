import { Header } from "antd/lib/layout/layout";
import React, { FC } from "react";
import styles from "./Header.module.scss";

interface MainHeaderProps {
  title: string;
  children?: React.ReactNode | React.ReactChild;
}

const MainHeader: FC<MainHeaderProps> = ({ title, children }) => {
  return (
    <Header>
      <div className={styles.header}>
        <div>{title}</div>
        {children}
      </div>
    </Header>
  );
};

export default MainHeader;
