const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Flash cards",
    themeColor: "#ededed",
    msTileColor: "#ededed",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "grey",
  },
});
