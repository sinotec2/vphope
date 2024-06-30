import type { MarkdownItPlantumlOptions } from "@mdit/plugin-plantuml";
import type { LocaleConfig } from "vuepress/shared";

import type {
  AttrsOptions,
  FigureOptions,
  ImgMarkOptions,
  IncludeOptions,
  KatexOptions,
  MarkdownEnhanceLocaleData,
  MathjaxOptions,
  PlaygroundGlobalOptions,
  RevealJsOptions,
  StylizeOptions,
  TasklistOptions,
  VuePlaygroundOptions,
} from "./typings/index.js";
import type { CodeDemoOptions } from "../shared/index.js";

/**
 * md-enhance plugin configuration
 */
export interface MarkdownEnhancePluginOptions {
  /**
   * Whether enable standard GFM support
   *
   * 是否啟用標準的 GitHub Favor Markdown 支持
   *
   * @default false
   */
  gfm?: boolean;

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
   * ⚠ The last 4 items conflict with default theme and will override it’s style.
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
   * ⚠ 最後四個會和內設主題衝突，且會覆蓋內設主題的樣式與行為。
   *
   * @default false
   */
  hint?: boolean;

  /**
   * Whether to enable v-pre wrapper.
   *
   * 是否啟用 v-pre 容器。
   *
   * @default false
   */
  vPre?: boolean;

  /**
   * Whether convert `\n` in paragraphs into `<br>`s
   *
   * 是否將段落中的 `\n` 轉換為 `<br>`
   *
   * @description enabled in gfm mode
   *
   * @default false
   */
  breaks?: boolean;

  /**
   * Whether convert URL-like text into links
   *
   * 是否將文字中的連結格式文字轉換為連結
   *
   * @description enabled in gfm mode
   *
   * @default false
   */
  linkify?: boolean;

  /**
   * Wether enable gfm alerts
   *
   * 是否啟用 gfm 警告
   *
   * @default false
   */
  alert?: boolean;

  /**
   * Whether to enable tabs.
   *
   * 是否啟用標籤頁分組。
   *
   * @default false
   */
  tabs?: boolean;

  /**
   * Whether to enable codetabs.
   *
   * 是否啟用程式碼組。
   *
   * @default false
   */
  codetabs?: boolean;

  /**
   * Whether to enable align support
   *
   * 是否啟用自定義對齊支持。
   *
   * @default false
   */
  align?: boolean;

  /**
   * Whether to enable attr support
   *
   * 是否啟用屬性支持。
   *
   * @default false
   */
  attrs?: AttrsOptions | boolean;

  /**
   * Whether to enable superscript format support
   *
   * 是否啟用上標格式支持。
   *
   * @default false
   */
  sup?: boolean;

  /**
   * Whether to enable subscript format support
   *
   * 是否啟用下標格式支持。
   *
   * @default false
   */
  sub?: boolean;

  /**
   * Whether render figure with standalone imag
   *
   * 是否將單独的圖片渲染為 figure
   *
   * @default false
   */
  figure?: FigureOptions | boolean;

  /**
   * Whether to enable footnote format support
   *
   * 是否啟用註解格式支持。
   *
   * @default false
   */
  footnote?: boolean;

  /**
   * Whether enable native image lazy loading
   *
   * 是否啟用原生的圖片懒加載。
   *
   * @default false
   */
  imgLazyload?: boolean;

  /**
   * Whether to enable gfm image id mark support
   *
   * 是否啟用 GFM 圖片 ID 標記。
   *
   * @default false
   */
  imgMark?: ImgMarkOptions | boolean;

  /**
   * Whether to enable image size mark support
   *
   * 是否啟用圖片大小標記支持。
   *
   * @default false
   */
  imgSize?: boolean;

  /**
   * Whether to enable obsidian image size mark support
   *
   * 是否啟用 obsidian 圖片大小標記支持。
   *
   * @default false
   */
  obsidianImgSize?: boolean;

  /**
   * Whether to enable mark format support
   *
   * 是否啟用標注支持。
   *
   * @default false
   */
  mark?: boolean;

