/**
 * @description 富文本组件
 * @augments ifxi
 */
import React from "react";
import { View, RichText } from "@tarojs/components";
import "./H5RichText.scss";

export default class H5RichText extends React.Component {
  static defaultProps = {
    richText: ""
  };
  render() {
    const { richText } = this.props;
    return (
      <View className="rich-text--container">
        <RichText
          className="rich-text"
          nodes={richText && richText.match(/<p>(.*?)<\/p>/g).join("<br>")}
        ></RichText>
        <View className="the-end--text">THE END</View>
      </View>
    );
  }
}
