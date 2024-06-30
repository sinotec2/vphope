import type { NavbarOptions } from "../../navbar.js";

export interface NavbarLocaleData {
  /**
   * Aria label of of the language selection dropdown
   *
   * 語言下拉列表的無障礙標籤
   */
  selectLangAriaLabel: string;

  /**
   * Language name of current locale
   *
   * 當前語言的名稱
   */
  langName: string;
}

/**
 * Navbar component
 *
 * 導航欄元件
 */
export type NavbarComponent =
  | "Brand"
  | "Links"
  | "Language"
  | "Search"
  | "Outlook"
  | "Repo";

/**
 * Navbar layout options
 *
 * 導航欄布局選項
 */
export interface NavbarLayoutOptions {
  start?: string[];
  center?: string[];
  end?: string[];
}

export interface NavbarLocaleOptions {
  /**
   * Navbar config
   *
   * @description Set to `false` to disable navbar in current locale
   *
   * @see https://theme-hope.vuejs.press/guide/layout/navbar.html
   *
   * 導航欄配置
   *
   * @description 設置 `false` 以在當前語言中停用導航欄
   *
   * @see https://theme-hope.vuejs.press/v2/zh/guide/layout/navbar.html
   */
  navbar?: NavbarOptions | false;

  /**
   * Navbar logo
   *
   * @description should be absolute path relative to `.vuepress/public` folder
   *
   * 導航欄圖標
   *
   * @description 應為基於 `.vuepress/public` 文件目錄的絕對路徑
   */
  logo?: string;

  /**
   * Navbar logo under darkmode
   *
   * @description should be absolute path relative to `.vuepress/public` folder
   *
   * 夜間模式下導航欄圖標
   *
   * @description 應為基於 `.vuepress/public` 文件目錄的絕對路徑
   */
  logoDark?: string;

  /**
   * Navbar title
   *
   * 導航欄標題
   *
   * @default $siteLocale.title
   */
  navbarTitle?: string;

  /**
   * Repository link
   *
   * 倉庫連結
   */
  repo?: string;

  /**
   * Whether display repo link in navbar.
   *
   * 是否在導航欄顯示倉庫連結。
   *
   * @default true
   */
  repoDisplay?: boolean;

  /**
   * Repository aria label of navbar
   *
   * 導航欄倉庫按鈕的無障礙標籤
   */
  repoLabel?: string;

  /**
   * Whether to hide navbar when scrolling down
   *
   * 是否在向下滾動時自動隱藏導航欄
   *
   * @default "mobile"
   */
  navbarAutoHide?: "always" | "mobile" | "none";

  /**
   * Navbar layout config
   *
   * 導航欄布局設置
   *
   * @default { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }
   */
  navbarLayout?: NavbarLayoutOptions;

  /**
   * Whether hide site title on mobile
   *
   * 是否在移動視圖下隱藏網站名稱
   *
   * @default true
   */
  hideSiteNameOnMobile?: boolean;
}
