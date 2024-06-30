export interface HopeThemeBehaviorOptions {
  /**
   * Whether perform extra checks
   *
   * 是否執行額外檢查
   *
   * @default false
   */
  check?: boolean;

  /**
   * Whether compact with historical versions
   *
   * 是否兼容歷史版本
   *
   * @default false
   */
  compact?: boolean;

  /**
   * Whether enable customization
   *
   * 是否啟用自定義
   *
   * @default false
   */
  custom?: boolean;

  /**
   * Whether enable debug mode
   *
   * 是否啟用調試模式
   *
   * @default false
   */
  debug?: boolean;
}
