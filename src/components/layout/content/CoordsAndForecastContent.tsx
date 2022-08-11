import { Content } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { FC } from "react";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import styles from "../../../styles/Content.module.scss";
import theme from "../../../styles/Theme.module.scss";
/** Интерфейс для CoordsAndForecastContentProps*/
interface CoordsAndForecastContentProps {
  children: React.ReactNode | React.ReactChild;
}
/** Контент на странице подробной погоды и города */
const CoordsAndForecastContent: FC<CoordsAndForecastContentProps> = ({ children }) => {
  const { active } = (useContext(Context) as Store).Theme;
  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Content className={styles.content}>{children}</Content>
    </div>
  );
};

export default CoordsAndForecastContent;
