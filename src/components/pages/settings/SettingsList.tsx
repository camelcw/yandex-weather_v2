import { Button, Card } from "antd";
import React, { FC, useContext } from "react";
import { ICoords } from "../../../models/Coords";
import { Context } from "../../../pages/_app";
import { Store } from "../../../store/store";
import SettingsCard from "./SettingsCard";

interface SettingsListProps {
  coords: ICoords[];
}

const SettingsList: FC<SettingsListProps> = ({ coords }) => {
  return (
    <div>
      <SettingsCard coords={coords} />
    </div>
  );
};

export default SettingsList;
