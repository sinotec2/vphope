import type dayjs from "dayjs";

import type { Locale } from "./locale.js";

const locale: Locale = {
  name: "zh-TW",
  weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
  weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
  weekdaysMin: "日_一_二_三_四_五_六".split("_"),
  months:
    "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
      "_",
    ),
  monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  ordinal: (number, period) => {
    switch (period) {
      case "W":
        return `${number}周`;
      default:
        return `${number}日`;
    }
  },
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY年M月D日",
    LLL: "YYYY年M月D日Ah點mm分",
    LLLL: "YYYY年M月D日ddddAh點mm分",
    l: "YYYY/M/D",
    ll: "YYYY年M月D日",
    lll: "YYYY年M月D日 HH:mm",
    llll: "YYYY年M月D日dddd HH:mm",
  },
  relativeTime: {
    future: "%s内",
    past: "%s前",
    s: "幾秒",
    m: "1 分鐘",
    mm: "%d 分鐘",
    h: "1 小時",
    hh: "%d 小時",
    d: "1 天",
    dd: "%d 天",
    M: "1 個月",
    MM: "%d 個月",
    y: "1 年",
    yy: "%d 年",
  },
  meridiem: (hour, minute) => {
    const hm = hour * 100 + minute;

    return hm < 600
      ? "凌晨"
      : hm < 900
        ? "早上"
        : hm < 1100
          ? "上午"
          : hm < 1300
            ? "中午"
            : hm < 1800
              ? "下午"
              : "晚上";
  },
};

export const loadZhLocale = (extendedDayjs: typeof dayjs): void => {
  extendedDayjs.locale("zh", locale);
};
