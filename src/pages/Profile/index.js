import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import styles from "./styles";

import logo from "../../images/logo.png";
import nomeLogo from "../../images/text.png";

export class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.comtainer}>
        <Image source={logo} />
        <Image source={nomeLogo} />
        <TouchableOpacity
          style={styles.buttonEnter}
          onPress={() => navigation.navigate("Planner")}
        >
          <Text style={styles.title}>Operador</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonEnter1}
          onPress={() => navigation.navigate("Operations")}
        >
          <Text style={styles.title}>Escalador</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
