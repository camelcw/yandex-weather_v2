import React from 'react';
import '../../node_modules/antd/dist/antd.css';
import { IRegion } from '../models/Region';
import { observer } from 'mobx-react-lite';
import MainLayout from '../components/layout/MainLayout';
import { fetchRegion } from '../services/fetchRegion';
import { REGION_URL } from '../utils/constants';

/** Главная страница */
const index = observer((region: IRegion) => {
  return (
    <div>
      <MainLayout region={region} />
    </div>
  );
});

export default index;
/** Получение данных о регионах */
export async function getStaticProps(context: any) {
  const regions = await fetchRegion(REGION_URL);

  return {
    props: { regions },
  };
}
