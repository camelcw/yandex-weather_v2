import { FavouriteTownStore } from "./FavouriteTownStore";
/** Интерфейс для store */
export interface Store {
  FavouriteTown: FavouriteTownStore;
}
/** Store favorite town */
export const store: Store = {
  FavouriteTown: new FavouriteTownStore(),
};
