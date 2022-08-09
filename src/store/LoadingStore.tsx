import { makeAutoObservable } from "mobx";

export class LoadingStore {
  isLoading: boolean;
  constructor() {
    this.isLoading = true;
    makeAutoObservable(this);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  Toggle() {
    this.setIsLoading(!this.isLoading);
  }
}
