// import { StatusBar } from 'expo-status-bar';c
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import i18n from 'i18n-js';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import ImageCard from '../../components/imageCard';
import normalize from '../../utils/normalize';
import { selectLanguage, selectLocaleData } from '../../redux/settings/settings.selector';
import Header from '../../components/Header';
import { setLanguage } from '../../redux/settings/settings.actions';

const colors = {
  text: '#777777',
  background: '#FFFFFF',
  primary: '#0093db',
  primaryDark: '#0093dc',
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const appwidth = windowWidth * 0.9;

const Home = ({ localeData, navigation, setLanguage }) => {
  console.log('Home=== ', i18n.t('baby')[0].img[0]);
  const ds = '../../../assets/images/icon.png';
  let images = i18n.t('baby')[0].img;
  return (
    <View style={styles.container}>
      <Header
        windowWidth={windowWidth}
        navigation={navigation}
        route="Home"
        setLanguage={setLanguage}
      />
      {localeData ? (
        <ScrollView
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="never"
          showsVerticalScrollIndicator={false}
          // ref={ref}
          style={{
            zIndex: 0,
            backgroundColor: colors.background,
            // minHeight: '100%',
          }}>
          <View
            style={[
              styles.listData,
              {
                justifyContent: 'center',
                paddingBottom: 30,
              },
            ]}>
            <ImageCard section={localeData.home[0].name} navigation={navigation}>
              <Image
                style={{
                  width: normalize(100),
                  height: normalize(90),
                  alignSelf: 'flex-end',
                }}
                source={localeData.home[0].img}
              />
              <Text style={styles.cardText}> {localeData.home[0].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[1].name} navigation={navigation}>
              <Image
                style={{
                  width: normalize(100),
                  height: normalize(90),
                  alignSelf: 'flex-start',
                }}
                source={localeData.home[1].img}
              />
              <Text style={styles.cardText}> {localeData.home[1].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[2].name} navigation={navigation}>
              <Image
                style={{
                  width: normalize(100),
                  height: normalize(90),
                  alignSelf: 'flex-end',
                }}
                source={localeData.home[2].img}
              />
              <Text style={styles.cardText}> {localeData.home[2].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[3].name} navigation={navigation}>
              <Image
                style={{
                  width: normalize(100),
                  height: normalize(90),
                  alignSelf: 'flex-start',
                }}
                source={localeData.home[3].img}
              />
              <Text style={styles.cardText}> {localeData.home[3].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[4].name} navigation={navigation}>
              <Image
                style={{
                  width: normalize(100),
                  height: normalize(90),
                  alignSelf: 'flex-end',
                }}
                source={localeData.home[4].img}
              />
              <Text style={styles.cardText}> {localeData.home[4].name} </Text>
            </ImageCard>
            <ImageCard section={localeData.home[5].name} navigation={navigation}>
              <Image
                style={{
                  width: normalize(100),
                  height: normalize(90),
                  alignSelf: 'flex-start',
                }}
                source={localeData.home[5].img}
              />
              <Text style={styles.cardText}> {localeData.home[5].name} </Text>
            </ImageCard>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom: 50,
  },
  headerTitle: {
    color: colors.text,
    fontSize: normalize(18),
    fontFamily: 'SofiaProBold',
    paddingVertical: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  listData: {
    // flex: 1,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardText: {
    color: colors.text,
    fontSize: normalize(13),
    fontFamily: 'SofiaProMedium',
    textAlign: 'center',
    paddingTop: 5,
    marginBottom: -10,
  },
});

const mapStateToProps = createStructuredSelector({
  language: selectLanguage,
  localeData: selectLocaleData,
});

const mapDispatchToProps = (dispatch) => ({
  // getPracticesAllStart: () => dispatch(getPracticesAllStart()),
  setLanguage: (data) => dispatch(setLanguage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);