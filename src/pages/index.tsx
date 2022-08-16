import React from 'react';
import '../../node_modules/antd/dist/antd.css';
import axios from 'axios';
import { IRegion } from '../models/Region';
import { observer } from 'mobx-react-lite';
import RegionLayout from '../components/layout/RegionLayout';
import MainLayout from '../components/layout/MainLayout';
import { ICity } from '../models/City';

/** Главная страница */
const index = observer((region: IRegion) => {
  console.log(region.regions);
  return (
    <div>
      <MainLayout region={region} />
      {/* <RegionLayout region={region} /> */}
    </div>
  );
});

export default index;
/** Получение данных о регионах */
export async function getStaticProps(context: any) {
  const response = await axios.get('https://api.hh.ru/areas/113');

  const regions = response?.data?.areas;

  return {
    props: { regions },
  };
}
