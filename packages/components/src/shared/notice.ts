export interface NoticeActionOption {
  /**
   * Action text
   *
   * 操作文字
   */
  text: string;
  /**
   * Action link
   *
   * 操作連結
   */
  link?: string;
  /**
   * Action type
   *
   * 操作類型
   *
   * @default "default"
   */
  type?: "primary" | "default";
}

export interface NoticeItemOptions {
  /**
   * Notice title
   *
   * 通知標題
   */
  title: string;

  /**
   * Notice content
   *
   * 通知内容
   */
  content: string;

  /**
   * Notice key
   *
   * @description Used to identify and store the notice status
   *
   * Notice 的 key
   *
   * @description 用於標識和儲存 notice 的狀態
   */
  key?: string;

  /**
   * Whether show notice only once or show it in every visit
   *
   * 是否只顯示一次通知
   *
   * @default false
   */
  showOnce?: boolean;

  /**
   * Whether the notice shall be confirmed
   *
   * 通知是否需要確認
   *
   * @default false
   */
  confirm?: boolean;

  /**
   * Whether the notice should appear fullscreen
   *
   * 通知是否應該全螢幕顯示
   *
   * @default false
   */
  fullscreen?: boolean;

  /**
   * Notice actions
   *
   * 通知操作
   */
  actions?: NoticeActionOption[];
}

export type NoticeOptions = NoticeItemOptions &
  ({ path: string } | { match: RegExp });

export type NoticeClientOptions = Omit<NoticeItemOptions, "key"> & {
  noticeKey?: string;
} & ({ path: string } | { match: string });
