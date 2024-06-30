import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "Mr.Hope",
    url: "https://mister-hope.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "http://iiseng.sinotech-eng.com/sipEng/Content/logo.png",

  repo: "sinotec2/discuss",

  docsDir: "src",

  // 導航欄
  navbar,

  // 側邊欄
  sidebar,

  // 頁尾
  footer: {
    links: [
      {
        title: 'View Stats',
        content: '<script src="https://busuanzi.ibruce.info/jquery/1.11.2/jquery.min.js"></script><script src="https://busuanzi.ibruce.info/pintuer/1.0/pintuer.mini.js"></script><script src="https://busuanzi.ibruce.info/respond/1.4.2/respond.min.js"></script><script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script><p class="text-small text-grey-dk-100 mb-0"><i class="fa fa-eye"></i> <span id="busuanzi_container_page_pv">  <span id="busuanzi_value_page_pv"> </span>  views &emsp;</span><i class="fa fa-earth"></i> <span id="busuanzi_container_site_pv"> <span id="busuanzi_value_site_pv"> </span>  site_visits &emsp;</span><i class="fa fa-user"></i><span id="busuanzi_container_site_uv"> <span id="busuanzi_value_site_uv"></span> visitors</span></p>',
      },
    ],
    content: "",
  },

  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多語言配置
  metaLocales: {
    editLink: "在 GitHub 上編輯此頁",
  },

  // 如果想要實時查看任何改變，啟用它。注: 這對更新性能有很大負面影響
  // hotReload: true,

  // 在這裡配置主題提供的外掛程式
  plugins: {
    // 注意: 僅用於測試! 你必須自行生成並在生產環境中使用自己的評論服務
    comment: {
      provider: "Giscus",
      repo: "sinotec2/discuss",
      repoId: "R_kgDOL8RFWw",
      category: "Announcements",
      categoryId: "DIC_kwDOL8RFW84CfZdr",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此處開啟了很多功能用於範例，你應僅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
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

      // 在啟用之前安裝 chart.js
      // chart: true,

      // insert component easily

      // 在啟用之前安裝 echarts
      // echarts: true,

      // 在啟用之前安裝 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在啟用之前安裝 katex
      // katex: true,

      // 在啟用之前安裝 mathjax-full
      // mathjax: true,

      // 在啟用之前安裝 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在啟用之前安裝 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在啟用之前安裝 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安裝 @vuepress/plugin-pwa 並取消下方註解
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
