---
title: 主題布局選項
icon: object-group
order: 3
category:
  - 配置
tag:
  - 主題配置
  - 布局
---

以下選項控制主題布局。

<!-- more -->

## 導航欄

具體介紹詳見 [布局 → 導航欄](../../guide/layout/navbar.md)。

### navbar <Badge text="建議配置" type="tip" />

- 類型: `NavbarConfig | false`
- 內設值: `false`

導航欄配置，具體配置方式見上方詳情。

### navbarLayout

- 類型: `NavbarLayoutOptions`

  ```ts
  /**
   * 内置導航欄元件
   */
  type NavbarComponent =
    | "Brand"
    | "Links"
    | "Language"
    | "Search"
    | "Outlook"
    | "Repo";

  /**
   * 導航欄布局選項
   */
  interface NavbarLayoutOptions {
    start?: (NavbarComponent | string)[];
    center?: (NavbarComponent | string)[];
    end?: (NavbarComponent | string)[];
  }
  ```

- 內設值: `{ start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }`

自定義導航欄布局

### logo <Badge text="建議配置" type="tip" />

- 類型: `string`
- 必填: 否

導航欄圖標，應為基於 `.vuepress/public` 文件目錄的絕對路徑。

### logoDark

- 類型: `string`
- 內設值: `logo`

夜間模式下導航欄圖標，應為基於 `.vuepress/public` 文件目錄的絕對路徑。

### navbarTitle

- 類型: `string`
- 內設值: `$siteLocale.title`

導航欄標題，你可以設置為 `''` 來隱藏它。

### repo

- 類型: `string`
- 必填: 否

倉庫配置，用於在導航欄中顯示倉庫連結。

### repoDisplay

- 類型: `boolean`
- 內設值: `true`

是否在導航欄顯示倉庫連結。

### repoLabel

- 類型: `string`
- 必填: 否

用於導航欄倉庫按鈕的無障礙標籤。

::: note

主題可以正確識别 GitHub, Gitlab, Gitee, Bitbucket 的連結。

:::

### navbarAutoHide

- 類型: `"always" | "mobile" | "none"`
- 內設值: `"mobile"`

是否在向下滾動時自動隱藏導航欄。

### hideSiteNameOnMobile

- 類型: `boolean`
- 內設值: `true`

是否在移動視圖下隱藏網站名稱。

## 側邊欄

關於配置指引，詳見 [布局 → 側邊欄](../../guide/layout/sidebar.md)。

### sidebar <Badge text="建議配置" type="tip" />

- 類型: `SidebarConfig | "structure" | false`
- 內設值: `"structure"`

側邊欄配置。

### sidebarSorter <Badge text="僅限 Root" type="warning" />

- 類型: `SidebarSorter`

  ```ts
  interface SidebarFileInfo {
    type: "file";
    filename: string;

    title: string;
    order: number | null;
    path?: string | null;

    frontmatter: ThemeNormalPageFrontmatter;
    pageData: ThemePageData;
  }

  interface SidebarDirInfo {
    type: "dir";
    dirname: string;
    children: SidebarInfo[];

    title: string;
    order: number | null;

    groupInfo: {
      icon?: string;
      collapsible?: boolean;
      link?: string;
    };

    frontmatter: ThemeNormalPageFrontmatter | null;
    pageData: ThemePageData | null;
  }

  type SidebarInfo = SidebarFileInfo | SidebarDirInfo;

  type SidebarSorterKeyword =
    | "readme"
    | "order"
    | "date"
    | "date-desc"
    | "filename"
    | "title";

  type SidebarSorterFunction = (
    infoA: SidebarInfo,
    infoB: SidebarInfo,
  ) => number;

  type SidebarSorter =
    | SidebarSorterFunction
    | SidebarSorterFunction[]
    | SidebarSorterKeyword
    | SidebarSorterKeyword[];
  ```

- 內設值: `["readme", "order", "title", "filename"]`

結構側邊欄排序器。

你可以:

- 填寫自定義函數
- 提供一個排序器關鍵字
- 提供一組自定義函數或排序器關鍵字

可用的關鍵字有:

- `readme`: `README.md` 或 `readme.md` 在前
- `order`: 正序在前並按其值升序排列，負序在後並按其值降序排列
- `date`: 按日期升序排序
- `date-desc`: 按日期降序排序
- `title`: 按標題字母順序排序
- `filename`: 按文件名字母順序排序

### headerDepth

- 類型: `number`
- 內設值: `2`

側邊欄嵌套的標題深度。

## 路徑導航

### breadcrumb

- 類型: `boolean`
- 內設值: `true`

是否全面啟用路徑導航。

### breadcrumbIcon

- 類型: `boolean`
- 內設值: `true`

是否在路徑導航顯示圖標。

### prevLink

- 類型: `boolean`
- 內設值: `true`

是否在頁面底部顯示上一篇連結。

### nextLink

- 類型: `boolean`
- 內設值: `true`

是否在頁面底部顯示下一篇連結。

## 標題

### titleIcon

- 類型: `boolean`
- 內設值: `true`

是否在頁面標題旁顯示圖標。

### pageInfo

- 類型: `ArticleInfo[] | false`
- 內設值: `["Author", "Original", "Date", "Category", "Tag", "ReadingTime"]`

文章資訊，可以填入數組，數組的順序是各條目顯示的順序。填入 `false` 使其被停用。

可以填入的條目如下:

- `"Author"`: 作者
- `"Date"`: 寫作日期
- `"Original"`: 是否原創
- `"Category"`: 分類
- `"Tag"`: 標籤
- `"ReadingTime"`: 預計閱讀時間
- `"Word"`: 字數
- `"PageView"`: 頁面瀏覽量

## Meta

### lastUpdated

- 類型: `boolean`
- 內設值: `true`

是否顯示頁面最後更新時間

### contributors

- 類型: `boolean`
- 內設值: `true`

是否顯示頁面貢獻者

### editLink

- 類型: `boolean`
- 內設值: `true`

是否展示編輯此頁連結

### editLinkPattern

- 類型: `string`

編輯連結的匹配。其中 `:repo` `:branch` `:path` 會被自動替換為 `docsRepo` `docsBranch` 和 `docsDir + filePath`。

::: note

主題已經為 GitHub、Gitlab、Gitee 和 Bitbucket 提供了内置支持。

:::

### docsRepo

- 類型: `string`
- 內設值: `repo`

文檔倉庫

### docsBranch

- 類型: `string`
- 內設值: `"main"`

文檔所在分支

### docsDir

- 類型: `string`
- 內設值: `""`

文檔在倉庫中的目錄

## 頁尾

### footer

- 類型: `string`
- 必填: 否

頁尾的內設内容，可輸入 HTMLString。

### copyright

- 類型: `string | false`
- 內設值: `"Copyright © <作者>"`

內設的版權資訊，設置為 `false` 來內設停用它。

### displayFooter

- 類型: `boolean`
- 內設值: `false`

是否內設顯示頁尾

## 杂項

### home

- 類型: `string`
- 內設值: 當前 `locale` 的鍵名

當前語言的主頁路徑，用於導航欄圖標和返回主頁按鈕的連結。

### rtl

- 類型: `boolean`
- 內設值: `false`

是否使用 RTL 布局

### toc {#toc-heading}

- 類型: `boolean`
- 內設值: `true`

是否顯示標題列表
