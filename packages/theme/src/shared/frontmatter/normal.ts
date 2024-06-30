import type { ThemePageFrontmatter } from "./base.js";
import type { PageInfoType } from "../info.js";
import type { AutoLinkOptions } from "../utils.js";

export interface ThemeNormalPageFrontmatter extends ThemePageFrontmatter {
  /**
   * Whether is homepage
   *
   * 是否是主頁
   */
  home?: false;

  /**
   * Whether index current page
   *
   * 是否索引此頁面
   *
   * @default true
   */
  index?: boolean;

  /**
   * Page order in sidebar
   *
   * 頁面在側邊欄的順序
   *
   * @default 0
   */
  order?: number;

  /**
   * Dir config
   *
   * @description Only available at README.md
   *
   * 目錄配置
   *
   * @description 僅在 README.md 中可用
   */
  dir?: {
    /**
     * Dir title
     *
     * @default title of README.md
     *
     * 目錄標題
     *
     * @default README.md 標題
     */
    text?: string;

    /**
     * Dir icon
     *
     * @default icon of README.md
     *
     * 目錄圖標
     *
     * @default README.md 圖標
     */
    icon?: string;

    /**
     * Whether Dir is collapsible
     *
     * 目錄是否可折叠
     *
     * @default true
     */

    collapsible?: boolean;

    /**
     * Whether Dir is clickable
     *
     * @description Will set group link to link of README.md
     *
     * 目錄是否可點擊
     *
     * @description 將會將目錄分組的連結設置為 README.md 對應的連結
     *
     * @default false
     */

    link?: boolean;

    /**
     * Whether index current dir
     *
     * 是否索引此目錄
     *
     * @default true
     */
    index?: boolean;

    /**
     * Dir order in sidebar
     *
     * 目錄在側邊欄中的順序
     *
     * @default 0
     */
    order?: number;
  };

  /**
   * A short title used in navbar, sidebar and breadcrumb
   *
   * 用於導航欄，側邊欄和路徑導航的短標題
   */
  shortTitle?: string;

  /**
   * Page Heading depth
   *
   * 頁面標題深度
   */
  headerDepth?: number;

  /**
   * Whether display lastUpdated time
   *
   * 是否顯示最後更新事件
   */

  lastUpdated?: boolean;

  /**
   * Whether display contributors
   *
   * 是否顯示貢獻者
   */
  contributors?: boolean;

  /**
   * Whether show Edit link
   *
   * 是否顯示編輯此頁連結
   */
  editLink?: boolean;

  /**
   * Previous page link
   *
   * 上一頁連結
   */
  prev?: string | AutoLinkOptions;

  /**
   * Next page link
   *
   * 下一頁連結
   */
  next?: string | AutoLinkOptions;

  /**
   * Whether show toc list in desktop mode
   *
   * 是否在桌面模式下展示標題列表
   */
  toc?: boolean;

  /**
   * PageInfo items
   *
   * 頁面資訊項
   *
   * @default ["Author", "Visitor", "Time", "Category", "Tag", "ReadTime"]
   */
  pageInfo?: PageInfoType[] | false;

  /**
   * Whether enable breadcrumb
   *
   * 是否啟用路徑導航
   */
  breadcrumb?: boolean;

  /**
   * Whether enable breadcrumb icon
   *
   * 是否啟用路徑導航圖標
   */
  breadcrumbIcon?: boolean;

  /**
   * Whether exclude current page in breadcrumb
   *
   * 是否在路徑導航中排除
   */
  breadcrumbExclude?: boolean;

  /**
   *
   * Whether enable pageviews
   *
   * @description Only available when using artalk or waline comment service
   *
   * 是否啟用訪問量
   *
   * @description 僅在使用 Artalk 或 Waline 評論服務時有效
   *
   * @default true
   */
  pageview?: boolean;

  /**
   * Whether this page is an article
   */
  article?: boolean;

  /**
   * Whether the article be sticky in list
   *
   * If a number fill in, greater number will appear in front
   *
   * 是否置頂，如果填入數字，更大值會出現在前面
   */
  sticky?: boolean | number;

  /**
   * Whether the article be stared
   *
   * If a number fill in, greater number will appear in front
   *
   * 是否標為星標，如果填入數字，更大值會出現在前面
   */
  star?: boolean | number;

  /**
   * Page excerpt
   *
   * 頁面的摘要
   */
  excerpt?: string;
}
