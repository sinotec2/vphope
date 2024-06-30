export interface PageCategory {
  /**
   * Category name
   *
   * 分類名稱
   */
  name: string;

  /**
   * Category path
   *
   * 分類路徑
   */
  path?: string;
}

export type PageTag = PageCategory;
