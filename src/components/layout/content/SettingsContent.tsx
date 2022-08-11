import { Content } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import theme from "../../../styles/Theme.module.scss";
/** Интерфейс для контента на странице настроек */
interface SettingsContentProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode | React.ReactChild;
}
/** Контент на странице настроек*/
export default function SettingsContent<T>(props: SettingsContentProps<T>) {
  const { active } = (useContext(Context) as Store).Theme;
  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Content>
        <h2 style={{ marginLeft: 15 }}>Погода в избранных городах</h2>
        {props.items.map(props.renderItem)}
      </Content>
    </div>
  );
}
