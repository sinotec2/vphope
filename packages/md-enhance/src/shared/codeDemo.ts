/**
 * Code demo options
 */
export interface CodeDemoOptions {
  /**
   * Whether to use babel to transpile to es5
   *
   * 是否使用 Babel 轉義到 ES5
   *
   * @default false
   */
  useBabel: boolean;

  /**
   * JS Library links
   *
   * 引入的 JS 外部庫連結
   */
  jsLib: string[];

  /**
   * CSS Library links
   *
   * 引入的 CSS 外部庫連結
   */
  cssLib: string[];

  /**
   * Whether to display JSFiddle button
   *
   * 是否顯示 JSFiddle 按鈕
   *
   * @default true
   */
  jsfiddle?: boolean;

  /**
   * Whether to display CodePen button
   *
   * 是否顯示 CodePen 按鈕
   *
   * @default true
   */
  codepen?: boolean;

  /**
   * CodePen editor layout
   *
   * CodePen 編輯器布局
   *
   * @default "left"
   */
  codepenLayout: "top" | "left" | "right";

  /**
   * CodePen Editor Display
   *
   * CodePen 編輯器顯示情况
   *
   * @default "101"
   */
  codepenEditors: "101" | "100" | "110" | "111" | "011" | "001" | "010";

  /**
   * Babel lib address
   *
   * Babel 庫的地址
   *
   * @default "https://unpkg.com/@babel/standalone/babel.min.js"
   */
  babel: string;

  /**
   * Vue lib address
   *
   * Vue 庫的地址
   *
   * @default "https://unpkg.com/vue/dist/vue.global.prod.js"
   */
  vue: string;

  /**
   * React lib address
   *
   * React 庫的地址
   *
   * @default "https://unpkg.com/react/umd/react.production.min.js"
   */
  react: string;

  /**
   * ReactDOM lib address
   *
   * ReactDOM 庫的地址
   *
   * @default "https://unpkg.com/react-dom/umd/react-dom.production.min.js"
   */
  reactDOM: string;
}
