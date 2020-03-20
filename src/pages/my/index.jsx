import Taro, { Component, getCurrentPages } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtNavBar, AtList, AtListItem, AtAvatar, AtIcon } from "taro-ui";

import "./index.less";

@inject("myStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "我的"
  };

  state = {};

  componentDidMount() {}

  changeRouter = flag => {
    if (flag) {
      Taro.redirectTo({
        url: "/pages/my/detail/index"
      });
    } else {
      Taro.redirectTo({
        url: "/pages/my/login/index"
      });
    }
  };

  render() {
    const { myStore } = this.props;
    return (
      <View>
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color="#fff"
          title="我的"
          leftIconType="chevron-left"
          border={false}
        />
        <View
          className="profile-number"
          onClick={() => this.changeRouter(myStore.name ? true : false)}
        >
          <View className="profile-link">
            <AtAvatar
              circle={true}
              size="small"
              image={
                myStore.avatar
                  ? myStore.avatar
                  : "//elm.cangdu.org/img/default.jpg"
              }
            ></AtAvatar>
            <View className="user-info">
              <View className="user-info-name">
                {myStore.name ? myStore.name : "请进行登录和注册"}
              </View>
              <View className="user-info-name">
                <AtIcon value="iconfont icon-shouji" />
                <Text className="icon-mobile-number">
                  {myStore.phone ? myStore.phone : "暂无手机号绑定"}
                </Text>
              </View>
            </View>
            <View className="arrow"> > </View>
          </View>
        </View>
        <View className="info-data">
          <View className="info-data-link">
            <Text className="info-data-top">
              <Text className="info-data-strong">0.00</Text>元
            </Text>
            <Text className="info-data-bottom">我的余额</Text>
          </View>
          <View className="info-data-link">
            <Text className="info-data-top">
              <Text className="info-data-strong hong">0</Text>元
            </Text>
            <Text className="info-data-bottom">我的红包</Text>
          </View>
          <View className="info-data-link">
            <Text className="info-data-top">
              <Text className="info-data-strong lv">0</Text>元
            </Text>
            <Text className="info-data-bottom">我的积分</Text>
          </View>
        </View>
        <AtList className="top4" hasBorder={true}>
          <AtListItem
            title="我的订单"
            arrow="right"
            iconInfo={{ size: 14, value: "iconfont icon-icon-university" }}
          />
          <AtListItem
            title="积分商城"
            arrow="right"
            iconInfo={{
              color: "#fc7b53",
              size: 14,
              value: "iconfont icon-xiongmaojifenhongbaoshangchuan_shouhongbao"
            }}
          />
          <AtListItem
            title="饿了么会员卡"
            arrow="right"
            iconInfo={{
              size: 14,
              color: "#ffc636",
              value:
                "iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy"
            }}
          />
        </AtList>
        <AtList className="top4" hasBorder={true}>
          <AtListItem
            title="服务中心"
            arrow="right"
            iconInfo={{
              size: 14,
              color: "#4aa5f0",
              value: "iconfont icon-fuwu"
            }}
          />
          <AtListItem
            title="下载饿了么APP"
            arrow="right"
            iconInfo={{
              size: 14,
              color: "#3cabff",
              value: "iconfont icon-eliaomo"
            }}
          />
        </AtList>
      </View>
    );
  }
}
export default Index;
