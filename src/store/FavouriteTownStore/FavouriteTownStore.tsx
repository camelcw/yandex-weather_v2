import { message } from "antd";
import { action, makeObservable, observable } from "mobx";
import { UrlObject } from "url";
import { ICoord } from "../../models/Coords";
/** Store для избранных городов */
export class FavouriteTownStore {
  towns: ICoord[];
  hrefs: (UrlObject | string)[];
  constructor() {
    this.hrefs = [];
    this.towns = [];

    makeObservable(this, {
      towns: observable,
      hrefs: observable,
      setTown: action,
      setTowns: action,
      setHrefs: action,
      clearTowns: action,
      clearAll: action,
      uniqTows: action,
    });
  }

  setTown = (town: ICoord) => {
    this.towns.push(town);
    message.info(`Ты добавил в избранные`);
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
      this.setHrefs(href);
      this.setTown(town);
    } else {
      message.info("Уже добавлено!");
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
    message.info(`Clear all`);
  };
}
