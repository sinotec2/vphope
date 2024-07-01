import { addViteSsrNoExternal, config } from "docs-shared";

import theme from "./theme.js";

// The config wrapper is located in <root>/docs-shared/src/config-wrapper.ts
export default config("components", {
  locales: {
    "/": {
      lang: "en-US",
      title: "Components Lib",
      description: "Useful components for VuePress2",
    },
    "/zh/": {
      lang: "zh-TW",
      title: "元件庫",
      description: "面向 VuePress2 的常用元件",
    },
  },

  extendsBundlerOptions: (bundlerOptions, app) => {
    addViteSsrNoExternal(bundlerOptions, app, "artplayer-plugin-danmuku");
  },

  head: [
    // 增加其他的 <script> 標籤
    ['script', { src: 'https://busuanzi.ibruce.info/jquery/1.11.2/jquery.min.js' }],
    ['script', { src: 'https://busuanzi.ibruce.info/pintuer/1.0/pintuer.mini.js' }],
    ['script', { src: 'https://busuanzi.ibruce.info/respond/1.4.2/respond.min.js' }],
    ['script', { src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', async: true }],
    // 更多其他的 <script> 標籤...
  ],
  //'這是一個自定義的底部内容',
  footer: `
  <p class="text-small text-grey-dk-100 mb-0">
  <i class="fa fa-eye"></i> <span id="busuanzi_container_page_pv">  <span id="busuanzi_value_page_pv"> </span>  views &emsp;</span>
  <i class="fa fa-chrome"></i> <span id="busuanzi_container_site_pv"> <span id="busuanzi_value_site_pv"> </span>  site_visits &emsp;</span>
  <i class="fa fa-user"></i><span id="busuanzi_container_site_uv"> <span id="busuanzi_value_site_uv"></span> visitors</span>
</p>
  `,
  theme,
});
