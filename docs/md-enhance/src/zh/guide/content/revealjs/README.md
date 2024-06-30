---
title: 投影片支持
icon: person-chalkboard
---

<!-- #region before -->

在你的 VuePress 網站中增加投影片。

<!-- more -->

## 配置

在你的項目中安裝 [Reveal.js](https://revealjs.com/):

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D reveal.js
```

@tab yarn

```bash
yarn add -D reveal.js
```

@tab npm

```bash
npm i -D reveal.js
```

:::

之後啟用它:

<!-- #endregion before -->

```js {7} title=".vuepress/config.js"
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // 啟用投影片
      revealJs: true,
    }),
  ],
};
```

<!-- #region options -->

## 外掛程式與主題

`revealJs` 也接收一個配置對象，允許你控制導入的内置此外掛程式和主題。

你可以通過將 `revealJs.plugins` 設置為外掛程式名稱數組來啟用以下外掛程式:

- `highlight`
- `math`
- `search`
- `notes`
- `zoom`

::: note

為了支持 Markdown 語法，我們總會啟用 `markdown` 外掛程式。

:::

你也可以通過將 `revealJs.themes` 設置為主題名稱數組來啟用以下主題:

- `auto` (內設)
- `black`
- `white`
- `league`
- `beige`
- `sky`
- `night`
- `serif`
- `simple`
- `solarized`
- `blood`
- `moon`

內設情况下，只有 `auto` 主題被啟用。

## 語法

- 使用 `---` 分割投影片
- 使用 `--` 對投影片進行二次分割(垂直顯示)

```md
@slidestart

<!-- slide1 -->

---

<!-- slide2 -->

---

<!-- slide3 -->

@slideend
```

內設情况下，我們使用 `auto` 主題來渲染投影片，你也可以通過 `@slidestart 主題名稱` 使用其他主題。

<!-- #endregion options -->

各主題的外觀，詳見 [投影片主題](themes.md)

## 範例

請見 [投影片範例](demo.md)。

<!-- #region customize -->

## 自定義 Reveal.js

你也可以在[客户端配置文件][client-config]中導入並調用 `defineRevealJsConfig` 來自定義 reveal.js:

```ts title=".vuepress/client.ts"
import { defineClientConfig } from "vuepress/client";
import { defineRevealJsConfig } from "vuepress-plugin-md-enhance/client";

defineRevealJsConfig({
  // 在此設置 reveal.js 選項
});

export default defineClientConfig({
  // ...
});
```

::: note

Reveal.js 還提供了[更多的外掛程式](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware)，你可以通過 `plugin` 選項在 `defineRevealJsConfig` 中增加它們。在 Node 一側要求的内置外掛程式將自動增加。

:::

你也可以在 Frontmatter 設置 `revealJs` 以設置特定頁面的 reveal.js 選項。

Reveal.js 選項，請參見[reveal.js config](https://revealjs.com/config/)，Reveal.js 用法，請參閱 [reveal.js 文檔](https://revealjs.com/)。

[client-config]: https://vuejs.press/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6

<!-- #endregion customize -->
