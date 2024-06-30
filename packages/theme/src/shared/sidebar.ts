import type { AutoLinkOptions, TextItemOptions } from "./utils.js";

export type SidebarPageItem = AutoLinkOptions;

export interface SidebarStructureItem extends TextItemOptions {
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
   * Whether current group is collapsible
   *
   * 當前分組的連結是否可折叠
   *
   * @default false
   */
  collapsible?: boolean;

  children: "structure";
}

export interface SidebarGroupItem extends TextItemOptions {
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
   * Whether current group is collapsible
   *
   * 當前分組的連結是否可折叠
   *
   * @default false
   */
  collapsible?: boolean;

  /**
   * Children of current group
   *
   * 當前分組的子項
   */
  children: (
    | SidebarPageItem
    | SidebarGroupItem
    | SidebarStructureItem
    | string
  )[];
}

export type SidebarItem =
  | SidebarPageItem
  | SidebarGroupItem
  | SidebarStructureItem
  | string;

export type SidebarArrayOptions = SidebarItem[];

export type SidebarObjectOptions = Record<
  string,
  SidebarArrayOptions | "structure" | false
>;

export type SidebarOptions =
  | SidebarArrayOptions
  | SidebarObjectOptions
  | "structure"
  | false;
