import React from "react";
import Taro from "@tarojs/taro";

import { View, Text } from "@tarojs/components";
import "./ShowMoreText.scss";
export default class ShowMoreText extends React.Component {
  static defaultProps = {
    description: "",
    line: 2,
    more: "查看全部"
  };
  state = {
    firstLineHeight: 17
  };
  navigateTo = () => {
    const { description } = this.props;
    Taro.navigateTo({
      url: `/pages/city_intro/index?richText=${encodeURIComponent(description)}`
    });
  };

  componentDidMount() {
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .select("#first-line")
        .boundingClientRect()
        .exec(res => {
          this.setState({
            firstLineHeight: res[0].height
          });
        });
    });
  }
  render() {
    let { description, more } = this.props;
    if (description) {
      description = description
        .match(/<p>(.*?)<\/p>/g)[0]
        .replace(/<[^<>]+>/g, "");
    }
    return (
      <View className="more-text--container">
        <View className="description">
          {description}
          <View className="more-btn" onClick={this.navigateTo}>
            {more}
          </View>
        </View>
        <View id="first-line" className="first-line--text">
          {description}
        </View>
      </View>
    );
  }
}
