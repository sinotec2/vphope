declare module "artplayer-plugin-danmuku" {
  import type Artplayer from "artplayer";

  export interface Danmu {
    /**
     * 弹幕文本
     */
    text: string;

    /**
     * 弹幕發送模式
     *
     * @description 0為滾動，1為静止
     */
    mode?: 0 | 1;

    /**
     * 弹幕顏色
     */
    color?: string;

    /**
     * 弹幕出現的時間，單位為秒
     */
    time?: number;

    /**
     * 弹幕是否有描邊
     *
     * @default false
     */
    border?: boolean;
  }

  export interface ArtPlayerDanmukuOptions {
    /**
     * 弹幕源，可以是弹幕數組，xml 地址或者一個返回 Promise 的函數
     */
    danmuku?: Danmu[] | string | (() => Promise<Danmu[]>) | Promise<Danmu[]>;

    /**
     * 弹幕持续時間，單位秒，範圍在[1 ~ 10]
     */
    speed?: number;

    /**
     * 弹幕上下邊距，支持數字和高度的百分比
     */
    margin?: [number | `${number}%`, number | `${number}%`];

    /**
     * 弹幕透明度，範圍在[0 ~ 1]
     */
    opacity?: number;

    /**
     * 內設字體顏色
     */
    color?: string;

    /**
     * 內設弹幕發送模式，0為滾動，1為静止
     */
    mode?: 0 | 1;

    /**
     * 字體大小，支持數字和高度的百分比
     */
    fontSize?: number | `${number}%`;

    /**
     * 弹幕過濾函數，返回 true 則可以發送
     */
    filter?: (danmu: Danmu) => boolean;

    /**
     * 是否防重叠
     */
    antiOverlap?: boolean;

    /**
     * 是否使用 web worker
     */
    useWorker?: boolean;

    /**
     * 是否同步到播放速度
     */
    synchronousPlayback?: boolean;

    /**
     * 輸入框锁定時間，單位秒，範圍在[1 ~ 60]
     */
    lockTime?: number;

    /**
     * 輸入框最大可輸入的字數，範圍在[0 ~ 500]
     */
    maxLength?: number;

    /**
     * 輸入框最小寬度，範圍在[0 ~ 500]，填 0 則為無限制
     */
    minWidth?: number;

    /**
     * 輸入框最大寬度，範圍在[0 ~ Infinity]，填 0 則為 100% 寬度
     */
    maxWidth?: number;

    /**
     * 通過 mount 選項可以自定義輸入框掛載的位置，內設掛載於播放器底部，僅在當寬度小於最小值時生效
     */
    mount?: Element;

    /**
     * 輸入框自定義掛載時的主題色，內設為 dark，可以選填亮色 light
     */
    theme?: "dark" | "light";

    /**
     * 發送弹幕前的自定義校驗，返回 true 則可以發送
     */
    beforeEmit?: (danmu: Danmu) => boolean;
  }

  export interface ArtPlayerDanmukuPlugin {
    name: "artplayerPluginDanmuku";

    /**
     * 發送一條實時弹幕
     */
    emit: (danmu: Danmu) => ArtPlayerDanmukuPlugin;

    /**
     * 重載弹幕源，或者切換新弹幕
     */
    load: () => Promise<ArtPlayerDanmukuPlugin>;

    /**
     * 實時改變弹幕配置
     */
    config: (option: ArtPlayerDanmukuOptions) => ArtPlayerDanmukuPlugin;

    /**
     * 隱藏弹幕層
     */
    hide: () => ArtPlayerDanmukuPlugin;

    /**
     * 顯示弹幕層
     */
    show: () => ArtPlayerDanmukuPlugin;

    /**
     * 是否隱藏弹幕層
     */
    isHide: boolean;

    /**
     * 是否弹幕層停止状態
     */
    isStop: boolean;
  }

  declare const artplayerPluginDanmuku: (
    option: ArtPlayerDanmukuOptions,
  ) => (art: Artplayer) => ArtPlayerDanmukuPlugin;

  export = artplayerPluginDanmuku;
}
