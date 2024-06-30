import type { ReplProps } from "@vue/repl";

/**
 * Vue Playground options
 *
 * @description Vue playground is using [`@vue/repl`](https://github.com/vuejs/repl)
 *
 * Vue 互動範例配置
 *
 * @description Vue playground 使用 [`@vue/repl`](https://github.com/vuejs/repl)
 */
export interface VuePlaygroundOptions
  extends Omit<ReplProps, "store" | "editor"> {
  /**
   * Specify the version of vue
   *
   * 指定 vue 版本
   */
  vueVersion?: string;

  /**
   * Specify default URL to import Vue dev runtime from in the sandbox
   *
   * 指定內設的 Vue 開發运行時
   *
   * @default "https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js"
   */
  vueRuntimeDevUrl?: string | (() => string);

  /**
   * Specify default URL to import Vue prod runtime from in the sandbox
   *
   * 指定內設的 Vue 生產运行時
   *
   * @default "https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.prod.js"
   */
  vueRuntimeProdUrl?: string | (() => string);

  /**
   * Specify default URL to import Vue Server Renderer from in the sandbox
   *
   * 指定內設的 Vue 服務端渲染器
   *
   * @default "https://unpkg.com/@vue/server-renderer@${version}/dist/server-renderer.esm-browser.js"
   */
  vueServerRendererUrl?: string | (() => string);
}
