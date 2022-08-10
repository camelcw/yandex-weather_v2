import { Button, Layout } from "antd";
import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { ICoord, ICoords } from "../../models/Coords";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import SettingsCard from "../pages/settings/SettingsCard";

import HeaderSettings from "./header/HeaderSettings";
import theme from "../../styles/Theme.module.scss";
import styles from "../../styles/LayoutSettings.module.scss";
import { arch } from "os";
import Link from "next/link";

interface LayoutSettingsProps {
  coords: ICoord[];
}

const LayoutSettings: FC<LayoutSettingsProps> = ({ coords }) => {
  const { clearTowns, hrefs } = (useContext(Context) as Store).FavouriteTown;
  const { active } = (useContext(Context) as Store).Theme;

  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Layout className={active ? theme.lightTheme : theme.darkTheme}>
        <HeaderSettings />
        <h2>Погода в избранных городах</h2>

        {coords.map((coord, index) => (
          <div key={index} className={styles.layout}>
            <SettingsCard index={index} town={coord} />
            <Button
              type={active ? "primary" : "default"}
              onClick={() => clearTowns(coord)}
            >
              Удалить
            </Button>
          </div>
        ))}
      </Layout>
    </div>
  );
};

export default LayoutSettings;
