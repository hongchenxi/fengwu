import Taro, { eventCenter } from "@tarojs/taro";
import React from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import "./CityHeader.scss";

import ShowMoreText from "../ShowMoreText/ShowMoreText";

export default class CityHeader extends React.Component {
  state = {
    longText:
      "青岛别称岛城、琴岛，是山东省副省级市、计划单列市，国务院批复确定的中国沿海重要中心城市和滨海度假旅游城市、国际性港口城市。截至2018年，全市下辖7个区、代管3个县级市，总面积11293平方千米，2019年全市常住总人口949.98万人。其中，市区常住人口645.20万人"
  };
  render() {
    const { longText } = this.state;
    return (
      <View className="head-container">
        <Image
          className="city-img"
          src="https://image.huaxiafengwu.com/city/2/1588150660825.webp"
        ></Image>
        <View className="head-content">
          <View className="title">红瓦绿树，碧海蓝天</View>
          <ShowMoreText description={longText} />
          <View className="bottom">
            <View className="title">青岛老乡交流群</View>
            <View className="subtitle">加入城市，对话框恢复「青岛市」</View>
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
