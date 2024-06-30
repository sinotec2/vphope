import noopComponent from "@vuepress/helper/client/noopComponent.js";
import { isSupported } from "@vuepress/plugin-comment/pageview";
import type {
  ReadingTime,
  ReadingTimeLocale,
} from "@vuepress/plugin-reading-time/client";
import type { PropType, VNode } from "vue";
import { defineComponent, h, resolveComponent } from "vue";
import type { AuthorInfo as AuthorInfoType } from "vuepress-shared/client";

import { usePure } from "@theme-hope/composables/index";
import AuthorInfo from "@theme-hope/modules/info/components/AuthorInfo";
import CategoryInfo from "@theme-hope/modules/info/components/CategoryInfo";
import DateInfo from "@theme-hope/modules/info/components/DateInfo";
import OriginalInfo from "@theme-hope/modules/info/components/OriginalInfo";
import PageViewInfo from "@theme-hope/modules/info/components/PageViewInfo";
import ReadingTimeInfo from "@theme-hope/modules/info/components/ReadingTimeInfo";
import TagInfo from "@theme-hope/modules/info/components/TagInfo";
import WordInfo from "@theme-hope/modules/info/components/WordInfo";
import type {
  PageCategory,
  PageTag,
} from "@theme-hope/modules/info/utils/index";

import type { PageInfoType } from "../../../../shared/index.js";

import "balloon-css/balloon.css";
import "../styles/page-info.scss";

declare const __VP_READING_TIME__: boolean;

export interface PageInfoProps {
  /**
   * Authors of article
   *
   * 文章作者
   */
  author?: AuthorInfoType[];

  /**
   * Categories of article
   *
   * 文章分類
   */
  category?: PageCategory[];

  /**
   * Tags of article
   *
   * 文章標籤
   */
  tag?: PageTag[];

  /**
   * Writing Date
   *
   * 寫作日期
   */
  date?: Date | null;

  /**
   * Writing Date
   *
   * 寫作日期
   */
  localizedDate?: string | null;

  /**
   * Whether the article is original
   *
   * 文章是否原創
   */
  isOriginal?: boolean;

  /**
   * Whether enable pageview
   *
   * If the value is a string, it will use as search id
   *
   * 是否啟用訪問量
   *
   * 如果值為字符串，會用做查詢 id
   */
  pageview?: string | boolean;

  /**
   * ReadingTime info
   *
   * 閱讀時間
   */
  readingTime?: ReadingTime | null;

  /**
   * ReadingTime Locales
   *
   * 閱讀時間多語言
   */
  readingTimeLocale?: ReadingTimeLocale | null;
}

export default defineComponent({
  name: "PageInfo",

  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo: isSupported ? PageViewInfo : noopComponent,
    ReadingTimeInfo: __VP_READING_TIME__ ? ReadingTimeInfo : noopComponent,
    TagInfo,
    WordInfo,
  },

  props: {
    /**
     * Article information to display
     *
     * 待展示的文章資訊
     */
    items: {
      type: [Array, Boolean] as PropType<PageInfoType[] | false>,
      default: (): PageInfoType[] => [
        "Author",
        "Original",
        "Date",
        "PageView",
        "ReadingTime",
        "Category",
        "Tag",
      ],
    },

    /**
     * Article information
     *
     * 文章資訊配置
     */
    info: {
      type: Object as PropType<PageInfoProps>,
      required: true,
    },
  },

  setup(props) {
    const pure = usePure();

    return (): VNode | null =>
      props.items
        ? h(
            "div",
            { class: "page-info" },
            props.items.map((item) =>
              h(resolveComponent(`${item}Info`), {
                ...props.info,
                pure: pure.value,
              }),
            ),
          )
        : null;
  },
});
