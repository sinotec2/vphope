---
title: 主題基本選項
icon: circle-info
order: 1
category:
  - 配置
tag:
  - 主題配置
  - 基礎
---

::: caution

這些選項關乎主題是否能夠正確運行，每個設定都重要，需要正確配置。

:::

## 主機名稱hostname <Badge text="僅限 Root" type="warning" />

- 類型: `string`
- 必填: 是

技術文件部署平台的網域名稱。

::: tip

它應該包含完整的網域名稱協議，`http`或`https`，主機、以及REALM名稱 (如: `https://host1.example.com`)。

:::

## 內設作者訊息author

- 類型: `Author`

  ```ts
  type AuthorName = string;

  interface AuthorInfo {
    /**
     * 作者姓名
     */
    name: string;

    /**
     * 作者詳細訊息的網址
     */
    url?: string;

    /**
     * 作者 Email
     */
    email?: string;
  }

  type Author = AuthorName | AuthorName[] | AuthorInfo | AuthorInfo[];
  ```

- 必填: 否

文章顯示的內設作者

## 許可證license

- 類型: `string`
- 必填: 否

網站內設的許可協議

## 偏好圖標favicon

- 類型: `string`
- 必填: 否

網站圖標

## 導航navbar

- 有關檔案：
  - `docs/theme/src/.vuepress/theme.ts`開啟模組
  - `docs/theme/src/.vuepress/navbar/en.ts`英文版導航選單
  - `docs/theme/src/.vuepress/navbar/zh.ts`中文版導航選單
- 類型: `NavbarConfig`

  ```ts
  interface TextItemOptions {
    /**
     * 項目文字
     */
    text: string;

    /**
     * 項目圖標
     */
    icon?: string;

    /**
     * 項目無障礙標籤
     */
    ariaLabel?: string;
  }

  interface AutoLinkOptions extends TextItemOptions {
    /**
     * 當前頁面連結
     */
    link: string;

    /**
     * `<a>` 標籤的 `rel` 屬性
     */
    rel?: string;

    /**
     * `<a>` 標籤的 `target` 屬性
     */
    target?: string;

    /**
     * 匹配激活的正則表達式
     */
    activeMatch?: string;
  }

  interface NavGroup<T> extends TextItemOptions {
    /**
     * 當前分組的頁面前缀
     */
    prefix?: string;

    /**
     * 當前分組的連結
     */
    link?: string;

    /**
     * 當前分組的子項
     */
    children: T[];
  }

  type NavbarItem = AutoLinkOptions;
  type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>;
  type NavbarConfig = (NavbarItem | NavbarGroup | string)[];
  ```

- 詳情: [布局 → 導航欄](../../guide/layout/navbar.md)



## sidebar

- 類型: `SidebarConfig`

  ```ts
  interface TextItemOptions {
    /**
     * 項目文字
     */
    text: string;

    /**
     * 項目圖標
     */
    icon?: string;

    /**
     * 項目無障礙標籤
     */
    ariaLabel?: string;
  }

  interface AutoLinkOptions extends TextItemOptions {
    /**
     * 當前頁面連結
     */
    link: string;

    /**
     * `<a>` 標籤的 `rel` 屬性
     */
    rel?: string;

    /**
     * `<a>` 標籤的 `target` 屬性
     */
    target?: string;

    /**
     * 匹配激活的正則表達式
     */
    activeMatch?: string;
  }

  type SidebarPageItem = AutoLinkOptions;

  interface SidebarGroupItem extends TextItemOptions {
    /**
     * 當前分組的頁面前缀
     */
    prefix?: string;

    /**
     * 當前分組的連結
     */
    link?: string;

    /**
     * 當前分組的連結是否可折叠
     *
     * @default false
     */
    collapsible?: boolean;

    /**
     * 當前分組的子項
     */
    children: (
      | SidebarPageItem
      | SidebarGroupItem
      | SidebarStructureItem
      | string
    )[];
  }

  interface SidebarStructureItem extends TextItemOptions {
    /**
     * 當前分組的頁面前缀
     */
    prefix?: string;

    /**
     * 當前分組的連結
     */
    link?: string;

    /**
     * 當前分組的連結是否可折叠
     *
     * @default false
     */
    collapsible?: boolean;

    children: "structure";
  }

  type SidebarItem =
    | SidebarPageItem
    | SidebarGroupItem
    | SidebarStructureItem
    | string;

  type SidebarArrayConfig = SidebarItem[];

  type SidebarObjectConfig = Record<
    string,
    SidebarArrayConfig | "structure" | false
  >;

  type SidebarConfig = SidebarArrayConfig | SidebarObjectConfig;
  ```

- 詳情: [布局 → 側邊欄](../../guide/layout/sidebar.md)

側邊欄配置

## locales <Badge text="僅限 Root" type="warning" />

- 類型: `Record<string, ThemeLocaleOptions>`
- 詳情:
  - [主題多語言配置](./i18n.md)

主題的多語言配置，你可以在這裡分别為每個語言設置單独的選項。

## extraLocales <Badge text="僅限 Root" type="warning" />

- 類型: `Record<string, string>`

網站的額外語言環境，其中鍵名是語言名稱，值是網站路徑，`:route` 將替換為當前路由路徑。

## hotReload <Badge text="僅限 Root" type="warning" />

- 類型: `boolean`
- 內設值: 是否在使用 `--debug` 標識

是否需要在開發服務器啟用完整功能與熱更新。
是否在開發服務器中啟用熱重載。

::: tip

通常，你會希望:

- 開發服務器可以被儘快啟動
- 對項目的修改可以在開發服務器上快速生效，並避免重新啟動整個 VuePress 應用程序。

為了達到這個預期，主題需要在開發服務器啟動時跳過一些耗時操作並在頁面更新時绕過一些耗時功能，以提高項目啟動和熱更新的速度。同時，由於一些修改會改變 VuePress 的底層原始數據，這些修改會導致網頁刷新並重新加載整個 VuePress 應用程序。為了避免在修改 Markdown 時频繁的頁面重新加載 (即: 觸發頁面刷新並且獲得幾秒鐘的白屏)，該主題停用了開發服務器上的某些功能。

內設情况下，開發服務器擁有以下限制:

- 不啟用基於 Git 的功能，包括貢獻者、自動創建日期和最後更新時間 (調用 Git 程序以及文件 IO 會導致高耗時)
- 結構化側邊欄只會在應用啟動時生成，後续不會更新 (側邊欄排序和索引取决於每個頁面 frontmatter，Markdown 内容的任何變化都會觸發重新計算，因此大量頁面會導致高耗時)
- 網誌文章、標籤、分類和每個分類中的文章列表不會隨著開發服務器更新 (Markdown 内容的任何變化都會觸發重新計算，所以大量的頁面會導致高耗時)
- 網誌文章資訊不含閱讀時間和字數資訊 (Markdown 内容的任何更改都會更改頁面字數資訊，並因更新了 VuePress 底層原始數據導致頁面刷新)

啟用它意味著你接受每次修改都會觸發一些高耗時計算並且整個應用程序將重新啟動，這通常會導致頁面刷新，並在在性能較弱的環境中獲得數秒白屏。

:::
