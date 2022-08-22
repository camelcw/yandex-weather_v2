import { action, makeObservable, observable } from "mobx";
/** Store при загрузке */
export class LoadingStore {
  isLoading: boolean;
  constructor() {
    this.isLoading = true;
    makeObservable(this, {
      isLoading: observable,
      setIsLoading: action,
      Toggle: action,
    });
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  Toggle() {
    this.setIsLoading(!this.isLoading);
  }
}
