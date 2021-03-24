import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';

const ImageCard = ({ section, navigation, children }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Post', { props: section })}>
      <Card
        containerStyle={{
          width: '89%',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 5,
        }}
      // style={{ backgroundColor: colors.background_1 }}
      >
        <View style={{ backgroundColor: 'white' }}>{children}</View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexBasis: '40%',
    marginVertical: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 1,
    // elevation: 2,
    // borderWidth: 1,
    // borderColor: 'transparent',
  },
});
export default ImageCard;
