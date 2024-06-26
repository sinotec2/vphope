import { defineUserConfig } from "vuepress/cli";

import theme from "./theme.js";

const base = (process.env["BASE"] as "/" | `/${string}/`) || "/";

export default defineUserConfig({
  base,

  dest: "./dist",

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

  shouldPrefetch: false,
});
