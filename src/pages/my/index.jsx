import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtButton } from "taro-ui";

@inject("MyStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "我的"
  };

  state = {};

  render() {
    const { MyStore } = this.props;
    return (
      <View>
        我是个人页面{MyStore.name}
        <AtButton type="primary" onClick={() => MyStore.editName("我被修改了")}>
          修改数据
        </AtButton>
      </View>
    );
  }
}
export default Index;
