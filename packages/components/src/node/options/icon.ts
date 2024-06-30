type Link =
  | `/${string}`
  | `//${string}`
  | `http://${string}`
  | `https://${string}`;

export type BuiltInFontIcon =
  | "iconify"
  | "fontawesome"
  | "fontawesome-with-brands";

export type FontIconAssets =
  | BuiltInFontIcon
  | Link
  | (BuiltInFontIcon | Link)[];

export interface FontIconOptions {
  /**
   * Link of font icon asset
   *
   * 字體圖標資源連結
   *
   * @description `"iconify"`, `"fontawesome"` and `"fontawesome-with-brands"` keywords are supported
   */
  assets?: FontIconAssets;

  /**
   * Class prefix of font icon
   *
   * 字體圖標的 Class 前缀
   *
   * @default ""
   */
  prefix?: string;
}
