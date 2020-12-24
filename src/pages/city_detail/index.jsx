import Taro, { eventCenter, getCurrentInstance } from "@tarojs/taro";
import React, { Component } from "react";
import { View } from "@tarojs/components";

import "./index.scss";
import CityHeader from "../../components/CityHeader/CityHeader";
import FengWu from "../../components/FengWu/FengWu";
import Featured from "../../components/Featured/Featured";
import Share from "../../components/Share/Share";

export default class CityDetail extends Component {
  state = {
    articles: [
      {
        authorAvatar:
          "https://image.huaxiafengwu.com/avatar/1592992305172/1592992310381.jpeg",
        authorName: "会当凌绝顶",
        authorUserId: 100228,
        bannerImg:
          "https://image.huaxiafengwu.com/article/-1607608962760/head/1607609139694",
        bannerVideo: "",
        categoryType: 1,
        categoryTypeName: "特产",
        cityCode: 370200,
        cityName: "青岛市",
        createdTime: 1607609414367,
        creator: 76,
        creatorName: "",
        delFlag: 0,
        filterTimeFrom: null,
        filterTimeTo: null,
        id: 3658,
        likeAmt: 34,
        pageNum: 0,
        pageSize: 0,
        reviewAmt: 0,
        score: 1.607935703935e12,
        searchInitCount: 10,
        searchText: "",
        selectedIds: [],
        statusList: [],
        title: "即墨老酒与阿胶组队，酌饮初冬温暖滋味",
        typeList: [],
        updatedTime: 1608603703061,
        updater: 81,
        updaterName: ""
      },
      {
        authorAvatar:
          "https://image.huaxiafengwu.com/avatar/1592993608307/1592993616162.jpeg",
        authorName: "Ance-Li",
        authorUserId: 100236,
        bannerImg:
          "https://image.huaxiafengwu.com/article/-1600395695324/head/1600397148328.png",
        bannerVideo: "",
        categoryType: 4,
        categoryTypeName: "品牌",
        cityCode: 370200,
        cityName: "青岛市",
        createdTime: 1600397152665,
        creator: 68,
        creatorName: "",
        delFlag: 0,
        filterTimeFrom: null,
        filterTimeTo: null,
        id: 2959,
        likeAmt: 7,
        pageNum: 0,
        pageSize: 0,
        reviewAmt: 0,
        score: 1.601197784049e12,
        searchInitCount: 10,
        searchText: "",
        selectedIds: [],
        statusList: [],
        title: " #青岛探店#传统鲁菜、百年老店【春和楼】",
        typeList: [],
        updatedTime: 1601433458649,
        updater: 17,
        updaterName: ""
      },
      {
        authorAvatar:
          "https://image.huaxiafengwu.com/avatar/1592992305172/1592992310381.jpeg",
        authorName: "会当凌绝顶",
        authorUserId: 100228,
        bannerImg:
          "https://image.huaxiafengwu.com/article/2723/head/1601035170740.png",
        bannerVideo: "",
        categoryType: 4,
        categoryTypeName: "品牌",
        cityCode: 370200,
        cityName: "青岛市",
        createdTime: 1599631815172,
        creator: 57,
        creatorName: "",
        delFlag: 0,
        filterTimeFrom: null,
        filterTimeTo: null,
        id: 2723,
        likeAmt: 18,
        pageNum: 0,
        pageSize: 0,
        reviewAmt: 1,
        score: 1.600842733121e12,
        searchInitCount: 10,
        searchText: "",
        selectedIds: [],
        statusList: [],
        title: " 80年的老字号非遗招牌【万和春】又开了一家新店",
        typeList: [],
        updatedTime: 1601035176593,
        updater: 17,
        updaterName: ""
      },
      {
        authorAvatar:
          "https://image.huaxiafengwu.com/avatar/1592993633394/1592993638462.jpeg",
        authorName: "吉祥三木",
        authorUserId: 100237,
        bannerImg:
          "https://image.huaxiafengwu.com/article/-1599457419586/head/1599457982370.png",
        bannerVideo: "",
        categoryType: 3,
        categoryTypeName: "景点",
        cityCode: 370200,
        cityName: "青岛市",
        createdTime: 1599458003047,
        creator: 57,
        creatorName: "",
        delFlag: 0,
        filterTimeFrom: null,
        filterTimeTo: null,
        id: 2660,
        likeAmt: 2,
        pageNum: 0,
        pageSize: 0,
        reviewAmt: 1,
        score: 1.599650637097e12,
        searchInitCount: 10,
        searchText: "",
        selectedIds: [],
        statusList: [],
        title: "Mr.Lv™青岛旅游▪︎青岛啤酒博物馆",
        typeList: [],
        updatedTime: 1599650646689,
        updater: 60,
        updaterName: ""
      }
    ],
    shareInfo: [
      {
        id: 0,
        icon: "",
        title: "助力城市"
      },
      {
        id: 1,
        icon: "",
        title: "分享"
      }
    ]
  };
  componentWillMount() {}

  componentDidMount() {
    const { name } = getCurrentInstance().router.params;
    Taro.setNavigationBarTitle({ title: name });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    const { articles, shareInfo } = this.state;
    return (
      <View>
        <CityHeader />
        <View className="section-title">城市风物</View>
        <FengWu />
        <View className="section-title">城市精选</View>
        <Featured articles={articles} />
        <Share shareInfo={shareInfo} />
      </View>
    );
  }
}
