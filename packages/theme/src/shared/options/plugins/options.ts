import type { BackToTopPluginOptions } from "@vuepress/plugin-back-to-top";
import type { CatalogPluginOptions } from "@vuepress/plugin-catalog";
import type { CommentPluginOptions } from "@vuepress/plugin-comment";
import type { CopyCodePluginOptions } from "@vuepress/plugin-copy-code";
import type { CopyrightPluginOptions } from "@vuepress/plugin-copyright";
import type { DocsearchPluginOptions } from "@vuepress/plugin-docsearch";
import type { FeedPluginOptions } from "@vuepress/plugin-feed";
import type { GitPluginOptions } from "@vuepress/plugin-git";
import type { LinksCheckPluginOptions } from "@vuepress/plugin-links-check";
import type { PhotoSwipePluginOptions } from "@vuepress/plugin-photo-swipe";
import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
import type { ReadingTimePluginOptions } from "@vuepress/plugin-reading-time";
import type { RedirectPluginOptions } from "@vuepress/plugin-redirect";
import type { SearchPluginOptions } from "@vuepress/plugin-search";
import type { SeoPluginOptions } from "@vuepress/plugin-seo";
import type { SitemapPluginOptions } from "@vuepress/plugin-sitemap";
import type { ComponentPluginOptions } from "vuepress-plugin-components";
import type { MarkdownEnhancePluginOptions } from "vuepress-plugin-md-enhance";
import type { SearchProPluginOptions } from "vuepress-plugin-search-pro";

import type { BlogOptions } from "./blog.js";
import type { PrismjsOptions } from "./prism.js";

export interface PluginsOptions {
  /**
   * Enable @vuepress/active-header-links or not
   *
   * @see https://ecosystem.vuejs.press/plugins/active-header-links.html
   *
   * 是否啟用 @vuepress/active-header-links 外掛程式
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/active-header-links.html
   *
   * @default true
   */
  activeHeaderLinks?: boolean;

  /**
   * Options for @vuepress/back-to-top
   *
   * @see https://ecosystem.vuejs.press/plugins/back-to-top.html
   *
   * 返回頂部外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/back-to-top.html
   */
  backToTop?: BackToTopPluginOptions | boolean;

  /**
   * Blog plugin options
   *
   * 網誌外掛程式選項
   *
   * @default false
   */
  blog?: BlogOptions | boolean;

  /**
   * Options for @vuepress/catalog
   *
   * @see https://ecosystem.vuejs.press/plugins/catalog.html
   *
   * 自動目錄外掛程式選項
   *
   * @see https://ecosystem.vuejs.press/plugins/catalog.html
   *
   * @default true
   */
  catalog?: CatalogPluginOptions | boolean;

  /**
   * Components enabled
   *
   * @description FontIcon is used internally, so it will be registered anyway.
   *
   * @see https://plugin-components.vuejs.press/config.html
   *
   * 需要啟用的外掛程式
   *
   * @description FontIcon 被内部使用，所以它無論如何都會被註冊。
   *
   * @see https://plugin-components.vuejs.press/zh/config.html
   */
  components?: ComponentPluginOptions;

  /**
   * Comment plugin options
   *
   * @see https://ecosystem.vuejs.press/plugins/comment/
   *
   * 評論外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/comment/
   */
  comment?: CommentPluginOptions | false;

  /**
   * Options for @vuepress/copy-code
   *
   * @see https://ecosystem.vuejs.press/plugins/copy-code.html
   *
   * 程式碼複製外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/copy-code.html
   */
  copyCode?: CopyCodePluginOptions | boolean;

  /**
   * Options for @vuepress/copyright
   *
   * @see https://ecosystem.vuejs.press/plugins/copyright.html
   *
   * 版權資訊外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/copyright.html
   *
   * @default false
   */
  copyright?: CopyrightPluginOptions | boolean;

  /**
   * Options for @vuepress/docsearch
   *
   * @see https://ecosystem.vuejs.press/plugins/docsearch.html
   *
   * @vuepress/docsearch 選項
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/docsearch.html
   */
  docsearch?: DocsearchPluginOptions;

  /**
   * Enable @vuepress/external-link-icon or not
   *
   * @see https://ecosystem.vuejs.press/plugins/external-link-icon.html
   *
   * 是否啟用 @vuepress/external-link-icon 外掛程式
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/external-link-icon.html
   *
   * @default true
   */
  externalLinkIcon?: boolean;

