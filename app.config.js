import appVersion from "./appVersion.json";
import packageJson from "./package.json";

module.exports = () => {
  const { buildOrVersionCode } = appVersion;

  const androidConfig = {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    softwareKeyboardLayoutMode: "pan",
    versionCode: parseInt(buildOrVersionCode, 10),
    backgroundColor: "#ffffff",
    permissions: ["ACCESS_NETWORK_STATE", "NOTIFICATIONS"],
  };

  const iosConfig = {
    supportsTablet: false,
    buildNumber: buildOrVersionCode,
    backgroundColor: "#ffffff",
    icon: "./assets/images/icon.png",
  };
  const config = {
    version: packageJson.version,
    owner: "joshmat",
    icon: "./assets/images/icon.png",
    jsEngine: "hermes",
    description:
      "An App Built with React-Native to Give Individuals Couples, Mothers and Pregnant women a lot of ideas about your health",
    githubUrl: "https://github.com/Joshmatjjen/sweet-mother",
    splash: {
      image: "./assets/images/SplashScreen.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    androidStatusBar: {
      backgroundColor: "#ffffff",
      translucent: false,
    },
    plugins: ["expo-localization", "expo-secure-store"],
    orientation: "portrait",
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    packagerOpts: {
      config: "metro.config.js",
      sourceExts: [
        "expo.ts",
        "expo.tsx",
        "expo.js",
        "expo.jsx",
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "wasm",
        "svg",
      ],
    },
  };

  return {
    ...config,
    name: "Sweet Mother",
    scheme: "sweet-mother",
    ios: {
      ...iosConfig,
      bundleIdentifier: "com.sweetmother",
    },
    android: {
      ...androidConfig,
      package: "com.sweetmother",
    },
    extra: {
      eas: {
        projectId: "0f350c22-8668-4c1c-8f7d-51ff5fa1c8eb",
      },
    },
  };
};
