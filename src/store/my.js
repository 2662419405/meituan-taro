import { observable } from "mobx";
import { getUserData } from "../service/my";

const bookStore = observable({
  userinfo: {},
  getUserInfo() {
    getUserData().then(res => {
      if (res.data.status != 0) {
        this.userinfo = res.data;
      }
    });
  }
});

export default bookStore;
