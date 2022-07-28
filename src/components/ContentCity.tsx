import { Content } from "antd/lib/layout/layout";
import React from "react";

/** Интерфейс для контента на главной странице */
interface ContentCityProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function ContentCity<T>(props: ContentCityProps<T>) {
  return <Content>{props.items.map(props.renderItem)}</Content>;
}
