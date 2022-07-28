import { Content } from "antd/lib/layout/layout";
import React from "react";

/** Интерфейс для контента на главной странице */
interface ContentMainProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
/** Контент на главной странице */
export default function ContentMain<T>(props: ContentMainProps<T>) {
  return <Content>{props.items.map(props.renderItem)}</Content>;
}

//style={{
//   padding: 24,
//   margin: 0,
//   minHeight: 280,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }}

//{props.items.map(props.renderItem)}
