/**
 * Base link item, displayed as text
 */
export interface TextItemOptions {
  /**
   * Text of item
   *
   * 項目文字
   */
  text: string;

  /**
   * Icon of item
   *
   * 項目圖標
   */
  icon?: string;

  /**
   * Aria label of item
   *
   * 項目無障礙標籤
   */
  ariaLabel?: string;
}

/**
 * Props for `<AutoLink>`
 */
export interface AutoLinkOptions extends TextItemOptions {
  /**
   * Link of item
   *
   * 當前頁面連結
   */
  link: string;

  /**
   * Rel of `<a>` tag
   *
   * `<a>` 標籤的 `rel` 屬性
   */
  rel?: string;

  /**
   * Target of `<a>` tag
   *
   * `<a>` 標籤的 `target` 屬性
   */
  target?: string;

  /**
   * Regexp mode to be active
   *
   * 匹配激活的正則表達式
   */
  activeMatch?: string;
}
