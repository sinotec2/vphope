---
title: 主題功能選項
icon: splotch
order: 2
category:
  - 配置
tag:
  - 主題配置
  - 功能
---

以下選項控制主題功能。

<!-- more -->

## 網誌選項

主題通過使用 [`@vuepress/plugin-blog`][blog] 提供網誌功能，且該功能內設**停用**。

要啟用網誌外掛程式並使用內設選項，你可以在主題選項中設置 `plugins.blog: true`。

::: warning

除非你啟用網誌外掛程式，否則以下選項將不起作用。

有關詳細資訊，請參閱 [網誌功能介紹](../../guide/blog/intro.md)。

:::

### blog\.name

- 類型: `string`
- 內設值: `author`

部落客姓名。

### blog.avatar

- 類型: `string`
- 內設值: `logo`

部落客頭像。

### blog.description

- 類型: `string`
- 必填: 否

口號、座右銘或介紹語。

### blog.intro

- 類型: `string`
- 必填: 否

部落客的個人介紹地址。

::: note

填寫後將可以點擊“部落客資訊”中的頭像或姓名進入個人介紹頁。

:::

### blog.medias

- 類型: `Record<MediaType, string>`
- 必填: 否

部落客的媒體連結配置。

- 如果社交媒體已在下方列表中，你可以直接設置 `社交媒體名稱: 社交媒體地址`。
- 否則，你應該傳入一個元組 `社交媒體名稱: [社交媒體地址, 社交媒體 SVG 圖標字符串或路徑]`

  元組的第二個元素應該是一個合法的 SVG 字符串或是一個完整的 SVG 文件路徑。

:::: info 可用的社交媒體

以下社交媒體具有内置圖標:

::: tabs

@tab 社交

- `"CoolApk"`: 酷安
- `"Discord"`: Discord
- `"Douban"`: 豆瓣
- `"Facebook"`: 脸書
- `"Instagram"`: Instagram
- `"Kook"`: KOOK 語音
- `"Line"`: Line
- `"Messenger"`: Facebook Messenger
- `"QQ"`: QQ
- `"Qzone"`: QQ 空間
- `"Reddit"`: 紅迪
- `"Skype"`: Skype
- `"SnapChat"`: 色拉布
- `"Soul"`: Soul
- `"Telegram"`: 电报
- `"Tieba"`: 百度贴吧
- `"Tumblr"`: 汤不熱
- `"Twitter"`: 推特
- `"VK"`: VKontakte
- `"Wechat"`: 微信
- `"Weibo"`: 微博
- `"Whatsapp"`:瓦次艾普
- `"YY"`: 歪歪

@tab 辦公

- `"Bitbucket"`: Bitbucket
- `"Dingding"`: 钉钉
- `"Dribbble"`: Dribbble
- `"Email"`: 邮件
- `"Evernote"`: 印象笔記
- `"Gitee"`: 碼雲
- `"GitHub"`: GitHub
- `"Gitlab"`: Gitlab
- `"Gmail"`: 谷歌邮箱
- `"KDocs"`: 金山文檔
- `"Lark"`: 飞書
- `"Linkedin"`: 领英
- `"Pocket"`: Pocket
- `"QQDocs"`: 腾讯文檔
- `"WechatWork"`: 微信企業版

@tab 聚合

- `"AFDian"`: 爱發电
- `"Baidu"`: 百度
- `"Bangumi"`: 番組計划
- `"DuiTang"`: 堆糖
- `"Flipboard"`: 紅板报
- `"HuaBan"`: 花瓣
- `"Pinterest"`: 拼趣
- `"Pixiv"`: Pixiv
- `"Rss"`: RSS 地址
- `"WechatMP"`: 微信公众號
- `"XiaoHongShu"`: 小紅書
- `"Zhihu"`: 知乎

@tab 音频

- `"163Music"`: 網易雲音乐
- `"5Sing"`: 5sing
- `"Kugou"`: 酷狗音乐
- `"Kuwo"`: 酷我音乐
- `"QQMusic"`: QQ 音乐
- `"SoundCloud"`: 声雲
- `"XiMaLaYa"`: 喜马拉雅

@tab 視頻

- `"AcFun"`: ACFun
- `"BiliBili"`: 哔哩哔哩
- `"Douyin"`: 抖音
- `"Douyu"`: 斗鱼
- `"HuoShan"`: 抖音火山版
- `"HuYa"`: 虎牙
- `"iQiYi"`: 爱奇艺
- `"KuaiShou"`: 快手
- `"Nico"`: NicoNico動畫
- `"QQVideo"`: 腾讯視頻
- `"Twitch"`: Twitch
- `"WechatCh"`: 微信視頻號
- `"Weishi"`: 微視
- `"Youku"`: 優酷
- `"Youtube"`: 油管

@tab 其他

- `"115"`: 115 網盘
- `"360Yun"`: 360雲盘
- `"AliDrive"`: 阿里雲盘
- `"AliPay"`: 支付宝
- `"BaiduDisk"`: 百度網盘
- `"BattleNET"`: 战網
- `"IdleFish"`: 闲鱼
- `"Paypal"`: 贝宝
- `"Steam"`: 蒸汽
- `"WechatPay"`: 微信支付

:::

(請不要好奇為什麼這裡一定要加上特别奇怪的中文翻譯)

::::

### blog.sidebarDisplay

- 類型: `"mobile" | "none" | "always"`
- 內設值: `"mobile"`

是否在側邊欄展示部落客資訊。

- `"mobile"`: 在移動視圖中顯示在側邊欄中
- `"always"`: 總是展示在側邊欄中
- `"none"`: 永远不在側邊欄展示

### blog.timeline

- 類型: `string`
- 內設值: `"昨日不在"`

時間軸的頂部文字。

### blog.articlePerPage

- 類型: `number`
- 內設值: `10`

每頁的文章數量。

### blog.articleInfo

- 類型: `ArticleInfo[]`
- 內設值: `["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"]`

文章列表中展示的文章資訊

`ArticleInfo` 的可選值如下:

- `"Author"`
- `"Category"`
- `"Date"`
- `"Original"`
- `"Tag"`
- `"ReadingTime"`
- `"Word"`

::: warning 限制

內設情况下，ReadingTime 和 Word 在開發服務器中不可用，[查看原因以及如何啟用它](./basic.md#hotreload)。

:::

## 加密配置 <Badge text="僅限 Root" type="warning" />

有關詳細資訊，請參閱 [加密功能介紹](../../guide/feature/encrypt.md)。

::: note

你只能在主題選項下直接設置此選項，在各語言中分别配置**没有任何效果**。

:::

### encrypt.global

- 類型: `boolean`
- 內設值: `false`

是否全面加密。

### encrypt.admin

- 類型: `string | string[]`
- 必填: 否

最高權限密碼，可以以數組的形式設置多個。

### encrypt.config

- 類型: `Record<string, string | string[]>`
- 必填: 否

加密配置，為一個對象，鍵名為匹配的路徑，鍵值為對應的密碼，接受字符串或字符串數組。

::: details 例子

```js
{
  // 這會加密整個 guide 目錄，並且兩個密碼都是可用的
  "/guide/": ["1234", "5678"],
  // 這只會加密 c/onfig/page.html
  "/config/page.html": "1234"
}
```

:::

[blog]: https://ecosystem.vuejs.press/zh/plugins/blog/
