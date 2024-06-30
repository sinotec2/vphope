/**
 * LightGallery plugins
 */
export type LightGalleryPlugin =
  | "autoplay"
  | "fullscreen"
  | "pager"
  | "thumbnail"
  | "rotate"
  | "share"
  | "zoom";

/**
 * Options of plugin
 */
export interface LightGalleryPluginOptions {
  /**
   * Image selector
   *
   * 圖片選擇器
   *
   * @default ".theme-default-content :not(a) > img:not([no-view])"
   */
  selector?: string;

  /**
   * Light Gallery Plugins to enable
   *
   * 想要啟用的 Light Gallery 外掛程式。
   *
   * 可選值 / Optional Values:
   *
   * - "autoplay"
   * - "fullscreen"
   * - "pager"
   * - "thumbnail"
   * - "rotate"
   * - "share"
   * - "zoom"
   *
   * @default ["pager", "share", "zoom"]
   */

  plugins?: LightGalleryPlugin[];

  /**
   * The delay of lightgallery fetching page images, in ms.
   *
   * If the theme you are using has a switching animation, it is recommended to configure this option to `Switch animation duration + 200`.
   *
   * lightgallery 抓取頁面圖片的延時，單位 ms。
   *
   * 如果你使用的主題有切換動畫，建議配置此選項為 `切換動畫時長 + 200`。
   *
   * @default 800
   */
  delay?: number;
}
