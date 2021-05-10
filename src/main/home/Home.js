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
import { Icon, normalize } from "react-native-elements";
import i18n from "i18n-js";
import { useIsFocused } from "@react-navigation/native";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import ImageCard from "../../components/imageCard";
// import normalize from "../../utils/normalize";
import {
  selectLanguage,
  selectLocaleData,
} from "../../redux/settings/settings.selector";
import Header from "../../components/Header";
import { setLanguage } from "../../redux/settings/settings.actions";
import {
  clearPostsData,
  getAllPostsStart,
} from "../../redux/posts/posts.actions";
import { selectIsFetching } from "../../redux/posts/posts.selector";
import * as FileSystem from "expo-file-system";
import DonateImg from "../../../assets/images/donate2.svg";
import { SvgXml } from "react-native-svg";

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

const Home = ({
  localeData,
  navigation,
  getAllPostsStart,
  // posts,
  isFetching,
  clearPostsData,
}) => {
  const isHomeFocused = useIsFocused();
  const ds = "../../../assets/images/icon.png";
  let images = i18n.t("baby")[0].img;
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // clearPostsData();
    // isHomeFocused && getAllPostsStart();
    // console.log("Sending Data to Word Press____");
    FileSystem.getFreeDiskStorageAsync().then((freeDiskStorage) => {
      // console.log(freeDiskStorage);
      // console.log(formatBytes(322780160));
      if (freeDiskStorage < 322780160) setModalVisible(true);
      // Android: 17179869184
      // iOS: 17179869184
      // return freeDiskStorage;
    });
  }, [isHomeFocused, FileSystem]);

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <View style={styles.container}>
      <Header
        windowWidth={windowWidth}
        navigation={navigation}
        route="Home"
        hideRefresh={true}
        // isLoading={isFetching}
        // refresh={getAllPostsStart}
      />
      {localeData && Object.keys(localeData).length > 0 ? (
        <ScrollView
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="never"
          showsVerticalScrollIndicator={false}
          // ref={ref}
          style={{
            zIndex: 0,
            backgroundColor: colors.background,
            // minHeight: '110%',
          }}>
          <View
            style={[
              styles.listData,
              {
                justifyContent: "center",
                paddingBottom: 30,
              },
            ]}>
            <ImageCard section={localeData.home[0]} navigation={navigation}>
              <Image
                style={{
                  width: normalize(110),
                  height: normalize(90),
                  alignSelf: "flex-end",
                }}
                source={localeData.home[0].img}
              />
              <Text style={styles.cardText}> {localeData.home[0].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[1]} navigation={navigation}>
              <Image
                style={{
                  width: normalize(110),
                  height: normalize(90),
                  alignSelf: "flex-start",
                }}
                source={localeData.home[1].img}
              />
              <Text style={styles.cardText}> {localeData.home[1].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[2]} navigation={navigation}>
              <Image
                style={{
                  width: normalize(110),
                  height: normalize(90),
                  alignSelf: "flex-end",
                }}
                source={localeData.home[2].img}
              />
              <Text style={styles.cardText}> {localeData.home[2].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[3]} navigation={navigation}>
              <Image
                style={{
                  width: normalize(110),
                  height: normalize(90),
                  alignSelf: "flex-start",
                }}
                source={localeData.home[3].img}
              />
              <Text style={styles.cardText}> {localeData.home[3].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[4]} navigation={navigation}>
              <Image
                style={{
                  width: normalize(110),
                  height: normalize(90),
                  alignSelf: "flex-end",
                }}
                source={localeData.home[4].img}
              />
              <Text style={styles.cardText}> {localeData.home[4].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[5]} navigation={navigation}>
              <Image
                style={{
                  width: normalize(110),
                  height: normalize(90),
                  alignSelf: "flex-start",
                }}
                source={localeData.home[5].img}
              />
              <Text style={styles.cardText}> {localeData.home[5].name} </Text>
            </ImageCard>
          </View>
        </ScrollView>
      ) : null}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
        }}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: "#00000086",
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon
                size={normalize(40)}
                // raised
                name="ios-warning-outline"
                type="ionicon"
                color="#ff0f0f"
              />
              <Text style={styles.modalText}>
                Warning, Your phone storage is getting too low, please remove
                some files or apps to free up space
              </Text>

              <TouchableOpacity
                style={{
                  ...styles.openButton,
                  backgroundColor: colors.primary,
                }}
                onPress={() => {
                  console.log("Hello");
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  listData: {
    // flex: 1,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardText: {
    color: colors.text,
    fontSize: normalize(13),
    fontFamily: "SofiaProMedium",
    textTransform: "capitalize",
    textAlign: "center",
    paddingTop: 5,
    marginBottom: -10,
  },
  modalView: {
    marginHorizontal: 20,
    marginTop: windowHeight / 3,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginTop: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontFamily: "SofiaProMedium",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "SofiaProMedium",
  },
});

const mapStateToProps = createStructuredSelector({
  language: selectLanguage,
  localeData: selectLocaleData,
  isFetching: selectIsFetching,
});
const mapDispatchToProps = (dispatch) => ({
  getAllPostsStart: () => dispatch(getAllPostsStart()),
  clearPostsData: () => dispatch(clearPostsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
