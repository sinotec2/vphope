import type { FunctionalComponent } from "vue";
import { h } from "vue";

import { PLAY_SVG } from "./icons.js";

import "../styles/playground.scss";

export interface PlaygroundProps {
  /**
   * Playground title
   *
   * 範例標題
   */
  title?: string;
  /**
   * Playground link
   *
   * 範例連結
   */
  link: string;
}

const Playground: FunctionalComponent<PlaygroundProps> = ({
  title = "",
  link,
}) =>
  h("div", { class: "vp-playground" }, [
    h("div", { class: "vp-playground-header" }, [
      title
        ? h("div", { class: "vp-playground-title" }, decodeURIComponent(title))
        : null,
      h("div", { class: "vp-playground-actions" }, [
        h("a", {
          class: "vp-playground-action",
          href: decodeURIComponent(link),
          target: "_blank",
          innerHTML: PLAY_SVG,
        }),
      ]),
    ]),
    h(
      "div",
      { class: "vp-playground-container" },
      h("iframe", {
        src: decodeURIComponent(link),
      }),
    ),
  ]);

Playground.displayName = "Playground";

export default Playground;
