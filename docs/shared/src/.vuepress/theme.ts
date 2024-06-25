import { theme } from "docs-shared";

// The theme wrapper is located in <root>/docs-shared/src/theme-wrapper.ts
export default theme("shared", {
  locales: {
    "/": {
      navbar: ["/", "/shared", "/node", "/client"],

      sidebar: "structure",
    },

    "/zh/": {
      navbar: ["/zh/", "/zh/shared", "/zh/node", "/zh/client"],

      sidebar: "structure",
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
