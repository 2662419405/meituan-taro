import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import { AtTabBar } from "taro-ui";

class Index extends Component {
  config = {
    navigationBarTitleText: ""
  };

  state = {
    current: 0
  };

  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  handleClick = current => {
    this.setState({
      current
    });
  };
  render() {
    return (
      <View>
        <AtTabBar
          fixed
          tabList={[
            { title: "外卖", iconType: "iconfont iconeliaomo-copy" },
            { title: "搜素", iconType: "iconfont iconzhinanzhen" },
            { title: "订单", iconType: "iconfont iconicon-" },
            { title: "我的", iconType: "iconfont iconwodedangxuan" }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;
