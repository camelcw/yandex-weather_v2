import { Menu } from "antd";
import { TriggerSubMenuAction } from "rc-menu/lib/interface";
import React, { FC } from "react";
import { MenuItem } from "../../../services/getMenuItems";

interface MyMenuProps {
  items: MenuItem[];

  triggerSubMenuAction: TriggerSubMenuAction | undefined;
}

const MyMenu: FC<MyMenuProps> = ({ items, triggerSubMenuAction }) => {
  return (
    <>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        items={items}
        mode="vertical"
        triggerSubMenuAction={triggerSubMenuAction}
      />
    </>
  );
};

export default MyMenu;
