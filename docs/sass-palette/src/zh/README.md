---
home: true
title: 主頁
icon: home
heroText: vuepress-plugin-sass-palette
tagline: VuePress2 的 Sass 調色板外掛程式
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
pnpm add -D vuepress-plugin-sass-palette
```

@tab yarn

```bash
yarn add -D vuepress-plugin-sass-palette
```

@tab npm

```bash
npm i -D vuepress-plugin-sass-palette
```

:::

### 使用

你必須在外掛程式初始化期間調用 `useSassPalettePlugin` 函數來使用此外掛程式。。

::: code-tabs#language

@tab TS

```ts title="你的外掛程式或主題入口"
import { useSassPalettePlugin } from "vuepress-plugin-sass-palette";
import type { PluginFunction } from "vuepress/core";

export const yourPlugin =
  (options): PluginFunction =>
  (app) => {
    useSassPalettePlugin(app, {
      // 外掛程式選項
    });

    return {
      // 你的外掛程式 API
    };
  };
```

@tab JS

```js title="你的外掛程式或主題入口"
import { useSassPalettePlugin } from "vuepress-plugin-sass-palette";

const yourPlugin = (options) => (app) => {
  useSassPalettePlugin(app, {
    // 外掛程式選項
  });

  return {
    // 你的外掛程式 API
  };
};
```

:::
