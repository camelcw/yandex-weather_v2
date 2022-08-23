import { Button, Layout } from "antd";
import React, { FC, useContext, useState } from "react";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import SettingsCard from "../pages/settings/SettingsCard";
import styles from "./SettingsLayout.module.scss";
import theme from "../../styles/Theme.module.scss";
import { useRouter } from "next/router";
import MainHeader from "./header/MainHeader";
import MainContent from "./content/MainContent";
import { observer } from "mobx-react-lite";
import { Regions } from "../../models/Region";
import MySider from "./sider/MySider";
import { getMenuItems } from "../../services/getMenuItems";

interface RegionLayoutProps {
  defaultRegions: Regions[];
}
/** Страница настроек */
const SettingsLayout: FC<RegionLayoutProps> = ({ defaultRegions = [] }) => {
  const router = useRouter();
  const { clearTowns, clearAll, towns } = (useContext(Context) as Store)
    .FavouriteTown;
  const { active, Toggle } = (useContext(Context) as Store).Theme;
  const [collapsed, setCollapsed] = useState(false);
  const items = getMenuItems(defaultRegions);

  return (
    <div>
      <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
        <MySider
          width={250}
          collapsedWidth={60}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          items={items}
        />
        <Layout>
          <MainHeader
            headerTitle="Настройки"
            title="Погода в избранных городах"
          >
            <Button type="primary" ghost onClick={() => router.back()}>
              Назад
            </Button>
          </MainHeader>
          <div
            className={
              active ? styles.layout__btn : theme.settings__layout_darkTheme
            }
          >
            <Button type={active ? "default" : "primary"} onClick={clearAll}>
              Очистить всё
            </Button>
            <Button type={active ? "default" : "primary"} onClick={Toggle}>
              Сменить тему
            </Button>
          </div>

          <MainContent className="">
            {towns.map((town, index) => (
              <div key={index} className={styles.layout}>
                <SettingsCard index={index} town={town} />
                <Button
                  type={active ? "default" : "primary"}
                  onClick={() => clearTowns(town)}
                >
                  Удалить
                </Button>
              </div>
            ))}
          </MainContent>
        </Layout>
      </Layout>
    </div>
  );
};

export default observer(SettingsLayout);
