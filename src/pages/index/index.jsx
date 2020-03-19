import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";

import "./index.less";

@inject("myStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "饿了么首页"
  };

  componentDidMount() {
    this.props.myStore.getUserInfo();
  }

  render() {
    return (
      <View className="index">
        <Text>测试服务器</Text>
      </View>
    );
  }
}

export default Index;
