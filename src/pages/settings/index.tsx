import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import SettingsLayout from "../../components/layout/SettingsLayout";
import { Store } from "../../store/store";

import { Context } from "../_app";

/** Страница настроек */
const index = () => {
  const { defaultRegions } = (useContext(Context) as Store).DefaultRegions;
  return (
    <div>
      <SettingsLayout defaultRegions={defaultRegions.defaultRegions} />
    </div>
  );
};

export default observer(index);
