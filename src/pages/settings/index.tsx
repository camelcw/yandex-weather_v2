import { Button } from "antd";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import LayoutSettings from "../../components/layout/LayoutSettings";
import { ICoords } from "../../models/Coords";
import { ITown } from "../../models/Town";
import { Store } from "../../store/store";
import { Context } from "../_app";
/** Страница настроек */
const index = observer(() => {
  const { town, clearTowns, clearAll } = (useContext(Context) as Store)
    .FavouriteTown;
  const { Toggle, active } = (useContext(Context) as Store).Theme;
  return (
    <div>
      <LayoutSettings coords={town} />
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
