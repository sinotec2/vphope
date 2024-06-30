export interface RouteLocaleData {
  /**
   * Skip to main content
   */
  skipToContent: string;

  /**
   * 404 page title
   *
   * 404 頁面的標題
   */
  notFoundTitle: string;

  /**
   * 404 page msgs
   *
   * 404 頁面的提示資訊
   */
  notFoundMsg: string[];
  /**
   * Back to homepage
   *
   * 返回主頁
   */
  home: string;
  /**
   * Back to last page
   *
   * 返回上一頁
   */
  back: string;

  /**
   * Screen reader only message in `<ExternalLinkIcon>`
   *
   * 在 `<ExternalLinkIcon>` 中的屏幕閱讀器消息
   */
  openInNewWindow: string;
}
