const { nativeTheme } = require("electron");

exports.decorateConfig = (config) => {
  config = config || {};

  var prefersColorScheme = nativeTheme.shouldUseDarkColors ? "dark" : "light";

  var profile = config.profiles.filter(
    (p) => p.name === config.colorScheme[prefersColorScheme]
  )[0];

  return profile ? Object.assign({}, config, profile.config) : config;
};
