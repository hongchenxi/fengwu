import React, { Component } from "react";
import { View, Image } from "@tarojs/components";

import "./index.scss";
import CardList from "../../components/CardList/CardList";

export default class Index extends Component {
  state = {
    citys: [
      {
        brandAmt: 37,
        cityCardImg:
          "https://image.huaxiafengwu.com/city/370200/card/1594620927553.jpeg",
        code: 370200,
        cultureAmt: 17,
        hotAmt: 9819,
        localProductAmt: 95,
        name: "青岛市",
        publishStatus: 10,
        scenicAmt: 44,
        score: 0,
        slogan: "红瓦绿树，碧海蓝天"
      },
      {
        brandAmt: 8,
        cityCardImg:
          "https://image.huaxiafengwu.com/city/370281/card/1594620914639.jpeg",
        code: 370281,
        cultureAmt: 6,
        hotAmt: 6239,
        localProductAmt: 27,
        name: "胶州市",
        publishStatus: 10,
        scenicAmt: 7,
        score: 0,
        slogan: "黄海明珠，锦绣胶州"
      },
      {
        brandAmt: 9,
        cityCardImg:
          "https://image.huaxiafengwu.com/city/371121/card/1599832216525.png",
        code: 371121,
        cultureAmt: 6,
        hotAmt: 3832,
        localProductAmt: 53,
        name: "五莲县",
        publishStatus: 10,
        scenicAmt: 36,
        score: 0,
        slogan: "山水禅心  康养五莲"
      },
      {
        brandAmt: 7,
        cityCardImg:
          "https://image.huaxiafengwu.com/city/620982/card/1597419072815.png",
        code: 620982,
        cultureAmt: 10,
        hotAmt: 2724,
        localProductAmt: 57,
        name: "敦煌市",
        publishStatus: 10,
        scenicAmt: 29,
        score: 0,
        slogan: "大漠绿洲奇迹  煌煌丝路文明"
      },
      {
        brandAmt: 11,
        cityCardImg:
          "https://image.huaxiafengwu.com/city/340181/card/1596630658773.jpeg",
        code: 340181,
        cultureAmt: 21,
        hotAmt: 2485,
        localProductAmt: 40,
        name: "巢湖市",
        publishStatus: 10,
        scenicAmt: 32,
        score: 0,
        slogan: "巢起皖江  湖秀名城"
      }
    ]
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { citys } = this.state;
    return (
      <View className="index">
        <Image
          className="head-img"
          src="https://image.huaxiafengwu.com/operating_space/53/1591154197130.jpeg"
          mode="widthFix"
        ></Image>
        <View className="section-title">热门城市</View>
        <View className="card-list">
          <CardList citys={citys} />
        </View>
      </View>
    );
  }
}
