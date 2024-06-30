import type { LocaleConfig } from "vuepress/shared";

import type {
  BackToTopLocaleData,
  PDFLocaleData,
  SiteInfoLocaleData,
  VidstackLocaleData,
} from "../../shared/index.js";

export interface ComponentLocaleOptions {
  /**
   * @deprecated Please use '@vuepress/plugin-back-to-top'
   *
   * BackToTop button Locales config
   *
   * 返回頂部按鈕國際化配置
   */
  backToTop?: LocaleConfig<BackToTopLocaleData>;

  /**
   * PDF Locales config
   *
   * PDF 元件國際化配置
   */
  pdf?: LocaleConfig<PDFLocaleData>;

  /**
   * SiteInfo Locales config
   *
   * 網站資訊 元件國際化配置
   */
  siteInfo?: LocaleConfig<SiteInfoLocaleData>;

  /**
   * VidStack Locales config
   *
   * VidStack 元件國際化配置
   */
  vidstack?: LocaleConfig<VidstackLocaleData>;
}
