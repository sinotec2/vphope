import type { Author } from "vuepress-shared";

export interface InfoOptions {
  /**
   * Site favicon
   *
   * 網站圖標
   */
  favicon?: string;

  /**
   * Global default author
   *
   * 全面內設作者
   */
  author?: Author;

  /**
   * Global default license
   *
   * 全面內設協議
   */
  license?: string;

  /**
   * Domain which to be deployed to
   *
   * 網站部署域名
   */
  hostname?: string;

  /**
   * Extra i18n sites
   *
   * @description key is the name of language, and value is the path of site, `:route` will be replaced by current route
   *
   * 額外的多語言網站
   *
   * @description 鍵是語言的名稱，值是網站的路徑，`:route` 會被替換為當前路由
   */
  extraLocales?: Record<string, string>;
}
