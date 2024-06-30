import type { ComponentGlobalOptions } from "./global.js";
import type { ComponentLocaleOptions } from "./locales.js";
import type { AvailableComponent } from "./name.js";
import type { RootComponentOptions } from "./root.js";

export interface ComponentPluginOptions {
  /**
   * Components to be registered
   *
   * 需要被註冊的元件
   *
   * @default []
   */
  components?: AvailableComponent[];

  /**
   * Global config for components
   *
   * 元件全面配置
   */
  componentOptions?: ComponentGlobalOptions;

  /**
   * Root config for components
   *
   * 根元件配置
   */
  rootComponents?: RootComponentOptions;

  /**
   * Component Locales
   *
   * 元件多語言
   */
  locales?: ComponentLocaleOptions;
}