  /**
   * Whether to enable spoiler support
   *
   * 是否啟用遮蔽支持
   *
   * @default false
   */
  spoiler?: boolean;

  /**
   * Whether to enable tasklist format support
   *
   * 是否啟用任務列表支持
   *
   * @default false
   */
  tasklist?: TasklistOptions | boolean;

  /**
   * Whether to enable include syntax support
   *
   * 是否啟用導入語法支持
   *
   * @default false
   */
  include?: Partial<IncludeOptions> | boolean;

  /**
   * Whether to enable katex support
   *
   * @see https://katex.org/docs/options.html
   *
   * 是否啟用 katex 語法支持
   *
   * @see https://katex.org/docs/options.html
   *
   * @default false
   */
  katex?:
    | (KatexOptions & {
        /**
         * Whether enable copy plugin
         *
         * @default false
         */
        copy?: boolean;
      })
    | boolean;

  /**
   * Whether to enable mathjax support
   *
   * @see http://docs.mathjax.org/en/latest/options/index.html
   *
   * 是否啟用 mathjax 語法支持
   *
   * @see http://docs.mathjax.org/en/latest/options/index.html
   *
   * @default false
   */
  mathjax?: MathjaxOptions | boolean;

  /**
   * Whether to enable component support
   *
   * 是否啟用元件支持
   *
   * @default false
   */
  component?: boolean;

  /**
   * Whether to enable chart support
   *
   * 是否啟用 chart 圖表支持
   *
   * @default false
   */
  chart?: boolean;

  /**
   * Whether to enable echarts support
   *
   * 是否啟用 echarts 圖表支持
   *
   * @default false
   */
  echarts?: boolean;

  /**
   * Whether to enable flowchart support
   *
   * 是否啟用 flowchart 流程圖支持
   *
   * @default false
   */
  flowchart?: boolean;

  /**
   * Whether to enable markmap support
   *
   * 是否啟用 markmap 流程圖支持
   *
   * @default false
   */
  markmap?: boolean;

  /**
   * Whether to enable mermaid support
   *
   * 是否啟用 Mermaid 流程圖支持
   *
   * @default false
   */
  mermaid?: boolean;

  /**
   * Whether enable plantuml support
   *
   * 是否啟用 plantuml 支持
   *
   * @default false
   */
  plantuml?: MarkdownItPlantumlOptions[] | boolean;

  /**
   * Whether to enable code-demo support
   *
   * 是否啟用程式碼範例功能
   *
   * @default false
   */
  demo?: Partial<CodeDemoOptions> | boolean;

  /**
   * Whether to enable reveal.js support
   *
   * 是否啟用 Reveal.js 支持
   *
   * @default false
   */
  revealJs?: RevealJsOptions | boolean;

  /**
   * Keyword enhancement
   *
   * 關鍵詞顯示增强選項
   */
  stylize?: StylizeOptions;

  /**
   * Whether to enable playground support
   *
   * 是否啟用 playground 支持
   */
  playground?: PlaygroundGlobalOptions;

  /**
   * Whether to enable kotlin playground support
   *
   * 是否啟用 kotlin Playground 支持
   *
   * @default false
   */
  kotlinPlayground?: boolean;

  /**
   * Whether to enable vue playground support
   *
   * 是否啟用 Vue Playground 支持
   *
   * @default false
   */
  vuePlayground?: VuePlaygroundOptions | boolean;

  /**
   * Whether to enable sandpack support
   *
   * 是否啟用 Sandpack 支持
   *
   * @default false
   */
  sandpack?: boolean;

  /**
   * The delay of operating dom, in ms
   *
   * If the theme you are using has a switching animation, it is recommended to configure this option to `Switch animation duration + 200`
   *
   * 操作頁面 DOM 的延時，單位 ms
   *
   * 如果你使用的主題有切換動畫，建議配置此選項為 `切換動畫時長 + 200`
   *
   * @default 800
   */
  delay?: number;

  /**
   * Locale config
   *
   * 國際化配置選項
   */
  locales?: LocaleConfig<MarkdownEnhanceLocaleData>;
}
