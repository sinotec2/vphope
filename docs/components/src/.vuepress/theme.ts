import { createRequire } from "node:module";

import { theme } from "docs-shared";
import { fs } from "vuepress/utils";
import { AVAILABLE_SERVICES } from "vuepress-plugin-components";

const { version } = fs.readJsonSync(
  createRequire(import.meta.url).resolve(
    "vuepress-plugin-components/package.json",
  ),
) as { version: string };

const IS_NETLIFY = "NETLIFY" in process.env;

// The theme wrapper is located in <root>/docs-shared/src/theme-wrapper.ts
export default theme("components", {
  footer: '<script src="https://busuanzi.ibruce.info/jquery/1.11.2/jquery.min.js"></script><script src="https://busuanzi.ibruce.info/pintuer/1.0/pintuer.mini.js"></script><script src="https://busuanzi.ibruce.info/respond/1.4.2/respond.min.js"></script><script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script><p class="text-small text-grey-dk-100 mb-0"><i class="fa fa-eye"></i> <span id="busuanzi_container_page_pv">  <span id="busuanzi_value_page_pv"> </span>  views &emsp;</span><i class="fa fa-earth"></i> <span id="busuanzi_container_site_pv"> <span id="busuanzi_value_site_pv"> </span>  site_visits &emsp;</span><i class="fa fa-user"></i><span id="busuanzi_container_site_uv"> <span id="busuanzi_value_site_uv"></span> visitors</span></p>',

  locales: {
    "/": {
      navbar: [
        "/",
        "/guide/",
        "/config",
        "/demo",
        {
          text: version,
          icon: "bookmark",
          children: [
            {
              text: "V1 Docs",
              link: "https://vuepress-theme-hope.github.io/v1/components/",
            },
          ],
        },
      ],

      sidebar: [
        "/",
        {
          icon: "puzzle-piece",
          text: "Components",
          prefix: "/guide/",
          children: "structure",
        },
        "/config",
      ],
    },

    "/zh/": {
      navbar: [
        "/zh/",
        "/zh/guide/",
        "/zh/config",
        "/zh/demo",
        {
          text: version,
          icon: "bookmark",
          children: [
            {
              text: "V1 文檔",
              link: "https://vuepress-theme-hope.github.io/v1/components/zh/",
            },
          ],
        },
      ],

      sidebar: [
        "/zh/",
        {
          icon: "puzzle-piece",
          text: "元件",
          prefix: "/zh/guide/",
          children: "structure",
        },
        "/zh/config",
      ],
    },
  },

  plugins: {
    docsearch: false,
    searchPro: {
      searchDelay: 800,
      suggestDelay: 300,
    },
    components: {
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],

      componentOptions: {
        share: {
          services: AVAILABLE_SERVICES,
        },
      },

      rootComponents: {
        ...(IS_NETLIFY
          ? {}
          : {
              notice: [
                {
                  path: "/",
                  title: "New docs location",
                  content: "Our docs has moved to a new domain vuejs.press",
                  actions: [
                    {
                      text: "Visit Now",
                      link: "https://plugin-components.vuejs.press",
                    },
                  ],
                },
                {
                  path: "/zh/",
                  title: "新的文檔地址",
                  content: "我們的文檔已經遷移至新域名 vuejs.press 下。",
                  actions: [
                    {
                      text: "立即訪問",
                      link: "https://plugin-components.vuejs.press/zh/",
                    },
                  ],
                },
              ],
            }),
      },
    },

    mdEnhance: {
      codetabs: true,
      demo: true,
      imgMark: true,
      include: true,
    },
  },
});
