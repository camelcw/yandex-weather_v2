import { observer } from 'mobx-react-lite';
import React from 'react';
import SettingsLayout from '../../components/layout/SettingsLayout';

/** Страница настроек */
const index = () => {
  return (
    <div>
      <SettingsLayout />
    </div>
  );
};

export default observer(index);
