import type { PageInfoType } from "../../info.js";

export interface BlogLocaleData extends Record<string, string> {
  /** 文章文字 */
  article: string;
  /** 文章列表文字 */
  articleList: string;
  /** 分類文字 */
  category: string;
  /** 標籤文字 */
  tag: string;
  /** 時間軸文字 */
  timeline: string;
  /** 時間軸標題文字 */
  timelineTitle: string;
  /** 全部文字 */
  all: string;
  /** 個人介紹 */
  intro: string;
  /** 星標文章 */
  star: string;
  /** 空文字 */
  empty: string;
}

export interface PaginationLocaleData {
  /**
   * Previous page button label text
   *
   * 上一頁文字
   */
  prev: string;

  /**
   * Next page button label text
   *
   * 下一頁文字
   */
  next: string;

  /**
   * Navigation hint label text
   *
   * 跳轉提示文字
   */
  navigate: string;

  /**
   * Navigation button label text
   *
   * 跳轉按鈕文字
   */
  action: string;

  /**
   * Error text when invalid page number
   *
   * @description `$page` will be replaced by total page number automatically
   *
   * 頁碼錯誤文字
   *
   * @description 其中 `$page` 會自動替換為當前的總頁數
   */
  errorText: string;
}

/**
 * 網誌選項
 *
 * Blog configuration
 *
 * @kind locale
 */
export interface BlogLocaleOptions {
  /**
   * Name of the Blogger
   *
   * 部落客名稱
   *
   * @default themeConfig.author
   */
  name?: string;

  /**
   * Blogger avatar, must be an absolute path
   *
   * 部落客頭像，應為絕對路徑
   *
   * @default themeConfig.navbar.logo
   */
  avatar?: string;

  /**
   * Motto, slogan or a short description
   *
   * 口號、座右銘或介紹語
   */
  description?: string;

  /**
   * Blogger introduction page link
   *
   * 部落客的個人介紹頁地址
   */
  intro?: string;

  /**
   * 媒體連結配置
   *
   * Media links configuration
   *
   * @example
   *
   * ```js
   * {
   *   QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
   *   Qzone: "https://1178522294.qzone.qq.com/",
   *   Gmail: "mailto:mister-hope@outlook.com",
   *   Zhihu: "https://www.zhihu.com/people/mister-hope",
   *   Steam: "https://steamcommunity.com/id/Mr-Hope/",
   *   Weibo: "https://weibo.com/misterhope",
   * }
   * ```
   */
  medias?: Record<string, [string, string] | string>;

  /**
   * Whether to display blogger info in sidebar
   *
   * 是否在側邊欄展示部落客資訊
   *
   * @default "mobile"
   */
  sidebarDisplay?: "mobile" | "none" | "always";

  /**
   * Custom text for timeline
   *
   * 時間軸自定義文字
   *
   * @default "Yesterday once more"
   */
  timeline?: string;

  /**
   * Article number per page
   *
   * 每頁的文章數量
   *
   * @default 10
   */
  articlePerPage?: number;

  /**
   * Article info displayed in article list
   *
   * 文章列表中展示的文章資訊
   *
   * @default ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"]
   */
  articleInfo?: PageInfoType[];
}

export interface BlogLocaleConfig extends Omit<BlogLocaleOptions, "media"> {
  medias?: Record<string, string>;
}
