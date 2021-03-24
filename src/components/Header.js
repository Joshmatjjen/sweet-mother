import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import normalize from '../utils/normalize';

const colors = {
  text: '#777777',
  background: '#FFFFFF',
  primary: '#0093db',
  primaryDark: '#0093dc',
};

const Header = ({ windowWidth, navigation, route, title, setLanguage }) => {
  let _menu = null;

  const setMenuRef = (ref) => {
    _menu = ref;
  };
  const hideMenu = () => {
    _menu.hide();
  };

  const showMenu = () => {
    _menu.show();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth,
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingHorizontal: 20,
      }}>
      {route === 'Home' ? (
        <Menu
          ref={setMenuRef}
          button={
            <TouchableOpacity onPress={showMenu}>
              <Icon
                name="language"
                type="font-awesome"
                color={colors.primary}
                size={normalize(20)}
              />
            </TouchableOpacity>
          }>
          <MenuItem
            onPress={() => {
              setLanguage('en-US');
              hideMenu();
            }}>
            English
          </MenuItem>
          <MenuItem
            onPress={() => {
              setLanguage('ig-NG');
              hideMenu();
            }}>
            Igbo
          </MenuItem>
          <MenuItem onPress={hideMenu}>Yoruba</MenuItem>
          <MenuItem onPress={hideMenu}>Hausa</MenuItem>
          {/* <MenuDivider /> */}
        </Menu>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 20 }}>
          <Icon name="arrow-left" type="font-awesome" color={colors.primary} size={normalize(20)} />
        </TouchableOpacity>
      )}
      {/* <Image
          style={{
            width: normalize(90),
            height: normalize(90),
            alignSelf: 'flex-end',
          }}
          source={i18n.t('baby')[0].img[0]}
        /> */}
      <Text style={styles.headerTitle}>{title ? title : 'Sweet Mother'}</Text>

      <View style={{ alignItems: 'center' }}>
        {route === 'Home' ? (
          <TouchableOpacity onPress={() => console.log('hello')}>
            <Icon
              style
              // raised
              name="ios-settings"
              type="ionicon"
              color={colors.primary}
            />
          </TouchableOpacity>
        ) : (
          <Menu
            ref={setMenuRef}
            button={
              <TouchableOpacity onPress={showMenu}>
                <Icon
                  name="language"
                  type="font-awesome"
                  color={colors.primary}
                  size={normalize(20)}
                />
              </TouchableOpacity>
            }>
            <MenuItem onPress={hideMenu}>English</MenuItem>
            <MenuItem onPress={hideMenu}>Igbo</MenuItem>
            <MenuItem onPress={hideMenu}>Yoruba</MenuItem>
            <MenuItem onPress={hideMenu}>Hausa</MenuItem>
            <MenuItem onPress={hideMenu} disabled>
              Menu item 3
            </MenuItem>
            <MenuDivider />
            <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
          </Menu>
        )}
      </View>
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
    fontFamily: 'SofiaProMedium',
    textAlign: 'center',
    paddingTop: 5,
    marginBottom: -10,
  },
});

export default Header;
