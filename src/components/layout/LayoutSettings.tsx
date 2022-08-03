import { Button, Layout } from "antd";
import React, { FC, useContext } from "react";
import { ICoords } from "../../models/Coords";
import { Context } from "../../pages/_app";
import { Store } from "../../store/store";
import SettingsCard from "../pages/settings/SettingsCard";
import SettingsList from "../pages/settings/SettingsList";
import HeaderSettings from "./header/HeaderSettings";

interface LayoutSettingsProps {
  coords: Array<ICoords>[];
}

const LayoutSettings: FC<LayoutSettingsProps> = ({ coords }) => {
  const { clearTown } = (useContext(Context) as Store).FavouriteTown;

  return (
    <Layout>
      <HeaderSettings />
      <h2>Погода в избранных городах</h2>
      {/* Доработать кнопку очистки */}

      {coords.map((coord, index) => (
        <SettingsCard key={index} coords={coord} />
      ))}
    </Layout>
  );
};

export default LayoutSettings;
