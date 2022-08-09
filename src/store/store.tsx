import { FavouriteTownStore } from "./FavouriteTownStore";
import { LoadingStore } from "./LoadingStore";
import { ThemeStore } from "./ThemeStore";
/** Интерфейс для store */
export interface Store {
  FavouriteTown: FavouriteTownStore;
  Theme: ThemeStore;
  Loading: LoadingStore;
}
/** Store favorite town */
export const store: Store = {
  FavouriteTown: new FavouriteTownStore(),
  Theme: new ThemeStore(),
  Loading: new LoadingStore(),
};
