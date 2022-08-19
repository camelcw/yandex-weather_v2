import { FavouriteTownStore } from "./FavouriteTownStore/FavouriteTownStore";
import { LoadingStore } from "./LoadingStore/LoadingStore";
import { ThemeStore } from "./ThemeStore/ThemeStore";
/** Интерфейс для store */
export interface Store {
  FavouriteTown: FavouriteTownStore;
  Theme: ThemeStore;
  Loading: LoadingStore;
}
/** Store */
export const store: Store = {
  FavouriteTown: new FavouriteTownStore(),
  Theme: new ThemeStore(),
  Loading: new LoadingStore(),
};
