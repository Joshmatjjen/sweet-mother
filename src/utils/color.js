import AsyncStorage from '@react-native-async-storage/async-storage';

export const ColorList = [
  {
    mode: 'light',
    primary: '#05af32',
    primary_light: '#05da3e',
    primary_dark: '#038125',
    secondary: '#dd8843',
    tertiary: '#7721ba',
    quaternary: '#c11d6f',
    background: '#ffffff',
    background_1: '#eeeeee',
    card: '#f4f2f2',
    text: '#777777',
    text_1: '#242424',
    text_2: '#e6e1e1',
    text_4: '#9b9b9b',
    btn_hover: '#a8a8a8',
    fab: '#05af32',
    play_1: '#05af32',
    danger: '#F32013',
  },
  {
    mode: 'dark',
    primary: '#05af32',
    primary_light: '#05da3e',
    primary_dark: '#038125',
    secondary: '#dd8843',
    tertiary: '#7721ba',
    quaternary: '#c11d6f',
    background: '#030805',
    background_1: '#050c07',
    card: '#050e08',
    text: '#FFFFFF',
    text_1: '#a3a3a3',
    text_2: '#cccccc',
    text_4: '#aaaaaa',
    btn_hover: '#0b1d12',
    fab: '#038125',
    play_1: '#05af32',
    danger: '#F32013',
  },
];

// cursive;
//casual

export const AppColor = async () => {
  const color = await AsyncStorage.getItem('theme_color');
  const data = JSON.parse(color);
  // console.log(data);
  return data;
};
