import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import imgMap from "../../images/map.png";
import styles from "./styles";

export class Operations extends Component {
  render() {
    return (
      <ImageBackground source={imgMap} style={styles.comtainer}>
        <Text> Operations </Text>
      </ImageBackground>
    );
  }
}

export default Operations;
