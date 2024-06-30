/**
 * 頁尾選項
 *
 * Footer options
 */
export interface FooterLocaleOptions {
  /**
   * The default content for the footer, supports HTMLString.
   *
   * 頁尾的內設内容，支持 HTMLString
   */
  footer?: string;

  /**
   * The default copyright info, set it to `false` to disable it by default.
   *
   * 內設的版權資訊，設置為 `false` 來內設停用它
   */
  copyright?: string | false;

  /**
   * Whether to display footer by default
   *
   * 是否內設顯示頁尾
   *
   * @default false
   */
  displayFooter?: boolean;
}
