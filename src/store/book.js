import { observable } from "mobx";

const bookStore = observable({
  name: "sh",
  editName(name) {
    this.name = name;
  }
});

export default bookStore;
