---
title: 投影片頁
icon: person-chalkboard
layout: Slide
---

<!-- markdownlint-disable MD024 MD051 -->

@slidestart

<!-- .slide: data-transition="slide" -->

## 投影片範例

<!-- .element: class="r-fit-text" -->

一個簡單的投影片範例與各種小提示。

<!-- .element: class="r-fit-text" -->

> 作者 Mr.Hope. 請滾動鼠標滾輪進入下一頁

---

## 標注投影片

<!-- .element: class="r-fit-text" -->

[👇](#/1/1)

--

## 標注投影片

<!-- .element: class="r-fit-text" -->

使用 `---` 標注水平投影片

<!-- .element: class="fragment fade-in" -->

在水平投影片中使用 `--` 分割垂直投影片

<!-- .element: class="fragment fade-in" -->

使用 `<!-- .slide: ... -->` 在投影片上增加屬性

<!-- .element: class="fragment fade-in" -->

使用 `<!-- .element: ... -->` 在前一個 HTML 元素上增加屬性

<!-- .element: class="fragment fade-in" -->

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Markdown

<!-- .element: class="r-fit-text" -->

你可以在投影片中使用 Markdown 語法的各種標記.

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在投影片中使用 Markdown 語法的各種標記.

### 這是一個 H3

標題內設會自動轉換為大寫。

這是一個有著 **粗體**, _斜體_, ~~删除線~~ 文字並包含 [一個連結](https://mister-hope.com) 的段落，並且它會自動換行。所以你無需擔心它的長度。

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在投影片中使用 Markdown 語法的各種標記.

列表內設為 `inline-block`

- 項目
- 項目
- 項目

1. 項目 1
1. 項目 2
1. 項目 3

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在投影片中使用 Markdown 語法的各種標記.

在你啟用 `highlight` 外掛程式後，程式碼區塊會自動高亮。

```js
const a = 1;
```

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在投影片中使用 Markdown 語法的各種標記.

在你啟用 `math` 外掛程式後，你也可以使用 TEX 格式使用數學公式。

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在投影片中使用 Markdown 語法的各種標記.

⚠**請注意**: 表格和分割線，以及所有不在 Markdown 標準語法中的内容均不受支持。

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## 布局

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate  -->

## 布局

<!-- .element: class="r-fit-text" -->

👆 `r-fit-text` class 會讓文字在不超出投影片範圍的情况下儘可能大。

--

<!-- .slide: data-auto-animate  -->

## 布局

![Logo](https://theme-hope-assets.vuejs.press/logo.svg)

<!-- .element: class="r-stretch" -->

👆 `r-stretch` class 幫助你控制注入圖片或視頻的大小，使它們填充满投影片垂直方向上的剩余空間。

--

<!-- .slide: data-auto-animate data-background-color="rgb(70, 70, 255)" -->

## 布局

### 背景

你可以通過向特定投影片增加 `data-background` 屬性自定義投影片背景.

---

<!-- .slide: data-auto-animate -->

## 動畫片段

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate -->

## 動畫片段

<!-- .element: class="r-fit-text" -->

動畫片段用於高亮或顯隱投影片中的元素。

你需要在元素上增加 `fragment` 和動畫 class。

--

<!-- .slide: data-auto-animate -->

## 動畫片段

### 動畫 class

- `fade-in`
<!-- .element: class="fragment fade-in" -->

- `fade-out`
<!-- .element: class="fragment fade-out" -->

- `fade-up`
<!-- .element: class="fragment fade-up" -->

<!-- list break -->

- `fade-down`
<!-- .element: class="fragment fade-down" -->

- `fade-left`
<!-- .element: class="fragment fade-left" -->

- `fade-right`
<!-- .element: class="fragment fade-right" -->

<!-- list break -->

- `fade-in-then-out`
<!-- .element: class="fragment fade-in-then-out" -->

- `fade-in-then-semi-out`
<!-- .element: class="fragment fade-in-then-semi-out" -->

--

<!-- .slide: data-auto-animate -->

## 動畫片段

### 動畫 class

- `grow`
<!-- .element: class="fragment grow" -->

- `shrink`
<!-- .element: class="fragment shrink" -->

- `strike`
<!-- .element: class="fragment strike" -->

<!-- list break -->

- `highlight-red`
<!-- .element: class="fragment highlight-red" -->

- `highlight-green`
<!-- .element: class="fragment highlight-green" -->

- `highlight-blue`
<!-- .element: class="fragment highlight-blue" -->

<!-- list break -->

- `highlight-current-red`
<!-- .element: class="fragment highlight-current-red" -->

- `highlight-current-green`
<!-- .element: class="fragment highlight-current-green" -->

- `highlight-current-blue`
<!-- .element: class="fragment highlight-current-blue" -->

--

<!-- .slide: data-auto-animate -->

## 動畫片段

### 多個動畫片段

你可以按照順序包裹一個 HTML 元素使其擁有多個動畫片段

<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out">
      渐入 > 變紅 > 渐出
    </span>
  </span>
</span>

--

<!-- .slide: data-auto-animate -->

## 動畫片段

### 順序

你可以使用 `data-fragment-index` 屬性改變元素的動畫順序。

不同元素可以有相同的動畫順序。

- 最後顯示
<!-- .element: class="fragment" data-fragment-index="3"-->

- 第二個顯示
<!-- .element: class="fragment" data-fragment-index="2"-->

<!-- list break -->

- 第一個顯示
<!-- .element: class="fragment" data-fragment-index="1"-->

- 第二個顯示
<!-- .element: class="fragment" data-fragment-index="2"-->

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## 渐變

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 渐變

<!-- .element: class="r-fit-text" -->

Transition 可以通過reveal.js 中的 `transition` 選項全面設置，也可以通過在特定投影片增加 `data-transition` 屬性局部設置.

可能的值:

- none
- fade
- slide

<!-- list break -->

- convex
- concave
- zoom

--

<!-- .slide: data-auto-animate -->

## 渐變

<!-- .element: class="r-fit-text" -->

### 過渡動畫

你可以在相邻的投影片上增加 `data-auto-animate` 使相同的 HTML 元素產生過渡動畫效果。

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 程式碼

通過啟用 `highlight` 外掛程式，你可以對程式碼區塊進行高亮。

你可以使用 `[a-b|c-d]` 語法來分布高亮特定行。

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = (x) => 1 + 2 + x;
c(3);
```

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 預覽模式

按下 `Esc` 或 `O` 即可在投影片獲得焦點時進入預覽模式。

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 全螢幕模式

按下 `F` 或 `F11` 即可在投影片獲得焦點時進入全螢幕模式。

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 縮放

按下 `alt` (Linux 上使用 `ctrl`) 的同時點擊投影片的任何元素，即可以向此元素進行放大。

再次點擊即可縮小。

---

<!-- .element: class="r-fit-text" -->

## 結束

@slideend
