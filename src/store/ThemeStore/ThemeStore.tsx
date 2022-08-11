import { makeAutoObservable } from "mobx";
/** Store для темы */
export class ThemeStore {
  active: boolean;
  constructor() {
    this.active = true;
    makeAutoObservable(this);
  }

  setTheme(active: boolean) {
    this.active = active;
  }

  Toggle = () => {
    this.setTheme(!this.active);
    if (this.active) {
      alert("White theme");
    } else {
      alert("Dark theme");
    }
  };
}
