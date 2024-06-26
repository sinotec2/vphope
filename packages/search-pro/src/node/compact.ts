import { createConverter } from "vuepress-shared/node";

import type { SearchProPluginOptions } from "./options.js";

/** @deprecated */
export const convertOptions = (
  options: SearchProPluginOptions & Record<string, unknown>,
): void => {
  const { deprecatedLogger } = createConverter("search-pro");

  deprecatedLogger({
    options,
    old: "fullIndex",
    new: "indexContent",
  });
  deprecatedLogger({
    options,
    old: "historyCount",
    new: "resultHistoryCount",
  });
  deprecatedLogger({
    options,
    old: "delay",
    new: "searchDelay",
  });
};
