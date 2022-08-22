import { action, makeObservable, observable } from "mobx";
import { IRegion } from "../../models/Region";
/** Store для DefaultRegion*/
export class DefaultRegionStore {
  defaultRegions: IRegion;
  constructor() {
    this.defaultRegions = {
      defaultRegions: [],
    };

    makeObservable(this, {
      defaultRegions: observable,
      setDefaultRegion: action,
    });
  }

  setDefaultRegion = (defaultRegions: IRegion) => {
    this.defaultRegions = defaultRegions;
  };
}
