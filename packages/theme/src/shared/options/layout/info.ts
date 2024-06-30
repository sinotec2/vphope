export interface DocsRepoLocaleOptions {
  /**
   * Pattern of edit link, we provide built-in support for GitHub, Gitlab, Gitee, Bitbucket
   *
   * 編輯連結的匹配，我們已經為 GitHub、Gitlab、Gitee 和 Bitbucket 提供了内置支持
   *
   * @example ":repo/edit/:branch/:path"
   */
  editLinkPattern?: string;

  /**
   * The repo of your docs
   *
   * 文檔倉庫
   *
   * @default themeConfig.repo
   */
  docsRepo?: string;

  /**
   * The branch of your docs
   *
   * 文檔所在分支
   *
   * @default "main"
   */
  docsBranch?: string;

  /**
   * Docs dir location in repo
   *
   * 文檔在倉庫中的目錄
   *
   * @default ""
   */
  docsDir?: string;
}
