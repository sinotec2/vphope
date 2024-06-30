---
home: true
title: 主頁
icon: home
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: vuepress-plugin-md-enhance
tagline: 為 VuePress2 提供更多 Markdown 增强功能
actions:
  - text: 指引
    icon: lightbulb
    link: ./guide/
    type: primary

  - text: 配置
    icon: tools
    link: ./config.html

highlights:
  - header: 開箱即用
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: GFM 支持
        icon: clipboard-check
        details: 支持 GitHub 風格 Markdown
        link: ./guide/others.html#gfm

  - header: 新語法
    image: /assets/image/module.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    highlights:
      - title: 擴展圖片語法
        icon: image
        details: 指定圖片大小與顏色模式，並將它們轉化為插圖
        link: ./guide/grammar/image.html

      - title: 上下標支持
        icon: superscript
        details: 你的 Markdown 現在將支持上下標
        link: ./guide/grammar/sup-sub.html

      - title: 任務列表
        icon: square-check
        details: 在 Markdown 中使用任務列表
        link: ./guide/grammar/tasklist.html

      - title: TeX
        icon: square-root-variable
        details: Markdown 現在也可以支持 TeX 語法以顯示公式
        link: ./guide/grammar/tex.html

  - header: 聚焦内容
    image: /assets/image/edit.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/10-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/10-dark.svg
    highlights:
      - title: 註解
        icon: quote-left
        details: 你的 Markdown 現在將支持註解
        link: ./guide/content/footnote.html

      - title: 導入文件
        icon: fab fa-markdown
        details: 將你的文檔分段，並在 Markdown 中導入
        link: ./guide/content/include.html

      - title: 投影片
        icon: person-chalkboard
        details: 通過 Reveal.js 在 Markdown 中插入投影片
        link: ./guide/content/revealjs/

      - title: 選項卡
        icon: table-columns
        details: 使用選項卡對相似内容進行分組
        link: ./guide/content/tabs.html

      - title: 元件
        icon: puzzle-piece
        details: 在 Markdown 中快速插入元件
        link: ./guide/content/component.html

  - header: 内容樣式化
    image: /assets/image/marker.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    highlights:
      - title: 提示容器
        icon: box-archive
        details: 用樣式裝飾 Markdown 内容
        link: ./guide/stylize/hint.html

      - title: GFM 警告
        icon: bell
        details: GFM 風格的警告容器
        link: ./guide/stylize/alert.html

      - title: 自定義對齊
        icon: align-center
        details: 讓你在 Markdown 中對段落進行對齊
        link: ./guide/stylize/align.html

      - title: 屬性
        icon: code
        details: 讓你為 Markdown 元素增加屬性
        link: ./guide/stylize/attrs.html

      - title: 標記
        icon: highlighter
        details: 標記並高亮内容
        link: ./guide/stylize/mark.html

      - title: 遮蔽
        icon: eraser
        details: 增加遮蔽標記支持
        link: ./guide/stylize/spoiler.html

      - title: 樣式化字符
        icon: wand-magic-sparkles
        details: 以你想要的方式樣式化字符
        link: ./guide/stylize/stylize.html

  - header: 嵌入圖表
    image: /assets/image/chart.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: Chart.js
        icon: chart-simple
        details: 在 Markdown 中展示 Chart.js 圖表
        link: ./guide/chart/chartjs.html

      - title: ECharts
        icon: bar-chart
        details: 在 Markdown 中展示 ECharts 圖表
        link: ./guide/chart/echarts.html

      - title: 流程圖
        icon: route
        details: 在 Markdown 中增加流程圖
        link: ./guide/chart/flowchart.html

      - title: Markmap
        icon: fab fa-markdown
        details: 從 Markdown 生成思维導圖
        link: ./guide/chart/markmap.html

      - title: Mermaid
        icon: chart-pie
        details: 在 Markdown 中增加 Mermaid 圖例
        link: ./guide/chart/mermaid.html

      - title: Plantuml
        icon: diagram-project
        details: 在 Markdown 中增加 Plantuml
        link: ./guide/chart/plantuml.html

  - header: 展示你的程式碼和工作
    image: /assets/image/code.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    highlights:
      - title: 程式碼選項卡
        icon: code
        details: 使用選項卡對相似程式碼進行分組
        link: ./guide/code/code-tabs.html

      - title: 程式碼案例
        icon: laptop-code
        details: 你可以很方便的插入程式碼案例
        link: ./guide/code/demo/

      - title: 互動範例
        icon: code
        details: 你可以在 Markdown 中增加互動範例
        link: ./guide/code/playground.html

      - title: Kotlin 互動範例
        icon: fab fa-kickstarter
        details: 響應式的 Kotlin Playground
        link: ./guide/code/kotlin-playground.html

      - title: Vue 互動範例
        icon: fab fa-vuejs
        details: 在互動範例中展示 Vue 元件
        link: ./guide/code/vue-playground.html

      - title: Sandpack 互動範例
        icon: code
        details: Sandpack 驱動的實時的編碼環境
        link: ./guide/code/sandpack.html

footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主題 | MIT 協議, 版權所有 © 2019-present Mr.Hope

copyright: false
---

## 安裝

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance
```

@tab yarn

```bash
yarn add -D vuepress-plugin-md-enhance
```

@tab npm

```bash
npm i -D vuepress-plugin-md-enhance
```

:::

## 使用

::: code-tabs#language

@tab TS

```ts title=".vuepress/config.ts"
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // 你的選項
    }),
  ],
};
```

@tab JS

```js title=".vuepress/config.js"
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // 你的選項
    }),
  ],
};
```

:::

## 從 V1 遷移

詳見 [遷移指引](./migration.md)。
