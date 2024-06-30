import type { PropType, VNode } from "vue";
import { defineComponent, h } from "vue";
import type { AuthorInfo } from "vuepress-shared/client";

import { AuthorIcon } from "@theme-hope/modules/info/components/icons";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index";

import "../styles/author-info.scss";

export default defineComponent({
  name: "AuthorInfo",

  inheritAttrs: false,

  props: {
    /**
     * Author information
     *
     * 作者資訊
     */
    author: {
      type: Array as PropType<AuthorInfo[]>,
      required: true,
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

    return (): VNode | null =>
      props.author.length
        ? h(
            "span",
            {
              class: "page-author-info",
              "aria-label": `${metaLocale.value.author}${
                props.pure ? "" : "🖊"
              }`,
              ...(props.pure ? {} : { "data-balloon-pos": "up" }),
            },
            [
              h(AuthorIcon),
              h(
                "span",
                props.author.map((item) =>
                  item.url
                    ? h(
                        "a",
                        {
                          class: "page-author-item",
                          href: item.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        item.name,
                      )
                    : h("span", { class: "page-author-item" }, item.name),
                ),
              ),
              h("span", {
                property: "author",
                content: props.author.map((item) => item.name).join(", "),
              }),
            ],
          )
        : null;
  },
});
