import type { BackToTopOptions } from "./backToTop.js";
import type { NoticeOptions } from "../../shared/index.js";

export interface RootComponentOptions {
  /**
   * @deprecated Please use "@vuepress/plugin-back-to-top instead"
   *
   * Back to top button config
   *
   * 返回頂部按鈕配置
   */
  backToTop?: BackToTopOptions | boolean;

  /**
   * Global notice config
   *
   * 全面通知配置
   */
  notice?: NoticeOptions[];
}
