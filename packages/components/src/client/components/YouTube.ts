/* eslint-disable vue/no-unused-properties */
import { startsWith } from "@vuepress/helper/client";
import type { VNode } from "vue";
import { computed, defineComponent, h, ref } from "vue";
import { usePageLang } from "vuepress/client";
import { LoadingIcon } from "vuepress-shared/client";

import { useSize } from "../composables/index.js";
import { videoIframeAllow } from "../utils/index.js";

import "../styles/youtube.scss";

export default defineComponent({
  name: "YouTube",

  props: {
    /**
     * YouTube video id
     *
     * YouTube 視頻 id
     */
    id: {
      type: String,
      default: "",
    },

    /**
     * Youtube video title
     *
     * Youtube 視頻標題
     */
    title: {
      type: String,
      default: "A YouTube video",
    },

    /**
     * Component width
     *
     * 元件寬度
     */
    width: {
      type: [String, Number],
      default: "100%",
    },

    /**
     * Component height
     *
     * 元件高度
     */
    height: {
      type: [String, Number],
      default: undefined,
    },

    /**
     * Component width / height ratio
     *
     * 元件長寬比
     */
    ratio: {
      type: [String, Number],
      default: 16 / 9,
    },

    /**
     * Whether to autoplay the video
     *
     * 是否自動播放視頻
     */
    autoplay: Boolean,

    /**
     * Whether to loop the video
     *
     * 是否循環播放視頻
     */
    loop: Boolean,

    /**
     * Whether to show cc
     *
     * 是否顯示字幕
     */
    showCc: Boolean,

    /**
     * Whether to show annotations
     *
     * 是否顯示註解
     */
    showAnnotations: Boolean,

    /**
     * Video start time in seconds
     *
     * 視頻開始時間 (秒)
     */
    start: {
      type: [String, Number],
      default: undefined,
    },

    /**
     * Video end time in seconds
     *
     * 視頻結束時間 (秒)
     */
    end: {
      type: [String, Number],
      default: undefined,
    },

    /**
     * Default cc lang
     *
     * 內設字幕語言
     */
    defaultCcLang: {
      type: String,
      default: "",
    },

    /**
     * UI language
     *
     * UI 語言
     */
    uiLang: {
      type: String,
      default: "",
    },

    /**
     * List type
     *
     * 列表類型
     */
    listType: {
      type: String,
      default: "",
    },

    /**
     * List
     *
     * 列表
     */
    list: {
      type: String,
      default: "",
    },

    /**
     * Playlist id
     *
     * 播放列表 id
     */
    playlist: {
      type: String,
      default: "",
    },

    /**
     * Whether to disable controls
     *
     * 是否停用控制
     */
    disableControls: Boolean,

    /**
     * Whether to disable fullscreen
     *
     * 是否停用全螢幕
     */
    disableFullscreen: Boolean,

    /**
     * Whether to disable keyboard
     *
     * 是否停用鍵盘
     */
    disableKeyboard: Boolean,
  },

  setup(props) {
    const lang = usePageLang();
    const { el, width, height, resize } = useSize<HTMLIFrameElement>(props);

    const loaded = ref(false);

    const coreURL = computed(() =>
      props.id
        ? `${props.id}?`
        : props.listType === "playlist" && props.list
          ? `?listType=playlist&list=${
              startsWith(props.list, "PL") ? props.list : `PL${props.list}`
            }&`
          : null,
    );

    const params = computed(() => {
      const params = new URLSearchParams();

      if (props.autoplay) params.set("autoplay", "1");
      if (props.loop) params.set("loop", "1");
      if (props.showCc) params.set("cc_load_policy", "1");
      if (props.showAnnotations) params.set("iv_load_policy", "3");

      if (props.start) params.set("start", props.start.toString());
      if (props.end) params.set("end", props.end.toString());

      params.set("hl", props.uiLang || lang.value);
      params.set("cc_lang_pref", props.defaultCcLang || lang.value);
      params.set("color", "white");

      if (props.disableControls) params.set("controls", "0");
      if (props.disableFullscreen) params.set("fs", "0");
      if (props.disableKeyboard) params.set("disablekb", "1");

      if (props.playlist) params.set("playlist", props.playlist);

      return params.toString();
    });

    const videoLink = computed(() =>
      coreURL.value
        ? `https://www.youtube.com/embed/${coreURL.value}${params.value}`
        : null,
    );

    return (): (VNode | null)[] =>
      videoLink.value
        ? [
            h(
              "div",
              { class: "youtube-desc" },
              h("a", { class: "sr-only", href: videoLink.value }, props.title),
            ),
            h("iframe", {
              ref: el,
              src: videoLink.value,
              title: props.title,
              class: "youtube-iframe",
              allow: videoIframeAllow,
              style: {
                width: width.value,
                height: loaded.value ? height.value : 0,
              },
              onLoad: () => {
                loaded.value = true;
                resize();
              },
            }),
            loaded.value ? null : h(LoadingIcon),
          ]
        : [];
  },
});
