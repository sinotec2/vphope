import { theme } from "docs-shared";
import { getDirname, path } from "vuepress/utils";
import { AVAILABLE_SERVICES } from "vuepress-plugin-components";

import { enNavbarConfig, zhNavbarConfig } from "./navbar/index.js";
import { enSidebarConfig, zhSidebarConfig } from "./sidebar/index.js";

const __dirname = getDirname(import.meta.url);

const IS_NETLIFY = "NETLIFY" in process.env;

// The theme wrapper is located in <root>/docs-shared/src/theme-wrapper.ts
export default theme(
  "theme",
  {
    repo: "vuepress-theme-hope/vuepress-theme-hope",

    blog: {
      name: "VuePress Theme Hope",
      medias: {
        Baidu: "https://example.com",
        BiliBili: "https://example.com",
        Bitbucket: "https://example.com",
        Dingding: "https://example.com",
        Discord: "https://example.com",
        Dribbble: "https://example.com",
        Email: "mailto:info@example.com",
        Evernote: "https://example.com",
        Facebook: "https://example.com",
        Flipboard: "https://example.com",
        Gitee: "https://example.com",
        GitHub: "https://example.com",
        Gitlab: "https://example.com",
        Gmail: "mailto:info@example.com",
        Instagram: "https://example.com",
        Lark: "https://example.com",
        Lines: "https://example.com",
        Linkedin: "https://example.com",
        Pinterest: "https://example.com",
        Pocket: "https://example.com",
        QQ: "https://example.com",
        Qzone: "https://example.com",
        Reddit: "https://example.com",
        Rss: "https://example.com",
        Steam: "https://example.com",
        Twitter: "https://example.com",
        Wechat: "https://example.com",
        Weibo: "https://example.com",
        Whatsapp: "https://example.com",
        Youtube: "https://example.com",
        Zhihu: "https://example.com",
      },
    },

    fullscreen: true,

    navbarTitle: "",

//    extraLocales: {
//      Русский: "https://theme-hope-ru.vuejs.press/:route",
//    },

    footer: '<script src="https://busuanzi.ibruce.info/jquery/1.11.2/jquery.min.js"></script><script src="https://busuanzi.ibruce.info/pintuer/1.0/pintuer.mini.js"></script><script src="https://busuanzi.ibruce.info/respond/1.4.2/respond.min.js"></script><script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script><p class="text-small text-grey-dk-100 mb-0"><i class="fa fa-eye"></i> <span id="busuanzi_container_page_pv">  <span id="busuanzi_value_page_pv"> </span>  views &emsp;</span><i class="fa fa-earth"></i> <span id="busuanzi_container_site_pv"> <span id="busuanzi_value_site_pv"> </span>  site_visits &emsp;</span><i class="fa fa-user"></i><span id="busuanzi_container_site_uv"> <span id="busuanzi_value_site_uv"></span> visitors</span></p>',
  
  
    locales: {
      "/": {
        navbar: enNavbarConfig,
        sidebar: enSidebarConfig,
      },
      "/zh/": {
        navbar: zhNavbarConfig,
        sidebar: zhSidebarConfig,
      },
    },

    encrypt: {
      config: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "/demo/encrypt.html": "1234",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "/zh/demo/encrypt.html": "1234",
      },
    },

    plugins: {
      blog: {
        excerptLength: 0,
      },

      components: {
        components: [
          "ArtPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Share",
          "SiteInfo",
          "StackBlitz",
          "VPBanner",
          "VPCard",
          "VidStack",
        ],

        componentOptions: {
          share: {
            services: AVAILABLE_SERVICES,
          },
        },

        rootComponents: IS_NETLIFY
          ? {}
          : {
              notice: [
                {
                  path: "/",
                  title: "New docs location",
                  content:
                    "Our docs has moved to a new domain vuejs.press<br>Current docs is built from the latest commit on the main branch, and may contain <strong>unreleased changes</strong>!",
                  actions: [
                    {
                      text: "Visit Now",
                      link: "https://theme-hope.vuejs.press",
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
                      link: "https://theme-hope.vuejs.press/zh/",
                    },
                  ],
                },
              ],
            },
      },

      copyright: {
        license: "MIT",
      },

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      mdEnhance: {
        alert: true,
        align: true,
        attrs: true,
        chart: true,
        codetabs: true,
        component: true,
        demo: true,
        echarts: true,
        figure: true,
        flowchart: true,
        gfm: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        include: {
          deep: true,
          resolvePath: (file) => {
            if (file.startsWith("@components/"))
              return file.replace(
                "@components",
                path.resolve(__dirname, "../../../components/src"),
              );

            if (file.startsWith("@echarts/"))
              return file.replace(
                "@echarts",
                path.resolve(__dirname, "../../../md-enhance/src/echarts"),
              );

            if (file.startsWith("@md-enhance/"))
              return file.replace(
                "@md-enhance",
                path.resolve(__dirname, "../../../md-enhance/src"),
              );

            return file;
          },
          resolveLinkPath: false,
        },
        kotlinPlayground: true,
        mathjax: true,
        mark: true,
        markmap: true,
        mermaid: true,
        plantuml: true,
        playground: {
          presets: ["ts", "vue", "unocss"],
        },
        revealJs: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
          themes: [
            "auto",
            "beige",
            "black",
            "blood",
            "league",
            "moon",
            "night",
            "serif",
            "simple",
            "sky",
            "solarized",
            "white",
          ],
        },
        sandpack: true,
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({
              tag,
            }): {
              tag: string;
              attrs: Record<string, string>;
              content: string;
            } | void => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,
        vuePlayground: true,
      },
    },
  },
  "",
  "theme-v2",
);
