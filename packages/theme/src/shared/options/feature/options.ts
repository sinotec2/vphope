import type {
  BlogLocaleConfig,
  BlogLocaleData,
  BlogLocaleOptions,
  PaginationLocaleData,
} from "./blog.js";
import type {
  EncryptConfig,
  EncryptLocaleData,
  EncryptOptions,
} from "./encrypt.js";

export interface FeatureLocaleData {
  /**
   * Blog related i18n config
   *
   * 網誌相關多語言配置
   */
  blogLocales: BlogLocaleData;

  /**
   * Pagination related i18n config
   *
   * 分頁相關多語言配置
   */
  paginationLocales: PaginationLocaleData;

  /**
   * Encrypt related i18n config
   *
   * 加密相關多語言配置
   */
  encryptLocales: EncryptLocaleData;
}

export interface FeatureLocaleOptions {
  /**
   * Blog feature options
   *
   * 網誌功能配置
   */
  blog?: BlogLocaleOptions;
}

export interface FeatureLocaleConfig {
  blog?: BlogLocaleConfig;
}

/**
 * @kind root
 */
export interface FeatureOptions {
  /**
   * Encrypt config
   *
   * 加密配置
   */
  encrypt?: EncryptOptions;

  /**
   * Whether enable hotReload for features that requires app to restart
   *
   * @description These features includes blog support and structure sidebar feature
   *
   * 是否為需要重啟整個 app 的功能啟用熱更新
   *
   * @description 這些功能包括網誌支持和結構側邊欄功能
   *
   * @default app.env.isDebug
   */
  hotReload?: boolean;
}

// For config size consideration, blog options can be held in root and merged in client side
export interface FeatureConfig extends FeatureLocaleConfig {
  /**
   * Encrypt config
   *
   * 加密配置
   */
  encrypt: EncryptConfig;
}
