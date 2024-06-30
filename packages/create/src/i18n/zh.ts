import type { CreateLocale } from "./typings.js";
import type { PackageManager } from "../utils/index.js";

export const zh: CreateLocale = {
  flow: {
    getVersion: "獲取依賴的最新版本...",
    createPackage: "生成 package.json...",
    updatePackage: "更新 package.json...",
    createTsConfig: "生成 tsconfig.json...",
    updateTsConfig: "更新 tsconfig.json...",
    generateTemplate: "生成模板...",
    install: "安裝依賴...",
    devServer:
      "啟動開發服務器...\n啟動成功後，請在瀏覽器輸入給出的開發服務器地址(內設為 'localhost:8080')",
  },

  question: {
    packageManager: "選擇包管理器",
    i18n: "項目需要用到多語言麼?",
    git: "是否初始化 Git 倉庫?",
    workflow: "是否需要一個自動部署文檔到 GitHub Pages 的工作流？",
    bundler: "你想要使用哪個打包器？",
    preset: "你想要創建什麼類型的項目？",
    devServer: "是否想要現在啟動 Demo 查看?",
    name: "設置應用名稱",
    version: "設置應用版本號",
    description: "設置應用描述",
    license: "設置協議",
  },

  hint: {
    install:
      "這可能需要數分鐘，請耐心等待.\n我們無法正確輸出子進程的進度條，所以進程可能會看似未響應",
    finish: "模板已成功生成!",
    devServer: (packageManager: PackageManager): string =>
      `提示: 請使用 "${packageManager} run docs:dev" 命令啟動開發服務器`,
  },

  workflow: {
    name: "部署文檔",
    checkout: "檢出程式碼",
    submodule: "如果你文檔需要 Git 子模塊，取消註解下一行",
    setupPnpm: "設置 pnpm",
    setupNode: "設置 Node.js",
    install: "安裝依賴",
    build: "構建文檔",
    deploy: "部署文檔",
    deployBranch: "這是文檔部署到的分支名稱",
  },

  error: {
    name: "應用名稱應只包含小寫字母、數字和连接線 (-)",
    version: "此版本無效，版本號應為 'x.x.x'",
    bundler: "打包器 (--bundler) 僅支持 vite 或 webpack",
    preset: "預設 (--preset) 僅支持 docs 或 blog",
    outputDirMissing: (packageManager: PackageManager): string =>
      `"[dir]" 的方括號表示此處為一個參數，你應該替換為自己想使用的文件目錄名稱，如 "my-blog", "project-docs" 等!\n例如: "${packageManager} init vuepress-theme-hope project-docs"`,
    updateDirMissing: (packageManager: PackageManager): string =>
      `"[dir]" 的方括號表示此處為一個參數，你應該替換為自己想使用的文件目錄名稱，如 "src", "docs" 等!\n例如: "${packageManager} init vuepress-theme-hope docs"`,
    dirNotEmpty: (dir: string) =>
      `目標文件目錄 "${dir}" 不為空，請選擇一個空文件目錄或者手動删除文件目錄中的文件`,
  },
};
