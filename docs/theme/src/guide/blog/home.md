---
title: Blog homepage
icon: home
order: 6
category:
  - Blog
tag:
  - Blog
  - Home
  - Layout
---

`vuepress-theme-hope` allows you to enable a blog-style and a portfolio style homepage.

<!-- more -->

## Blog Style Homepage

Set `layout: BlogHome` and `home: true` in the frontmatter of homepage.

![Homepage screenshot](./assets/blog-light.jpg#light)
![Homepage screenshot](./assets/blog-dark.jpg#dark)

You can use `heroText` to set the main title and `tagline` to set the subtitle.

If you have a logo, you can place it in the `public` folder and set it via `heroImage`, if you want to display another logo in night mode, you can use `heroImageDark`. For better A11y, we recommend that you set the description of Logo to `heroAlt`.

You can set the background image through `bgImage` and `bgImageDark`, but you need to pay attention that you must fill in the full URL or absolute path. If you want the information to be displayed in full screen, you can set `heroFullScreen: true`.

If you need to customize some styles, you can set the style of the logo and background image through `heroImageStyle` and `bgImageStyle`.

Typically, you might want to display some projects, books, articles, links, friend links, etc. on your homepage. You can set them via `projects`, which is an array where each element is an object with the following keys:

- `name`: required, project name
- `link`: required, project link, fill in an external path or absolute path
- `desc`: project description
- `icon`: Icon, you can fill in full path or absolute path image link, also icon FontClass is supported

  We provide these icons as built-in support either: `"link"`, `"project"`, `"book"`, `"article"`, `"friend"`。

::: info

For complete configuration items, see [Blog Home Frontmatter Configuration](../../config/frontmatter/blog-home.md).

:::

::: info Living Demo

- [A blog homepage for current docs](../../demo/blog-home.md)
- [A customized blog homepage for current docs](../../demo/custom-blog-home.md)

:::

## Portfolio Style HomePage

Set `layout: PortfolioHome` and `home: true` in the frontmatter of homepage.

To describe yourself, set `titles` in frontmatter with titles that fits you.

You are expected to set a image of yours with `avatar` (and `avatarDark` for darkmode if needed). You can also set `bgImage` (and `bgImageDark` for darkmode if needed) to customize background image. Advanced style adjusting can be done with `avatarStyle` and `bgImageStyle` option.

The name is default to `author` option in theme options, while you can set `name` in frontmatter to customize it. The welcome message can also be customized through `welcome` option in frontmatter.

By default, media links set in `blog.medias` is displayed, while you can also set `medias` in frontmatter with `name` `icon` and `url` for each media to override.

::: info Living Demo

- [A portfolio demo](../../demo/portfolio-home.md)

:::
