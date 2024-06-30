import type { ExactLocaleConfig } from "@vuepress/helper";
import type { DefaultLayoutTranslations } from "vidstack";

/** @deprecated Please use '@vuepress/plugin-back-to-top' */
export interface BackToTopLocaleData {
  /**
   * Back to top button label text
   *
   * 返回頂部文字
   */
  backToTop: string;
}

/** @deprecated Please use '@vuepress/plugin-back-to-top' */
export type BackToTopLocaleConfig = ExactLocaleConfig<BackToTopLocaleData>;

export interface PDFLocaleData {
  /**
   * PDF hint text
   *
   * @description Only used if the browser does not support embedding PDF and no PDFJS URL is provided.
   * [url] will be replaced by actual PDF link.
   *
   * PDF 提示文字
   *
   * @description 只有在瀏覽器不支持嵌入 PDF 且没有提供 PDFJS URL 時才會使用
   * [url] 會被實際 PDF 連結替換
   */
  hint: string;
}

export type PDFLocaleConfig = ExactLocaleConfig<PDFLocaleData>;

export interface SiteInfoLocaleData {
  /**
   * Source text
   *
   * 程式碼文字
   */
  source: string;
}

export type SiteInfoLocaleConfig = ExactLocaleConfig<SiteInfoLocaleData>;

export type VidstackLocaleData = Partial<DefaultLayoutTranslations>;

export type VidstackLocaleConfig = ExactLocaleConfig<VidstackLocaleData>;
