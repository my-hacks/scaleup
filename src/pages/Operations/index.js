import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import { Slider, CheckBox, Avatar } from "react-native-elements";
import api from "../../services/api";
import { colors, metrics } from "../../styles";
import imgMap from "../../images/map.png";
import styles from "./styles";

export class Operations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      checked: false,
      checked1: false,
      checked2: false
    };
  }

  sendSMS = () => {
    this.setState({
      checked: !this.state.checked
    });

    let data = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        phoneNumber: `+5511971801555`
      })
    };
    fetch(
      "http://node-express-scaleup.pzvdeedvjc.sa-east-1.elasticbeanstalk.com/send_sms",
      data
    )
      .then(response => response.json())
      .then(responseData => Alert.alert(JSON.stringify(responseData)))
      .catch(err => console.log("erro", err));
  };

  sendSMS1 = () => {
    this.setState({
      checked1: !this.state.checked1
    });

    let data = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        phoneNumber: `+5511997963602`
      })
    };
    fetch(
      "http://node-express-scaleup.pzvdeedvjc.sa-east-1.elasticbeanstalk.com/send_sms",
      data
    )
      .then(response => response.json())
      .then(responseData => Alert.alert(JSON.stringify(responseData)))
      .catch(err => console.log("erro", err));
  };

  sendAllMessages = async () => {
    // this.sendSMS();
    // this.sendSMS1();
    store.toggle();
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
            style={{
              flex: 1,
              alignItems: "stretch",
              justifyContent: "center",
              alignItems: "center",
              width: metrics.screenWidth
            }}
          >
            <Slider
              thumbTintColor="#00D8D6"
              minimumValue={0}
              maximumValue={150}
              step={1}
              value={this.state.valor}
              onValueChange={value => this.setState({ valor: value })}
              style={{ width: metrics.screenWidth - 60 }}
            />
            <Text>Value: {this.state.valor}</Text>
          </View>

          <TouchableOpacity
            style={styles.buttonPost}
            onPress={() => this.sendAllMessages}
          >
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
            onPress={this.sendSMS}
          />
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
            checked={this.state.checked2}
            checkedColor="green"
          />
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
            checked={this.state.checked1}
            checkedColor="green"
            onPress={this.sendSMS1}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Operations;
