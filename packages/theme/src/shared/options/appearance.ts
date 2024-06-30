import type { FontIconAssets } from "vuepress-plugin-components";

export type DarkmodeOptions =
  | "switch"
  | "auto"
  | "toggle"
  | "enable"
  | "disable";

export interface OutlookLocaleData {
  /**
   * Theme Color
   */
  themeColor: string;

  /**
   * Theme mode
   */
  darkmode: string;

  /**
   * Theme mode
   */
  fullscreen: string;
}

export interface AppearanceLocaleData {
  outlookLocales: {
    /**
     * Theme Color
     *
     * 主題色
     */
    themeColor: string;

    /**
     * Theme mode
     *
     * 夜間模式
     */
    darkmode: string;

    /**
     * Fullscreen text
     *
     * 全螢幕文字
     */
    fullscreen: string;
  };
}

/**
 * @kind root
 */
export interface AppearanceOptions {
  /**
   * Whether enable pure mode
   *
   * 是否開啟纯净模式
   *
   * @default false
   */
  pure?: boolean;

  /**
   * Dark mode support options:
   *
   * - `"switch"`: switch between dark, light and auto (default)
   * - `"toggle"`: toggle between lightmode and darkmode
   * - `"auto"`: Automatically decide whether to apply dark mode based on user device’s color-scheme or current time
   * - `"enable"`: only dark mode
   * - `"disable"`: disable dark mode
   *
   * 深色模式支持選項:
   *
   * - `"switch"`: 在深色模式，淺色模式和自動之間切換 (內設)
   * - `"toggle"`: 在深色模式和淺色模式之間切換
   * - `"auto"`: 自動根據用户設備主題或當前時間决定是否應用深色模式
   * - `"enable"`: 强制深色模式
   * - `"disable"`: 停用深色模式
   *
   * @default "auto-switch"
   */
  darkmode?: DarkmodeOptions;

  /**
   * Whether enable theme color picker
   *
   * 是否啟用主題色選擇器
   *
   * @default false
   */
  themeColor?: boolean;

  /**
   * Whether display print button in desktop mode
   *
   * 是否在桌面模式下顯示列印按鈕
   *
   * @default true
   */
  print?: boolean;

  /**
   * Full screen button
   *
   * 全螢幕按鈕
   *
   * @default false
   */
  fullscreen?: boolean;

  /**
   * Link of font icon asset
   *
   * 字體圖標資源連結
   *
   * @description `"iconify"`, `"fontawesome"` and `"fontawesome-with-brands"` keywords are supported
   */
  iconAssets?: FontIconAssets;

  /**
   * Font Icon class prefix
   *
   * 字體圖標 class 前缀
   *
   * @default ""
   */
  iconPrefix?: string;
}

export type AppearanceConfig = AppearanceOptions;
