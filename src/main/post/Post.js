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
  FlatList,
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

const Post = ({ localeData, navigation, route }) => {
  console.log("Post=== ", route.params);
  const sectionType = route.params.props;
  const [data, setData] = useState([]);

  const checkSection = () => {
    console.log(localeData.baby);
    switch (sectionType) {
      case "Baby":
        setData(localeData.baby);
        break;
      case "Sibling":
        setData(localeData.sibling);
        break;
      case "Mother":
        setData(localeData.mother);
        break;
      case "Spouse":
        setData(localeData.spouse);
        break;
      case "Sex":
        setData(localeData.sex);
        break;
      case "Health":
        setData(localeData.health);
        break;
      default:
        setData(localeData.baby);
    }
  };

  useEffect(() => {
    // setData([localeData.baby]);
    checkSection();
  }, []);

  const Section = ({ question, answer, answerOpt, images, videos }) => {
    return (
      <View
        style={{
          width: windowWidth,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 30,
        }}>
        <View style={{ width: appwidth }}>
          <Text
            style={{
              fontSize: normalize(18),
              fontFamily: "SofiaProSemiBold",
              color: colors.text_2,
            }}>
            {question}
          </Text>
          {answer && (
            <Text
              style={{
                fontSize: normalize(15),
                fontFamily: "SofiaProMedium",
                color: colors.text,
              }}>
              {answer}
            </Text>
          )}
          {answerOpt &&
            answerOpt.map((opt, i) => (
              <Text
                key={i}
                style={{
                  fontSize: normalize(15),
                  fontFamily: "SofiaProMedium",
                  color: colors.text,
                }}>
                ― {opt}
              </Text>
            ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
          {images &&
            images.map((item, i) => (
              <Image
                key={i}
                source={item}
                style={{
                  width: images.length > 1 ? "42%" : 250,
                  height: 150,
                  marginVertical: 10,
                  marginHorizontal: 10,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: colors.text_3,
                }}
              />
            ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        windowWidth={windowWidth}
        navigation={navigation}
        route={"Post"}
        title={route.params.props}
      />
      <FlatList
        // ref={ref}
        // horizontal={true}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={() => getPracticesAllStart()}
        //   />
        // }
        // removeClippedSubviews
        // ListEmptyComponent
        // initialNumToRender={5}
        // updateCellsBatchingPeriod={5}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 20,
        }}
        data={data}
        numColumns={1}
        renderItem={({ item, index }) => (
          <Section
            id={index}
            question={item.question}
            answer={item.ans}
            answerOpt={item.ansOpt}
            images={item.img}
            videos={item.vid}
          />
        )}
        keyExtractor={(item, index) => index}
        // showsHorizontalScrollIndicator={false}
        // extraData={selected}
      />
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
    fontFamily: "SofiaProMedium",
    textAlign: "center",
    paddingTop: 5,
    marginBottom: -10,
  },
});

const mapStateToProps = createStructuredSelector({
  language: selectLanguage,
  localeData: selectLocaleData,
});

export default connect(mapStateToProps)(Post);
