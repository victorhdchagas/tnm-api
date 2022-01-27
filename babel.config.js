module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', '@babel/typescript'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };
