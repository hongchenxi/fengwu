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
    headInfo: {
      activityList: [],
      bannerList: [],
      baseProvinceName: "山东省",
      code: 370200,
      description:
        '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" /><meta content="width=device-width, target-densitydpi=320, user-scalable=no" name="viewport" /><meta content="yes" name="apple-mobile-web-app-capable"><meta content="black" name="apple-mobile-web-app-status-bar-style"><meta content="telephone=no" name="format-detection"><link  href="https://image.huaxiafengwu.com/tinymce-style.css?v=1598504770702" rel="stylesheet" type="text/css" /><script src="https://image.huaxiafengwu.com/js/lazysizes.min.js?v=5.2.1" async=""></script></head><body class="content"><p><strong>青岛</strong>别称岛城、琴岛，是山东省副省级市、计划单列市，国务院批复确定的中国沿海重要中心城市和滨海度假旅游城市、国际性港口城市。截至2018年，全市下辖7个区、代管3个县级市，总面积11293平方千米，2019年全市常住总人口949.98万人。其中，市区常住人口645.20万人。</p> \n<p>青岛地处中国华东地区、山东半岛东南、东濒黄海，位于中日韩自贸区的前沿地带，是山东省经济中心、国家重要的现代海洋产业发展先行区、东北亚国际航运枢纽、海上体育运动基地 ， 一带一路新亚欧大陆桥经济走廊主要节点城市和海上合作战略支点。</p> \n<p>青岛昔称胶澳，是国家历史文化名城、中国道教发祥地 。因树木繁多，四季常青而得名。1891年清政府驻兵建制， 青岛是2008北京奥运会和第13届残奥会帆船比赛举办城市，是中国帆船之都， 亚洲最佳航海城，世界啤酒之城、联合国“电影之都”、全国首批沿海开放城市、全国文明城市、中国最具幸福感城市。被誉为“东方瑞士” 、中国品牌之都。</p></body></html>',
      favoriteAmt: 253,
      firstBanner: "https://image.huaxiafengwu.com/city/2/1588150660825.webp",
      firstBannerVideo: "",
      hotAmt: 9819,
      isFavorite: false,
      isLiked: false,
      likeAmt: 540,
      mayorAvatar: "",
      mayorName: "",
      mayorQuote: "",
      mayorTitle: "",
      mayorUserId: 0,
      name: "青岛市",
      parentCityCode: 0,
      parentCityName: "",
      publishStatus: 10,
      slogan: "红瓦绿树，碧海蓝天",
      snsGroupCode:
        "https://image.huaxiafengwu.com/city/370200/sns/1595842500740.jpeg",
      snsGroupDescription:
        "长按保存图片，微信打开识别二维码入群\n风里雨里，我们在群里等你哦～",
      unLightedCooperationLink: "",
      unLightedDescSubject: "助力点亮城市  让更多人看到她的精彩",
      unLightedDescText:
        "热爱这座城市，就给世界一个了解她的机会。你的助力与分享，将点亮城市，解锁精彩的城市内容和丰富全面的百科，让更多人了解她的美好风物，发现她的独特魅力。",
      voteId: 0,
      voteName: "",
      voteRank: ""
    },
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
    const { headInfo, articles, shareInfo } = this.state;
    return (
      <View>
        <CityHeader headInfo={headInfo} />
        <View className="section-title">城市风物</View>
        <FengWu />
        <View className="section-title">城市精选</View>
        <Featured articles={articles} />
        <Share shareInfo={shareInfo} />
      </View>
    );
  }
}
