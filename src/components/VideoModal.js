// import { StatusBar } from 'expo-status-bar';c
import React, { useEffect, useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import { Icon, normalize } from "react-native-elements";
import i18n from "i18n-js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";

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

const VideoModal = ({ navigation, showVideo, setShowVideo }) => {
  const isPostFocused = useIsFocused();
  // const [data, setData] = useState([]);
  const contentWidth = useWindowDimensions().width;
  const [modalVisible, setModalVisible] = useState(false);
  console.log(showVideo);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        // transparent={true}
        // hasBackdrop={true}
        // // backdropColor="#00000086"
        // backdropOpacity={0.9}
        deviceWidth={Dimensions.get("window").height}
        deviceHeight={Dimensions.get("window").height}
        // visible={paymentStatePop ? true : false}
        // onBackdropPress={() => setPaymentStatePop(null)}
        style={{
          flex: 1,
          margin: 0,
          alignItems: "center",
          backgroundColor: "#00000086",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          height: "100%",
          // opacity: 0.8,
        }}
        // animationIn="slideInUp"
        // animationOut="slideOutDown"
        // transparent={showVideo.show}
        visible={showVideo.show}
        // deviceHeight={windowHeight}
        // deviceWidth={windowWidth}
        // style={{ backgroundColor: "red" }}

        coverScreen={true}>
        <View
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            // backgroundColor: "#00000086",
            justifyContent: "center",
            position: "relative",
          }}>
          <View
            style={{
              position: "absolute",
              top: 20,
              right: windowWidth / 2.25,
            }}>
            <TouchableOpacity
              onPress={() => {
                setShowVideo({ show: false, videoId: "" });
              }}>
              <Icon
                style
                size={normalize(45)}
                name="close-o"
                type="evilicon"
                color={"white"}
              />
            </TouchableOpacity>
          </View>
          {/* <View> */}
          <YoutubePlayer play={true} height={200} videoId={showVideo.videoId} />
          {/* </View> */}
        </View>
        {/* <View
        style={{
          width: windowWidth,
          height: windowHeight,
          backgroundColor: "#00000086",
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <YoutubePlayer
              height={300}
              play={true}
              videoId={"HsRBsNp_cNw"}
              // onChangeState={onStateChange}
            />
          </View>
          <TouchableOpacity
            style={{
              ...styles.openButton,
              backgroundColor: colors.primary,
            }}
            onPress={() => {
              setShowVideo({ show: false, videoId: "" });
            }}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-between",
    // paddingBottom: 50,
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

export default VideoModal;
