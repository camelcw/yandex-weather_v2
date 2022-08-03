import { makeAutoObservable } from "mobx";
import { ICoords } from "../models/Coords";

export class FavouriteTownStore {
  town: Array<ICoords>[];
  constructor() {
    this.town = [];
    makeAutoObservable(this);
  }

  setTown(town: ICoords[]) {
    this.town.push(town);
  }

  clearTown(town: ICoords[]) {
    this.town.filter((tw) => tw !== town);
  }

  get getTown() {
    return this.town;
  }
}
