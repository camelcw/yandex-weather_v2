import { Content } from "antd/lib/layout/layout";
import React from "react";

/** Интерфейс для контента на главной странице */
interface ContentCityProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode | React.ReactChild;
}
/** Контент на странице городов */
export default function ContentCity<T>(props: ContentCityProps<T>) {
  return (
    <Content
      style={{
        padding: 15,
        margin: 0,
        minWidth: 280,
        minHeight: 280,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>{props.items.map(props.renderItem)}</div>
    </Content>
  );
}