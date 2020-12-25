import Taro, { eventCenter } from "@tarojs/taro";
import React from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import "./CityHeader.scss";

import ShowMoreText from "../ShowMoreText/ShowMoreText";

export default class CityHeader extends React.Component {
  static defaultProps = {
    headInfo: {}
  };
  render() {
    const { headInfo } = this.props;
    return (
      <View className="head-container">
        <Image className="city-img" src={headInfo.firstBanner}></Image>
        <View className="head-content">
          <View className="title">{headInfo.slogan}</View>
          <ShowMoreText description={headInfo.description} />
          <View className="bottom">
            <View className="title">
              {headInfo.name.replace(/市$/g, "")}老乡交流群
            </View>
            <View className="subtitle">
              加入城市，对话框恢复「{headInfo.name}」
            </View>
            <View className="group-container">
              <View className="avatar-container">
                {[...Array(7)].map(index => {
                  return <View className="avatar" key={index}></View>;
                })}
              </View>
              <View className="city-group--btn">+城市群</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
