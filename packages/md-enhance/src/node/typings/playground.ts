import type { CompilerOptions } from "typescript";

export interface PlaygroundCodeConfig {
  /**
   * Code block extension
   *
   * @description It's based on filename, not code fence language
   *
   * 程式碼區塊擴展名
   *
   * @description 它基於文件名，而不是程式碼區塊語言
   */
  ext: string;

  /**
   * Code block content
   *
   * 程式碼區塊内容
   */
  content: string;
}

export interface PlaygroundData {
  /**
   * Title of Playground
   *
   * 互動範例標題
   */
  title?: string;

  /**
   * Import map file name
   *
   * Import map 文件名
   *
   * @default "import-map.json"
   */
  importMap?: string;

  /**
   * Playground files info
   *
   * 互動範例文件資訊
   */
  files: Record<
    /**
     * File name
     *
     * 文件名
     */
    string,
    /**
     * File detail
     *
     * 文件詳情
     */
    PlaygroundCodeConfig
  >;

  /**
   * Playground settings
   *
   * @description It's parsed result of json content after setting directive
   *
   * 互動範例設置
   *
   * @description 它是設置指令後的 json 内容的解析結果
   */
  settings: Record<string, unknown>;

  /**
   * Hash key based on playground content
   *
   * 根據互動範例内容生成的 hash key
   */
  key: string;
}

export interface PlaygroundOptions {
  /**
   * Playground container name
   *
   * 互動範例容器名
   */
  name: string;

  /**
   * Playground component name
   *
   * 互動範例元件名稱
   *
   * @default "Playground"
   */
  component?: string;

  /**
   * Props getter
   *
   * 屬性獲取器
   */
  propsGetter: (data: PlaygroundData) => Record<string, string>;
}

export interface TSPresetPlaygroundOptions extends CompilerOptions {
  /**
   * External playground service url
   *
   * 互動範例外部地址
   *
   * @default "https://www.typescriptlang.org/play"
   */
  service?: string;
}

export interface VuePresetPlaygroundOptions {
  /**
   * External playground service url
   *
   * 互動範例外部地址
   *
   * @default "https://sfc.vuejs.org/"
   */
  service?: string;

  /**
   * Whether to use dev version
   *
   * 是否啟用開發版本
   *
   * @default false
   */
  dev?: boolean;

  /**
   * Whether to enable SSR
   *
   * 是否啟用 SSR
   *
   * @default false
   */
  ssr?: boolean;
}

export interface UnoPresetPlaygroundOptions {
  /**
   * External playground service url
   *
   * 互動範例外部地址
   *
   * @default "https://unocss.dev/play"
   */
  service?: string;
}

export type BuiltInPlaygroundPreset = "ts" | "vue" | "unocss";

export interface PlaygroundGlobalOptions {
  /**
   * Playground presets
   *
   * 互動範例預設
   */
  presets: (BuiltInPlaygroundPreset | PlaygroundOptions)[];
  /**
   * Playground config
   *
   * 互動範例配置
   */
  config?: {
    ts?: TSPresetPlaygroundOptions;
    vue?: VuePresetPlaygroundOptions;
    unocss?: UnoPresetPlaygroundOptions;
  };
}
