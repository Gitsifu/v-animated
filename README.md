## Vue.js Animated
### 概述

Vue.js动画指令插件,此插件基于animate.css4.x和wow.js实现

### 安装

```bash
npm install animate.css v-animated --save
```
**注意：animate.css版本请使用4.x**

```javascript
import Vue from 'vue'
import 'animate.css'
import Animated from 'v-animated'

Vue.use(Animated)
// or 参数请参考：https://www.delac.io/wow/docs.html
Vue.use(Animated,{
     boxClass:     'wow',      // default
     animateClass: 'animate__animated', // default
     offset:       0,          // default
     mobile:       true,       // default
     live:         true        // default
})
```

### 使用

```vue
// 更多动效请查阅：https://animate.style/
<h1 v-animated="'animate__bounce'">v-animated</h1>
```

或者不用指令直接使用class

```vue
<h1 class="wow animate__bounce">v-animated</h1>
```

