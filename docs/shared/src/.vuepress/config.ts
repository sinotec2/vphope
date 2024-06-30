import { config } from "docs-shared";
import theme from "./theme.js";

// The config wrapper is located in <root>/docs-shared/src/config-wrapper.ts
export default config("shared", {
  locales: {
    "/": {
      lang: "en-US",
      title: "AnythingLLM",
      description: "AnythingLLM System Description",
    },

    "/zh/": {
      lang: "zh-TW",
      title: "GPTs統一入口",
      description: "AnythingLLM系統說明",
    },
  },
  head: [
    ['link', { rel: 'stylesheet', href: './styles/index.css' }]
  ],

  theme,
  chainWebpack: (config) => {
    config.devServer.headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS,HEAD',
      'Access-Control-Allow-Headers': 'content-type',
    });
  },  
  
});
