import { makeAutoObservable } from "mobx";
import { IRegion } from "../../models/Region";
/** Store для DefaultRegion*/
export class DefaultRegionStore {
  defaultRegions: IRegion;
  constructor() {
    this.defaultRegions = {
      defaultRegions: [],
    };

    makeAutoObservable(this);
  }

  setDefaultRegion = (defaultRegions: IRegion) => {
    this.defaultRegions = defaultRegions;
  };
}
