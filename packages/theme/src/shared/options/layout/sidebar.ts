import type { ThemeNormalPageFrontmatter } from "../../frontmatter/index.js";
import type { ThemePageData } from "../../page.js";
import type { SidebarOptions } from "../../sidebar.js";

export interface SidebarFileInfo {
  type: "file";
  filename: string;

  title: string;
  order: number | null;
  path?: string | null;

  frontmatter: ThemeNormalPageFrontmatter;
  pageData: ThemePageData;
}

export interface SidebarDirInfo {
  type: "dir";
  dirname: string;
  children: SidebarInfo[];

  title: string;
  order: number | null;

  groupInfo: {
    icon?: string;
    collapsible?: boolean;
    link?: string;
  };

  frontmatter: ThemeNormalPageFrontmatter | null;
  pageData: ThemePageData | null;
}

export type SidebarInfo = SidebarFileInfo | SidebarDirInfo;

export type SidebarSorterKeyword =
  | "readme"
  | "order"
  | "date"
  | "date-desc"
  | "filename"
  | "title";

export type SidebarSorterFunction = (
  infoA: SidebarInfo,
  infoB: SidebarInfo,
) => number;

export type SidebarSorter =
  | SidebarSorterFunction
  | SidebarSorterFunction[]
  | SidebarSorterKeyword
  | SidebarSorterKeyword[];

export interface SidebarLocaleOptions {
  /**
   * Sidebar config
   *
   * @description Set to `false` to disable sidebar in current locale
   * @see https://theme-hope.vuejs.press/guide/layout/sidebar.html
   *
   * 側邊欄配置
   *
   * @description 設置為 `false` 以在當前語言中停用側邊欄
   * @see https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html
   */
  sidebar?: SidebarOptions;

  /**
   * Heading depth for sidebar and toc
   *
   * - Set to `0` to disable all levels
   * - Set to `1` to include `<h2>`
   * - Set to `2` to include `<h2>` and `<h3>`
   * - ...
   *
   * The max value depends on which headers you have extracted
   * via `markdown.headers.level`.
   *
   * The default value of `markdown.headers.level` is `[2, 3]`,
   * so the default max value of `headerDepth` is `2`
   *
   * 側邊欄和頁面目錄的標題深度
   *
   * - 設置 `0` 來停用所有級别的標題
   * - 設置 `1` 來包含 `<h2>`
   * - 設置 `2` 來包含 `<h2>` 和 `<h3>`
   * - ...
   *
   * `markdown.headers.level` 的內設值是 `[2, 3]`,
   * 所以 `headerDepth` 的內設最大值是 `2`
   *
   * @default 2
   */
  headerDepth?: number;
}
