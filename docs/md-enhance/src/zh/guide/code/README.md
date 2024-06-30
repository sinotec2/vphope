---
title: 程式碼
icon: laptop-code
dir:
  collapsible: false
  order: 5
index: false
---

<!-- #region intro -->

此外掛程式提供以下功能來增强程式碼編寫。

- 程式碼選項卡：為程式碼區塊增加選項卡。
- 程式碼範例：在瀏覽器中顯示和運行程式碼片段。
- 互動範例：嵌入外部範例網站。
- Kotlin 互動範例：響應式 Kotlin 範例。
- Vue 互動範例：響應式 Vue 範例。

<!-- #endregion intro -->

<!-- more -->

## 案例

<!-- #region demo -->

### 程式碼選項卡

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance
```

@tab yarn

```bash
yarn add -D vuepress-plugin-md-enhance
```

@tab:active npm

```bash
npm i -D vuepress-plugin-md-enhance
```

:::

- [查看詳情](./code-tabs.md)

### 程式碼範例

::: normal-demo 一個普通 Demo

```html
<h1>VuePress Theme Hope</h1>
<p><span id="very">非常</span>强大!</p>
```

```js
document.querySelector("#very").addEventListener("click", () => {
  alert("非常强大");
});
```

```css
span {
  color: red;
}
```

:::

- [查看詳情](./demo/README.md)

### 互動範例

::: playground#ts TS 案例

@file index.ts

```ts
const msg = "hello world";

const speak = (msg: string) => console.log(msg);

speak(msg);
```

:::

- [查看詳情](./playground.md)

### Kotlin 互動範例

::: kotlin-playground Kotlin 互動範例

@file main.kt

```kotlin
class Contact(val id: Int, var email: String)

fun main(args: Array<String>) {
    val contact = Contact(1, "mary@gmail.com")
    println(contact.id)
}
```

:::

- [查看詳情](./kotlin-playground.md)

### Vue 互動範例

::: vue-playground Vue 互動範例

@file App.vue

```vue
<script setup>
import { ref } from "vue";

const msg = ref("Hello World!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::

- [查看詳情](./vue-playground.md)

### Sandpack 互動範例

::: sandpack#vue Vue 互動範例

@file /src/App.vue

```vue
<script setup>
import { ref } from "vue";

const msg = ref("Hello World!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::

- [查看詳情](./sandpack.md)

<!-- #endregion demo -->
