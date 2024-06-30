---
title: 程式碼範例
icon: splotch
---

讓你的 VuePress 網站中的 Markdown 文件支持程式碼案例。

<!-- more -->

::: info 什麼是程式碼範例

程式碼範例是一項功能，可讓你在 Markdown 文件中插入程式碼片段，外掛程式將為你呈現程式碼並在瀏覽器上運行程式碼。 如果用户喜歡嘗試，可以點擊 CodePen 或 JSFiddle 按鈕，在 CodePen 或 JSFiddle 中打開 demo，連線編輯。

因此，這意味著你無權訪問項目中的内部元件。我們既不能在用户的瀏覽器中讀取你本地的文件系統， Codepen 和 JSFiddle 也不能訪問項目中的 Vue 元件。

:::

## 配置

```js {7} title=".vuepress/config.js"
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // 啟用程式碼範例
      demo: true,
    }),
  ],
};
```

<!-- #region syntax -->

## 語法

請使用以下語法:

````md
::: [類型]-demo 可選的標題文字

```html
<!-- ↑ 使用可用的語言 -->
<!-- 在程式碼區塊中放置你對應語言的程式碼，一個語言不能出現多個塊 -->
<!-- 你可以有多個程式碼區塊，並且 html, js, css 都是視情况可選的 -->
```

```json
// json block 作為外掛程式配置存放處
{
  // 放置你的配置 (可選的)
}
```

:::
````

<!-- #endregion syntax -->

::: tip

JSON 塊是可選的，可用的配置詳見 [配置](../../../config.md#demo)。

:::

此外掛程式支持三種類型:

- normal
- vue
- react

<!-- #region language -->

## 可用的語言

你可以在範例塊中使用不同語言。

當你設置一些不能在瀏覽器上直接運行的語言時，由於外掛程式無法解析它們，因此網頁範例將被停用。外掛程式只顯示程式碼。同時提供一個 "在 CodePen 中打開" 按鈕允許用户直接在 CodePen 打開並瀏覽程式碼。

可用的 HTML 語言:

- `"html"` (內設)
- `"slim"`
- `"haml"`
- `"markdown"`

> 你也可以在程式碼區塊中使用 `md`。

可用的 JS 語言:

- `"javascript"` (default)
- `"coffeescript"`
- `"babel"`
- `"livescript"`
- `"typescript"`

> 你也可以在程式碼區塊中使用 `js`, `ts`, `coffee` 和 `ls`。

可用的 CSS 語言:

- `"css"` (default)
- `"less"`
- `"scss"`
- `"sass"`
- `"stylus"`

> 你也可以在程式碼區塊中使用 `styl`。

<!-- #endregion language -->

### 不支持的語言範例

<!-- #region demo -->

:::: md-demo

::: normal-demo 一個使用瀏覽器不支持解析語言 Demo

```md
# 標題

十分强大
```

```ts
const message: string = "VuePress Theme Hope";

document.querySelector("h1").innerHTML = message;
```

```scss
h1 {
  font-style: italic;

  + p {
    color: red;
  }
}
```

::::

<!-- #endregion demo -->
