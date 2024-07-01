import { config } from "docs-shared";

import theme from "./theme.js";

// The config wrapper is located in <root>/docs-shared/src/config-wrapper.ts
export default config("sass-palette", {
  locales: {
    "/": {
      lang: "en-US",
      title: "Sass Palette",
      description: "Sass Palette Plugin for VuePress2",
    },

    "/zh/": {
      lang: "zh-TW",
      title: "Sass 調色板",
      description: "VuePress2 的 Sass 調色板外掛程式",
    },
  },

  theme,
});
