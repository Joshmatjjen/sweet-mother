import { AppRegistry, LogBox, YellowBox } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
// import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as Font from "expo-font";
import { store, persistor } from "./src/redux/store";
import { useFonts } from "@use-expo/font";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import enDoc from "./src/locale/en";

import Main from "./src/main/Main";

// import Clipboard from '@react-native-community/clipboard';
// import admob, {MaxAdContentRating} from '@react-native-firebase/admob';
// import RNFetchBlob from 'rn-fetch-blob';
// import {firebase} from '@react-native-firebase/analytics';
// import { NetworkProvider } from "react-native-offline";
// YellowBox.ignoreWarnings([""]);
// LogBox.ignoreLogs(['']);
// SHOW NETWORK DEBUG
// global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
// global.FormData = global.originalFormData || global.FormData;
// import { StatusBar } from "expo-status-bar";
const customFonts = {
  // add as many fonts as you want here ....
  SofiaProMedium: require("./assets/fonts/SofiaProMedium.ttf"),
  SofiaProLight: require("./assets/fonts/SofiaProLight.ttf"),
  SofiaProSemiBold: require("./assets/fonts/SofiaProSemiBold.ttf"),
  SofiaProBold: require("./assets/fonts/SofiaProBold.ttf"),
};

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  "en-US": enDoc,
  "ig-NG": enDoc,
  // ja: { welcome: 'こんにちは' },
};

i18n.locale = Localization.locale;

const App = () => {
  const [isLoaded] = useFonts(customFonts);
  console.log(i18n.t("home"));
  if (!isLoaded) {
    return <></>;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
