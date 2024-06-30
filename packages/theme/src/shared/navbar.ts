import type { AutoLinkOptions, TextItemOptions } from "./utils.js";

/**
 * Base nav group, has nav items children
 */
export interface NavGroup<T> extends TextItemOptions {
  /**
   * Link prefix of current group
   *
   * 當前分組的頁面前缀
   */
  prefix?: string;

  /**
   * Link of current group
   *
   * 當前分組的連結
   */
  link?: string;

  /**
   * Children of current group
   *
   * 當前分組的子項
   */
  children: T[];
}

/**
 * Navbar types
 */
export type NavbarItem = AutoLinkOptions;
export type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>;
export type NavbarOptions = (NavbarItem | NavbarGroup | string)[];
