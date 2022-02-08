import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Tt from "./asst/Tt.jpg";
import Jt from "./asst/Jt.png";
import a from "./asst/1.png";
import b from "./asst/2.png";
import c from "./asst/3.png";
import d from "./asst/4.png";
import e from "./asst/5.png";
import f from "./asst/6.png";
import g from "./asst/7.png";
import h from "./asst/8.png";
import i from "./asst/9.png";
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.BG} source={Tt} />

      {/* <View style={styles.container1}> */}
      <View style={styles.ItemHolder}>
        <View style={styles.hed}>
          <View style={styles.serarchBar}>
            <TextInput style={styles.searchText} placeholder=" e.g. recharge" />
            <TouchableOpacity>
              <Image style={styles.searchLogo} source={Jt} />
            </TouchableOpacity>
          </View>

          <View style={styles.optionBar}>
            <View style={styles.icons}>
              <View style={styles.Temp}>
                <TouchableOpacity>
                  <Image source={a} />
                </TouchableOpacity>
              </View>
              <View style={styles.Temp}>
                <TouchableOpacity>
                  <Image source={b} />
                </TouchableOpacity>
              </View>
              <View style={styles.Temp}>
                <TouchableOpacity>
                  <Image source={c} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.icons}>
              <View style={styles.Temp}>
                <TouchableOpacity>
                  <Image source={d} />
                </TouchableOpacity>
              </View>
              <View style={styles.Temp}>
                <TouchableOpacity>
                  <Image source={e} />
                </TouchableOpacity>
              </View>
              <View style={styles.Temp}>
                <TouchableOpacity>
                  <Image source={f} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.icons}>
              <View style={styles.Temp}>
                <TouchableOpacity>
                  <Image source={g} />
                </TouchableOpacity>
              </View>
              <View style={styles.Temp}>
                <TouchableOpacity>
                  <Image source={h} />
                </TouchableOpacity>
              </View>
              <View style={styles.Temp}>
                <TouchableOpacity>
                  <Image source={i} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.mid}>
          {/* <View>

              </View>
  working here            
              <View>
              

              </View> */}
        </View>

        <View style={styles.foot}></View>
      </View>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "5%",
  },

  container1: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "5%",
  },

  ItemHolder: {
    height: "100%",
    width: "100%",
  },

  hed: {
    flex: 1,
  },

  mid: {
    flex: 0.5,
    //backgroundColor: "blue",
  },

  foot: {
    flex: 0.3,
    //backgroundColor: "red",
  },

  serarchBar: {
    flex: 0.2,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
  },

  optionBar: {
    flex: 0.9,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  BG: {
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
  },

  Temp: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(232, 221, 221, 0.5)",
  },

  searchText: {
    flex: 1,
    backgroundColor: "white",
    height: 50,
    alignSelf: "center",
    width: "100%",
    height: 50,
    borderRadius: 50,
  },

  searchLogo: {
    backgroundColor: "white",
    height: 50,
    alignSelf: "center",
    width: 50,
    borderRadius: 50,
  },

  icons: {
    flexDirection: "row",
  },
});
