import { Spin } from "antd";
import React from "react";
import styles from "./MyLoader.module.scss";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const MyLoader = () => {
  const antIcon = <Loading3QuartersOutlined style={{ fontSize: 54 }} spin />;
  return (
    <div className={styles.loader}>
      <Spin size="large" indicator={antIcon} />
    </div>
  );
};

export default MyLoader;
