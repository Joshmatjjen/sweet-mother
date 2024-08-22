// import { StatusBar } from 'expo-status-bar';c
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  ActivityIndicator,
  Modal,
} from "react-native";
import { Icon } from "react-native-elements";
import i18n from "i18n-js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import ImageCard from "../../components/imageCard";
import normalize from "../../utils/normalize";
import {
  selectLanguage,
  selectLocaleData,
} from "../../redux/settings/settings.selector";
import Header from "../../components/Header";
import { List } from "react-native-paper";
import HTML from "react-native-render-html";
import {
  getAllPostsStart,
  clearPostsData,
} from "../../redux/posts/posts.actions";
import {
  selectIsFetching,
  selectGetBabyPosts,
  selectGetSiblingPosts,
  selectGetMotherPosts,
  selectGetSpousePosts,
  selectGetSexPosts,
  selectGetHealthPosts,
} from "../../redux/posts/posts.selector";
import { useIsFocused } from "@react-navigation/native";
import { WebView } from "react-native-webview";

const colors = {
  text: "#777777",
  text_2: "#242424",
  text_3: "#e6e1e1",
  background: "#FFFFFF",
  primary: "#0093db",
  primaryDark: "#0093dc",
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const appwidth = windowWidth * 0.9;

const AboutScreen = ({ navigation }) => {
  const isRef = useRef();
  const [onError, setOnError] = useState(false);
  const isPostFocused = useIsFocused();

  const contentWidth = useWindowDimensions().width;
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [isPostFocused]);

  // console.log(isRef);
  // console.log(onError);

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F6F8" }}>
      <Header
        windowWidth={windowWidth}
        navigation={navigation}
        route={"Post"}
        title={"SettingsScreen"}
        isLoading={loading}
        languageSetter={false}
        refresh={() => isRef?.current?.reload()}
      />
      {onError && !loading && (
        <View
          style={{
            position: "absolute",
            top: "8%",
            left: "0%",
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            paddingBottom: 100,
          }}>
          <Icon
            style
            size={normalize(45)}
            name="wifi-off"
            type="material-icons"
            color={colors.text}
          />
          <Text
            style={{
              fontSize: normalize(17),
              fontFamily: "SofiaProMedium",
              color: colors.text,
              textAlign: "center",
            }}>
            {"Page not found \n Check your internet connection"}
          </Text>
          <TouchableOpacity
            onPress={() => isRef?.current?.reload()}
            style={{
              backgroundColor: colors.primary,
              width: 80,
              alignSelf: "center",
              marginTop: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: normalize(15),
                fontFamily: "SofiaProMedium",
                color: "white",
                textAlign: "center",
                paddingHorizontal: 10,
                paddingVertical: 3,
              }}>
              Reload
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  language: selectLanguage,
  localeData: selectLocaleData,
  isFetching: selectIsFetching,
  babyPosts: selectGetBabyPosts,
  siblingPosts: selectGetSiblingPosts,
  motherPosts: selectGetMotherPosts,
  spousePosts: selectGetSpousePosts,
  sexPosts: selectGetSexPosts,
  healthPosts: selectGetHealthPosts,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPostsStart: (type, category) =>
    dispatch(getAllPostsStart(type, category)),
  clearPostsData: () => dispatch(clearPostsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);
