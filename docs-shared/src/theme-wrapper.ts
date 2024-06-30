import type { ThemeFunction } from "vuepress/core";
import type { ThemeOptions } from "vuepress-theme-hope";
import { hopeTheme } from "vuepress-theme-hope";

const IS_GITEE = "GITEE" in process.env;
const IS_NETLIFY = "NETLIFY" in process.env;
const IS_GITHUB = !IS_GITEE && !IS_NETLIFY;

export const theme = (
  name: string,
  { plugins = {}, ...options }: ThemeOptions,
  base = name.replace(/\d+$/, ""),
  indexName?: string,
): ThemeFunction => {
  const subdomain =
    name === "theme"
      ? "theme-hope"
      : name === "shared"
        ? "shared"
        : `plugin-${name}`;
  const canonical = `https://${subdomain}.vuejs.press`;

  const hostname = IS_GITHUB
    ? "https://vuepress-theme-hope.github.io"
    : IS_GITEE
      ? "https://vuepress-theme-hope.gitee.io"
      : canonical;

  const themeOptions: ThemeOptions = {
    hostname,

    author: {
      name: "Mr.Hope",
      url: "https://mister-hope.com",
    },

    favicon: "/favicon.ico",

    iconAssets: "fontawesome-with-brands",

    repo: `vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/${name}/`,
    docsRepo: "vuepress-theme-hope/vuepress-theme-hope",
    docsDir: `docs/${name}/src`,

    logo: "https://theme-hope-assets.vuejs.press/logo.svg",

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "SocialLink", "Repo", "Outlook", "Search"],
    },

    copyright: "MIT Licensed | Copyright © 2019-present Mr.Hope",
    displayFooter: true,

    pageInfo: ["ReadingTime", "Category", "Tag"],

    plugins: {
      comment: {
        provider: "Giscus",
        repo: "sinotec2/discuss",
        repoId: "R_kgDOL8RFWw",
        category: "Announcements",
        categoryId: "DIC_kwDOL8RFW84CfZdr",
        mapping: "url",
      },

      components: IS_NETLIFY
        ? {}
        : {
            rootComponents: {
              notice: [
                {
                  path: "/",
                  title: "New docs location",
                  content:
                    "Our docs has moved to a new domain vuejs.press<br>Current docs is built from the latest commit on the main branch, and may contain <strong>unreleased changes</strong>!",
                  actions: [
                    {
                      text: "Visit Now",
                      link: canonical,
                    },
                  ],
                },
                {
                  path: "/zh/",
                  title: "新的文檔地址",
                  content:
                    "我們的文檔已經遷移至新域名 vuejs.press 下。<br>當前文檔是基於主分支最新提交構建的，可能包含<strong>未發布的更改</strong>。",
                  actions: [
                    {
                      text: "立即訪問",
                      link: `${canonical}/zh/`,
                    },
                  ],
                },
              ],
            },
          },

      docsearch: {
        appId: "VXIEHELDL1",
        apiKey: "595796f71b6ba14326719682c3738c0c",
        indexName: `vuepress-theme-hope-${indexName ?? name}`,
        indexBase: base ? `/v2/${base}/` : "/v2/",
      },

      prismjs: false,

      redirect: { switchLocale: "modal" },

      seo: hostname === canonical ? {} : { canonical },

      ...plugins,
    },

    ...options,
  };

  return hopeTheme(themeOptions, { custom: true });
};
