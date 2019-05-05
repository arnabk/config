const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function rewire(config) {
  const newConfig = injectBabelPlugin(["transform-decorators-legacy", {}], config);
  const { resolve: { modules } } = newConfig;
  modules.push('src');
  const { entry } = newConfig;
  entry.unshift('babel-polyfill');
  return newConfig;
};

// const { override, addDecoratorsLegacy, addWebpackAlias } = require("customize-cra");
// const path = require("path");

// module.exports = override(
//   addDecoratorsLegacy(),
//   addWebpackAlias({ "components": path.resolve(__dirname, "src", "components") }),
// );
