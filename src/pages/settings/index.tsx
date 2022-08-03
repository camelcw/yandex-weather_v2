import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import LayoutSettings from "../../components/layout/LayoutSettings";
import { ICoords } from "../../models/Coords";
import { ITown } from "../../models/Town";
import { Store } from "../../store/store";
import { Context } from "../_app";
/** Страница настроек */
const index = () => {
  const { town } = (useContext(Context) as Store).FavouriteTown;
  const router = useRouter();
  console.log();
  //Попробуй изменить
  const valuesArray = Object.values(town);
  let cordArray: ICoords[] = [];
  function getArray(valuesArray: any[]) {
    valuesArray.map((coord) => {
      cordArray = coord;
    });
  }
  getArray(valuesArray);
  console.log(valuesArray);
  return (
    <div>
      <LayoutSettings coords={valuesArray} />
    </div>
  );
};

export default index;
