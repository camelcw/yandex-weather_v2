import { Button, Layout } from "antd";
import React, { FC, useContext } from "react";
import { ICoord } from "../../models/Coords";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import SettingsCard from "../pages/settings/SettingsCard";
import theme from "../../styles/Theme.module.scss";
import styles from "../../styles/SettingsLayout.module.scss";
import SettingsContent from "./content/SettingsContent";
import SettingsHeader from "./header/SettingsHeader";

/** Интерфейс для  SettingsLayout*/
interface SettingsLayoutProps {
  coords: ICoord[];
}
/** Страница настроек */
const SettingsLayout: FC<SettingsLayoutProps> = ({ coords }) => {
  const { clearTowns } = (useContext(Context) as Store).FavouriteTown;
  const { active } = (useContext(Context) as Store).Theme;

  return (
    <div className={active ? theme.lightTheme : theme.darkTheme}>
      <Layout className={active ? theme.lightTheme : theme.darkTheme}>
        <SettingsHeader />
        <SettingsContent
          items={coords}
          renderItem={(coord, index) => (
            <div key={index} className={styles.layout}>
              <SettingsCard index={index} town={coord} />
              <Button
                type={active ? "default" : "primary"}
                onClick={() => clearTowns(coord)}
              >
                Удалить
              </Button>
            </div>
          )}
        />
      </Layout>
    </div>
  );
};

export default SettingsLayout;
