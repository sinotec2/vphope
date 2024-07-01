import { navbar } from "docs-shared";

// region config
export const zhNavbarConfig = navbar([
  "/zh/get-started/",
  "/zh/guide/",
  "/zh/config/",
  "/zh/faq/",
  "/zh/demo/",
  {
    text: "項目",
    icon: "circle-info",
    prefix: "/zh/",
    children: [
      {
        text: "教程",
        icon: "signs-post",
        prefix: "cookbook/",
        children: ["markdown/", "vuepress/"],
      },
      {
        text: "項目",
        children: ["changelog", "related", "contribution"],
      },
    ],
  },
]);
// #endregion config
