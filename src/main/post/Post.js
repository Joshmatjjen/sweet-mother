// import { StatusBar } from 'expo-status-bar';c
import React, { useEffect, useMemo, useState } from "react";
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
  selectDonate,
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
import * as FileSystem from "expo-file-system";
import YoutubePlayer from "react-native-youtube-iframe";
import VideoModal from "../../components/VideoModal";
import DonateImg from "../../../assets/images/donate2.svg";
import { SvgXml } from "react-native-svg";

const colors = {
  text: "#777777",
  text_2: "#242424",
  text_3: "#e6e1e1",
  background: "#FFFFFF",
  primary: "#0093db",
  primaryDark: "#0093dc",
  secondary: "#FFA500",
};
const htmlContent = `
<ul>\n<li><span data-contrast=\"auto\">Nye <\/span><span data-contrast=\"auto\">ya<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">og<\/span><span data-contrast=\"auto\">wu<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">dok<\/span><span data-contrast=\"auto\">ita<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">si<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">gi<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">nye<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">y<\/span><span data-contrast=\"auto\">a<\/span><span data-contrast=\"auto\">.<\/span><span data-ccp-props=\"{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559739&quot;:0,&quot;335559740&quot;:240}\"> <\/span><\/li>\n<li><span data-contrast=\"auto\">Kporo<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ya<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ga<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ulogwu<\/span><span data-contrast=\"auto\">, ma <\/span><span data-contrast=\"auto\">nye<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ya<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ogwu<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">dika<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">dokita<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">si<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">tuzie<\/span><span data-contrast=\"auto\"> aka.<\/span><span data-ccp-props=\"{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559739&quot;:0,&quot;335559740&quot;:240}\"> <\/span><\/li>\n<li><span data-contrast=\"auto\">Nye <\/span><span data-contrast=\"auto\">mmiri<\/span><span data-contrast=\"auto\"> d<\/span><span data-contrast=\"auto\">i <\/span><span data-contrast=\"auto\">nari-nari<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">esiri<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">n’oku<\/span><span data-contrast=\"auto\">. Jiri <\/span><span data-contrast=\"auto\">mm<\/span><span data-contrast=\"auto\">ri<\/span><span data-contrast=\"auto\"> di ‘<\/span><span data-contrast=\"auto\">nari<\/span><span data-contrast=\"auto\">-‘<\/span><span data-contrast=\"auto\">n<\/span><span data-contrast=\"auto\">ari<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">esiri<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">n’oku<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">saa<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ya<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ahu.Nke<\/span><span data-contrast=\"auto\"> a <\/span><span data-contrast=\"auto\">ga-eme<\/span><span data-contrast=\"auto\"> ka ahu <\/span><span data-contrast=\"auto\">juo<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ya<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">oyi<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ngwa<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ngwa<\/span><span data-contrast=\"auto\">.<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">Biko <\/span><span data-contrast=\"auto\">eji<\/span><span data-contrast=\"auto\">la<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">mmiri<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">oyi<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">saa<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">nwa<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ohuru<\/span><span data-contrast=\"auto\"> ahu ma <\/span><span data-contrast=\"auto\">obu<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">nye<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ya<\/span><span data-contrast=\"auto\"> ka <\/span><span data-contrast=\"auto\">onuo<\/span><span data-contrast=\"auto\">,<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">nkea<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">puru<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ime<\/span><span data-contrast=\"auto\"> ka <\/span><span data-contrast=\"auto\">oyi<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">tuo<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ya<\/span><span data-contrast=\"auto\">.<\/span><span data-ccp-props=\"{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559685&quot;:1440,&quot;335559739&quot;:0,&quot;335559740&quot;:240,&quot;335559991&quot;:720}\"> <\/span><\/li>\n<li><span data-contrast=\"auto\">Nye <\/span><span data-contrast=\"auto\">ya<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ihe<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">onunu<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ndi<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ozo<\/span><span data-contrast=\"auto\">,<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">ij<\/span><span data-contrast=\"auto\">i<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">mee<\/span><span data-contrast=\"auto\"> ka ahu <\/span><span data-contrast=\"auto\">ya<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">juo<\/span><span data-contrast=\"auto\"> <\/span><span data-contrast=\"auto\">oyi<\/span><span data-contrast=\"auto\"> site <\/span><span data-contrast=\"auto\">n’ime<\/span><span data-contrast=\"auto\">.<\/span><span data-ccp-props=\"{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559685&quot;:1440,&quot;335559739&quot;:0,&quot;335559740&quot;:240,&quot;335559991&quot;:720}\"> <\/span><\/li>\n<\/ul>\n
`;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const appwidth = windowWidth * 0.9;

