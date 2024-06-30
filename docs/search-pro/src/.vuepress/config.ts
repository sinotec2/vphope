import { config } from "docs-shared";
import theme from "./theme.js";

// The config wrapper is located in <root>/docs-shared/src/config-wrapper.ts
export default config("search-pro", {
  locales: {
    "/": {
      lang: "en-US",
      title: "AnythingLLM",
      description: "AnythingLLM System Description",
    },

    "/zh/": {
      lang: "zh-TW",
      title: "FreeIPA說明",
      description: "FreeIPA系統說明",
    },
  },
  head: [
    ['link', { rel: 'stylesheet', href: './styles/index.css' }]
  ],

  theme,
  
});
