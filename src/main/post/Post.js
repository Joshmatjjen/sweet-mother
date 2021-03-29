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

const Post = ({ localeData, navigation, route, language }) => {
  // console.log("Post=== ", localeData[0]);
  const sectionType = route.params.props;
  const [data, setData] = useState([]);

  const checkSection = () => {
    console.log("____ Changing");
    console.log(localeData.baby);
    sectionType.id === 1 && setData(localeData.baby);
    sectionType.id === 2 && setData(localeData.sibling);
    sectionType.id === 3 && setData(localeData.mother);
    sectionType.id === 4 && setData(localeData.spouse);
    sectionType.id === 5 && setData(localeData.sex);
    sectionType.id === 6 && setData(localeData.health);
  };

  useMemo(() => {
    // setData([localeData.baby]);
    if (!language) checkSection();
  }, [language, data]);

  const Section = ({
    question,
    answer,
    answerOpt,
    note,
    images,
    videos,
    id,
  }) => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);
    return (
      <List.Accordion
        title={question}
        expanded={expanded}
        onPress={handlePress}
        id={id}
        style={{ width: windowWidth }}
        titleStyle={{
          color: colors.text,
          fontFamily: "SofiaProMedium",
          fontSize: normalize(15),
        }}>
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
                fontSize: normalize(17),
                fontFamily: "SofiaProMedium",
                color: colors.text,
              }}>
              {question}
            </Text>
            {answer && (
              <Text
                style={{
                  fontSize: normalize(15),
                  fontFamily: "SofiaProLight",
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
            {note && (
              <Text
                style={{
                  fontSize: normalize(15),
                  fontFamily: "SofiaProMediumItalic",
                  color: colors.text,
                }}>
                {note}
              </Text>
            )}
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
      </List.Accordion>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        windowWidth={windowWidth}
        navigation={navigation}
        route={"Post"}
        title={localeData.home[sectionType.id - 1].name}
      />
      {/* <List.AccordionGroup>
        <List.Accordion title="Accordion 1" id="1">
          <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion title="Accordion 2" id="2">
          <List.Item title="Item 2" />
        </List.Accordion>
        <View>
          <Text>cfdgdg dgfdgdfghfd</Text>
          <List.Accordion title="Accordion 3" id="3">
            <List.Item title="Item 3" />
          </List.Accordion>
        </View>
      </List.AccordionGroup> */}
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
          paddingTop: 10,
          paddingBottom: 20,
        }}
        data={localeData.baby}
        numColumns={1}
        renderItem={({ item, index }) => (
          <Section
            id={index}
            question={item.question}
            answer={item.ans}
            answerOpt={item.ansOpt}
            note={item.note}
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
