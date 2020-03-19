import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";

import "./index.less";

@inject("counterStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "饿了么首页"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props;
    counterStore.incrementAsync();
  };

  render() {
    const {
      counterStore: { counter }
    } = this.props;
    return (
      <View className="index">
        <Text>{counter}</Text>
        <Text>测试服务器</Text>
      </View>
    );
  }
}

export default Index;
