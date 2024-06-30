---
title: Markdown 展示
icon: fab fa-markdown
order: 2
category:
  - 使用指引
tag:
  - Markdown
---

VuePress 主要從 Markdown 文件生成頁面。因此，你可以使用它輕鬆生成文檔或網誌網站。

你應該創建和編寫 Markdown 文件，以便 VuePress 可以根據文件結構將它們轉換為不同的頁面。

<!-- more -->

## Markdown 介紹

如果你是一個新手，還不會編寫 Markdown，請先閱讀 [Markdown 介紹](https://theme-hope.vuejs.press/zh/cookbook/markdown/) 和 [Markdown 範例](https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html)。

## Markdown 配置

VuePress 通過 Frontmatter 為每個 Markdown 頁面引入配置。

::: important Frontmatter

Frontmatter 是 VuePress 中很重要的一個概念，請閱讀 [Frontmatter 介紹](https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter) 了解詳情。

:::

## Markdown 擴展

VuePress 會使用 [markdown-it](https://github.com/markdown-it/markdown-it) 來解析 Markdown 内容，因此可以借助於 markdown-it 外掛程式來實現 [語法擴展](https://github.com/markdown-it/markdown-it#syntax-extensions) 。

### VuePress 擴展

為了豐富文檔寫作，VuePress 對 Markdown 語法進行了擴展。

關於這些擴展，請閱讀 [VuePress 中的 Markdown 擴展](https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html)。

### 主題擴展

通過 [`vuepress-plugin-md-enhance`][md-enhance]，主題擴展了更多 Markdown 語法，提供更加豐富的寫作功能。

#### 提示容器

::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定義標題

資訊容器，包含 `程式碼` 與 [連結](#提示容器)。

```js
const a = 1;
```

:::

::: tip 自定義標題

提示容器

:::

::: warning 自定義標題

警告容器

:::

::: caution 自定義標題

危险容器

:::

::: details 自定義標題

詳情容器

:::

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/hint.html)

#### 程式碼區塊

::: code-tabs

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html)

#### 上下標

19^th^ H~2~O

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html)

#### 自定義對齊

::: center

我是居中的

:::

::: right

我在右對齊

:::

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/align.html)

#### Attrs

一個擁有 ID 的 **單詞**{#word}。

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html)

#### 註解

此文字有註解[^first].

[^first]: 這是註解内容

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html)

#### 標記

你可以標記 ==重要的内容== 。

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/mark.html)

#### 任務列表

- [x] 計划 1
- [ ] 計划 2

[查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html)

### 圖片增强

支持為圖片設置顏色模式和大小

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/image.html)

#### 元件

```component VPCard
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
```

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/component.html)

#### 導入文件

<!-- @include: ./README.md{11-17} -->

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/include.html)

#### 樣式化

向 Mr.Hope 捐贈一杯咖啡。 _Recommended_

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html)

#### Tex 語法

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/tex.html)

#### 圖表

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/chartjs.html)

#### ECharts

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html)

#### 流程圖

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html)

#### MarkMap

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/markmap.html)

#### Mermaid

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html)

#### 程式碼範例

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/demo.html)

#### 互動範例

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/playground.html)

#### Kotlin 互動範例

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"/>

- [View Detail](https://theme-hope.vuejs.press/zh/guide/markdown/kotlin-playground.html)

#### Vue 互動範例

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html)

#### Sandpack 互動範例

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/sandpack.html)

#### 投影片

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html" width="100%" height="400"/>

- [查看詳情](https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html)

[md-enhance]: https://plugin-md-enhance.vuejs.press/zh/
