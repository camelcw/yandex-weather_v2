import React, { useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { IRegion } from "../../../models/Region";
import LayoutCity from "../../../components/layout/LayoutCity";
import { ICity } from "../../../models/City";
import { Context } from "../../_app";
import { Store } from "../../../store/store";
import { Button } from "antd";
import styles from "../../../styles/Theme.module.scss";
import { observer } from "mobx-react-lite";

/** Страница города */
const index = observer((cities: ICity) => {
  return (
    <div>
      <LayoutCity cities={cities} />
    </div>
  );
});

export default index;
/** Получение данных о погоде в городе */
export async function getServerSideProps(context: any) {
  const response = await axios.get(
    `https://api.hh.ru/areas/${context?.params?.id}`
  );
  const cities = response?.data.areas;
  return {
    props: { cities },
  };
}
