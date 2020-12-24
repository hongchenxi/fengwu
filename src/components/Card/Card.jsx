import Taro, { eventCenter } from "@tarojs/taro";
import React from "react";
import { View, Text, Image } from "@tarojs/components";
import "./Card.scss";

export default class Card extends React.Component {
  navigateTo = () => {
    Taro.navigateTo({
      url: "/pages/city_detail/index?name=青岛市"
    });
  };
  render() {
    const {
      name,
      slogan,
      hotAmt,
      localProductAmt,
      scenicAmt,
      cultureAmt,
      brandAmt,
      cityCardImg
    } = this.props.city;
    return (
      <View
        className="card-container"
        style={{ backgroundImage: `url(${cityCardImg})` }}
        onClick={this.navigateTo}
      >
        <View className="top">
          <View className="left">
            <View className="title">{name.replace(/市$/g, "")}</View>
            <View className="subtitle">{slogan}</View>
          </View>
          <View>
            <View className="right">
              <Text className="hot">{hotAmt} 助力</Text>
              <Image className="fire"></Image>
            </View>
          </View>
        </View>
        <View className="bottom">
          <View className="item">
            <View className="name">特产</View>
            <View className="amt">{localProductAmt}</View>
          </View>
          <View className="item">
            <View className="name">景点</View>
            <View className="amt">{scenicAmt}</View>
          </View>
          <View className="item">
            <View className="name">文化</View>
            <View className="amt">{cultureAmt}</View>
          </View>
          <View className="item">
            <View className="name">品牌</View>
            <View className="amt">{brandAmt}</View>
          </View>
        </View>
      </View>
    );
  }
}
