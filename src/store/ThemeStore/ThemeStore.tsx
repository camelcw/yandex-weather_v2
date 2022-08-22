import { message } from "antd";
import { action, makeObservable, observable } from "mobx";
/** Store для темы */
export class ThemeStore {
  active: boolean;
  constructor() {
    this.active = true;
    // makeAutoObservable(this);
    makeObservable(this, {
      active: observable,
      setTheme: action,
      Toggle: action,
    });
  }

  setTheme(active: boolean) {
    this.active = active;
  }

  Toggle = () => {
    this.setTheme(!this.active);
    if (this.active) {
      message.info("White theme");
    } else {
      message.info("Dark theme");
    }
  };
}
