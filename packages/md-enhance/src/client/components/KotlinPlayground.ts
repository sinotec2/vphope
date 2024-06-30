import { decodeData } from "@vuepress/helper/client";
import { useMutationObserver } from "@vueuse/core";
import type { VNode } from "vue";
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  watch,
} from "vue";

import { getDarkmodeStatus } from "../utils/index.js";

import "../styles/kotlin-playground.scss";

export default defineComponent({
  name: "KotlinPlayground",

  props: {
    /**
     * Playground title
     *
     * 範例標題
     */
    title: {
      type: String,
      default: "",
    },

    /**
     * Playground file data
     *
     * 範例文件數據
     */
    files: { type: String, required: true },

    /**
     * Playground settings
     *
     * 範例設置
     */
    settings: { type: String, default: "{}" },
  },

  setup(props) {
    const isDarkmode = ref(false);

    const kotlinPlayground = shallowRef<HTMLDivElement>();

    const files = computed(
      () => JSON.parse(decodeData(props.files)) as string[],
    );

    const settings = computed(() => ({
      theme: isDarkmode.value ? "darcula" : "default",
      ...(JSON.parse(decodeURIComponent(props.settings)) as Record<
        string,
        string
      >),
    }));

    const renderPlayground = async (): Promise<void> => {
      const { default: playground } = await import(
        /* webpackChunkName: "kotlin-playground" */ "kotlin-playground"
      );

      playground(kotlinPlayground.value!);
    };

    onMounted(() => {
      isDarkmode.value = getDarkmodeStatus();

      // Watch darkmode change
      useMutationObserver(
        document.documentElement,
        () => {
          isDarkmode.value = getDarkmodeStatus();
        },
        {
          attributeFilter: ["class", "data-theme"],
          attributes: true,
        },
      );

      watch(isDarkmode, () => nextTick().then(() => renderPlayground()), {
        immediate: true,
      });
    });

    return (): VNode =>
      h("div", { class: "kotlin-playground-wrapper" }, [
        props.title
          ? h("div", { class: "header" }, decodeURIComponent(props.title))
          : null,
        h(
          "div",
          {
            class: "kotlin-playground-container",
            key: isDarkmode.value ? "dark" : "light",
          },

          h(
            "div",
            {
              class: "kotlin-playground",
              ref: kotlinPlayground,
              ...settings.value,
            },
            [
              h("pre", files.value[0]),
              // Hidden dependency
              files.value.length > 1
                ? files.value.map((content, index) =>
                    index === 0
                      ? null
                      : h(
                          "textarea",
                          { class: "hidden-dependency", readonly: "" },
                          content,
                        ),
                  )
                : null,
            ],
          ),
        ),
      ]);
  },
});
