import { action, observable } from "mobx";

class UiStore {
  @observable counter = 1;

  @action
  incrementCounter = () => {
    this.counter++;
  };
}

export default new UiStore();
