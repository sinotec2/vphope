export type RevealJsPlugin = "highlight" | "math" | "search" | "notes" | "zoom";

export type RevealJsTheme =
  | "auto"
  | "beige"
  | "black"
  | "blood"
  | "league"
  | "moon"
  | "night"
  | "serif"
  | "simple"
  | "sky"
  | "solarized"
  | "white";

/**
 * Reveal.js options
 */
export interface RevealJsOptions {
  /**
   * Reveal.js plugins
   *
   * 投影片外掛程式
   *
   * @default []
   */
  plugins?: RevealJsPlugin[];

  /**
   * Reveal.js themes
   *
   * 投影片主題
   *
   * @default ["auto"]
   */
  themes?: RevealJsTheme[];
}