const Post = ({
  localeData,
  navigation,
  route,
  language,
  getAllPostsStart,
  isFetching,
  babyPosts,
  siblingPosts,
  motherPosts,
  spousePosts,
  sexPosts,
  healthPosts,
  clearPostsData,
  donate,
}) => {
  // const postData = route.params.props;
  const sectionId = route.params.sectionId;
  const sectionName = route.params.sectionName;
  const sectionLabel = route.params.sectionLabel;
  const isPostFocused = useIsFocused();

  const contentWidth = useWindowDimensions().width;
  const [modalVisible, setModalVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // const checkSection = () => {
  //   console.log("____ Changing", language);
  //   // console.log(localeData.baby);
  //   // sectionType.id === 1 && setData(localeData.baby);
  //   // sectionType.id === 2 && setData(localeData.sibling);
  //   // sectionType.id === 3 && setData(localeData.mother);
  //   // sectionType.id === 4 && setData(localeData.spouse);
  //   // sectionType.id === 5 && setData(localeData.sex);
  //   // sectionType.id === 6 && setData(localeData.health);
  // };

  useEffect(() => {
    console.log(
      "Sending Data to Word Press____",
      sectionId === 1 && babyPosts && !isFetching,
    );
    if (isPostFocused) {
      sectionId === 1 &&
        !babyPosts &&
        getAllPostsStart({ category: "Baby", page: 1 });
      sectionId === 2 &&
        !siblingPosts &&
        getAllPostsStart({ category: "Sibling", page: 1 });
      sectionId === 3 &&
        !motherPosts &&
        getAllPostsStart({ category: "Mother", page: 1 });
      sectionId === 4 &&
        !spousePosts &&
        getAllPostsStart({ category: "Spouse", page: 1 });
      sectionId === 5 &&
        !sexPosts &&
        getAllPostsStart({ category: "Sex", page: 1 });
      sectionId === 6 &&
        !healthPosts &&
        getAllPostsStart({ category: "Health", page: 1 });
    }

    FileSystem.getFreeDiskStorageAsync().then((freeDiskStorage) => {
      // console.log(freeDiskStorage);
      // console.log(formatBytes(freeDiskStorage));
      // if (freeDiskStorage < 322780160) setModalVisible(true);
      // Android: 17179869184
      // iOS: 17179869184
      // return freeDiskStorage;
    });
  }, [isPostFocused]);

  useEffect(() => {
    console.log("Posts", siblingPosts);
    console.log(sectionLabel);
  }, [siblingPosts]);

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  // useMemo(() => {
  //   // setData([localeData.baby]);
  //   console.log("____ Changing", language);
  //   if (!language) checkSection();
  // }, [language, data]);
  // useEffect(() => {
  //   // isPostFocused && getAllPostsStart();
  //   // if (isPostFocused) clearPostsData();
  // }, [isPostFocused]);

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
    const [showVideo, setShowVideo] = useState({
      show: false,
      videoId: "",
    });

    const handlePress = () => {
      setExpanded(!expanded);
      // setIsExpanded(!isExpanded);
    };
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
          fontSize: normalize(16),
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
                marginBottom: 10,
              }}>
              {question}
            </Text>
            {answer && (
              <HTML
                source={{ html: answer }}
                contentWidth={contentWidth}
                baseFontStyle={{
                  fontSize: normalize(14.5),
                  fontFamily: "SofiaProLight",
                  color: colors.text,
                }}
                ignoredStyles={["font-family", "font-style", "letter-spacing"]}
                tagsStyles={{
                  i: {
                    fontFamily: "SofiaProLight",
                    // fontSize: normalize(26),
                  },
                  p: {
                    fontFamily: "SofiaProLight",
                  },
                  pre: {
                    fontFamily: "SofiaProLight",
                  },
                  span: {
                    fontFamily: "SofiaProLight",
                  },
                }}
                classesStyles={{
                  "last-paragraph": {
                    textAlign: "right",
                    color: "teal",
                    fontFamily: "SofiaProLight",
                  },
                }}
              />
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
                  source={{
                    uri: item,
                  }}
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
          {videos ? (
            <TouchableOpacity
              onPress={() => {
                // setExpanded(true);
                showVideo.show
                  ? setShowVideo({
                      show: false,
                      videoId: "",
                    })
                  : setShowVideo({
                      show: true,
                      videoId: videos.url.split("v=")[1],
                    });
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.text + "55",
                marginTop: 10,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontFamily: "SofiaProBold",
                  textAlign: "center",
                  fontSize: normalize(15),
                  paddingRight: 10,
                }}>
                {showVideo.show ? "Hide Video Now" : "Watch Video Now"}
              </Text>
              <Icon
                style
                size={normalize(25)}
                name="ios-play-circle-sharp"
                type="ionicon"
                color={colors.primary}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {showVideo.show && (
          <YoutubePlayer play={true} height={200} videoId={showVideo.videoId} />
        )}
      </List.Accordion>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        windowWidth={windowWidth}
        navigation={navigation}
        route={"Post"}
        title={localeData.home[sectionId - 1].name}
        languageSetter={true}
        isLoading={isFetching}
        refresh={() => {
          sectionId === 1 && getAllPostsStart({ category: "Baby", page: 1 });
          sectionId === 2 && getAllPostsStart({ category: "Sibling", page: 1 });
          sectionId === 3 && getAllPostsStart({ category: "Mother", page: 1 });
          sectionId === 4 && getAllPostsStart({ category: "Spouse", page: 1 });
          sectionId === 5 && getAllPostsStart({ category: "Sex", page: 1 });
          sectionId === 6 && getAllPostsStart({ category: "Health", page: 1 });
        }}
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
        ListEmptyComponent={
          !isFetching ? (
            <View style={{ marginTop: windowHeight / 4 }}>
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
                }}>
                No internet connection
              </Text>
              <TouchableOpacity
                onPress={() => getAllPostsStart()}
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
                  Refresh
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ActivityIndicator
              style={{ marginTop: windowHeight / 3.2 }}
              size={normalize(40)}
              color={colors.primary}
            />
          )
        }
        // initialNumToRender={5}
        // updateCellsBatchingPeriod={5}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 20,
        }}
        data={
          sectionLabel === "Baby" && babyPosts
            ? babyPosts.posts.filter(
                (item) => item.acf.category === sectionLabel,
              )
            : sectionLabel === "Sibling" && siblingPosts
            ? siblingPosts.posts.filter(
                (item) => item.acf.category === sectionLabel,
              )
            : sectionLabel === "Mother" && motherPosts
            ? motherPosts.posts.filter(
                (item) => item.acf.category === sectionLabel,
              )
            : sectionLabel === "Spouse" && spousePosts
            ? spousePosts.posts.filter(
                (item) => item.acf.category === sectionLabel,
              )
            : sectionLabel === "Sex" && sexPosts
            ? sexPosts.posts.filter(
                (item) => item.acf.category === sectionLabel,
              )
            : sectionLabel === "Health" && healthPosts
            ? healthPosts.posts.filter(
                (item) => item.acf.category === sectionLabel,
              )
            : []
        }
        numColumns={1}
        renderItem={({ item, index }) => (
          <Section
            id={index}
            question={
              (language === "ha-NG" && item.acf.hausaTitle) ||
              (language === "en-US" && item.acf.englishTitle) ||
              (language === "ig-NG" && item.acf.igboTitle) ||
              (language === "yo-NG" && item.acf.yorubaTitle) ||
              (language === "pum-NG" && item.acf.pidginTitle)
            }
            answer={
              (language === "en-US" && item.acf.englishContent) ||
              (language === "ig-NG" && item.acf.igboContent) ||
              (language === "yo-NG" && item.acf.yorubaContent) ||
              (language === "ha-NG" && item.acf.hausaContent) ||
              (language === "pum-NG" && item.acf.pidginContent)
            }
            images={item.acf.images}
            videos={item.acf.videos}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.01}
        onEndReached={(props) => {
          console.log(props);
          if (props.distanceFromEnd > 0) {
            sectionId === 1 &&
              getAllPostsStart({ category: "Baby", page: babyPosts.page + 1 });
            sectionId === 2 &&
              getAllPostsStart({
                category: "Sibling",
                page: siblingPosts.page + 1,
              });
            sectionId === 3 &&
              getAllPostsStart({
                category: "Mother",
                page: motherPosts.page + 1,
              });
            sectionId === 4 &&
              getAllPostsStart({
                category: "Spouse",
                page: spousePosts.page + 1,
              });
            sectionId === 5 &&
              getAllPostsStart({ category: "Sex", page: sexPosts.page + 1 });
            sectionId === 6 &&
              getAllPostsStart({
                category: "Health",
                page: healthPosts.page + 1,
              });
          }
        }}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: 10 }}>
            {(sectionId === 1 &&
              babyPosts &&
              babyPosts.posts.length >= 20 &&
              !isFetching) ||
            (sectionId === 2 &&
              siblingPosts &&
              siblingPosts.posts.length >= 20 &&
              !isFetching) ||
            (sectionId === 3 &&
              motherPosts &&
              motherPosts.posts.length >= 20 &&
              !isFetching) ||
            (sectionId === 4 &&
              spousePosts &&
              spousePosts.posts.length >= 20 &&
              !isFetching) ||
            (sectionId === 5 &&
              sexPosts &&
              sexPosts.posts.length >= 20 &&
              !isFetching) ||
            (sectionId === 6 &&
              healthPosts &&
              healthPosts.posts.length >= 20 &&
              !isFetching) ? (
              <TouchableOpacity
                onPress={() => {
                  sectionId === 1 &&
                    getAllPostsStart({
                      category: "Baby",
                      page: babyPosts.page + 1,
                    });
                  sectionId === 2 &&
                    getAllPostsStart({
                      category: "Sibling",
                      page: siblingPosts.page + 1,
                    });
                  sectionId === 3 &&
                    getAllPostsStart({
                      category: "Mother",
                      page: motherPosts.page + 1,
                    });
                  sectionId === 4 &&
                    getAllPostsStart({
                      category: "Spouse",
                      page: spousePosts.page + 1,
                    });
                  sectionId === 5 &&
                    getAllPostsStart({
                      category: "Sex",
                      page: sexPosts.page + 1,
                    });
                  sectionId === 6 &&
                    getAllPostsStart({
                      category: "Health",
                      page: healthPosts.page + 1,
                    });
                  sectionId === 1 &&
                    getAllPostsStart({
                      category: "Baby",
                      page: babyPosts.page + 1,
                    });
                  sectionId === 2 &&
                    getAllPostsStart({
                      category: "Sibling",
                      page: siblingPosts.page + 1,
                    });
                  sectionId === 3 &&
                    getAllPostsStart({
                      category: "Mother",
                      page: motherPosts.page + 1,
                    });
                  sectionId === 4 &&
                    getAllPostsStart({
                      category: "Spouse",
                      page: spousePosts.page + 1,
                    });
                  sectionId === 5 &&
                    getAllPostsStart({
                      category: "Sex",
                      page: sexPosts.page + 1,
                    });
                  sectionId === 6 &&
                    getAllPostsStart({
                      category: "Health",
                      page: healthPosts.page + 1,
                    });
                }}
                style={{
                  backgroundColor: colors.primary,
                  alignSelf: "center",
                  marginTop: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: normalize(14),
                    fontFamily: "SofiaProLight",
                    color: "white",
                    textAlign: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                  }}>
                  Load more
                </Text>
              </TouchableOpacity>
            ) : null}
            <>
              {(sectionId === 1 && babyPosts && isFetching) ||
              (sectionId === 2 && siblingPosts && isFetching) ||
              (sectionId === 3 && motherPosts && isFetching) ||
              (sectionId === 4 && spousePosts && isFetching) ||
              (sectionId === 5 && sexPosts && isFetching) ||
              (sectionId === 6 && healthPosts && isFetching) ? (
                <ActivityIndicator
                  style={{}}
                  size={normalize(35)}
                  color={colors.primary}
                />
              ) : null}
            </>
          </View>
        )}
        // showsHorizontalScrollIndicator={false}
        // extraData={selected}
      />
      {/* {showVideo.show && (
        <VideoModal showVideo={showVideo} setShowVideo={setShowVideo} />
      )} */}
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
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-between",
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
  babyPosts: selectGetBabyPosts,
  siblingPosts: selectGetSiblingPosts,
  motherPosts: selectGetMotherPosts,
  spousePosts: selectGetSpousePosts,
  sexPosts: selectGetSexPosts,
  healthPosts: selectGetHealthPosts,
  donate: selectDonate,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPostsStart: (type, category) =>
    dispatch(getAllPostsStart(type, category)),
  clearPostsData: () => dispatch(clearPostsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
