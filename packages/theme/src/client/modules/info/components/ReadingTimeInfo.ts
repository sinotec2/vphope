import type {
  ReadingTime,
  ReadingTimeLocale,
} from "@vuepress/plugin-reading-time/client";
import type { PropType, VNode } from "vue";
import { computed, defineComponent, h } from "vue";

import { TimerIcon } from "@theme-hope/modules/info/components/icons";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index";

export default defineComponent({
  name: "ReadingTimeInfo",

  inheritAttrs: false,

  props: {
    /**
     * Reading time information
     *
     * 閱讀時間資訊
     */
    readingTime: {
      type: Object as PropType<ReadingTime | null>,
      default: () => null,
    },

    /**
     * Reading time locale
     *
     * 閱讀時間語言環境
     */
    readingTimeLocale: {
      type: Object as PropType<ReadingTimeLocale | null>,
      default: () => null,
    },

    /**
     * Whether in pure mode
     *
     * 是否處於纯净模式
     */
    pure: Boolean,
  },

  setup(props) {
    const metaLocale = useMetaLocale();

    const readingTimeMeta = computed(() => {
      if (!props.readingTime) return null;

      const { minutes } = props.readingTime;

      return minutes < 1 ? "PT1M" : `PT${Math.round(minutes)}M`;
    });

    return (): VNode | null =>
      props.readingTimeLocale?.time
        ? h(
            "span",
            {
              class: "page-reading-time-info",
              "aria-label": `${metaLocale.value.readingTime}${
                props.pure ? "" : "⌛"
              }`,
              ...(props.pure ? {} : { "data-balloon-pos": "up" }),
            },
            [
              h(TimerIcon),
              h("span", props.readingTimeLocale?.time),
              h("meta", {
                property: "timeRequired",
                content: readingTimeMeta.value,
              }),
            ],
          )
        : null;
  },
});
