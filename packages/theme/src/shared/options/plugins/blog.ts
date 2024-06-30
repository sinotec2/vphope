import type { BlogPluginOptions, BlogTypeOptions } from "@vuepress/plugin-blog";

export interface BlogOptions
  extends Partial<
    Pick<
      BlogPluginOptions,
      | "excerptFilter"
      | "excerptLength"
      | "excerptSeparator"
      | "filter"
      | "slugify"
      | "hotReload"
    >
  > {
  /**
   * Path of article list
   *
   * 文章列表的路徑
   *
   * @default "/article/"
   */
  article?: string;

  /**
   * Path of category map
   *
   * 分類地圖頁的地址
   *
   * @default "/category/"
   */
  category?: string;

  /**
   * Path to navigate when clicking category label
   *
   * `:name` will be automatically replaced by current category name
   *
   * 點擊分類標籤時跳轉的路徑。
   *
   * 其中 `:name` 會被自動替換為當前分類名稱
   *
   * @default "/category/:name/"
   */
  categoryItem?: string;

  /**
   * Path of tag map
   *
   * 標籤地圖頁的地址
   *
   * @default "/tag/"
   */
  tag?: string;

  /**
   * Path to navigate when clicking tag label
   *
   * `:name` will be automatically replaced by current tag name
   *
   * 點擊標籤跳轉的路徑。
   *
   * 其中 `:name` 會被自動替換為當前分類名稱
   *
   * @default "/tag/:name/"
   */
  tagItem?: string;

  /**
   * Path of star article list
   *
   * 星標文章列表的路徑
   *
   * @default "/star/""
   */
  star?: string;

  /**
   * Path of timeline
   *
   * 時間線路徑
   *
   * @default "/timeline/"
   */
  timeline?: string;

  /**
   * Excerpt generation
   *
   * 摘要生成
   *
   * @default true
   */
  excerpt?: boolean;

  /**
   * Additional Article Type
   *
   * @description This is an advanced option, please refer to the [blog plugin documentation](https://ecosystem.vuejs.press/plugins/blog/) for details
   *
   * 額外的文章類型
   *
   * @description 這是一個高級選項，請參考 [blog 外掛程式文檔](https://ecosystem.vuejs.press/zh/plugins/blog/) 了解詳情
   *
   * @default []
   */
  type?: BlogTypeOptions[];
}
