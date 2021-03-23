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
import normalize from "../../utils/normalize";
import { Icon } from "react-native-elements";
import i18n from "i18n-js";
import ImageCard from "../../components/imageCard";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectLanguage,
  selectLocaleData,
} from "../../redux/settings/settings.selector";

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
          {images.map((item, i) => (
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: windowWidth,
          justifyContent: "space-between",
          paddingTop: 5,
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: colors.text_3,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: 20 }}>
          <Icon
            name="arrow-left"
            type="font-awesome"
            color={colors.primary}
            size={normalize(20)}
          />
        </TouchableOpacity>

        {/* <Image
          style={{
            width: normalize(90),
            height: normalize(90),
            alignSelf: 'flex-end',
          }}
          source={i18n.t('baby')[0].img[0]}
        /> */}
        <Text style={styles.headerTitle}>{route.params.props}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => console.log("hello")}>
            <Icon
              name="language"
              type="font-awesome"
              color={colors.primary}
              size={normalize(20)}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => console.log("hello")}>
            <Icon
              style
              // raised
              name="ios-settings"
              type="ionicon"
              color={colors.primary}
              // color="#f50"
              onPress={() => console.log("hello")}
            />
          </TouchableOpacity> */}
        </View>
      </View>
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
        style={{}}
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
