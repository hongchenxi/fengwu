/**
 * @description 城市风物
 * @author ifxi
 */

import Taro, { eventCenter } from "@tarojs/taro";
import React from "react";
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import "./FengWu.scss";

export default class FengWu extends React.Component {
  state = {
    data: {
      brandAmt: 37,
      brandList: [
        {
          banner: "https://image.huaxiafengwu.com/brand/2/1589546173595.jpeg",
          categoryType: 4,
          categoryTypeName: "品牌",
          cityCode: 370281,
          cityName: "胶州市",
          description:
            "迎君来大酒店的前身是“迎君来饭店”，坐落在胶州杭州路南。 酒店设有餐厅、宴会厅、粥吧等，提供各类美食风味及东方特色菜肴。2800平方米营业面积，能同时接纳４００人大型宴会，２０个豪华宴会厅可举办大型时酒会及各类宴会、喜宴、会议和各类商务展示活动，格调高雅的大堂酒吧",
          hotAmt: 91,
          id: 105,
          likeAmt: 90,
          name: "迎君来大酒店",
          parentCityCode: 370200,
          score: 91.0,
          wikiId: 350
        },
        {
          banner: "https://image.huaxiafengwu.com/brand/2/1589545828156.jpeg",
          categoryType: 4,
          categoryTypeName: "品牌",
          cityCode: 370281,
          cityName: "胶州市",
          description:
            "巴子食品是规模化肉食品加工企业， 巴子的新建厂房完全按照高标准的食品生产要求设计和建设，不管在硬件还是软件建设上都有了很大提高，巴子食品将以更加整洁的生产环境和更加科学的管理方法为广大顾客呈现更加放心、美味的食品，创造更好的经济效益和社会效益。公司的产品全部都采用放心原料，严格按照国家要求生产。配方的独特，形成了巴子食品自己的风味特点。",
          hotAmt: 75,
          id: 108,
          likeAmt: 72,
          name: "巴子食品",
          parentCityCode: 370200,
          score: 75.0,
          wikiId: 357
        },
        {
          banner: "https://image.huaxiafengwu.com/brand/2/1589546973972.jpeg",
          categoryType: 4,
          categoryTypeName: "品牌",
          cityCode: 370281,
          cityName: "胶州市",
          description:
            "文明饭店是胶州市一家开了多年的家庭饭店，主打羊汤，店面虽然不大装修也不华丽，但菜品干净，价格亲民，是非常地道的鲁菜小馆。",
          hotAmt: 71,
          id: 106,
          likeAmt: 70,
          name: "文明饭店",
          parentCityCode: 370200,
          score: 71.0,
          wikiId: 352
        },
        {
          banner: "https://image.huaxiafengwu.com/brand/2/1589546199057.jpeg",
          categoryType: 4,
          categoryTypeName: "品牌",
          cityCode: 370281,
          cityName: "胶州市",
          description:
            "青岛新希望琴牌乳业有限公司，前身是有五十多年乳品加工历史，集奶牛养殖、乳品加工、销售配送于一体的青岛市奶业总公司。",
          hotAmt: 61,
          id: 107,
          likeAmt: 60,
          name: "新希望琴牌乳业",
          parentCityCode: 370200,
          score: 61.0,
          wikiId: 354
        },
        {
          banner: "https://image.huaxiafengwu.com/brand/2/1588151698381.webp",
          categoryType: 4,
          categoryTypeName: "品牌",
          cityCode: 370200,
          cityName: "青岛市",
          description:
            "青岛啤酒产自青岛啤酒股份有限公司，公司的前身是国营青岛啤酒厂，1903年由英、德两国商人合资开办，是最早的啤酒生产企业之一。2008年北京奥运会官方赞助商，跻身世界品牌500强。",
          hotAmt: 21,
          id: 67,
          likeAmt: 8,
          name: "青岛啤酒",
          parentCityCode: 0,
          score: 21.0,
          wikiId: 169
        },
        {
          banner:
            "https://image.huaxiafengwu.com/brand/450/logo/1596608170779.jpeg",
          categoryType: 4,
          categoryTypeName: "品牌",
          cityCode: 370200,
          cityName: "青岛",
          description:
            "王哥庄大馒头至今已有500余年历史，是青岛当地具有代表性的非物质文化遗产，在传统工艺的基础上，将传统手工艺与现代雕塑艺术相结合。以大馒头为主打产品，配以枣山、花卷、豆沙包、五谷杂粮小馒头等特色花样馒头，古老悠香，味道纯正，营养丰富，香甜可口，深受广大消费者喜爱。",
          hotAmt: 15,
          id: 450,
          likeAmt: 10,
          name: "王哥庄大馒头",
          parentCityCode: 0,
          score: 15.0,
          wikiId: 3299
        }
      ],
      cultureAmt: 17,
      cultureList: [
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/331/1589541190106.jpeg",
          categoryType: 2,
          categoryTypeName: "文化",
          cityCode: 370281,
          cityName: "胶州市",
          description:
            "八角鼓”常常一个段子用几种不同曲调的曲牌联在一起演唱，散、韵兼收，有板有眼。",
          hotAmt: 210,
          id: 70,
          likeAmt: 208,
          name: "胶州八角鼓",
          parentCityCode: 370200,
          score: 210.0,
          wikiId: 331
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/336/1589542934321.jpeg",
          categoryType: 2,
          categoryTypeName: "文化",
          cityCode: 370281,
          cityName: "胶州市",
          description:
            "古老的民间艺术，历史悠久，表现形式大体分为单色剪纸、活动剪纸、彩色剪纸和贴彩剪纸四种。",
          hotAmt: 178,
          id: 71,
          likeAmt: 177,
          name: "胶州剪纸",
          parentCityCode: 370200,
          score: 178.0,
          wikiId: 336
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/340/1589540318353.jpeg",
          categoryType: 2,
          categoryTypeName: "文化",
          cityCode: 370281,
          cityName: "胶州市",
          description: "流传久远的纯手工工艺",
          hotAmt: 125,
          id: 73,
          likeAmt: 124,
          name: "大相家粉条制作手艺",
          parentCityCode: 370200,
          score: 125.0,
          wikiId: 340
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/337/1589543132911.jpeg",
          categoryType: 2,
          categoryTypeName: "文化",
          cityCode: 370281,
          cityName: "胶州市",
          description:
            "历经9代相传，400年来先后融入各种拳种的技术优点，最后由第八代传人刘正海继承发展，潜心修练58载而终成一家，于2010年挂牌成立胶州市三铺龙拳研究会。",
          hotAmt: 82,
          id: 72,
          likeAmt: 82,
          name: "三铺龙拳",
          parentCityCode: 370200,
          score: 82.0,
          wikiId: 337
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/4482/1597917492186.png",
          categoryType: 2,
          categoryTypeName: "文化",
          cityCode: 370200,
          cityName: "青岛市",
          description: "用露水制成的七夕节糕点",
          hotAmt: 24,
          id: 794,
          likeAmt: 16,
          name: "吃巧果",
          parentCityCode: 0,
          score: 24.0,
          wikiId: 4482
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/undefined/1588246105207.webp",
          categoryType: 2,
          categoryTypeName: "文化",
          cityCode: 370200,
          cityName: "青岛市",
          description: "被红色浸染的古老且充满温情的手艺",
          hotAmt: 17,
          id: 48,
          likeAmt: 8,
          name: "胶南泊里红席编织技艺",
          parentCityCode: 0,
          score: 17.0,
          wikiId: 200
        }
      ],
      localProductAmt: 95,
      localProductList: [
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/185/1598497884568.png",
          categoryType: 1,
          categoryTypeName: "特产",
          cityCode: 370281,
          cityName: "胶州市",
          description: "帮嫩薄汁乳白，味鲜美纤维细营养好",
          hotAmt: 261,
          id: 66,
          likeAmt: 225,
          name: "胶州大白菜",
          parentCityCode: 370200,
          score: 261.0,
          wikiId: 185
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/363/1589539649065.jpeg",
          categoryType: 1,
          categoryTypeName: "特产",
          cityCode: 370281,
          cityName: "胶州市",
          description: "色泽淡黄、均匀，口感软糯绵滑",
          hotAmt: 123,
          id: 144,
          likeAmt: 116,
          name: "柳沟小米",
          parentCityCode: 370200,
          score: 123.0,
          wikiId: 363
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/338/1589539220438.jpeg",
          categoryType: 1,
          categoryTypeName: "特产",
          cityCode: 370281,
          cityName: "胶州市",
          description: " 民间传统美味，鲜、嫩、香、烂",
          hotAmt: 96,
          id: 135,
          likeAmt: 87,
          name: "猪血灌肠",
          parentCityCode: 370200,
          score: 96.0,
          wikiId: 338
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/333/1589542801806.jpeg",
          categoryType: 1,
          categoryTypeName: "特产",
          cityCode: 370281,
          cityName: "胶州市",
          description: "胶州大锅饼色泽金黄、外香里软、香甜可口",
          hotAmt: 69,
          id: 132,
          likeAmt: 68,
          name: "胶州大锅饼",
          parentCityCode: 370200,
          score: 69.0,
          wikiId: 333
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/undefined/1588759636512.webp",
          categoryType: 1,
          categoryTypeName: "特产",
          cityCode: 370200,
          cityName: "青岛市",
          description: "组织细腻，柔软可口，味道独特",
          hotAmt: 22,
          id: 84,
          likeAmt: 5,
          name: "高粱饴",
          parentCityCode: 0,
          score: 22.0,
          wikiId: 240
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/undefined/1588758449101.webp",
          categoryType: 1,
          categoryTypeName: "特产",
          cityCode: 370200,
          cityName: "青岛市",
          description: "历史悠久，甘香醇厚",
          hotAmt: 19,
          id: 82,
          likeAmt: 4,
          name: "脂渣",
          parentCityCode: 0,
          score: 19.0,
          wikiId: 238
        }
      ],
      scenicAmt: 44,
      scenicList: [
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/360/1589543865073.jpeg",
          categoryType: 3,
          categoryTypeName: "景点",
          cityCode: 370281,
          cityName: "胶州市",
          description:
            "大沽河博物馆是一座系统展示大沽河流域自然生态、水利治理、历史文明、民俗风情的综合性博物馆，集陈列展览、教育服务、收藏保护、文化交流、研究探索于一体。",
          hotAmt: 175,
          id: 57,
          likeAmt: 173,
          name: "大沽河博物馆",
          parentCityCode: 370200,
          score: 173.0,
          wikiId: 360
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/358/1589544444508.jpeg",
          categoryType: 3,
          categoryTypeName: "景点",
          cityCode: 370281,
          cityName: "胶州市",
          description: "一心二桥三园多丘十八景",
          hotAmt: 104,
          id: 56,
          likeAmt: 103,
          name: "胶州三里河公园",
          parentCityCode: 370200,
          score: 103.0,
          wikiId: 358
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/361/1589543711284.jpeg",
          categoryType: 3,
          categoryTypeName: "景点",
          cityCode: 370281,
          cityName: "胶州市",
          description: "再现了古胶州八景之一——麻湾渔乐",
          hotAmt: 75,
          id: 58,
          likeAmt: 74,
          name: "麻湾渔乐园",
          parentCityCode: 370200,
          score: 74.0,
          wikiId: 361
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/362/1589543375883.jpeg",
          categoryType: 3,
          categoryTypeName: "景点",
          cityCode: 370281,
          cityName: "胶州市",
          description: "全面展现胶州的历史和文化的内涵",
          hotAmt: 50,
          id: 59,
          likeAmt: 49,
          name: "胶州九兴艺术馆",
          parentCityCode: 370200,
          score: 49.0,
          wikiId: 362
        },
        {
          banner:
            "https://image.huaxiafengwu.com/scenery/4094/1597401392222.png",
          categoryType: 3,
          categoryTypeName: "景点",
          cityCode: 370200,
          cityName: "青岛市",
          description: "巴洛克风格的商业街",
          hotAmt: 19,
          id: 972,
          likeAmt: 13,
          name: "天幕城",
          parentCityCode: 0,
          score: 13.0,
          wikiId: 4094
        },
        {
          banner:
            "https://image.huaxiafengwu.com/submission/51881/banner/1607571483022",
          categoryType: 3,
          categoryTypeName: "景点",
          cityCode: 370200,
          cityName: "青岛市",
          description: "极为罕见的德国古典庭院式酒店",
          hotAmt: 9,
          id: 3337,
          likeAmt: 7,
          name: "青岛怡堡酒店",
          parentCityCode: 0,
          score: 7.0,
          wikiId: 65361
        }
      ]
    },
    categorys: [],
    current: 0
  };

  handleCategory = () => {
    const data = this.state.data;
    let localProduct = {
      id: 0,
      name: "特产",
      amt: data.localProductAmt,
      list: data.localProductList
    };
    let scenic = {
      id: 1,
      name: "景点",
      amt: data.scenicAmt,
      list: data.scenicList
    };
    let culture = {
      id: 2,
      name: "文化",
      amt: data.cultureAmt,
      list: data.cultureList
    };
    let brand = {
      id: 3,
      name: "品牌",
      amt: data.brandAmt,
      list: data.brandList
    };

    let categorys = this.state.categorys;
    categorys.push(localProduct);
    categorys.push(scenic);
    categorys.push(culture);
    categorys.push(brand);
    this.setState({ categorys });
  };

  componentDidMount() {
    this.handleCategory();
  }

  change = e => {
    this.setState({
      current: e.detail.current
    });
  };
  switch = id => {
    this.setState({
      current: id
    });
  };
  render() {
    const { categorys, current } = this.state;
    return (
      <View>
        <View className="tab-container">
          {categorys.map(category => {
            return (
              <View
                key={category.id}
                className={`item ${category.id === current && "item-active"}`}
                onClick={() => this.switch(category.id)}
              >
                <View className="title">{category.name}</View>
                <View
                  className={`subtitle ${category.id === current &&
                    "subtitle-active"}`}
                >
                  {category.amt}
                  {category.name === "文化" ? "项" : "个"}
                </View>
              </View>
            );
          })}
        </View>
        <View className="content">
          <Swiper
            className="banner-swiper"
            current={current}
            onChange={e => this.change(e)}
          >
            {categorys.map(category => (
              <SwiperItem key={category.id} className="banner-swiper">
                <View className="container">
                  {category.list.map(item => {
                    return (
                      <View className="item" key={item.id}>
                        <Image className="banner" src={item.banner}></Image>
                        <View className="name single-text">{item.name}</View>
                        <View className="like-container">
                          <Image className="like-icon"></Image>
                          <Text className="like">{item.likeAmt}</Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </SwiperItem>
            ))}
          </Swiper>
          <View className="show-more">查看全部</View>
        </View>
      </View>
    );
  }
}
