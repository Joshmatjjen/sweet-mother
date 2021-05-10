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
// import SvgUri from 'expo-svg-uri';
import { connect } from "react-redux";
import {
  selectIntro,
  selectLanguage,
  selectLocaleData,
} from "../../redux/settings/settings.selector";
import {
  setLanguage,
  setLocaleData,
} from "../../redux/settings/settings.actions";
import { createStructuredSelector } from "reselect";
import * as ScreenOrientation from "expo-screen-orientation";
import SettingsScreen from "./SettingsScreen";
import AboutScreen from "./AboutScreen";

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
  secondary: "#FFA500",
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const appwidth = windowWidth * 0.9;

const Settings = ({ language }) => {
  useEffect(() => {
    // setLanguage();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    console.log("Changing");
    StatusBar.setBackgroundColor("#F4F6F8");
    StatusBar.setBarStyle("dark-content");
  }, [language]);
  return (
    <>
      <StatusBar backgroundColor="#F4F6F8" />
      <Stack.Navigator initialRouteName="SettingsScreen" headerMode="none">
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />

        {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
      </Stack.Navigator>
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
  isIntro: selectIntro,
});

const mapDispatchToProps = (dispatch) => ({
  // getPracticesAllStart: () => dispatch(getPracticesAllStart()),
  setLanguage: (data) => dispatch(setLanguage(data)),
  setLocaleData: (data) => dispatch(setLocaleData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
