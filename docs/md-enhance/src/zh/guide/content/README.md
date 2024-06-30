---
title: 内容
icon: pen
dir:
  collapsible: false
  order: 2
index: false
---

<!-- #region intro -->

此外掛程式提供以下方法來豐富您的内容。

- 元件: 快速創建元件
- 註解: 對關鍵内容做補充說明
- 導入文件: 輕鬆拆分或复用文件
- 投影片: 展示内容

<!-- #endregion intro -->

<!-- more -->

## 案例

<!-- #region demo -->

### 元件

```component VPCard
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
```

- [查看詳情](./component.md)

### 註解

此文字有註解[^first].

[^first]: 這是註解内容

- [查看詳情](./footnote.md)

### 導入文件

<!-- @include: ./demo.snippet.md{9-13} -->

- [查看詳情](./include.md)

### 投影片

@slidestart

## 投影片 1

一個有文字和 [連結](https://mister-hope.com) 的段落

---

## 投影片 2

- 項目 1
- 項目 2

---

## 投影片 3.1

```js
const a = 1;
```

--

## 投影片 3.2

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

@slideend

- [查看詳情](./revealjs/README.md)

### 選項卡

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

- [查看詳情](./tabs.md)

<!-- #endregion demo -->
