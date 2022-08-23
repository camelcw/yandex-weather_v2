import Sider from "antd/lib/layout/Sider";
import React, { FC } from "react";
import { MenuItem } from "../../../services/getMenuItems";
import MyMenu from "../menu/MyMenu";

interface MySiderProps {
  width: number;
  collapsedWidth?: number;
  collapsible: boolean;
  collapsed: boolean;
  onCollapse: (value: boolean) => void;
  items: MenuItem[];
}

const MySider: FC<MySiderProps> = ({
  width,
  collapsedWidth,
  collapsed,
  onCollapse,
  items,
}) => {
  return (
    <Sider
      width={width}
      collapsedWidth={collapsedWidth}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <MyMenu items={items} triggerSubMenuAction="click" />
    </Sider>
  );
};

export default MySider;
