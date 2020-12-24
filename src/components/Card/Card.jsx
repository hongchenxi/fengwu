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
            <View>{name.replace(/市$/g, "")}</View>
            <View>{slogan}</View>
          </View>
          <View>
            <View className="right">
              <Text>{hotAmt} 助力</Text>
              <Image className="fire"></Image>
            </View>
          </View>
        </View>
        <View className="bottom">
          <View>
            <View>特产</View>
            <View>{localProductAmt}</View>
          </View>
          <View>
            <View>景点</View>
            <View>{scenicAmt}</View>
          </View>
          <View>
            <View>文化</View>
            <View>{cultureAmt}</View>
          </View>
          <View>
            <View>品牌</View>
            <View>{brandAmt}</View>
          </View>
        </View>
      </View>
    );
  }
}
