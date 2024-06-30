---
title: 主題外觀選項
icon: palette
order: 4
category:
  - 配置
tag:
  - 主題配置
  - 外觀
---

以下選項控制主題的外觀，一般情况下你無需關注他們，它們僅為有相關配置需求的少數用户提供。

<!-- more -->

::: warning

這些選項**僅支持在主題配置中直接配置**，而不支持在各語言中分别配置。

:::

## iconAssets <Badge text="僅限 Root" type="warning" />

- 類型: `FontIconAssets`

  ```ts
  type Link =
    | `/${string}`
    | `//${string}`
    | `http://${string}`
    | `https://${string}`;

  type BuiltInFontIcon = "iconify" | "fontawesome" | "fontawesome-with-brands";

  type FontIconAssets = BuiltInFontIcon | Link | (BuiltInFontIcon | Link)[];
  ```

- 必填: 否
- 詳情: [界面 → 圖標](../../guide/interface/icon.md)

字體圖標資源連結，支持 `'iconify'` `'fontawesome'` 和 `'fontawesome-with-brands'` 關鍵字。

## darkmode <Badge text="內設啟用" /> <Badge text="僅限 Root" type="warning" />

- 類型: `"switch" | "toggle" | "auto" | "enable" | "disable"`
- 內設值: `"switch"`
- 詳情: [界面 → 深色模式](../../guide/interface/darkmode.md)

深色模式支持選項:

- `"switch"`: 在深色模式，淺色模式和自動之間切換
- `"toggle"`: 在深色模式和淺色模式之間切換
- `"auto"`: 自動根據用户設備主題或當前時間决定是否應用深色模式
- `"enable"`: 强制深色模式
- `"disable"`: 停用深色模式

::: note

如果你不需要這項功能，請設置 `darkmode: "disable"` 將其停用。

:::

## fullscreen

- 類型: `boolean`
- 內設值: `false`
- 詳情: [界面 → 全螢幕按鈕](../../guide/interface/others.md#全螢幕按鈕)

是否顯示全螢幕按鈕。

## pure <Badge text="僅限 Root" type="warning" />

- 類型: `boolean`
- 內設值: `false`
- 詳情: [界面 → 纯净模式](../../guide/interface/pure.md)

是否開啟纯净模式。

::: tip

啟用此功能將停用一些花哨的樣式。

當你想提供“纯文檔網站”時很有用。

:::

## print <Badge text="僅限 Root" type="warning" />

- 類型: `boolean`
- 內設值: `true`

是否在桌面模式下顯示列印按鈕。

## iconPrefix <Badge text="僅限 Root" type="warning" />

- 類型: `string`
- 內設值: 嘗試從 iconAssets 推斷
- 詳情: [界面 → 圖標](../../guide/interface/icon.md)

通常情况下，它可以識别 iconAssets 並自動設置，如果識别失败，你可以手動設置圖標的 FontClass 前缀。
