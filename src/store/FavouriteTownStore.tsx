import { makeAutoObservable } from "mobx";
import { UrlObject } from "url";
import { ICoord } from "../models/Coords";

export class FavouriteTownStore {
  towns: ICoord[];
  hrefs: any[];
  constructor() {
    this.hrefs = [];
    this.towns = [];

    makeAutoObservable(this);
  }

  setTown = (town: ICoord) => {
    this.towns.push(town);
    alert(`Ты добавил в избранные`);
  };

  uniqTows = (town: ICoord, href: string | UrlObject) => {
    let counter = 0;
    if (this.towns.length > 0) {
      this.towns.filter((t) => {
        if (
          t.coords.geo_object.locality.name ===
          town.coords.geo_object.locality.name
        ) {
          console.log("check");
          counter++;
        }
      });
    }
    if (counter == 0) {
      this.setTown(town);
      this.setHrefs(href);
    } else {
      alert("Уже добавлено!");
      counter = 0;
    }
  };

  setTowns = (towns: ICoord[]) => {
    this.towns = towns;
  };

  setHrefs = (href: string | UrlObject) => {
    this.hrefs.push(href);
  };

  clearTowns = (coord: ICoord) => {
    const clearTown = this.towns?.filter((c) => c !== coord);
    this.setTowns(clearTown);
  };

  clearAll = () => {
    this.towns = [];
    this.hrefs = [];
    alert(`Clear all`);
  };
}
