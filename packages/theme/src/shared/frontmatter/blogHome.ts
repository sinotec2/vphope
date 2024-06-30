import type { ThemeHopePageFrontmatter } from "./home.js";

export interface ThemeBlogHomeProjectOptions {
  /**
   * Project name
   *
   * 項目名稱
   */
  name: string;

  /**
   * Project description
   *
   * 項目描述
   */
  desc?: string;

  /**
   * Project link
   *
   * 項目連結
   */
  link: string;

  /**
   * Project icon
   *
   * @description image link or icon fontClass are supported, as well as `"link"`、`"project"`、`"book"`、`"article"`、`"friend"`
   *
   * 項目圖標
   *
   * @description 支持圖片連結或者圖標字體類，同時也支持 `"link"`、`"project"`、`"book"`、`"article"`、`"friend"`
   */
  icon?: string;

  /**
   * Background color
   *
   * @description Can be css variables
   *
   * 背景顏色
   *
   * @description 可以是 CSS 變量
   */
  background?: string;
}

export interface ThemeBlogHomePageFrontmatter extends ThemeHopePageFrontmatter {
  layout: "BlogHome";
  /**
   * @default true
   */
  hero?: boolean;

  /**
   * Projects
   *
   * 項目
   */
  projects: ThemeBlogHomeProjectOptions[];
}
