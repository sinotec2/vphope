export interface MetaLocateData {
  /**
   * Author label text
   *
   * 作者文字
   */
  author: string;

  /**
   * Writing date label text
   *
   * 寫作日期文字
   */
  date: string;

  /**
   * Label text marked as original
   *
   * 標記原創的文字
   */
  origin: string;

  /**
   * Page views label text
   *
   * 訪問量文字
   */
  views: string;

  /**
   * Tag label text
   *
   * 標籤文字
   */
  tag: string;

  /**
   * Category label text
   *
   * 分類文字
   */
  category: string;

  /**
   * Expect reading time label text
   *
   * 期望閱讀時間文字
   */
  readingTime: string;

  /**
   * Words label Text
   *
   * 文章字數
   */
  words: string;

  /**
   * Table of contents
   *
   * 此頁内容
   */
  toc: string;

  /**
   * Previous link
   *
   * 上一頁
   */
  prev: string;

  /**
   * Next link
   *
   * 下一頁
   */
  next: string;

  /**
   * Last updated Text
   *
   * 最後更新時間
   */
  lastUpdated: string;

  /**
   * Contributors text
   *
   * 貢獻者
   */
  contributors: string;

  /**
   * Edit link text
   *
   * 編輯此頁
   */
  editLink: string;

  /**
   * Print button
   *
   * 列印按鈕
   */
  print: string;
}

export interface MetaLocaleOptions {
  /**
   * Whether to show "Last Updated" or not
   *
   * 是否顯示頁面最後更新時間
   *
   * @default true
   */
  lastUpdated?: boolean;

  /**
   * Whether to show "Contributors" or not
   *
   * 是否顯示頁面貢獻者
   *
   * @default true
   */
  contributors?: boolean;

  /**
   * Whether to show "Edit this page" or not
   *
   * 是否展示編輯此頁連結
   *
   * @default true
   */
  editLink?: boolean;
}
