import { Content } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import theme from "../../../styles/Theme.module.scss";
import styles from "../../../styles/Content.module.scss";
/** Интерфейс для контента на страницах */
interface RegionAndCityContentProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode | React.ReactChild;
}
/** Контент на странице*/
export default function RegionAndCityContent<T>(
  props: RegionAndCityContentProps<T>
) {
  const { active } = (useContext(Context) as Store).Theme;
  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Content className={styles.content}>
        <div>{props.items.map(props.renderItem)}</div>
      </Content>
    </div>
  );
}
