import { Button } from "antd";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import SettingsLayout from "../../components/layout/SettingsLayout";
import { Store } from "../../store/store";
import { Context } from "../_app";
/** Страница настроек */
const index = observer(() => {
  const { towns, clearAll, hrefs } = (useContext(Context) as Store)
    .FavouriteTown;
  console.log(hrefs);
  const { Toggle, active } = (useContext(Context) as Store).Theme;
  return (
    <div>
      <SettingsLayout coords={towns} />
      <Button
        style={{ marginRight: 15 }}
        type={active ? "default" : "primary"}
        onClick={clearAll}
      >
        Delete
      </Button>
      <Button type={active ? "default" : "primary"} onClick={Toggle}>
        Theme
      </Button>
    </div>
  );
});

export default index;
