import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-TW",
      title: "網誌範例",
      description: "vuepress-theme-hope 的網誌範例",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
