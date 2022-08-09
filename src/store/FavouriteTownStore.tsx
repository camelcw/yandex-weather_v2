import { throws } from "assert";
import { makeAutoObservable } from "mobx";
import { UrlObject } from "url";
import { ICoords } from "../models/Coords";

export class FavouriteTownStore {
  town: Array<ICoords>[];
  hrefs: any[];
  constructor() {
    this.hrefs = [];
    this.town = [];

    makeAutoObservable(this);
  }

  setTown = (town: ICoords[]) => {
    this.town.push(town);
    alert(`Ты добавил в избранные`);
  };

  setTowns(towns: Array<ICoords>[]) {
    this.town = towns;
  }

  setHrefs = (href: string | UrlObject) => {
    this.hrefs.push(href);
  };

  clearTowns = (coord: ICoords[]) => {
    const clearTown = this.town?.filter((c) => c !== coord);
    this.setTowns(clearTown);
  };

  clearAll = () => {
    this.town = [];
    alert(`Clear all`);
  };

  get getTown() {
    return this.town;
  }
}
