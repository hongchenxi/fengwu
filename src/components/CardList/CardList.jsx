import { View } from "@tarojs/components";
import React from "react";
import Card from "../Card/Card";

export default class CardList extends React.Component {
  static defaultProps = {
    citys: []
  };
  render() {
    const { citys } = this.props;

    const element = citys.map((city, index) => {
      return <Card key={index} city={city} />;
    });

    return <View className="card_list">{element}</View>;
  }
}
