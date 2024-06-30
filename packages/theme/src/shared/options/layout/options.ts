import type { FooterLocaleOptions } from "./footer.js";
import type { DocsRepoLocaleOptions } from "./info.js";
import type { MetaLocaleOptions, MetaLocateData } from "./meta.js";
import type { NavbarLocaleData, NavbarLocaleOptions } from "./navbar.js";
import type { RouteLocaleData } from "./route.js";
import type { SidebarLocaleOptions, SidebarSorter } from "./sidebar.js";
import type { PageInfoType } from "../../info.js";

export interface LayoutLocaleData {
  /**
   * Navbar related i18n config
   */
  navbarLocales: NavbarLocaleData;

  /**
   * Meta related i18n config
   */

  metaLocales: MetaLocateData;

  /**
   * Router related i18n config
   */
  routeLocales: RouteLocaleData;
}

export interface LayoutLocaleOptions
  extends NavbarLocaleOptions,
    SidebarLocaleOptions,
    DocsRepoLocaleOptions,
    MetaLocaleOptions,
    FooterLocaleOptions {
  /**
   * Home path of current locale
   *
   * @description Used as the link of back-to-home and navbar logo
   *
   * 當前語言的主頁路徑
   *
   * @description 用於導航欄圖標和返回主頁按鈕的連結
   */
  home?: string;

  /**
   * Whether enable breadcrumb globally
   *
   * 是否全面啟用路徑導航
   *
   * @default true
   */
  breadcrumb?: boolean;

  /**
   * Whether display icon in breadcrumb
   *
   * 是否在路徑導航顯示圖標
   *
   * @default true
   */
  breadcrumbIcon?: boolean;

  /**
   * Whether display icon besides page title
   *
   * 是否在頁面標題旁顯示圖標
   *
   * @default true
   */
  titleIcon?: boolean;

  /**
   * Article Info display configuration
   *
   * @see https://theme-hope.vuejs.press/guide/feature/page-info.html
   *
   * 文章資訊配置
   *
   * @see https://theme-hope.vuejs.press/zh/guide/feature/page-info.html
   *
   * @default ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"]
   */
  pageInfo?: PageInfoType[] | false;

  /**
   * Whether show toc list in desktop mode
   *
   * 是否在桌面模式下展示標題列表
   *
   * @default true
   */
  toc?: boolean;

  /**
   * Whether rtl layout should be used
   *
   * 是否使用 rtl 布局
   *
   * @default false
   */
  rtl?: boolean;

  /**
   * Whether display nextLink
   *
   * 是否顯示 下一篇 連結
   *
   * @default true
   */
  nextLink?: boolean;

  /**
   * Whether display prevLink
   *
   * 是否顯示 上一篇 連結
   *
   * @default true
   */
  prevLink?: boolean;
}

export type LayoutLocaleConfig = LayoutLocaleOptions;

/**
 * @kind root
 */
export interface LayoutOptions {
  /**
   * Sorter of structure sidebar
   *
   * 結構化側邊欄排序器
   *
   * @default ["readme", "index", "title", "filename"]
   */
  sidebarSorter?: SidebarSorter;
}
