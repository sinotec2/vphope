import type { ExactLocaleConfig } from "@vuepress/helper";

/**
 * Multi language config for `vuepress-plugin-search-pro` plugin
 *
 * `vuepress-plugin-search-pro` 外掛程式的多語言配置
 */
export interface SearchProLocaleData {
  /**
   * Search box placeholder
   *
   * 搜索框占位符文字
   */
  placeholder: string;

  /**
   * Search text
   *
   * 搜素文字
   */
  search: string;

  /**
   * Searching text
   *
   * 搜素中文字
   */
  searching: string;

  /**
   * Cancel text
   *
   * 取消文字
   */
  cancel: string;

  /**
   * Default title
   *
   * 內設標題
   */
  defaultTitle: string;

  /**
   * Select hint
   *
   * 選擇提示
   */
  select: string;

  /**
   * Choose hint
   *
   * 選擇提示
   */
  navigate: string;

  /**
   * Autocomplete hint
   *
   * 自動補全提示
   */
  autocomplete: string;

  /**
   * Close hint
   *
   * 關閉提示
   */
  exit: string;

  /**
   * Loading hint
   *
   * 加載提示
   */
  loading: string;

  /**
   * Search query history title
   *
   * 搜索文字歷史 標題
   */
  queryHistory: string;

  /**
   * Search result history title
   *
   * 搜索結果歷史 標題
   */
  resultHistory: string;

  /**
   * Search history empty hint
   *
   * 無搜索歷史提示
   */
  emptyHistory: string;

  /**
   * Empty hint
   *
   * 無結果提示
   */
  emptyResult: string;
}

export type SearchProLocaleConfig = ExactLocaleConfig<SearchProLocaleData>;
