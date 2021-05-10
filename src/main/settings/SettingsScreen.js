// import { StatusBar } from 'expo-status-bar';c
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import i18n from "i18n-js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import ImageCard from "../../components/imageCard";
import normalize from "../../utils/normalize";
import {
  selectDonate,
  selectLanguage,
  selectLocaleData,
} from "../../redux/settings/settings.selector";
import Header from "../../components/Header";
import SweetLogo from "../../../assets/images/icon.png";
import HedenLogo from "../../../assets/images/Heden.png";
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
import { setDonate } from "../../redux/settings/settings.actions";
import DonateImg from "../../../assets/images/donate2.svg";
import { SvgXml } from "react-native-svg";
import * as WebBrowser from "expo-web-browser";

const colors = {
  text: "#777777",
  text_2: "#242424",
  text_3: "#e6e1e1",
  background: "#FFFFFF",
  primary: "#0093db",
  primaryDark: "#0093dc",
  secondary: "#FFA500",
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const appwidth = windowWidth * 0.9;

const SettingsScreen = ({ navigation, localeData, donate, setDonate }) => {
  const [isRef, setIsRef] = useState();
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
        title={localeData.screen[1]}
        languageSetter={true}
        hideRefresh={true}
      />
      <ScrollView style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => {
            // checkState ? setCheckState(false) : setCheckState(true);
            console.log("checked");
          }}
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: colors.text,
              fontSize: normalize(15),
              fontFamily: "SofiaProMedium",
              // paddingRight: -100,
              width: "80%",
            }}>
            {localeData.intro.setting1}
          </Text>
          <CheckBox
            // center
            size={normalize(16)}
            iconRight
            iconType="feather"
            checkedIcon="check-circle"
            uncheckedIcon="x-circle"
            checkedColor={colors.primary}
            checked={donate}
            onPress={() => {
              donate ? setDonate(false) : setDonate(true);
              // setDonate(!donate);
            }}
            containerStyle={{
              // margin: 0,
              marginRight: 5,
              padding: 0,
              justifyContent: "center",
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: colors.text,
              fontSize: normalize(15),
              fontFamily: "SofiaProMedium",
              // paddingRight: -100,
              width: "80%",
            }}>
            {localeData.intro.setting2}
          </Text>
          <Text
            style={{
              color: colors.primary,
              fontSize: normalize(15),
              fontFamily: "SofiaProMedium",
            }}>
            0.0.1
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: colors.text,
              fontSize: normalize(15),
              fontFamily: "SofiaProMedium",
              // paddingRight: -100,
            }}>
            {localeData.intro.setting3}
          </Text>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync("https://hedenngo.org/")
            }>
            <Text
              style={{
                color: colors.primary,
                fontSize: normalize(15),
                fontFamily: "SofiaProMedium",
              }}>
              https://hedenngo.org/
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: 20,
            flexDirection: "column",
          }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: appwidth,
            }}>
            <Image
              style={{
                width: normalize(100),
                height: normalize(60),
                alignSelf: "center",
              }}
              source={SweetLogo}
            />
            <Text
              style={{
                color: colors.primary,
                fontSize: normalize(17),
                fontFamily: "SofiaProSemiBold",
                paddingBottom: 20,
              }}>
              Sweet Mother
            </Text>
            <Text
              style={{
                color: colors.text,
                fontSize: normalize(13),
                fontFamily: "SofiaProMedium",
                textTransform: "capitalize",
                // textAlign: "center",
                marginBottom: 30,
                lineHeight: 22,
              }}>
              {localeData.intro.text}
            </Text>
            <Image
              style={{
                width: normalize(65),
                height: normalize(77),
                alignSelf: "center",
              }}
              source={HedenLogo}
            />
            <Text
              style={{
                color: colors.primary,
                fontSize: normalize(17),
                fontFamily: "SofiaProSemiBold",
              }}>
              Heden
            </Text>
            <Text
              style={{
                color: colors.text,
                fontSize: normalize(13),
                fontFamily: "SofiaProMedium",
                textTransform: "capitalize",
                // textAlign: "center",
                lineHeight: 22,
              }}>
              {localeData.intro.heden}
            </Text>
          </View>
        </View>
      </ScrollView>

      {donate && (
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            backgroundColor: colors.secondary,
            height: 60,
            width: 60,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            elevation: 10,
          }}
          onPress={() => navigation.navigate("Donate")}>
          <SvgXml xml={DonateImg} width={40} height={40} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  language: selectLanguage,
  localeData: selectLocaleData,
  isFetching: selectIsFetching,
  donate: selectDonate,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPostsStart: (type, category) =>
    dispatch(getAllPostsStart(type, category)),
  clearPostsData: () => dispatch(clearPostsData()),
  setDonate: (cond) => dispatch(setDonate(cond)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
