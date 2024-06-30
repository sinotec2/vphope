---
title: VuePress
icon: fab fa-vuejs
dir:
  collapsible: false
  order: 2
category:
  - 教程
  - VuePress
tag:
  - 介紹
  - VuePress
prev: ../markdown/demo.html
---

VuePress 是一個以 Markdown 為中心的静態網站生成器。你可以使用 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 來書寫内容 (如文檔、網誌等) ，然後 VuePress 會幫助你生成一個静態網站來展示它們。

<!-- more -->

## VuePress 工作原理

一個 VuePress 網站本质上是一個由 [Vue](https://v3.vuejs.org/) 和 [Vue Router](https://next.router.vuejs.org) 驱動的單頁面應用 (SPA)。

路由會根據你的 Markdown 文件的相對路徑來自動生成。每個 Markdown 文件都通過 [markdown-it](https://github.com/markdown-it/markdown-it) 編譯為 HTML ，然後將其作為 Vue 元件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 語法，便於你嵌入一些動態内容。

- 在開發過程中，我們啟動一個常規的開發服務器 (dev-server) ，並將 VuePress 網站作為一個常規的 SPA。

- 在構建過程中，我們會為 VuePress 網站創建一個服務端渲染 (SSR) 的版本，然後通過虚拟訪問每一條路徑來渲染對應的 HTML。

## VuePress 介紹

- [頁面](page.md)

- [Markdown](markdown.md)

- [文件結構簡介](file.md)

- [配置](config.md)

- [外掛程式](plugin.md)

- [主題](theme.md)

## VuePress 官方文檔

- [VuePress](https://vuejs.press/zh/)
