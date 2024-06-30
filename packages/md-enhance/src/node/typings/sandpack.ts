import type { SandpackProps } from "sandpack-vue3";

export interface SandpackData
  extends Required<Pick<SandpackProps, "files">>,
    Omit<SandpackProps, "files"> {
  /**
   * Title of sandpack
   *
   * 互動範例標題
   */
  title?: string;
}
