import type { LocaleConfig, Page } from "vuepress/core";

import type {
  SearchProCustomFieldFormatter,
  SearchProHotKeyOptions,
  SearchProLocaleData,
} from "../shared/index.js";

export interface SearchProIndexOptions {
  /**
   * Function to tokenize the index field item.
   *
   * 用於對索引字段項進行分詞的函數。
   */
  tokenize?: (text: string, fieldName?: string) => string[];
  /**
   * Function to process or normalize terms in the index field.
   *
   * 用於處理或規範索引字段中的術語的函數。
   */
  processTerm?: (term: string) => string | string[] | null | undefined | false;
}

export interface SearchProCustomFieldOptions {
  /**
   * Custom field getter
   *
   * 自定義項目的獲取器
   */
  getter: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>,
  ) => string[] | string | null | undefined;

  /**
   * Display content
   *
   * @description `$content` will be replaced by the content returned by `getter`
   *
   * 展示的内容
   *
   * @description `$content` 會被 `getter` 返回的内容替換
   *
   * @default `$content`
   */
  formatter?: SearchProCustomFieldFormatter;
}

export interface DeprecatedSearchProPluginOptions {
  /**
   * @deprecated use `indexContent` instead
   */
  fullIndex?: never;

  /**
   * @deprecated use `resultHistoryCount` instead
   */
  historyCount?: never;

  /**
   * @deprecated use `searchDelay` instead
   */
  delay?: never;
}

export interface SearchProPluginOptions
  extends DeprecatedSearchProPluginOptions {
  /**
   * Whether index page content
   *
   * @description By default only headings and excerpt of the page will be indexed, and the content of the page will not be indexed. If you need to index the content of the page, you can set this option to `true`
   *
   * 是否索引正文内容
   *
   * @description 內設情况下，只會索引頁面的標題和摘要，不會索引頁面的正文内容。如果需要索引頁面的正文内容，可以將該選項設置為 `true`
   *
   * @default false
   */
  indexContent?: boolean;

  /**
   * Whether provide auto suggestions while typing
   *
   * 是否在輸入時提供自動建議
   *
   * @default true
   */
  autoSuggestions?: boolean;

  /**
   * Max stored query history count
   *
   * @description You can set it to `0` to disable it
   *
   * 儲存查詢歷史的最大數量
   *
   * @description 可以將其設置為 `0` 來停用
   *
   * @default 5
   */
  queryHistoryCount?: number;

  /**
   * Max stored matched result history count
   *
   * @description You can set it to `0` to disable it
   *
   * 儲存結果歷史的最大數量
   *
   * @description 可以將其設置為 `0` 來停用
   *
   * @default 5
   */
  resultHistoryCount?: number;

  /**
   * Delay to start searching after input
   *
   * 結束輸入到開始搜索的延時
   *
   * @default 150
   */
  searchDelay?: number;

  /*
   * Delay to start auto-suggesting after input
   *
   * 結束輸入到開始自動建議的延時
   *
   * @default 0
   */
  suggestDelay?: number;

  /**
   * Custom field for search
   */
  customFields?: SearchProCustomFieldOptions[];

  /**
   * Specify the [event.key](http://keycode.info/) of the hotkeys
   *
   * @description When hotkeys are pressed, the search box input will be focused. Set to an empty array to disable hotkeys
   *
   * 指定熱鍵的 [event.key](http://keycode.info/)
   *
   * @description 當熱鍵被按下時，搜索框的輸入框會被聚焦，設置為空數組以停用熱鍵
   *
   * @default [
   *   { key: "k", ctrl: true },
   *   { key: "/", ctrl: true },
   *  ]
   */
  hotKeys?: SearchProHotKeyOptions[];

  /**
   * Output worker filename
   *
   * Worker 輸出文件名
   *
   * @default "search-pro.worker.js"
   */
  worker?: string;

  /**
   * Whether enable hmr
   *
   * 是否啟用 hmr
   *
   * @default false
   */
  hotReload?: boolean;

  /**
   * Locales config
   *
   * @see [default config](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/search-pro/src/node/locales.ts)
   *
   * 多語言選項
   *
   * @see [內設配置](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/search-pro/src/node/locales.ts)
   */
  locales?: LocaleConfig<SearchProLocaleData>;

  /**
   * Result Sort strategy
   *
   * @description When there are multiple matched results, the result will be sorted by the strategy. `max` means that page having higher total score will be placed in front. `total` means that page having higher max score will be placed in front.
   *
   * 結果排序策略
   *
   * @description 當有多個匹配的結果時，會按照策略對結果進行排序。`max` 表示最高分更高的頁面會排在前面。`total` 表示總分更高的頁面會排在前面
   *
   * @default "max"
   */
  sortStrategy?: "max" | "total";

  /**
   * Create Index option
   *
   * 創建索引選項
   */
  indexOptions?: SearchProIndexOptions;

  /**
   * Create Index option per locale
   *
   * 按語言的創建索引選項
   */
  indexLocaleOptions?: Record<string, SearchProIndexOptions>;

  /**
   * Filter pages to be indexed
   *
   * 過濾需要索引的頁面
   *
   * @param page Page
   * @returns whether the page should be indexed
   */
  filter?: (page: Page) => boolean;
}
