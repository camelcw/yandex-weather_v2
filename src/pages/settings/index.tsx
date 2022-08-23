import { observer } from "mobx-react-lite";
import React, { lazy, Suspense, useContext } from "react";
import MyLoader from "../../components/layout/loader/MyLoader";
import { Store } from "../../store/store";
import { Context } from "../_app";

const SettingsLayout = lazy(
  () => import("../../components/layout/SettingsLayout"),
);

/** Страница настроек */
const index = () => {
  const { defaultRegions } = (useContext(Context) as Store).DefaultRegions;
  return (
    <div>
      <Suspense fallback={<MyLoader />}>
        <SettingsLayout defaultRegions={defaultRegions.defaultRegions} />
      </Suspense>
    </div>
  );
};

export default observer(index);
