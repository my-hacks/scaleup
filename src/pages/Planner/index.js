import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Slider, CheckBox, Avatar } from "react-native-elements";
import Timeline from "react-native-timeline-listview";
import terno from "../../images/terno.png";
import terno_gray from "../../images/guindaste_cinza.png";
import imgMap from "../../images/map.png";
import styles from "./styles";

export class Planner extends Component {
  state = {
    value: 0,
    checked: false
  };

  render() {
    return (
      <ImageBackground source={imgMap} style={styles.comtainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.dayContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Seg, 1/7</Text>
            <View style={styles.schedule}>
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image source={terno} />
              </View>
              <View style={{ width: "60%" }}>
                <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                  Embarcação 001
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                  Turno 1 : 01h00 às 07h00
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonConfirm}>
              <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dayContainer1}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Seg, 1/7</Text>
            <View style={styles.schedule1}>
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image source={terno_gray} />
              </View>
              <View style={{ width: "60%" }}>
                <Text
                  style={{ fontSize: 19, fontWeight: "bold", color: "#7a7a7a" }}
                >
                  Embarcação 001
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, color: "#7a7a7a" }}
                >
                  Turno 1 : 01h00 às 07h00
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonConfirm1}>
              <Text style={{ color: "#7a7a7a", fontWeight: "bold" }}>
                Confirmar
              </Text>
            </TouchableOpacity>

            <View style={{ left: 38, fontWeight: "bold" }}>
              <Text>|</Text>
              <Text>|</Text>
              <Text>|</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <View style={styles.dayContainer}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                  Seg, 1/7
                </Text>
                <View style={styles.schedule}>
                  <View
                    style={{
                      width: "30%",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Image source={terno} />
                  </View>
                  <View style={{ width: "60%" }}>
                    <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                      Embarcação 001
                    </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                      Turno 2 : 19h00 às 6h00
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.buttonConfirm}>
                  <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                    Confirmar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reajust}>
                  <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                    Turno Reajustado
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Planner;
