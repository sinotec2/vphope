/* eslint-disable vue/no-unused-properties */
import type { VNode } from "vue";
import { computed, defineComponent, h, ref } from "vue";
import { LoadingIcon } from "vuepress-shared/client";

import { useSize } from "../composables/index.js";
import { videoIframeAllow } from "../utils/index.js";

import "../styles/xi-gua.scss";

export default defineComponent({
  name: "XiGua",

  props: {
    /**
     * XiGua video id
     *
     * 西瓜視頻 ID
     */
    id: {
      type: String,
      required: true,
    },

    /**
     * XiGua video title
     *
     * 西瓜視頻標題
     */
    title: {
      type: String,
      default: "A XiGua video",
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
     * Start time in seconds
     *
     * 基於秒數的開始時間
     */
    time: {
      type: [String, Number],
      default: 0,
    },

    /**
     * Auto play
     *
     * 自動播放
     */
    autoplay: Boolean,
  },

  setup(props) {
    const { el, width, height, resize } = useSize<HTMLIFrameElement>(props);

    const loaded = ref(false);

    const videoLink = computed(
      () =>
        `https://www.ixigua.com/iframe/${props.id}?startTime=${
          props.time
        }&autoplay=${props.autoplay ? 1 : 0}`,
    );

    return (): (VNode | null)[] =>
      props.id
        ? [
            h(
              "div",
              { class: "xi-gua-desc" },
              h("a", { class: "sr-only", href: videoLink.value }, props.title),
            ),
            h("iframe", {
              ref: el,
              src: videoLink.value,
              title: props.title,
              class: "xi-gua-iframe",
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
