import { Content } from "antd/lib/layout/layout";
import React from "react";

/** Интерфейс для контента на страницах */
interface ContentListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode | React.ReactChild;
}
/** Контент на странице*/
export default function ContentList<T>(props: ContentListProps<T>) {
  return (
    // Убери inline styles
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
