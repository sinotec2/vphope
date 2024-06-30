---
title: Markdown 介紹
icon: fab fa-markdown
dir:
  collapsible: false
  order: 1
category:
  - 教程
  - Markdown
tag:
  - 介紹
  - Markdown
---

Markdown 是一種可以使用普通文本編輯器編寫的標記語言，通過簡單的標記語法，它可以使普通文本内容具有一定的格式。

Markdown 的目標是實現「易讀易寫」。

<!-- more -->

## 概述

不過最需要强調的便是它的可讀性。一份使用 Markdown 格式撰寫的文件應該可以直接以纯文字發佈，並且看起來不會像是由許多標籤或是格式指令所構成。Markdown 語法受到一些既有 text-to-HTML 格式的影響，包括 [Setext][1]、[atx][2]、[Textile][3]、[reStructuredText][4]、[Grutatext][5] 和 [EtText][6]，然而最大灵感來源其實是纯文字的电子邮件格式。

因此 Markdown 的語法全由標點符號所組成，並經過嚴谨慎選，是為了讓它們看起來就像所要表達的意思。像是在文字兩旁加上星號，看起來就像\*强調\*。Markdown 的列表看起來，嗯，就是列表。假如你有使用過电子邮件，引言寫法看起來就真的像是引用一段文字。

Markdown 具有一系列衍生版本，用於擴展 Markdown 的功能 (如表格、註解、内嵌 HTML 等等) ，這些功能原初的 Markdown 尚不具備，它們能讓 Markdown 轉換成更多的格式，例如 LaTeX，Docbook。Markdown 增强版中比較有名的有 Markdown Extra、MultiMarkdown、 Maruku 等。這些衍生版本要麼基於工具，如 Pandoc；要麼基於網站，如 GitHub 和 Wikipedia，在語法上基本兼容，但在一些語法和渲染效果上有改動。

## 用途

Markdown 的語法有個主要的目的: 用來作為一種網絡内容的*寫作*用語言。Markdown 的重點在於，它能讓文件更容易閱讀、編寫。因此，Markdown 的格式語法只涵蓋纯文字可以涵蓋的範圍。

Markdown 的語法簡洁明了、學習容易，而且功能比纯文本更强，因此有很多人用它寫網誌。世界上最流行的網誌平台 WordPress 能很好的支持 Markdown。

用於編寫說明文檔，並且以 `README.md` 的文件名保存在軟件的目錄下面。

除此之外，我們還可以快速將 Markdown 轉化為演讲 PPT、Word 產品文檔、LaTex 論文甚至是用非常少量的程式碼完成最小可用原型。在數據科學领域，Markdown 已經廣泛使用，極大地推進了動態可重複性研究的歷史進程。

### 行内 HTML

不在 Markdown 涵蓋範圍之外的標籤，都可以直接在文件里面用 HTML 撰寫。不需要額外標注這是 HTML 或是 Markdown；只要直接加標籤就可以了。

只有塊元素 ── 比如 `<div>`、`<table>`、`<pre>`、`<p>` 等標籤，必須在前後加上空行，以利與内容区隔。而且這些 (元素) 的開始與結尾標籤，不可以用 tab 或是空白來縮進。Markdown 的解析器有智慧型判斷，可以避免在塊標籤前後加上没有必要的 `<p>` 標籤。

举例來說，在 Markdown 文件里加上一段 HTML 表格:

```md
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```

請注意，Markdown 語法在 HTML 塊標籤中將不會被進行處理。例如，你無法在 HTML 塊内使用 Markdown 形式的 `*强調*`。

### 特殊字元自動轉換

在 HTML 文件中，有兩個字元需要特殊處理: `<` 和 `&` 。 `<` 符號用於起始標籤，`&` 符號則用於標記 HTML 實體，如果你只是想要使用這些符號，你必須要使用實體的形式，像是 `&lt;` 和 `&amp;`。

