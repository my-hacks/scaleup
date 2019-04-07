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
      checked2: false,
      checked3: false,
      checked4: false
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
    this.sendSMS();
    this.sendSMS1();
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
                  "https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/37536098_1748376518582693_300686112022593536_n.jpg?_nc_cat=105&_nc_ht=scontent.fudi1-1.fna&oh=038dd1d998f53884f29294e4ac9563e9&oe=5D4BB2AF"
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
                  "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/42889938_1869469563108900_3200879163946827776_n.jpg?_nc_cat=106&_nc_ht=scontent-gru2-2.xx&oh=c0dff4b11f53a574a50d8352e9c3f7cb&oe=5D4B370C"
              }}
              activeOpacity={0.7}
            />
            <Text style={{ marginLeft: 20 }}>Ian Oliveira</Text>
          </View>
          <CheckBox
            center
            checkedIcon="dot-circle-o"
            checked={this.state.checked2}
            checkedColor="green"
            onPress={() =>
              this.setState({
                checked2: !this.state.checked2
              })
            }
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
                  "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/26904733_1577728828976807_1775369301714090347_n.jpg?_nc_cat=101&_nc_ht=scontent-gru2-2.xx&oh=16120647eff0473da6d679e638f1793a&oe=5D42CA61"
              }}
              activeOpacity={0.7}
            />
            <Text style={{ marginLeft: 20 }}>Jairo Iglesias</Text>
          </View>
          <CheckBox
            center
            checkedIcon="dot-circle-o"
            checked={this.state.checked1}
            checkedColor="green"
            onPress={this.sendSMS1}
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
                  "https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-9/30572203_1665158476872067_7914516148224262144_n.jpg?_nc_cat=103&_nc_ht=scontent.fudi1-1.fna&oh=909b1249642ef6d96088906207335545&oe=5D4E0269"
              }}
              activeOpacity={0.7}
            />
            <Text style={{ marginLeft: 20 }}>Emerson Silva</Text>
          </View>
          <CheckBox
            center
            checkedIcon="dot-circle-o"
            checked={this.state.checked4}
            checkedColor="green"
            onPress={() =>
              this.setState({
                checked4: !this.state.checked4
              })
            }
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Operations;
