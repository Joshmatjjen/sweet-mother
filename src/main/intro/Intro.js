// import { StatusBar } from 'expo-status-bar';c
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Icon, normalize, CheckBox } from "react-native-elements";
import i18n from "i18n-js";
import { useIsFocused } from "@react-navigation/native";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import ImageCard from "../../components/imageCard";
import SweetLogo from "../../../assets/images/icon.png";
import {
  selectLanguage,
  selectLocaleData,
} from "../../redux/settings/settings.selector";
import Header from "../../components/Header";
import { setLanguage, showIntro } from "../../redux/settings/settings.actions";
import { getAllPostsStart } from "../../redux/posts/posts.actions";
import {
  // selectGetAllPosts,
  selectIsFetching,
} from "../../redux/posts/posts.selector";
import * as FileSystem from "expo-file-system";

const colors = {
  text: "#777777",
  background: "#FFFFFF",
  primary: "#0093db",
  primaryDark: "#0093dc",
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const appwidth = windowWidth * 0.9;

const languages = [
  { label: "English", langCode: "en-US" },
  { label: "Igbo", langCode: "ig-NG" },
  { label: "Yoruba", langCode: "yo-NG" },
  { label: "Hausa", langCode: "ha-NG" },
  { label: "Pidgin", langCode: "pum-NG" },
];

const Intro = ({
  localeData,
  navigation,
  getAllPostsStart,
  setLanguage,
  // posts,
  isFetching,
  showIntro,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [defaultLang, setDefaultLang] = useState("");
  const [switchState, setSwitchState] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="never"
        showsVerticalScrollIndicator={false}
        // ref={ref}
        style={{
          zIndex: 0,
          marginTop: 20,
          backgroundColor: colors.background,
          width: appwidth,
          // minHeight: '110%',
        }}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            style={{
              width: normalize(160),
              height: normalize(120),
              alignSelf: "center",
            }}
            source={SweetLogo}
          />
          <Text style={[styles.headerTitle, { color: colors.primary }]}>
            Sweet Mother
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.subHeaderTitle]}>
            {switchState === 0
              ? "Choose your preferred language"
              : localeData.intro.title}
          </Text>
          {switchState === 0 ? (
            <View>
              {languages.map((item) => (
                <CheckBox
                  left
                  title={item.label}
                  titleProps={{
                    style: {
                      color:
                        defaultLang === item.label
                          ? colors.primary
                          : colors.text,
                      fontFamily: "SofiaProSemiBold",
                      fontSize: normalize(14),
                      marginLeft: 15,
                    },
                  }}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checkedColor={colors.primary}
                  checked={defaultLang === item.label}
                  fontFamily={"SofiaProMedium"}
                  onPress={() => {
                    setDefaultLang(item.label);
                    getAllPostsStart({ category: "Baby", page: 1 });
                    setLanguage(item.langCode);
                  }}
                />
              ))}
            </View>
          ) : (
            <Text style={styles.textStyle}>{localeData.intro.text}</Text>
          )}
          <View
            style={{
              marginTop: 40,
              marginBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <TouchableOpacity
              onPress={() => setSwitchState(0)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                // alignSelf: "flex-start",
                marginRight: 10,
                padding: 5,
              }}>
              <Icon
                size={normalize(20)}
                name="ios-arrow-back-outline"
                type="ionicon"
                color={colors.primary}
                style={{ marginTop: 5 }}
              />
              <Text
                style={{
                  color: colors.primary,
                  fontFamily: "SofiaProSemiBold",
                  paddingLeft: 10,
                  fontSize: normalize(15),
                }}>
                Previous
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                defaultLang
                  ? switchState === 0
                    ? setSwitchState(1)
                    : showIntro(false)
                  : null;
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-end",
                marginRight: 10,
                padding: 5,
              }}>
              <Text
                style={{
                  color: defaultLang ? colors.primary : colors.text + "64",
                  fontFamily: "SofiaProSemiBold",
                  paddingRight: 10,
                  fontSize: normalize(15),
                }}>
                {switchState === 0 ? "Continue" : "Get Started"}
              </Text>
              <Icon
                size={normalize(20)}
                name="ios-arrow-forward-outline"
                type="ionicon"
                color={defaultLang ? colors.primary : colors.text + "64"}
                style={{ marginTop: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: 50,
  },
  headerTitle: {
    color: colors.text,
    fontSize: normalize(18),
    fontFamily: "SofiaProBold",
    paddingVertical: 10,
    textAlign: "center",
    alignSelf: "center",
  },
  subHeaderTitle: {
    color: colors.text,
    fontSize: normalize(16),
    fontFamily: "SofiaProSemiBold",
    paddingVertical: 10,
    textAlign: "center",
    alignSelf: "center",
  },
  textStyle: {
    color: colors.text,
    fontSize: normalize(13),
    fontFamily: "SofiaProMedium",
    textTransform: "capitalize",
    textAlign: "center",
  },
});

const mapStateToProps = createStructuredSelector({
  language: selectLanguage,
  localeData: selectLocaleData,
  // posts: selectGetAllPosts,
  isFetching: selectIsFetching,
});
const mapDispatchToProps = (dispatch) => ({
  getAllPostsStart: (type, category) =>
    dispatch(getAllPostsStart(type, category)),
  setLanguage: (data) => dispatch(setLanguage(data)),
  showIntro: (data) => dispatch(showIntro(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
