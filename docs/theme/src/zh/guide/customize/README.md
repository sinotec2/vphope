---
title: 自定義
icon: gear
dir:
  order: 8
category:
  - 教程
  - 自定義
tag:
  - 自定義
---

此章節向你範例常見的自定義需求涉及的相關程式碼。

<!-- more -->

## 自定義樣式的方式

你可以在自己文檔内的 `.vuepress/styles` 文件目錄下放置三個文件進行樣式配置。

- `index.scss`: 你可以在這裡通過 CSS 或 SCSS 語法放置自己的樣式以對主題的外觀進行自定義。

  填入的樣式會注入到主題和外掛程式樣式的後部。

- `config.scss`: 你可以在這裡設置一些樣式相關變量，包括響應式斷點、容器類名、程式碼主題等。

- `palette.scss`: 你可以在這裡設置一些顏色和布局的相關變量，比如主題色、背景色、導航欄高度等。

上述文件支持的完整配置列表詳見 [配置 → 樣式](../../config/style.md)。

## 基礎教程

- [自定義顏色](color.md)

- [自定義字體](font.md)

- [自定義特效](effect.md)

- [自定義布局](layout.md)

- [使用預設](presets.md)

- [增加外部脚本和樣式](external.md)

## 高級使用

- [客户端配置文件](../advanced/client.md)

- [替換主題元件](../advanced/replace.md)

- [主題继承](../advanced/extend.md)
