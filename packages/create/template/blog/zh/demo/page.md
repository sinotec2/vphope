---
# 這是文章的標題
title: 頁面配置
# 你可以自定義封面圖片
cover: /assets/images/cover1.jpg
# 這是頁面的圖標
icon: file
# 這是側邊欄的順序
order: 3
# 設置作者
author: Ms.Hope
# 設置寫作時間
date: 2020-01-01
# 一個頁面可以有多個分類
category:
  - 使用指引
# 一個頁面可以有多個標籤
tag:
  - 頁面配置
  - 使用指引
# 此頁面會在文章列表置頂
sticky: true
# 此頁面會出現在星標文章中
star: true
# 你可以自定義頁尾
footer: 這是測試顯示的頁尾
# 你可以自定義版權資訊
copyright: 無版權
---

`more` 註解之前的内容被視為文章摘要。

<!-- more -->

## 頁面標題

The first H1 title in Markdown will be regarded as page title.

Markdown 中的第一個 H1 標題會被視為頁面標題。

你可以在 Markdown 的 Frontmatter 中設置頁面標題。

```md
---
title: 頁面標題
---
```

## 頁面資訊

你可以在 Markdown 的 Frontmatter 中設置頁面資訊。

- 作者設置為 Ms.Hope。
- 寫作日期為 2020 年 1 月 1 日
- 分類為 “使用指引”
- 標籤為 “頁面配置” 和 “使用指引”

## 頁面内容

你可以自由在這裡書寫你的 Markdown。

::: tip 圖片引入

- 你可以將圖片和 Markdown 文件放置在一起使用相對路徑進行引用。
- 對於 `.vuepress/public` 文件目錄的圖片，請使用絕對連結 `/` 進行引用。

:::

## 元件

每個 Markdown 頁面都會被轉換為一個 Vue 元件，這意味著你可以在 Markdown 中使用 Vue 語法：

{{ 1 + 1 }}

<!-- markdownlint-disable MD033 -->

<ul>
  <li v-for="i in 3">{{ i }}</li>
</ul>

<!-- markdownlint-enable MD033 -->

你也可以創建並引入你自己的元件。

<MyComponent />

<script setup>
import { defineComponent, h, ref } from 'vue';

const MyComponent = defineComponent({
  setup() {
    const input = ref('Hello world!');
    const onInput = (e) => {
      input.value = e.target.value;
    };

    return () => [
      h('p', [
        h('span','輸入: '),
        h('input', {
          value: input.value,
          onInput,
        }),
      ]),
      h('p', [h('span','輸出: '), input.value]),
    ];
  },
});
</script>

---

主題包含一些有用的元件。這裡是一些例子:

- 文字結尾應該有深藍色的 徽章文字 徽章。 <Badge text="徽章文字" color="#242378" />

- 一個卡片:

  ```component VPCard
  title: Mr.Hope
  desc: Where there is light, there is hope
  logo: https://mister-hope.com/logo.svg
  link: https://mister-hope.com
  background: rgba(253, 230, 138, 0.15)
  ```
