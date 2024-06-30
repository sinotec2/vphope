import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-TW",
  title: "網誌範例",
  description: "vuepress-theme-hope 的網誌範例",

  theme,

  // 和 PWA 一起啟用
  // shouldPrefetch: false,
});
