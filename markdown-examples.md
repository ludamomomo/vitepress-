# wry-ui的使用教程

本页内容目的在于教会你如何下载使用wry-ui

## 下载
使用npm的方式进行下载

**download**

````md
npm install wry-ui
````

**use**

```js{4}
import { createApp } from 'vue';
import App from './App.vue';
  // 确保样式被加载
import '../node_modules/wry-ui/dist/style.css'
  //引入wry-ui
import WryUI from 'wry-ui'

const app = createApp(App);
  //可全局实用
app.use(WryUI)
app.mount('#app');

```


## 更多
更多内容可以去github看下wry-ui的源码
源码地址:(https://github.com/ludamomomo/wry-ui.git).
