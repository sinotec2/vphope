import { theme } from "docs-shared";

// The theme wrapper is located in <root>/docs-shared/src/theme-wrapper.ts
export default theme("lightgallery", {
  footer: '<script src="https://busuanzi.ibruce.info/jquery/1.11.2/jquery.min.js"></script><script src="https://busuanzi.ibruce.info/pintuer/1.0/pintuer.mini.js"></script><script src="https://busuanzi.ibruce.info/respond/1.4.2/respond.min.js"></script><script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script><p class="text-small text-grey-dk-100 mb-0"><i class="fa fa-eye"></i> <span id="busuanzi_container_page_pv">  <span id="busuanzi_value_page_pv"> </span>  views &emsp;</span><i class="fa fa-earth"></i> <span id="busuanzi_container_site_pv"> <span id="busuanzi_value_site_pv"> </span>  site_visits &emsp;</span><i class="fa fa-user"></i><span id="busuanzi_container_site_uv"> <span id="busuanzi_value_site_uv"></span> visitors</span></p>',

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

    photoSwipe: false,
  },
});
