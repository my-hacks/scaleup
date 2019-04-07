import React, { Component } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import imgMap from "../../images/map.png";
import styles from "./styles";

export class Operations extends Component {
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

          <View style={{}}>{/* #TODO slider */}</View>

          <TouchableOpacity style={styles.buttonPost}>
            <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>
              Enviar Mudanças
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Operations;
