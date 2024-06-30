export interface SassPalettePluginOptions {
  /**
   * Identifier for palette, used to avoid duplicate registration.
   *
   * 調色板的唯一 ID，用於避免重複註冊。
   */
  id: string;

  /**
   * User config file path, relative to source dir
   *
   * @description This is the file where user set style variables.
   *
   * 用户配置文件路徑，相對於源文件目錄。
   *
   * @description 這是用户設置樣式變量的文件。
   *
   * @default `.vuepress/styles/${id}-config.scss`
   */
  config?: string;

  /**
   * Default config file path, should be absolute path.
   *
   * @description This is the file you should use to provide default style values with `!default`。
   *
   * 內設的配置文件路徑，應為絕對路徑。
   *
   * @description 這是你應該通過 `!default` 來提供內設樣式變量的文件。
   *
   * @default "vuepress-plugin-sass-palette/styles/default/config.scss"
   */
  defaultConfig?: string;

  /**
   * User palette file path, relative to source dir.
   *
   * @description This is the file where user control injected css variables. All the variables will be converted in to kebab-case and injected.
   *
   * 用户的調色板文件路徑，相對於源文件目錄。
   *
   * @description 這是用户控制注入 CSS 變量的文件。所有的變量會被轉換為连字符格式然後被注入。
   *
   * @default `.vuepress/styles/${id}-palette.scss`
   */
  palette?: string;

  /**
   * Default palette file path, should be absolute path.
   *
   * @description This is the file you should use to provide default css variables with `!default`. All the variable will be converted in to kebab-case and injected.
   *
   * 內設的調色板文件路徑，應為絕對路徑。
   *
   * @description 這是你應該通過 `!default` 來提供內設調色板值的文件。所有的變量會被轉換為连字符格式然後被注入。
   *
   * @default "vuepress-plugin-sass-palette/styles/default/palette.scss"
   */

  defaultPalette?: string;

  /**
   * Custom generator, used to generate derivative values with palette config
   *
   * e.g: You may want to provide a `$theme-color-light` based on `$themeColor`.
   *
   * 自定義的生成器，用於生成調色板配置的衍生值。
   *
   * 如: 你可能想要根據 `$theme-color` 的值提供一個 `$theme-color-light`。
   */
  generator?: string;

  /**
   * User style file path, relative to source dir.
   *
   * 用户的樣式文件路徑，相對於源文件目錄。
   */
  style?: string;
}
