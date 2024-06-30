---
home: true
title: 主頁
icon: home
heroText: vuepress-plugin-lightgallery
tagline: VuePress2 的 gallery 外掛程式
actions:
  - text: 快速上手
    icon: lightbulb
    link: ./guide.html
    type: primary

  - text: 配置
    icon: tools
    link: ./config.html

footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主題 | MIT 協議, 版權所有 © 2019-present Mr.Hope

copyright: false
---

## 使用外掛程式

### 安裝

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-lightgallery
```

@tab yarn

```bash
yarn add -D vuepress-plugin-lightgallery
```

@tab npm

```bash
npm i -D vuepress-plugin-lightgallery
```

:::

### 使用

::: code-tabs#language

@tab TS

```ts title=".vuepress/config.ts"
import { lightgalleryPlugin } from "vuepress-plugin-lightgallery";

export default {
  plugins: [
    lightgalleryPlugin({
      // 外掛程式選項
    }),
  ],
};
```

@tab JS

```js title=".vuepress/config.js"
import { lightgalleryPlugin } from "vuepress-plugin-lightgallery";

export default {
  plugins: [
    lightgalleryPlugin({
      // 外掛程式選項
    }),
  ],
};
```

:::

::: caution 許可證限制

請注意，雖然這個外掛程式是在 MIT 協議下發布的，但我們目前正在通過 VuePress Theme Hope 的内置 [lightgallery 組織許可](https://www.lightgalleryjs.com/license/) 來實現這一點，並且 如果你將其用於非商業用途，我們願意承認你是我們組織的成員。

組織許可證在非商業用途下對你没有限制，因為它支持無限的開發人員和無限的產品。你可以在任何許可下使用此外掛程式安全地發布你的文檔或項目。

但是請注意組織許可證只能用於單個商業產品。如果你想要以商業用途使用本外掛程式，由於 lightgallery 是在 [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html) 下，所以你必須在没有許可證下將你的程式碼置於 [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html) 協議下，或者考慮 [購買許可證](https://www.lightgalleryjs.com/license/) 以規避可能產生的問題。

你被警告了！

如果你對此表示擔忧，你可以考慮使用 [@vuepress/plugin-photo-swipe][photo-swipe]。

:::

[photo-swipe]: https://ecosystem.vuejs.press/zh/plugins/photo-swipe.html
