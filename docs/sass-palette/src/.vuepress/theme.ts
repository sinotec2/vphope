import { theme } from "docs-shared";

// The theme wrapper is located in <root>/docs-shared/src/theme-wrapper.ts
export default theme("sass-palette", {
  locales: {
    "/": {
      navbar: ["/", "/guide", "/config", "/demo"],

      sidebar: false,
    },

    "/zh/": {
      navbar: ["/zh/", "/zh/guide", "/zh/config", "/zh/demo"],

      sidebar: false,
    },
  },

  plugins: {
    docsearch: false,
    searchPro: {
      searchDelay: 800,
      suggestDelay: 300,
    },
    mdEnhance: {
      codetabs: true,
      imgMark: true,
    },
  },
});
