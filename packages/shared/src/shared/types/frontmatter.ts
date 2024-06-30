import type { PageFrontmatter } from "vuepress/shared";

import type { Author } from "./author.js";

export interface BasePageFrontMatter extends PageFrontmatter {
  /**
   * Page icon
   *
   * 頁面圖標
   */
  icon?: string;

  /**
   * Page Author(s)
   *
   * 頁面作者
   */
  author?: Author | false;

  /**
   * Writing Date
   *
   * 寫作日期
   */
  date?: Date | string;

  /**
   * Page Category(ies)
   *
   * 頁面分類
   */
  category?: string | string[];
  categories?: string[];

  /**
   * Page Tag(s)
   *
   * 頁面標籤
   */
  tag?: string[] | string;
  tags?: string[];

  /**
   * Whether the content is original
   *
   * 是否原創
   */
  isOriginal?: boolean;

  /**
   * Whether the page is an article
   *
   * 頁面是否是文章
   */
  article?: boolean;

  /**
   * Page Cover
   *
   * 頁面封面
   */
  cover?: string;

  /**
   * Page Banner
   *
   * 頁面 Banner 圖
   */
  banner?: string;

  /**
   * Footer text
   *
   * 頁尾文字
   */
  footer?: string | boolean;

  /**
   * License text
   *
   * 協議文字
   */
  license?: string;

  /**
   * Copyright text
   *
   * 版權文字
   */
  copyright?: string | false;

  /**
   * Whether is home page
   *
   * 是否是主頁
   */
  home?: boolean;

  /**
   * @deprecated use `date` instead
   */
  time?: Date | string;
}
