import { createSelector } from "reselect";

const selectSettings = (state) => state.settings;

export const selectLanguage = createSelector(
  [selectSettings],
  (settings) => settings.language,
);
export const selectLocaleData = createSelector(
  [selectSettings],
  (settings) => settings.localeData,
);
export const selectIntro = createSelector(
  [selectSettings],
  (settings) => settings.intro,
);
export const selectFirstLunch = createSelector(
  [selectSettings],
  (settings) => settings.firstLunch,
);
export const selectOnScroll = createSelector(
  [selectSettings],
  (settings) => settings.onScroll,
);
export const selectSpeedDownloadActive = createSelector(
  [selectSettings],
  (settings) => settings.speedDownloadActive,
);

export const selectNetState = createSelector(
  [selectSettings],
  (settings) => settings.netState,
);

export const selectPlaySound = createSelector(
  [selectSettings],
  (settings) => settings.playSound,
);

export const selectSoundAlert = createSelector(
  [selectSettings],
  (settings) => settings.soundAlert,
);

export const selectShowNetState = createSelector(
  [selectSettings],
  (settings) => settings.showNetState,
);
export const selectShowDownloadNotify = createSelector(
  [selectSettings],
  (settings) => settings.showDownloadNotify,
);
export const selectShowMusicNotify = createSelector(
  [selectSettings],
  (settings) => settings.showMusicNotify,
);
export const selectDownloadStorage = createSelector(
  [selectSettings],
  (settings) => settings.downloadStorage,
);
export const selectMont = createSelector(
  [selectSettings],
  (settings) => settings.mont,
);
export const selectDonate = createSelector(
  [selectSettings],
  (settings) => settings.donate,
);

// export const selectToken = createSelector([selectUser], (user) => user.token);
