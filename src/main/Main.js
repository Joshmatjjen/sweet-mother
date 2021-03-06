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
import { connect } from "react-redux";
import {
  selectIntro,
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
import Intro from "./intro/Intro";
import * as ScreenOrientation from "expo-screen-orientation";
import Donate from "./donate/Donate";
import Settings from "./settings/Settings";

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

const Main = ({
  setLanguage,
  setLocaleData,
  language,
  localeData,
  isIntro,
}) => {
  const [showIntro, setShowIntro] = useState(true);
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
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    console.log("Changing");
    langAction();
    StatusBar.setBackgroundColor("#ffffff");
    StatusBar.setBarStyle("dark-content");
  }, [language]);
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      {!isIntro ? (
        <>
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
              <Stack.Screen name="Donate" component={Donate} />
              <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      ) : (
        <Intro />
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
