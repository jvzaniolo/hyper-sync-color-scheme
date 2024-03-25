const { nativeTheme } = require("electron");

exports.decorateConfig = (config) => {
  config = config || {};

  var prefersColorScheme = nativeTheme.shouldUseDarkColors ? "dark" : "light";
  var profileName = config.colorScheme
    ? config.colorScheme[prefersColorScheme]
    : null;
  if (!profileName) return config;
  var profile = config.profiles.filter((p) => p.name === profileName);
  return profile.length > 0
    ? Object.assign({}, config, profile[0].config)
    : config;
};
