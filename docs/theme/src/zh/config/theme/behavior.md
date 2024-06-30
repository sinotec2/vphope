---
title: 主題行為選項
icon: circle-info
order: -1
category:
  - 配置
tag:
  - 行為選項
---

`hopeTheme()` 的參數可以接受2個，第二個參數即**行為選項**。**行為選項**將會控制主題的外表及行為。

**行為選項**也可接受**一個**布爾值、或分開個別設定:

- `false`: 意味著所有選項都設置為 `false`
- `true`: 意味著同時打開檢核、精簡、客製、與偵錯的行為功能 `{ check: true, compact:true, custom: false, debug: false }`
- **行為選項**`.vuepress/config.ts`(或`.js`)的設定方式如下

<!-- more -->

::: code-tabs#language  

@tab TS

```ts title=".vuepress/config.ts"
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  // 網站選項
  // ...

  theme: hopeTheme(
    {
      // 主題選項
      // ...
    },
    {
      // 主題行為選項 (可選)
    },
  ),
});
```

@tab JS

```js title=".vuepress/config.js"
import { hopeTheme } from "vuepress-theme-hope";

export default {
  // 網站選項
  // ...

  theme: hopeTheme(
    {
      // 主題選項
      // ...
    },
    {
      // 主題行為選項 (可選)
    },
  ),
};
```

:::

## 檢核(check)

- 類型: `boolean`
- 內設值: `true`

是否執行附加檢查。

檢查項目包括：運行實時檢查、和 frontmatter 檢查。不兼容的值將被警告。

::: note

此選項將在穩定版本中恢復為 `false` 作為內設值。

:::

## 精簡(compact)

- 類型: `boolean`
- 內設值: `true`

是否兼容歷史版本 (v1 最新版本和 v2 beta 版本)。

- 仍然可以兼容的選項將繼續工作，同時在控制台中留下警告。
- 移除的選項將在控制台中留下錯誤。

::: note

此選項的內設值將在穩定版本中恢復為 `false` 。

:::

## 客製(custom)

- 類型: `boolean`
- 內設值: `false`

是否啟用通過别名導入自定義的元件。

內設情况下，主題將在性能模式下運行，所有文件都會被限制不讓使用客製化元件，並直接導入既有設定。

如果你想通過覆蓋元件和布局來自定義主題，請將此選項設置為 `true`，主題將加載帶有 `@theme-hope` 别名的元件和布局。

## 偵錯(debug)

- 類型: `boolean`
- 內設值: `false`

是否在調試(偵錯)模式下運行。

::: note

這只是通過將 `app.env.isDebug` 設置為 `true` 來實現的。

你還可以在運行 `vuepress dev` 或 `vuepress build` 時增加 `--debug` 標籤以啟用調試模式。(推荐)

:::
