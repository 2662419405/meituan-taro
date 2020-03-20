import { observable } from "mobx";
import { getUserData, getUserDataGithub } from "../service/my";

const bookStore = observable({
  userinfo: {},
  biao: {},
  getUserInfo() {
    getUserData().then(res => {
      if (res.data.status != 0) {
        this.userinfo = res.data;
      }
    });
  },
  // 第三方登录之后获取数据
  pushDefaultData(data) {
    data.name = decodeURI(data.name);
    this.userinfo = data;
    localStorage.setItem("biao", "github");
    localStorage.setItem("token", data.token);
  },
  // info-github
  getDefaultDataGithub() {
    let token = localStorage.getItem("token");
    getUserDataGithub(token).then(res => {
      this.userinfo = res.data;
    });
  }
});

export default bookStore;
