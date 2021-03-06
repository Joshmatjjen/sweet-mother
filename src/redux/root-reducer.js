import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import settingsReducer from "./settings/settings.reducer";
import postsReducer from "./posts/posts.reducer";

// import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
  // blacklist: ['navigation'],
  // whitelist: ['auth', 'notes'],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
  posts: postsReducer,
});

export default persistReducer(persistConfig, rootReducer);
