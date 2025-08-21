---
outline: deep
---

# WRYDrawer

how to use
```md
<template>
    <div>
      <WRYDrawer :drawerContent="drawerContent" />
    </div>
</template>

<script setup>
// 自定义抽屉内容
const drawerContent = `
  <h3>欢迎来到我的抽屉</h3>
  <p>这是一些自定义内容，可以包含 <strong>HTML</strong> 标记。</p>
  <ul>
    <li>选项 1</li>
    <li>选项 2</li>
    <li>选项 3</li>
  </ul>
`;

</script>

# 功能
当你点击按钮的时候 右侧屏幕会弹出一个长方形页面 并且里面有内容和一个关闭按钮 
只有当你点击了关闭按钮才会关闭长方形的页面
并且里面的内容可以编辑 只要传递:drawerContent="drawerContent"即可编辑

