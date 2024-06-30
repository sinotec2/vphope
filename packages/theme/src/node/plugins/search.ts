import {
  entries,
  fromEntries,
  getLocaleConfig,
  getRootLangPath,
  isPlainObject,
  keys,
  startsWith,
} from "@vuepress/helper";
import type { DocsearchPluginOptions } from "@vuepress/plugin-docsearch";
import type { SearchPluginOptions } from "@vuepress/plugin-search";
import type { App, Page, Plugin } from "vuepress/core";
import { colors } from "vuepress/utils";
import type { SearchProPluginOptions } from "vuepress-plugin-search-pro";

import type {
  PluginsOptions,
  ThemeData,
  ThemePageFrontmatter,
} from "../../shared/index.js";
import { themeLocalesData } from "../locales/index.js";
import { logger } from "../utils.js";

let docsearchPlugin: (options: DocsearchPluginOptions) => Plugin;
let searchPlugin: (options: SearchPluginOptions) => Plugin;
let searchProPlugin: (options: SearchProPluginOptions) => Plugin;
let cut: (content: string, strict?: boolean | undefined) => string[];

try {
  ({ docsearchPlugin } = await import("@vuepress/plugin-docsearch"));
} catch (e) {
  // Do nothing
}

try {
  ({ searchPlugin } = await import("@vuepress/plugin-search"));
} catch (e) {
  // Do nothing
}

try {
  ({ searchProPlugin } = await import("vuepress-plugin-search-pro"));
  ({ cut } = await import("nodejs-jieba"));
} catch (e) {
  // Do nothing
}

const DOCSEARCH_ZH_LOCALES = {
  placeholder: "搜索文檔",
  translations: {
    button: {
      buttonText: "搜索文檔",
      buttonAriaLabel: "搜索文檔",
    },
    modal: {
      searchBox: {
        resetButtonTitle: "清除查詢條件",
        resetButtonAriaLabel: "清除查詢條件",
        cancelButtonText: "取消",
        cancelButtonAriaLabel: "取消",
      },
      startScreen: {
        recentSearchesTitle: "搜索歷史",
        noRecentSearchesText: "没有搜索歷史",
        saveRecentSearchButtonTitle: "保存至搜索歷史",
        removeRecentSearchButtonTitle: "從搜索歷史中移除",
        favoriteSearchesTitle: "收藏",
        removeFavoriteSearchButtonTitle: "從收藏中移除",
      },
      errorScreen: {
        titleText: "無法獲取結果",
        helpText: "你可能需要檢查你的網絡连接",
      },
      footer: {
        selectText: "選擇",
        navigateText: "切換",
        closeText: "關閉",
        searchByText: "搜索提供者",
      },
      noResultsScreen: {
        noResultsText: "無法找到相關結果",
        suggestedQueryText: "你可以嘗試查詢",
        reportMissingResultsText: "你認為該查詢應該有結果？",
        reportMissingResultsLinkText: "點擊反饋",
      },
    },
  },
};

const SEARCH_ZH_LOCALES = {
  placeholder: "搜索",
};

/**
 * @private
 *
 * Resolve options for @vuepress/plugin-docsearch, @vuepress/plugin-search and vuepress-plugin-search-pro
 */
export const getSearchPlugin = (
  app: App,
  themeData: ThemeData,
  plugins: PluginsOptions,
): Plugin | null => {
  const encryptedPaths = keys(themeData.encrypt.config ?? {});
  const isPageEncrypted = ({ path }: Page): boolean =>
    encryptedPaths.some((key) => startsWith(decodeURI(path), key));
  const { locales } = app.options;

  if (isPlainObject(plugins.docsearch)) {
    if (!docsearchPlugin) {
      logger.error(
        `${colors.cyan("@vuepress/plugin-docsearch")} is not installed!`,
      );

      return null;
    }

    return docsearchPlugin({
      locales: locales["/zh/"]
        ? { "/zh/": DOCSEARCH_ZH_LOCALES }
        : getRootLangPath(app) === "/zh/"
          ? // eslint-disable-next-line @typescript-eslint/naming-convention
            { "/": DOCSEARCH_ZH_LOCALES }
          : {},
      ...plugins.docsearch,
    });
  }

  if (plugins.searchPro) {
    if (!searchProPlugin) {
      logger.error(
        `${colors.cyan("vuepress-plugin-search-pro")} is not installed!`,
      );

      return null;
    }

    return searchProPlugin({
      indexContent: true,
      // Add supports for category and tags
      customFields: [
        {
          getter: (page: Page<Record<never, never>, ThemePageFrontmatter>) =>
            page.frontmatter.category,
          formatter: getLocaleConfig({
            app,
            name: "vuepress-theme-hope",
            default: fromEntries(
              entries(themeLocalesData).map(([localePath, config]) => [
                localePath,
                `${config.blogLocales.category}: $content`,
              ]),
            ),
          }),
        },
        {
          getter: (page: Page<Record<never, never>, ThemePageFrontmatter>) =>
            page.frontmatter.tag,
          formatter: getLocaleConfig({
            app,
            name: "vuepress-theme-hope",
            default: fromEntries(
              entries(themeLocalesData).map(([localePath, config]) => [
                localePath,
                `${config.blogLocales.tag}: $content`,
              ]),
            ),
          }),
        },
      ],
      filter: (page) => !isPageEncrypted(page),
      ...(cut
        ? {
            indexLocaleOptions: locales["/zh/"]
              ? {
                  "/zh/": {
                    tokenize: (text, fieldName) =>
                      fieldName === "id" ? [text] : cut(text, true),
                  },
                }
              : getRootLangPath(app) === "/zh/"
                ? {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    "/": {
                      tokenize: (text, fieldName) =>
                        fieldName === "id" ? [text] : cut(text, true),
                    },
                  }
                : {},
          }
        : {}),
      ...(isPlainObject(plugins.searchPro) ? plugins.searchPro : {}),
    });
  }

  if (plugins.search) {
    if (!searchPlugin) {
      logger.error(
        `${colors.cyan("@vuepress/plugin-search")} is not installed!`,
      );

      return null;
    }

    return searchPlugin({
      isSearchable: (page) => !isPageEncrypted(page),
      locales: locales["/zh/"]
        ? { "/zh/": SEARCH_ZH_LOCALES }
        : getRootLangPath(app) === "/zh/"
          ? // eslint-disable-next-line @typescript-eslint/naming-convention
            { "/": SEARCH_ZH_LOCALES }
          : {},
      ...(isPlainObject(plugins.search) ? plugins.search : {}),
    });
  }

  return null;
};
