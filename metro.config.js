// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter((ext) => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//   };
// })();
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Remove all console logs in production...
config.transformer.minifierConfig.compress.drop_console = true;

module.exports = config;