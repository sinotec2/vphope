import { useLocaleConfig } from "@vuepress/helper/client";
import type { VNode } from "vue";
import { defineComponent, h } from "vue";
import { withBase } from "vuepress/client";
import { RepoIcon } from "vuepress-shared/client";

import type { SiteInfoLocaleConfig } from "../../shared/index.js";

import "balloon-css/balloon.css";
import "../styles/site-info.scss";

declare const SITE_INFO_LOCALES: SiteInfoLocaleConfig;

export default defineComponent({
  name: "SiteInfo",

  props: {
    /**
     * Name of site
     *
     * 網站名稱
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Site description
     *
     * 網站描述
     */
    desc: {
      type: String,
      default: "",
    },

    /**
     * Site logo
     *
     * 網站圖標
     */
    logo: {
      type: String,
      default: "",
    },

    /**
     * Site link
     *
     * 網站連結
     */
    url: {
      type: String,
      required: true,
    },

    /**
     * Site preview image
     *
     * 網站預覽
     */
    preview: {
      type: String,
      required: true,
    },

    /**
     * Site repo
     *
     * 網站倉庫
     */
    repo: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const locale = useLocaleConfig(SITE_INFO_LOCALES);

    return (): VNode =>
      h("div", { class: "vp-site-info", "data-name": props.name }, [
        h("a", {
          class: "vp-site-info-navigator",
          title: props.name,
          href: props.url,
          target: "_blank",
        }),
        h("div", {
          class: "vp-site-info-preview",
          style: {
            background: `url(${withBase(
              props.preview,
            )}) center/cover no-repeat`,
          },
        }),
        h("div", { class: "vp-site-info-detail" }, [
          props.logo
            ? h("img", {
                class: "vp-site-info-logo",
                src: props.logo,
                alt: "",
                loading: "lazy",
                "no-view": "",
              })
            : null,
          h("div", { class: "vp-site-info-name" }, props.name),
          h("div", { class: "vp-site-info-desc" }, props.desc),
        ]),
        props.repo
          ? h(
              "div",
              { class: "vp-site-info-source-wrapper" },
              h(
                "a",
                {
                  class: "vp-site-info-source",
                  href: props.repo,
                  // Hint text
                  "aria-label": locale.value.source,
                  "data-balloon-pos": "left",
                  title: locale.value.source,
                  target: "_blank",
                },
                h(RepoIcon, { link: props.repo }),
              ),
            )
          : null,
      ]);
  },
});
