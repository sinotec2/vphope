export interface EncryptLocaleData {
  /**
   * Aria label for encrypt icon
   *
   * 加密圖標的無障礙標籤
   */
  iconLabel: string;

  /**
   * Password placeholder
   *
   * 密碼輸入框的內設占位符
   */
  placeholder: string;

  /**
   * Whether remember password
   *
   * 是否記忆密碼
   */
  remember: string;

  /**
   * Password error hint
   *
   * 密碼錯誤提示
   */
  errorHint: string;
}

/**
 * Encrypt Options
 *
 * 加密選項
 *
 * @kind root
 */
export interface EncryptOptions {
  /**
   * Whether encrypt globally
   *
   * 是否全面加密
   *
   * @default false
   */
  global?: boolean;

  /**
   * Admin passwords, which has the highest authority
   *
   * 最高權限密碼
   */
  admin?: string | string[];
  /**
   * Encrypt Configuration
   *
   * @example
   *
   * ```json
   * {
   *   // This will encrypt the entire guide directory and both passwords will be available
   *   "/guide/": ["1234", "5678"],
   *   // this will only encrypt /config/page.html
   *   "/config/page.html": "1234"
   * }
   * ```
   *
   * 加密配置
   *
   * @example
   *
   * ```json
   * {
   *   // 這會加密整個 guide 目錄，並且兩個密碼都是可用的
   *   "/guide/": ["1234", "5678"],
   *   // 這只會加密 /config/page.html
   *   "/config/page.html": "1234"
   * }
   * ```
   */
  config?: Record<string, string | string[]>;
}

/**
 * Encrypt Config
 *
 * 加密配置
 *
 * @kind root
 */
export interface EncryptConfig {
  /**
   * Whether encrypt globally
   *
   * 是否全面加密
   *
   * @default false
   */
  global?: boolean;

  /**
   * Admin passwords, which has the highest authority
   *
   * 最高權限密碼
   */
  admin?: string[];

  /**
   * Encrypt Configuration
   *
   * 加密配置
   */
  config?: Record<string, string[]>;
}