  /**
   * Feed plugin options
   *
   * @see https://ecosystem.vuejs.press/plugins/feed/config.html
   *
   * Feed 外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/feed/config.html
   */
  feed?: Omit<FeedPluginOptions, "hostname"> | boolean;

  /**
   * Options for @vuepress/git
   *
   * @description By default this plugin is only enabled in production mode for performance reasons.
   *
   * @see https://ecosystem.vuejs.press/plugins/git.html
   *
   * Git 外掛程式配置
   *
   * @description 內設情况下，出於性能原因，此外掛程式僅在生產模式下啟用。
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/git.html
   */
  git?: GitPluginOptions | boolean;

  /**
   * Options for @vuepress/links-check
   *
   * @see https://ecosystem.vuejs.press/plugins/links-check.html
   *
   * @vuepress/links-check 外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/links-check.html
   */
  linksCheck?: LinksCheckPluginOptions | boolean;

  /**
   * md-enhance plugin options
   *
   * @see https://plugin-md-enhance.vuejs.press/config/
   *
   * md-enhance 外掛程式配置
   *
   * @see https://plugin-md-enhance.vuejs.press/zh/config/
   */
  mdEnhance?:
    | (Omit<MarkdownEnhancePluginOptions, "hint"> & {
        /**
         * Whether to enable hint container including
         *
         * - important
         * - info
         * - note
         * - tip
         * - warning
         * - caution
         * - details
         *
         * 是否啟用提示容器
         *
         * - important
         * - info
         * - note
         * - tip
         * - warning
         * - caution
         * - details
         *
         * @default true
         */
        hint?: boolean;
      })
    | false;

  /**
   * Enable @vuepress/nprogress or not
   *
   * 是否啟用 @vuepress/nprogress 外掛程式
   *
   * @default true
   */
  nprogress?: boolean;

  /**
   * Photo Swipe plugin options
   *
   * @description This plugin is enabled by default
   *
   * @see https://ecosystem.vuejs.press/plugins/photo-swipe.html
   *
   * 圖片預覽外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/photo-swipe.html
   *
   * @default true
   */
  photoSwipe?: PhotoSwipePluginOptions | boolean;

  /**
   * Enable @vuepress/prismjs or not
   *
   * @see https://ecosystem.vuejs.press/plugins/prismjs.html
   *
   * 是否啟用 @vuepress/prismjs 外掛程式
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/prismjs.html
   *
   * @default true
   */
  prismjs?: PrismjsOptions | boolean;

  /**
   * PWA plugin options
   *
   * @see https://ecosystem.vuejs.press/plugins/pwa/config.html
   *
   * PWA 外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/pwa/config.html
   *
   * @default false
   */
  pwa?: PwaPluginOptions | boolean;

  /**
   * ReadingTime options
   *
   * @see https://ecosystem.vuejs.press/plugins/reading-time.html
   *
   * 閱讀時間外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/reading-time.html
   *
   * @default true
   */
  readingTime?: ReadingTimePluginOptions | boolean;

  /**
   * Redirect options
   *
   * @see https://ecosystem.vuejs.press/plugins/redirect.html
   *
   * 重定向外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/redirect.html
   */
  redirect?: RedirectPluginOptions | boolean;

  /**
   * @vuepress/search plugin options
   *
   * @see https://ecosystem.vuejs.press/plugins/search.html
   *
   * @vuepress/search 外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/search.html
   */
  search?: SearchPluginOptions | boolean;

  /**
   * search-pro plugin options
   *
   * @see https://plugin-search-pro.vuejs.press/config/
   *
   * search-pro 外掛程式配置
   *
   * @see https://plugin-search-pro.vuejs.press/zh/config/
   */
  searchPro?: SearchProPluginOptions | boolean;

  /**
   * Options for @vuepress/seo
   *
   * @see https://ecosystem.vuejs.press/plugins/seo/config.html
   *
   * SEO 外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/seo/config.html
   *
   * @default true
   */
  seo?: Omit<SeoPluginOptions, "hostname" | "author"> | boolean;

  /**
   * Options for @vuepress/sitemap
   *
   * @see https://ecosystem.vuejs.press/plugins/sitemap/config.html
   *
   * Sitemap 外掛程式配置
   *
   * @see https://ecosystem.vuejs.press/zh/plugins/sitemap/config.html
   *
   * @default true
   */
  sitemap?: Omit<SitemapPluginOptions, "hostname"> | boolean;
}
