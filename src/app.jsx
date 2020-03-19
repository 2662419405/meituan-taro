import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Index from "./pages/index";
import "taro-ui/dist/style/index.scss";
import "./icon.scss";
import counterStore from "./store/counter";
import MyStore from "./store/book";

import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore,
  MyStore
};

class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/search/index",
      "pages/order/index",
      "pages/my/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      color: "#7A7E83",
      selectedColor: "#ffd000",
      borderStyle: "black",
      backgroundColor: "#ffffff",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./image/home.png",
          selectedIconPath: "./image/home_select.png",
          text: "首页"
        },
        {
          pagePath: "pages/search/index",
          iconPath: "./image/search.png",
          selectedIconPath: "./image/search_select.png",
          text: "搜索"
        },
        {
          pagePath: "pages/order/index",
          iconPath: "./image/order.png",
          selectedIconPath: "./image/order_select.png",
          text: "订单"
        },
        {
          pagePath: "pages/my/index",
          iconPath: "./image/my.png",
          selectedIconPath: "./image/my_select.png",
          text: "我的"
        }
      ]
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
