import { AppRegistry, LogBox, YellowBox } from 'react-native';
import React, { useCallback, useState } from 'react';
// import App from "./App";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Font from 'expo-font';
import { store, persistor } from './src/redux/store';

import Main from './src/main/Main';

// import Clipboard from '@react-native-community/clipboard';
// import admob, {MaxAdContentRating} from '@react-native-firebase/admob';
// import RNFetchBlob from 'rn-fetch-blob';
// import {firebase} from '@react-native-firebase/analytics';
// import { NetworkProvider } from "react-native-offline";
// YellowBox.ignoreWarnings([""]);
LogBox.ignoreLogs(['']);
// SHOW NETWORK DEBUG
// global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
// global.FormData = global.originalFormData || global.FormData;
// import { StatusBar } from "expo-status-bar";

const App = () => {
  const _loadFontsAsync = async () => {
    // loadAsync returns true | error
    let isLoaded = await Font.loadAsync({
      // add as many fonts as you want here ....
      SofiaProMedium: require('./assets/fonts/SofiaProMedium.ttf'),
    });
    // this.setState({ loaded: isLoaded });
  };
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
