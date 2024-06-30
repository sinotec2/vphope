---
home: true
title: 主頁
icon: home
heroText: vuepress-plugin-search-pro
tagline: VuePress2 的客户端搜索外掛程式
actions:
  - text: 快速上手
    icon: lightbulb
    link: ./guide.html
    type: primary

  - text: 配置
    icon: tools
    link: ./config.html

features:
  - title: 高性能
    icon: rocket
    details: 在由 <strong>slimsearch</strong> 提供支持的独立 Worker 中進行高速搜索
    link: ./guide.html#極致速度

  - title: 全索引
    icon: file-zipper
    details: 索引您網站中的所有内容
    link: ./guide.html#索引範圍

  - title: 突出顯示和上下文
    icon: highlighter
    details: 突出顯示關鍵字並在搜索結果中顯示相關上下文
    link: ./guide.html#高亮與上下文

  - title: 自動建議
    icon: lightbulb
    details: 在輸入時獲取查詢建議
    link: ./guide.html#自動搜索建議

  - title: 自定義字段
    icon: gears
    details: 使用選項將數據增加到索引
    link: ./guide.html#自定義索引

  - title: 搜索歷史
    icon: clock
    details: 保留查詢和結果的歷史記錄
    link: ./guide.html#查詢和搜索的歷史記錄

footer: MIT Licensed | Copyright © 2022-present Mr.Hope
copyrightText: false
---

## 教程章節

|![](chat_pngs/2024-05-11-17-12-17.png)|
|:-:|
|[公司外網址](https://sinotec2.github.io/AIEE/NLP/AnythingLLM/AnyChat/)|

1. [熟悉聊天機器人的界面](AnyChat.md)

1. [網頁AI小幫手](EmbChat.md)

1. [經理的權責](AnyChat_mng.md)

1. [管理者的權責](AnyChat_adm.md)

1. [批次新增使用者](add_users.md)


## 使用外掛程式

### 安裝

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-search-pro
```

@tab yarn

```bash
yarn add -D vuepress-plugin-search-pro
```

@tab npm

```bash
npm i -D vuepress-plugin-search-pro
```

:::

### 使用

::: code-tabs#language

@tab TS

```ts title=".vuepress/config.ts"
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default {
  plugins: [
    searchProPlugin({
      // 配置選項
    }),
  ],
};
```

@tab JS

```js title=".vuepress/config.js"
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default {
  plugins: [
    searchProPlugin({
      // 配置選項
    }),
  ],
};
```

:::
