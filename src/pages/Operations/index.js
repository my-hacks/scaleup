import React, { Component } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { Slider, CheckBox, Avatar } from "react-native-elements";
import imgMap from "../../images/map.png";
import styles from "./styles";

export class Operations extends Component {
  state = {
    value: 0,
    checked: false
  };

  render() {
    return (
      <ImageBackground source={imgMap} style={styles.comtainer}>
        <Text> Operations </Text>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Mudança de Escala</Text>
          <View style={styles.reorderData}>
            <Text style={styles.textOrderData}>
              DE: 01/07/19 12h00 PARA: 02/07/19 06h00
            </Text>
          </View>
          <Text style={{ marginTop: 10, marginBottom: 10, fontSize: 14 }}>
            Escala por Terno
          </Text>

          <View
            style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}
          >
            <Slider
              thumbTintColor="#00D8D6"
              value={this.state.value}
              onValueChange={value => this.setState({ value })}
            />
            <Text>Value: {this.state.value}</Text>
          </View>

          <TouchableOpacity style={styles.buttonPost}>
            <Text style={styles.textButton}>Enviar Mudanças</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 60,
            width: "85%",
            backgroundColor: "#FFF",
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: "70%",
              height: 30,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Avatar
              small
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
              }}
              activeOpacity={0.7}
            />
            <Text style={{ marginLeft: 20 }}>Igor Heldfeld</Text>
          </View>
          <CheckBox
            center
            checkedIcon="dot-circle-o"
            checked={this.state.checked}
            checkedColor="green"
            onPress={() =>
              this.setState({
                checked: true
              })
            }
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Operations;
