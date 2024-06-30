import type { BasePageFrontMatter } from "vuepress-shared";

export interface ThemePageFrontmatter extends BasePageFrontMatter {
  /**
   * Whether is home page
   *
   * 是否是主頁
   */

  home?: boolean;

  /**
   * Whether enable navbar
   *
   * 是否啟用導航欄
   */
  navbar?: boolean;

  /**
   * Sidebar configuration
   *
   * 側邊欄配置
   */
  sidebar?: false;

  /**
   * Additional Class for Page container
   *
   * 頁面容器的額外類名
   */
  containerClass?: string;
}
