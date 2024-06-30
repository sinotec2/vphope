---
containerClass: home
home: true
title: 主頁
icon: home
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: VuePress Theme Hope
tagline: 一個具有强大功能的 vuepress 主題✨
actions:
  - text: 快速上手
    link: ./get-started/
    icon: signs-post
    type: primary

  - text: 指引
    icon: lightbulb
    link: ./guide/

  - text: 案例
    icon: star
    link: ./demo/

highlights:
  - header: 易於安裝
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 運行 <code>pnpm create vuepress-theme-hope hope-project</code> 以創建一個新的主題項目。
      - title: 在已有項目根目錄下運行 <code>pnpm create vuepress-theme-hope add .</code> 以在項目中增加主題。

  - header: 在 Markdown 中增加你想要的内容
    description: 我們擴展了標準的 CommonMark 規範，為你增加了許多功能。
    image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 連結檢查
        icon: clipboard-check
        details: 檢查 Markdown 連結
        link: ./guide/markdown/others.html#link-check

      - title: 提示容器
        icon: box-archive
        details: 用樣式裝飾 Markdown 内容
        link: ./guide/markdown/stylize/hint.html

      - title: GFM 警告
        icon: bell
        details: GFM 風格的警告容器
        link: ./guide/markdown/stylize/alert.html

      - title: 選項卡
        icon: table-columns
        details: 使用選項卡對相似内容進行分組
        link: ./guide/markdown/content/tabs.html

      - title: 程式碼組
        icon: code
        details: 使用選項卡對相似程式碼進行分組
        link: ./guide/markdown/code/code-tabs.html

      - title: 自定義對齊
        icon: align-center
        details: Markdown 中對内容進行自定義對齊
        link: ./guide/markdown/stylize/align.html

      - title: 自定義屬性
        icon: code
        details: 為 Markdown 元素增加屬性
        link: ./guide/markdown/stylize/attrs.html

      - title: 上下標
        icon: superscript
        details: 輕鬆在 Markdown 中增加上下標
        link: ./guide/markdown/grammar/sup-sub.html

      - title: 註解
        icon: quote-left
        details: 在内容中插入註解
        link: ./guide/markdown/content/footnote.html

      - title: 標記
        icon: highlighter
        details: 標記並高亮内容
        link: ./guide/markdown/stylize/mark.html

      - title: 遮蔽
        icon: eraser
        details: 增加遮蔽標記支持
        link: ./guide/markdown/stylize/spoiler.html

      - title: 任務列表
        icon: square-check
        details: 輕鬆插入任務列表
        link: ./guide/markdown/grammar/tasklist.html

      - title: 圖片語法
        icon: image
        details: 使用改進的語法指定圖片大小與顏色模式
        link: ./guide/markdown/grammar/image.html

      - title: 元件支持
        icon: puzzle-piece
        details: 在 Markdown 中輕鬆插入元件
        link: ./guide/component/grammar.html

      - title: 元件
        icon: puzzle-piece
        details: 開箱即用的常用元件
        link: ./guide/component/built-in.html

      - title: Chart.js 支持
        icon: chart-simple
        details: 在 Markdown 中展示 Chart.js 圖表
        link: ./guide/markdown/chartjs.html

      - title: 流程圖支持
        icon: route
        details: 在 Markdown 中直接寫出流程圖
        link: ./guide/markdown/chart/flowchart.html

      - title: Mermaid 支持
        icon: chart-pie
        details: 在 Markdown 中增加 Mermaid 圖例
        link: ./guide/markdown/chart/mermaid.html

      - title: Plantuml 支持
        icon: diagram-project
        details: 在 Markdown 中增加 Plant UML 圖表
        link: ./guide/markdown/chart/plantuml.html

      - title: Tex 支持
        icon: square-root-variable
        details: Markdown 現在也可以支持 Tex 語法以顯示公式
        link: ./guide/markdown/grammar/tex.html

      - title: 導入文件支持
        icon: fab fa-markdown
        details: 將你的文檔分段，並在 Markdown 中導入
        link: ./guide/markdown/content/include.html

      - title: 互動範例支持
        icon: code
        details: 你可以在 Markdown 中增加互動範例
        link: ./guide/markdown/code/playground.html

      - title: Kotlin 互動範例支持
        icon: fab fa-kickstarter
        details: 響應式的 Kotlin 範例
        link: ./guide/markdown/code/kotlin-playground.html

      - title: Vue 互動範例支持
        icon: fab fa-vuejs
        details: 在互動範例中展示 Vue 元件
        link: ./guide/markdown/vue-playground.html

      - title: Sandpack 互動範例支持
        icon: code
        details: Sandpack 驱動的實時的編碼環境
        link: ./guide/markdown/code/sandpack.html

      - title: 程式碼案例支持
        icon: laptop-code
        details: 你可以很方便的插入程式碼案例
        link: ./guide/markdown/code/demo.html

      - title: 投影片支持
        icon: person-chalkboard
        details: 通過 Reveal.js 在 Markdown 中插入投影片
        link: ./guide/markdown/content/revealjs.html

  - header: 可定制的頁面
    description: 完整無障礙支持的可定制外觀
    image: /assets/image/ui.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/9-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/9-dark.svg
    highlights:
      - title: 深色模式
        icon: circle-half-stroke
        details: 可以自由切換淺色模式與深色模式
        link: ./guide/interface/darkmode.html

      - title: 主題色切換
        icon: palette
        details: 支持自定義主題色並允許用户在預設的主題顏色之間切換
        link: ./guide/interface/theme-color.html

      - title: 程式碼區塊主題
        icon: wand-magic-sparkles
        details: 自定義程式碼區塊主題
        link: ./guide/interface/code-theme.html

      - title: 更多
        icon: ellipsis
        details: RTL 布局，列印支持，全面按鈕等
        link: ./guide/interface/others.html

  - header: 布局
    description: 一個完美的響應式布局。
    image: /assets/image/layout.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: 導航欄
        icon: window-maximize
        details: 完全可定制的導航欄以及改進的移動端外觀
        link: ./guide/layout/navbar.html

      - title: 側邊欄
        icon: fas fa-window-maximize fa-rotate-270
        details: 從文檔標題或文件結構中自動生成側邊欄
        link: ./guide/layout/sidebar.html

      - title: 投影片頁面
        icon: person-chalkboard
        details: 增加投影片頁面以顯示你喜歡的内容
        link: ./guide/layout/slides.html

      - title: 布局增强
        icon: object-group
        details: 增加路徑導航、頁尾、改進的導航欄、改進的頁面導航等。
        link: ./guide/layout/

      - title: 更多
        icon: ellipsis
        details: RTL 布局，列印支持，全面按鈕等
        link: ./guide/interface/others.html

  - header: 新功能
    image: /assets/image/features.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: 目錄頁面
        icon: network-wired
        details: 自動生成目錄頁以及開箱即用的目錄元件
        link: ./guide/feature/catalog.html

      - title: 瀏覽量與評論
        icon: comment-dots
        details: 配合 4 個評論服務開啟閱讀量統計與評論支持
        link: ./guide/feature/comment.html

      - title: 文章資訊
        icon: circle-info
        details: 為你的文章增加作者、寫作日期、預計閱讀時間、字數統計等資訊
        link: ./guide/feature/page-info.html

      - title: 文章加密
        icon: lock
        details: 你可以為你的特定頁面或特定目錄進行加密，以便陌生人不能隨意訪問它們
        link: ./guide/feature/encrypt.html

      - title: 搜索支持
        icon: search
        details: 支持 docsearch 和基於客户端的搜索
        link: ./guide/feature/search.html

      - title: 程式碼複製
        icon: copy
        details: 一鍵複製程式碼區塊中的程式碼
        link: ./guide/feature/copy-code.html

      - title: 圖片預覽
        icon: image
        details: 像相册一樣允許你瀏覽、縮放並分享你的頁面圖片
        link: ./guide/feature/photo-swipe.html

  - header: 網誌
    description: 通過主題創建個人網誌
    image: /assets/image/blog.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: 網誌功能
        icon: blog
        details: 通過文章的日期、標籤和分類展示文章
        link: ./guide/blog/intro.html

      - title: 網誌主頁
        icon: home
        details: 全新網誌主頁
        link: ./guide/blog/home.html

      - title: 部落客資訊
        icon: home
        details: 自定義名稱、頭像、座右銘和社交媒體連結
        link: ./guide/blog/blogger.html

      - title: 時間線
        icon: home
        details: 在時間線中瀏覽和通讀文章
        link: ./guide/blog/timeline.html

  - header: 高級
    description: 增强網站與用户體驗的高級功能
    image: /assets/image/advanced.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    highlights:
      - title: SEO 增强
        icon: dumbbell
        details: 將最終生成的網頁針對搜索引擎進行優化。
        link: ./guide/advanced/seo.html

      - title: Sitemap
        icon: sitemap
        details: 自動為你的網站生成 Sitemap
        link: ./guide/advanced/sitemap.html

      - title: Feed 支持
        icon: rss
        details: 生成你的 Feed，並通知你的用户訂閱它
        link: ./guide/advanced/feed.html

      - title: PWA 支持
        icon: mobile-screen
        details: 讓你的網站更像一個 APP
        link: ./guide/advanced/pwa.html

copyright: false
---
