/** @deprecated Please use '@vuepress/plugin-back-to-top' */
export interface BackToTopOptions {
  /**
   * Scroll threshold distance to display back to top button (in pixels)
   *
   * 滾動距離阈值，用於顯示返回頂部按鈕 (單位: 像素)
   *
   * @default 100
   */
  threshold?: number;

  /**
   * Whether display scroll progress
   *
   * 是否顯示滾動進度
   *
   * @default true
   */
  progress?: boolean;
}
