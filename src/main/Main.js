// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { REACT_APP_API } from '@env';
import Home from './home/Home';

const Stack = createStackNavigator();

const Main = () => {
  console.log(REACT_APP_API);
  return (
    <NavigationContainer
    // theme={state.theme}
    // ref={navigationRef}
    // onReady={() =>
    //   (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
    // }
    >
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
