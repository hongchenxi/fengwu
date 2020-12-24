/**
 * @description 底部分享
 * @author ifxi
 */

import React from "react";
import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./Share.scss";

export default class Share extends React.Component {
  static defaultProps = {
    shareInfo: []
  };
  state = {
    safeAreaBottom: 0
  };
  async componentDidMount() {}
  render() {
    const { shareInfo } = this.props;
    return (
      <View className="share-fixed--container">
        {shareInfo.map(share => {
          return (
            <View className="share-item">
              <Image className="icon"></Image>
              <Text className="title">{share.title}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
