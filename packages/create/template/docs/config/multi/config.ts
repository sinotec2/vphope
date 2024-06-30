import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-TW",
      title: "文檔範例",
      description: "vuepress-theme-hope 的文檔範例",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
