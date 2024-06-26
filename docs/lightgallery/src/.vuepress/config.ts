import { config } from "docs-shared";
import { lightgalleryPlugin } from "vuepress-plugin-lightgallery";

import theme from "./theme.js";

// The config wrapper is located in <root>/docs-shared/src/config-wrapper.ts
export default config("lightgallery", {
  locales: {
    "/": {
      lang: "en-US",
      title: "LightGallery plugin",
      description: "LightGallery plugin for VuePress2",
    },

    "/zh/": {
      lang: "zh-TW",
      title: "LightGallery 外掛程式",
      description: "VuePress2 的 LightGallery 外掛程式",
    },
  },

  theme,

  plugins: [
    lightgalleryPlugin({
      selector: ".theme-hope-content :not(a) > img:not([no-view])",
    }),
  ],
});
