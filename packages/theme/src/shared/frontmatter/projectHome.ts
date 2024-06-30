import type { ThemeHopePageFrontmatter } from "./home.js";

export interface ThemeProjectHomeActionOptions {
  /**
   * Action name
   *
   * 操作名稱
   */
  text: string;

  /**
   * Action link
   *
   * 操作連結
   */
  link: string;

  /**
   * Type of action
   *
   * 操作類型
   *
   * @default "default"
   */
  type?: "primary" | "default";

  /**
   * Action icon
   *
   * 操作圖標
   */
  icon?: string;
}

export interface ThemeProjectHomeHighlightItem {
  /**
   * Item name, supports HTML string
   *
   * 項目名稱，支持 HTML 字符串
   */
  title: string;

  /**
   * Item description, supports HTML string
   *
   * 項目描述，支持 HTML 字符串
   */
  details?: string;

  /**
   * Item icon
   *
   * @description image link or icon fontClass are supported
   *
   * 項目圖標
   *
   * @description 支持圖片連結或者圖標字體類
   */
  icon?: string;

  /**
   * Item link
   *
   * 項目連結
   */
  link?: string;
}

export type ThemeProjectHomeFeatureItem = ThemeProjectHomeHighlightItem;

export interface ThemeProjectHomeHighlightOptions {
  /**
   * Highlight section header, supports HTML string
   *
   * 亮點標題，支持 HTML 字符串
   */
  header: string;

  /**
   * Highlight section description, supports HTML string
   *
   * 亮點描述，支持 HTML 字符串
   */
  description?: string;

  /**
   * Text color
   *
   * 文字顏色
   */
  color?: string;

  /**
   * Highlight section image
   *
   * 亮點圖像
   */
  image?: string;

  /**
   * Highlight section image used in darkmode
   *
   * 夜間模式使用的亮點圖片
   *
   * @default image
   */
  imageDark?: string;

  /**
   * Highlight Background image
   *
   * 亮點背景圖
   */
  bgImage?: string;

  /**
   * Highlight Background image used in darkmode
   *
   * 夜間模式使用的亮點背景圖
   *
   * @default bgImage
   */
  bgImageDark?: string;

  /**
   * Highlight Background image style
   *
   * 亮點背景圖樣式
   */
  bgImageStyle?: Record<string, string> | string;

  /**
   * Highlight section list type
   *
   * 亮點列表類型
   *
   * @default un-order
   */
  type?: "order" | "un-order" | "no-order";

  /**
   * Highlights
   *
   * 亮點
   */
  highlights?: ThemeProjectHomeHighlightItem[];
}

export interface ThemeProjectHomeFeatureOptions {
  /**
   * Feature header
   *
   * 功能標題
   */
  header?: string;

  /**
   * Feature section description, supports HTML string
   *
   * 功能描述，支持 HTML 字符串
   */
  description?: string;

  /**
   * Text color
   *
   * 文字顏色
   */
  color?: string;

  /**
   * Feature section image
   *
   * 功能圖像
   */
  image?: string;

  /**
   * Feature section image used in darkmode
   *
   * 夜間模式使用的功能圖片
   *
   * @default image
   */
  imageDark?: string;

  /**
   * Feature Background image
   *
   * 功能背景圖
   */
  bgImage?: string;

  /**
   * Feature Background image used in darkmode
   *
   * 夜間模式使用的功能背景圖
   *
   * @default bgImage
   */
  bgImageDark?: string;

  /**
   * Feature Background image style
   *
   * 功能背景圖樣式
   */
  bgImageStyle?: Record<string, string> | string;

  /**
   * Features
   *
   * 功能
   */
  features: ThemeProjectHomeFeatureItem[];
}

export interface ThemeProjectHomePageFrontmatter
  extends ThemeHopePageFrontmatter {
  actions?: ThemeProjectHomeActionOptions[];
  features?: ThemeProjectHomeFeatureItem[];
  highlights?: (
    | ThemeProjectHomeFeatureOptions
    | ThemeProjectHomeHighlightOptions
  )[];
}
