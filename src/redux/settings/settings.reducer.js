import SettingsActionTypes from "./settings.types";

const INITIAL_STATE = {
  language: "en-US",
  localeData: {},
  onScroll: null,
  speedDownloadActive: false,
  netState: true,
  playSound: false,
  soundAlert: null,
  showNetState: true,
  showDownloadNotify: true,
  showMusicNotify: true,
  downloadStorage: null,
  intro: true,
  firstLunch: true,
  mont: null,
  donate: true,
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SettingsActionTypes.SET_DONATE:
      return {
        ...state,
        donate: action.payload,
      };
    case SettingsActionTypes.SET_LOCALE_DATA:
      return {
        ...state,
        localeData: action.payload,
      };
    case SettingsActionTypes.SET_MONT:
      return {
        ...state,
        mont: action.payload,
      };
    case SettingsActionTypes.SHOW_INTRO:
      return {
        ...state,
        intro: action.payload,
      };
    case SettingsActionTypes.SET_FIRST_LUNCH:
      return {
        ...state,
        firstLunch: action.payload,
      };
    case SettingsActionTypes.NET_STATE:
      return {
        ...state,
        netState: action.payload,
      };
    case SettingsActionTypes.ON_SCROLL:
      return {
        ...state,
        onScroll: action.payload,
      };
    case SettingsActionTypes.SPEED_DOWNLOAD_ACTIVE:
      return {
        ...state,
        speedDownloadActive: action.payload,
      };
    case SettingsActionTypes.PLAY_SOUND:
      return {
        ...state,
        playSound: action.payload,
      };
    case SettingsActionTypes.SOUND_ALERT:
      return {
        ...state,
        soundAlert: action.payload,
      };
    case SettingsActionTypes.SHOW_NET_STATE:
      return {
        ...state,
        showNetState: action.payload,
      };
    case SettingsActionTypes.SHOW_DOWNLOAD_NOTIFY:
      return {
        ...state,
        showDownloadNotify: action.payload,
      };
    case SettingsActionTypes.SHOW_MUSIC_NOTIFY:
      return {
        ...state,
        showMusicNotify: action.payload,
      };
    case SettingsActionTypes.DOWNLOAD_STORAGE:
      return {
        ...state,
        downloadStorage: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
