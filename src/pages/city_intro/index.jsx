/**
 * @description 城市介绍
 * @author ifxi
 */

import React from "react";
import H5RichText from "../../components/H5RichText/H5RichText";
import { View } from "@tarojs/components";
import Taro, { getCurrentInstance } from "@tarojs/taro";
export default class CityIntro extends React.Component {
  state = {
    richText: ""
  };
  componentDidMount() {
    Taro.setNavigationBarTitle({ title: "城市介绍" });
    let { richText } = getCurrentInstance().router.params;
    richText = decodeURIComponent(richText);
    this.setState({ richText });
  }
  render() {
    const { richText } = this.state;
    return (
      <View>
        <H5RichText richText={richText} />
      </View>
    );
  }
}
