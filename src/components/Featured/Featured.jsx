/**
 * @description 城市精选
 * @author ifxi
 */
import React from "react";
import { View, Image, Text, Block } from "@tarojs/components";
import "./Featured.scss";
export default class Featured extends React.Component {
  static defaultProps = {
    articles: []
  };
  render() {
    const { articles } = this.props;
    return (
      <View className="cell-container">
        {articles.map(article => {
          return (
            <View className="cell" key={article.id}>
              <View className="tag-container">
                <Image className="icon"></Image>
                <Text className="left-title">{article.categoryTypeName}</Text>
                <Text className="right-title">
                  {article.cityName.replace(/市$/g, "")}
                </Text>
              </View>
              <Image
                className="banner"
                mode="aspectFill"
                src={article.bannerImg}
              ></Image>
              <View className="title">{article.title}</View>
              <View className="bottom-container">
                <View className="left">
                  <Image className="avatar" src={article.authorAvatar}></Image>
                  <Text>{article.authorName}</Text>
                </View>
                <View className="right">
                  <View className="left-1">
                    <Image className="comment-icon"></Image>
                    <Text>{article.reviewAmt}</Text>
                  </View>
                  <View>
                    <Image className="comment-like"></Image>
                    <Text>{article.likeAmt}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
