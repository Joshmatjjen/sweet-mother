// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { REACT_APP_API } from "@env";
import { Icon, normalize } from "react-native-elements";
import Home from "./home/Home";
// import SvgUri from 'expo-svg-uri';
import DonateImg from "../../assets/images/donate2.svg";
import { SvgXml } from "react-native-svg";
import { connect } from "react-redux";
import {
  selectLanguage,
  selectLocaleData,
} from "../redux/settings/settings.selector";
import { setLanguage, setLocaleData } from "../redux/settings/settings.actions";
import { createStructuredSelector } from "reselect";
import enDoc from "../locale/en";
import igDoc from "../locale/ig";
import yoDoc from "../locale/yo";
import haDoc from "../locale/ha";
import pgDoc from "../locale/pg";
import Post from "./post/Post";

const arr = [
  {
    title: "Bonjour",
    question: "ffga ?",
    answer: "goodp",
  },
];

const Stack = createStackNavigator();
const colors = {
  text: "#777777",
  background: "#FFFFFF",
  primary: "#0093db",
  primaryDark: "#0093dc",
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const appwidth = windowWidth * 0.9;
const Main = ({ setLanguage, setLocaleData, language, localeData }) => {
  const langAction = () => {
    switch (language) {
      case "en-US":
        setLocaleData(enDoc);
        break;
      case "ig-NG":
        setLocaleData(igDoc);
        break;
      case "yo-NG":
        setLocaleData(yoDoc);
        break;
      case "ha-NG":
        setLocaleData(haDoc);
        break;
      case "pum-NG":
        setLocaleData(pgDoc);
        break;
      default:
        setLocaleData(enDoc);
    }
  };

  useEffect(() => {
    // setLanguage();
    console.log("Changing");
    langAction();
    StatusBar.setBackgroundColor("#ffffff");
    StatusBar.setBarStyle("dark-content");
  }, [language]);
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <NavigationContainer
      // theme={state.theme}
      // ref={navigationRef}
      // onReady={() =>
      //   (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      // }
      >
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={Post} />
          {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: colors.primary,
          height: 60,
          width: 60,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          elevation: 10,
        }}
        onPress={() => console.log("Hello")}>
        <SvgXml xml={DonateImg} width={40} height={40} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = createStructuredSelector({
  language: selectLanguage,
  localeData: selectLocaleData,
});

const mapDispatchToProps = (dispatch) => ({
  // getPracticesAllStart: () => dispatch(getPracticesAllStart()),
  setLanguage: (data) => dispatch(setLanguage(data)),
  setLocaleData: (data) => dispatch(setLocaleData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
