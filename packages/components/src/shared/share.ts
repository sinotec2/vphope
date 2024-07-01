export type ShareAction = "open" | "navigate" | "popup" | "qrcode";

export type BuiltInShareService =
  | "buffer"
  | "douban"
  | "email"
  | "evernote"
  | "facebook"
  | "flipboard"
  | "line"
  | "linkedin"
  | "messenger"
  | "pinterest"
  | "qq"
  | "qrcode"
  | "qzone"
  | "reddit"
  | "skype"
  | "sms"
  | "snapchat"
  | "telegram"
  | "tumblr"
  | "twitter"
  | "vk"
  | "weibo"
  | "whatsapp"
  | "wordpress";

export type ShareServiceVariableName =
  | "title"
  | "description"
  | "url"
  | "excerpt"
  | "summary"
  | "tags"
  | "cover"
  | "image"
  | "twitterUserName";

export interface ShareServiceConfig {
  /**
   * Share link
   *
   * @description You can use `[` and `]` to wrap the variable name, and the variable will be replaced with the value of the page.:
   *
   * - `title` will be replaced with the title of the page
   * - `description` will be replaced with the description of the page
   * - `url` will be replaced with the url of the page
   * - `summary` will be replaced with the summary of the page
   * - `tags` will be replaced with the tags of the page
   * - `cover` will be replaced with the cover/banner of the page
   * - `image` will be replaced with the first image of the page
   *
   * 分享連結
   *
   * @description 你可以使用 `[` 和 `]` 包裹變量名，變量將會被替換為頁面的值：
   *
   * - `title` 將會被替換為頁面的標題
   * - `description` 將會被替換為頁面的描述
   * - `url` 將會被替換為頁面的連結
   * - `summary` 將會被替換為頁面的综述
   * - `tags` 將會被替換為頁面的標籤
   * - `cover` 將會被替換為頁面的封面
   * - `image` 將會被替換為頁面的第一张圖片
   */
  link: string;

  /**
   * Action of share button
   *
   * @description
   * - `open` will open the link in a new tab
   * - `navigate` will navigate to the link
   * - `popup` will open a popup window
   * - `qrcode` will show a QR code with link
   *
   * 分享按鈕的行為
   *
   * @description
   * - `open` 將會在新標籤頁打開連結
   * - `navigate` 將會跳轉到連結
   * - `popup` 將會打開一個弹窗
   * - `qrcode` 將會顯示一個二维碼
   *
   * @default "popup"
   */
  action?: ShareAction;

  /**
   * Theme color of icon
   *
   * 圖標的主題色
   *
   * @default 'currentColor'
   */
  color?: string;

  /**
   * Plain icon shape
   *
   * 纯色圖標的形狀
   */
  shape: string;

  /**
   * Colorful icon
   *
   * 彩色圖標
   */
  icon?: string;
}

export interface ShareServiceOptions extends ShareServiceConfig {
  /**
   * Service name
   *
   * 服務名稱
   */
  name: string;
}

export type ShareService = BuiltInShareService | ShareServiceOptions;
