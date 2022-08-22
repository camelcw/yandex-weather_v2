import { DefaultRegionStore } from "./DefaultRegionStore/DefaultRegionStore";
import { FavouriteTownStore } from "./FavouriteTownStore/FavouriteTownStore";
import { LoadingStore } from "./LoadingStore/LoadingStore";
import { ThemeStore } from "./ThemeStore/ThemeStore";
/** Интерфейс для store */
export interface Store {
  FavouriteTown: FavouriteTownStore;
  Theme: ThemeStore;
  Loading: LoadingStore;
  DefaultRegions: DefaultRegionStore;
}
/** Store */
export const store: Store = {
  FavouriteTown: new FavouriteTownStore(),
  Theme: new ThemeStore(),
  Loading: new LoadingStore(),
  DefaultRegions: new DefaultRegionStore(),
};
