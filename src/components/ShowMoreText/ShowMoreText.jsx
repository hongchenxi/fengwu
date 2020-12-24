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
    const { description, more } = this.props;
    return (
      <View className="more-text--container">
        <View id="first-line" className="first-line--text">
          {description}
        </View>
        <View className="description">
          {description}
          <View className="more-btn">{more}</View>
        </View>
      </View>
    );
  }
}