`&` 符號其實很容易讓寫作網絡文件的人感到困扰，如果你要打「AT&T」 ，你必須要寫成「`AT&amp;T`」 ，還得轉換網址内的 `&` 符號，如果你要連結到 `http://images.google.com/images?num=30&q=larry+bird`

你必須要把網址轉成:

```html
http://images.google.com/images?num=30&amp;q=larry+bird
```

才能放到連結標籤的 `href` 屬性里。不用說也知道這很容易忘記，這也可能是 HTML 標準檢查所檢查到的錯誤中，數量最多的。

Markdown 允許你直接使用這些符號，但是你要小心跳脱字元的使用，如果你是在 HTML 實體中使用 `&` 符號的话，它不會被轉換，而在其它情形下，它則會被轉換成 `&amp;`。所以你如果要在文件中插入一個著作權的符號，你可以這樣寫:

```md
&copy;
```

Markdown 將不會對這段文字做修改，但是如果你這樣寫:

```md
AT&T
```

Markdown 就會將它轉為:

```html
AT&amp;T
```

類似的狀况也會發生在 `<` 符號上，因為 Markdown 支持 [行内 HTML](#行内-html) ，如果你是使用 `<` 符號作為 HTML 標籤使用，那 Markdown 也不會對它做任何轉換，但是如果你是寫:

```md
4 < 5
```

Markdown 將會把它轉換為:

```html
4 &lt; 5
```

不過需要注意的是，code 範圍内，不論是行内還是塊， `<` 和 `&` 兩個符號都*一定*會被轉換成 HTML 實體，這項特性讓你可以很容易地用 Markdown 寫 HTML code (和 HTML 相對而言， HTML 語法中，你要把所有的 `<` 和 `&` 都轉換為 HTML 實體，才能在 HTML 文件里面寫出 HTML code。)

---

## 塊元素

### 段落和換行

一個段落是由一個以上相连接的行句組成，而一個以上的空行則會切分出不同的段落 (空行的定義是顯示上看起來像是空行，便會被視為空行。比方說，若某一行只包含空白和 tab，則該行也會被視為空行) ，一般的段落不需要用空白或斷行縮進。

「一個以上相连接的行句組成」這句话其實暗示了 Markdown 允許段落内的强迫斷行，這個特性和其他大部分的 text-to-HTML 格式不一樣 (包括 MovableType 的「Convert Line Breaks」選項) ，其它的格式會把每個斷行都轉成 `<br />` 標籤。

<!-- markdownlint-disable MD038 -->

如果你*真的*想要插入 `<br />` 標籤的话，在行尾加上兩個以上的空格 (` `) 或斜線 (`/`)，然後按 Enter。

<!-- markdownlint-enable MD038 -->

是的，這確實需要花比較多功夫來插入 `<br />` ，但是「每個換行都轉換為 `<br />`」的方法在 Markdown 中並不适合， Markdown 中 email 式的 [塊引言][bq] 和多段落的 [列表][l] 在使用換行來排版的時候，不但更好用，還更好閱讀。

### 標題

標題能顯示出文章的結構。

Markdown 支持兩種標題的語法，[Setext][1] 和 [atx][2] 形式。

Setext 形式是用底線的形式，利用 `=` (最高阶標題) 和 `-` (第二阶標題) ，例如:

```md
# This is an H1

## This is an H2
```

任何數量的 `=` 和 `-` 都可以有效果。

Atx (推荐)形式則是在行首插入 1 到 6 個 `#` ，對應到標題 1 到 6 阶，例如:

- H1: `# Header 1`
- H2: `## Header 2`
- H3: `### Header 3`
- H4: `#### Header 4`
- H5: `##### Header 5`
- H6: `###### Header 6`

### Blockquotes

Markdown 使用 email 形式的塊引言，如果你很熟悉如何在 email 信件中引言，你就知道怎麼在 Markdown 文件中建立一個塊引言，那會看起來像是你强迫斷行，然後在每行的最前面加上 `>` :

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

Markdown 也允許你只在整個段落的第一行最前面加上 `>` :

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

塊引言可以有阶層 (例如: 引言内的引言) ，只要根據層數加上不同數量的 `>` :

```md
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
```

引言的塊内也可以使用其他的 Markdown 語法，包括標題、列表、程式碼區塊等:

```md
> ## This is a header.
>
> 1. This is the first list item.
> 1. This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");
```

任何標準的文字編輯器都能簡單地建立 email 樣式的引言，例如 BBEdit ，你可以選取文字後然後從選單中選擇*增加引言阶層*。

### 列表

Markdown 支持有序列表和無序列表。

無序列表使用减號作為列表標記(也可使用星號、加號):

```md
- Red
- Green
- Blue
```

也可以(不建議):

```md
- Red
- Green
- Blue

* Red
* Green
* Blue
```

有序列表則使用數字接著一個英文句點:

```md
1.  Bird
2.  McHale
3.  Parish
```

很重要的一點是，你在列表標記上使用的數字並不會影響輸出的 HTML 結果，上面的列表所產生的 HTML 標記為:

```html
<ol>
  <li>Bird</li>
  <li>McHale</li>
  <li>Parish</li>
</ol>
```

如果你的列表標記寫成:

```md
1. Bird
1. McHale
1. Parish
```

你都會得到完全相同的 HTML 輸出。重點在於，你可以讓 Markdown 文件的列表數字和輸出的結果相同，或是你懒一點都寫作 `1` 你可以完全不用在意數字的正確性。

列表項目標記通常是放在最左邊，但是其實也可以縮進，最多三個空白，項目標記後面則一定要接著至少一個空白或 tab。

要讓列表看起來更漂亮，你可以把内容用固定的縮進整理好:

```md
- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.
```

但是如果你很懒，那也不一定需要:

```md
- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.
```

如果列表項目間用空行分開， Markdown 會把項目的内容在輸出時用 `<p>` 標籤包起來，举例來說:

```md
- Bird
- Magic
```

會被轉換為:

```html
<ul>
  <li>Bird</li>
  <li>Magic</li>
</ul>
```

但是這個:

```md
- Bird

- Magic
```

會被轉換為:

```html
<ul>
  <li><p>Bird</p></li>
  <li><p>Magic</p></li>
</ul>
```

列表項目可以包含多個段落，每個項目下的段落都必須縮進 4 個空白或是一個 tab :

```md
1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
```

如果你每行都有縮進，看起來會看好很多，當然，再次地，如果你很懒惰，Markdown 也允許:

```md
- This is a list item with two paragraphs.

  This is the second paragraph in the list item. You're
  only required to indent the first line. Lorem ipsum dolor
  sit amet, consectetuer adipiscing elit.

- Another item in the same list.
```

如果要在列表項目内放進引言，那 `>` 就需要縮進:

```md
- A list item with a blockquote:

  > This is a blockquote
  > inside a list item.
```

當然，項目列表很可能會不小心產生，像是下面這樣的寫法:

```md
1986. What a great season.
```

換句话說，也就是在行首出現*數字-句點-空白*，要避免這樣的狀况，你可以在句點前面加上反斜線。

```md
1986\. What a great season.
```

### 程式碼區塊

和程式碼相關的寫作或是標籤語言原始碼通常會有已經排版好的程式碼區塊，通常這些塊我們並不希望它以一般段落文件的方式去排版，而是照原來的樣子顯示，Markdown 會用 `<pre>` 和 `<code>` 標籤來把程式碼區塊包起來。

要在 Markdown 中建立程式碼區塊很簡單，只要簡單地縮進 4 個空白或是 1 個 tab 就可以，例如，下面的輸入:

```md
This is a normal paragraph:

This is a code block.
```

Markdown 會轉換成:

```html
<p>This is a normal paragraph:</p>

<pre>
  <code>This is a code block.</code>
</pre>
```

這裡的縮進 (4 個空白或是 1 個 tab) ，都會被移除，例如:

```md
Here is an example of AppleScript:

tell application "Foo"
beep
end tell
```

會被轉換為:

```html
<p>Here is an example of AppleScript:</p>

<pre><code>tell application "Foo"
  beep
end tell
</code></pre>
```

一個程式碼區塊會一直持续到没有縮進的那一行 (或是文件結尾) 。

在程式碼區塊里面， `&` 、 `<` 和 `>` 會自動轉成 HTML 實體，這樣的方式讓你非常容易使用 Markdown 插入範例用的 HTML 原始碼，只需要複製粘贴，再加上縮進就可以了，剩下的 Markdown 都會幫你處理，例如:

````md
```
<div class="footer">
  &copy; 2004 Foo Corporation
</div>
```
````

會被轉換為:

```html
<pre>
  <code>&lt;div class="footer"&gt;
  &amp;copy; 2004 Foo Corporation
&lt;/div&gt;</code>
</pre>
```

程式碼區塊中，一般的 Markdown 語法不會被轉換，像是星號便只是星號，這表示你可以很容易地以 Markdown 語法撰寫 Markdown 語法相關的文件。

如果你想要在程式碼區塊里輸入用 Markdown 表示的程式碼庫，你可以進行嵌套。

`````md
````md
```js
const a = 1;
```
````
`````

會渲染為

````md
```js
const a = 1;
```
````

### 分隔線

你可以在一行中用三個或以上的星號、减號、底線來建立一個分隔線，行内不能有其他東西。你也可以在星號中間插入空白。下面每種寫法都可以建立分隔線:

```html
---(建議) * * * *** ***** - - - ---------------------------------------
```

## 行内元素

### 連結

Markdown 支持兩種形式的連結語法: *行内*和*參考*兩種形式。

不管是哪一種，連結的文字都是用 `[方括號]` 來標記。

要建立一個行内形式的連結，只要在方塊括號後面马上接著括號並插入網址連結即可，如果你還想要加上連結的 title 文字，只要在網址後面，用双引號把 title 文字包起來即可，例如:

```html
This is [an example](http://example.com/ "Title") inline link. [This
link](http://example.net/) has no title attribute.
```

會產生:

```html
<p>
  This is <a href="http://example.com/" title="Title"> an example</a> inline
  link.
</p>

<p><a href="http://example.net/">This link</a> has no title attribute.</p>
```

如果你是要連結到同樣主機的資源，你可以使用相對路徑:

```md
See my [About](/about/) page for details.
```

參考形式的連結使用另外一個方括號接在連結文字的括號後面，而在第二個方括號里面要填入用以辨識連結的標籤:

```md
This is [an example][id] reference-style link.
```

接著，在文件的任意處，你可以把這個標籤的連結内容定義出來:

```md
[id]: http://example.com/ "Optional Title Here"
```

連結定義的形式為:

- 方括號，輸入連結的標識 ID
- 冒號
- 一個以上的空白或 tab
- 連結的網址
- 選擇性地增加 title 内容，可以用單引號、双引號或是括號包括

下面這三種連結的定義相同:

```md
[foo]: http://example.com/ "Optional Title Here"
[foo]: http://example.com/ "Optional Title Here"
[foo]: http://example.com/ "Optional Title Here"
```

**請注意:** 有一個已知的問題是 Markdown.pl 1.0.1 會忽略單引號包起來的連結 title。

連結網址也可以用方括號包起來:

```md
[id]: http://example.com/ "Optional Title Here"
```

你也可以把 title 屬性放到下一行，也可以加一些縮進，網址太長的话，這樣會比較好看:

```md
[id]: http://example.com/longish/path/to/resource/here "Optional Title Here"
```

網址定義只有在產生連結的時候用到，並不會直接出現在文件之中。

連結辨識標籤可以有字母、數字、空白和標點符號，但是並**不**区分大小寫，因此下面兩個連結是一樣的:

```md
[link text][a]
[link text][a]
```

*預設的連結標籤*功能讓你可以省略指定連結標籤，這種情形下，連結標籤和連結文字會視為相同，要用預設連結標籤只要在連結文字後面加上一個空的方括號，如果你要讓 "Google" 連結到 google.com，你可以簡化成:

```md
[Google][]
```

然後定義連結内容:

```md
[google]: http://google.com/
```

由於連結文字可能包含空白，所以這種簡化的標籤内也可以包含多個文字:

```md
Visit [Daring Fireball][] for more information.
```

然後接著定義連結:

```md
[daring fireball]: http://daringfireball.net/
```

連結的定義可以放在文件中的任何一個地方，我比較偏好直接放在連結出現段落的後面，你也可以把它放在文件最後面，就像是注解一樣。

下面是一個參考式連結的範例:

```md
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/ "Google"
[2]: http://search.yahoo.com/ "Yahoo Search"
[3]: http://search.msn.com/ "MSN Search"
```

如果改成用連結名稱的方式寫:

```md
I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/ "Google"
[yahoo]: http://search.yahoo.com/ "Yahoo Search"
[msn]: http://search.msn.com/ "MSN Search"
```

上面兩種寫法都會產生下面的 HTML。

```html
<p>
  I get 10 times more traffic from
  <a href="http://google.com/" title="Google">Google</a> than from
  <a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>
  or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.
</p>
```

下面是用行内形式寫的同樣一段内容的 Markdown 文件，提供作為比較之用:

```md
I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").
```

參考式的連結其實重點不在於它比較好寫，而是它比較好讀，比較一下上面的範例，使用參考式的文章本身只有 81 個字元，但是用行内形式的連結却會增加到 176 個字元，如果是用纯 HTML 格式來寫，會有 234 個字元，在 HTML 格式中，標籤比文字還要多。

使用 Markdown 的參考式連結，可以讓文件更像是瀏覽器最後產生的結果，讓你可以把一些標記相關的資讯移到段落文字之外，你就可以增加連結而不讓文章的閱讀感覺被打斷。

### 强調

Markdown 使用星號 (`*`) 和底線 (`_`) 作為標記强調字詞的符號，被 `*` 或 `_` 包圍的字詞會被轉成用 `<em>` 標籤包圍，用兩個 `*` 或 `_` 包起來的话，則會被轉成 `<strong>`，例如:

```md
**double asterisks** (建議)

**double underscores** (建議)

_single asterisks_

_single underscores_
```

會轉成:

```html
<em>single asterisks</em>

<em>single underscores</em>

<strong>double asterisks</strong>

<strong>double underscores</strong>
```

你可以隨便用你喜歡的樣式，唯一的限制是，你用什麼符號開啟標籤，就要用什麼符號結束。

强調也可以直接插在文字中間:

```md
un*frigging*believable
```

但是如果你的 `*` 和 `_` 兩邊都有空白的话，它們就只會被當成普通的符號。

如果要在文字前後直接插入普通的星號或底線，你可以用反斜線:

```md
\*this text is surrounded by literal asterisks\*
```

### 程式碼

如果要標記一小段行内程式碼，你可以用反引號把它包起來 (`` ` ``) ，例如:

```md
Use the `printf()` function.
```

會產生:

```md
<p>Use the <code>printf()</code> function.</p>
```

如果要在程式碼内插入反引號，你可以用多個反引號來開啟和結束行内程式碼:

```md
``There is a literal backtick (`) here.``
```

這段語法會產生:

```html
<p><code>There is a literal backtick (`) here.</code></p>
```

程式碼碼区段的起始和結束端都可以放入一個空白，起始端後面一個，結束端前面一個，這樣你就可以在区段的一開始就插入反引號:

```md
A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``
```

會產生:

```html
<p>A single backtick in a code span: <code>`</code></p>

<p>A backtick-delimited string in a code span: <code>`foo`</code></p>
```

在程式碼碼区段内，`&` 和方括號都會被轉成 HTML 實體，這樣會比較容易插入 HTML 原始碼，Markdown 會把下面這段:

```md
Please don't use any `<blink>` tags.
```

轉為:

```html
<p>Please don't use any <code>&lt;blink&gt;</code> tags.</p>
```

你也可以這樣寫:

```md
`&#8212;` is the decimal-encoded equivalent of `&mdash;`.
```

以產生:

```html
<p>
  <code>&amp;#8212;</code> is the decimal-encoded equivalent of
  <code>&amp;mdash;</code>.
</p>
```

### 圖片

很明顯地，要在纯文字應用中設計一個「自然」的語法來插入圖片是有一定難度的。

Markdown 使用一種和連結很相似的語法來標記圖片，同樣也允許兩種樣式: _行内_ 和 _參考_。

行内圖片的語法看起來像是:

```md
![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
```

詳細叙述如下:

- 一個惊叹號 `!`
- 一個方括號，里面放上圖片的替代文字
- 一個普通括號，里面放上圖片的網址，最後還可以用引號包住並加上
  選擇性的 title 文字。

參考式的圖片語法則長得像這樣:

```md
![Alt text][id]
```

「id」是圖片參考的名稱，圖片參考的定義方式則和連結參考一樣:

```md
[id]: url/to/image "Optional title attribute"
```

到目前為止， Markdown 還没有辦法指定圖片的寬高，如果你需要的话，你可以使用普通的 `<img>` 標籤。

### 其他文本樣式

- 删除:`~~delete~~`
- 段落: 段落之間空一行
- 換行符: 一行結束時輸入兩個空格

---

## 其它

### 自動連結

Markdown 支持比較簡短的自動連結形式來處理網址和电子邮件信箱，只要是用方括號包起來， Markdown 就會自動把它轉成連結，連結的文字就和連結位置一樣，例如:

```md
<http://example.com/>
```

Markdown 會轉為:

```html
<a href="http://example.com/">http://example.com/</a>
```

自動的邮件連結也很類似，只是 Markdown 會先做一個編碼轉換的過程，把文字字元轉成 16 進位碼的 HTML 實體，這樣的格式可以混淆一些不好的信箱地址收集機器人，例如:

```md
<address@example.com>
```

Markdown 會轉成:

```html
<a
  href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;"
  >&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a
>
```

在瀏覽器里面，這段字串會變成一個可以點擊的 <address@example.com> 連結。

(這種作法雖然可以混淆不少的機器人，但並無法全部挡下來，不過這樣也比什麼都不做好些。無論如何，公開你的信箱終究會引來廣告信件的。)

### 轉義字符

Markdown 可以利用反斜線來插入一些在語法中有其它意義的符號，例如: 如果你想要用星號加在文字旁邊的方式來做出强調效果 (但不用 `<em>` 標籤) ，你可以在星號的前面加上反斜線:

```md
\*literal asterisks\*
```

Markdown 支持在下面這些符號前面加上反斜線來幫助插入普通的符號:

- `\` 反斜線
- `` ` `` 反引號
- `*` 星號
- `_` 底線
- `{}` 大括號
- `[]` 方括號
- `()` 括號
- `#` 井字號
- `+` 加號
- `-` 减號
- `.` 英文句點
- `!` 惊叹號

## 快捷鍵

| 輸出後的效果  | Markdown   | 快捷鍵         |
| ------------- | ---------- | -------------- |
| **Bold**      | `**text**` | Ctrl/⌘ + B     |
| _Emphasize_   | `*text*`   | Ctrl/⌘ + I     |
| `Inline Code` | \`code\`   | 選中後 `` ` `` |

## 表格

|     居中      |         右對齊 | 左對齊         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右對齊使用`-:` | 左對齊使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |

## Emoji

`:emoji名稱:`

Example: `:smile:` :smile:

你可以在 [Emoji 列表](./emoji/README.md) 找到所有可用的 Emoji。

## Markdown 效果範例

- [查看詳情](demo.md)

[1]: http://docutils.sourceforge.net/mirror/setext.html
[2]: http://www.aaronsw.com/2002/atx/
[3]: http://textism.com/tools/textile/
[4]: http://docutils.sourceforge.net/rst.html
[5]: http://www.triptico.com/software/grutatxt.html
[6]: http://ettext.taint.org/doc/
[bq]: #blockquotes
[l]: #列表
