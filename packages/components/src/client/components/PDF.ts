/* eslint-disable vue/no-unused-properties */
import { useLocaleConfig } from "@vuepress/helper/client";
import { useScrollLock } from "@vueuse/core";
import type { VNode } from "vue";
import { defineComponent, h, onMounted, onUnmounted, ref, watch } from "vue";
import {
  CancelFullScreenIcon,
  EnterFullScreenIcon,
} from "vuepress-shared/client";

import type { PDFLocaleConfig } from "../../shared/locales.js";
import { useSize } from "../composables/index.js";
import { getLink, viewPDF } from "../utils/index.js";

import "../styles/pdf.scss";

declare const PDF_LOCALES: PDFLocaleConfig;

export default defineComponent({
  name: "PDF",

  props: {
    /**
     * PDF link, should be absolute url
     *
     * PDF 文件連結，應為完整連結
     */
    url: {
      type: String,
      required: true,
    },

    /**
     * PDF title
     *
     * PDF 標題
     */
    title: {
      type: String,
      default: "",
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
     * PDF initial page number
     *
     * PDF 初始頁碼
     *
     * @description Chrome only
     */
    page: {
      type: [String, Number],
      default: 1,
    },

    /**
     * Whether show toolbar
     *
     * 是否顯示工具欄
     *
     * @description Chrome only
     */
    noToolbar: Boolean,

    /**
     * Whether disable fullscreen button
     *
     * 是否停用全螢幕按鈕
     */
    noFullscreen: Boolean,

    /**
     * Initial zoom level (in percent)
     *
     * 初始縮放比率 (百分比)
     */
    zoom: {
      type: [String, Number],
      default: 100,
    },

    /**
     * Whether use pdfjs viewer by force
     *
     * 是否强制使用 pdfjs 閱讀器
     */
    viewer: Boolean,
  },

  setup(props) {
    const { el, width, height, resize } = useSize<HTMLDivElement>(props);
    const locales = useLocaleConfig(PDF_LOCALES);
    const viewer = ref<HTMLElement>();
    const isFullscreen = ref(false);

    onMounted(() => {
      viewPDF(getLink(props.url), viewer.value!, {
        title: props.title,
        hint: locales.value.hint,
        options: {
          page: props.page,
          noToolbar: props.noToolbar,
          ...(props.zoom.toString() === "100" ? {} : { zoom: props.zoom }),
        },
        force: props.viewer,
      });
      resize();

      const isLocked = useScrollLock(document.body);

      watch(isFullscreen, (value) => {
        isLocked.value = value;
      });

      onUnmounted(() => {
        isLocked.value = false;
      });
    });

    return (): VNode =>
      h(
        "div",
        {
          class: ["pdf-viewer-wrapper", { fullscreen: isFullscreen.value }],
          ref: el,
          style: isFullscreen.value
            ? {}
            : {
                width: width.value,
                height: height.value,
              },
        },
        [
          h("div", { ref: viewer }),
          props.noFullscreen
            ? null
            : h(
                "button",
                {
                  class: "pdf-fullscreen-button",
                  onClick: () => {
                    isFullscreen.value = !isFullscreen.value;
                  },
                },
                h(
                  isFullscreen.value
                    ? CancelFullScreenIcon
                    : EnterFullScreenIcon,
                  { class: "pdf-fullscreen-icon" },
                ),
              ),
        ],
      );
  },
});
