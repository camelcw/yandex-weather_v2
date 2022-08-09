import { throws } from "assert";
import { makeAutoObservable } from "mobx";
import { UrlObject } from "url";
import { ICoords } from "../models/Coords";

export class FavouriteTownStore {
  towns: Array<ICoords>[];
  hrefs: any[];
  constructor() {
    this.hrefs = [];
    this.towns = [];

    makeAutoObservable(this);
  }

  setTown = (town: ICoords[]) => {
    this.towns.push(town);

    alert(`Ты добавил в избранные`);
  };

  setTowns(towns: Array<ICoords>[]) {
    this.towns = towns;
  }

  // UniqTowns = (townss: Array<ICoords>[]) => {
  //   const uniqTowns = this.towns
  //     .filter((town) => townss.indexOf(town) < 0)
  //     .concat(townss.filter((ts) => this.towns.indexOf(ts) < 0));
  //   console.log(uniqTowns);
  // };

  setHrefs = (href: string | UrlObject) => {
    this.hrefs.push(href);
  };

  clearTowns = (coord: ICoords[]) => {
    const clearTown = this.towns?.filter((c) => c !== coord);
    this.setTowns(clearTown);
  };

  clearAll = () => {
    this.towns = [];
    alert(`Clear all`);
  };

  get getTown() {
    return this.towns;
  }
}
