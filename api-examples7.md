---
outline: deep
---

# WRYInput

how to use

```md
<template>
    <div>
      <h2>密码输入框</h2>
      <!-- 密码输入框 -->
      <WRYInput v-model="password" type="password" placeholder="输入密码" />
      <p>密码: {{ password }}</p>
    </div>
</template>

<script setup>
//引入ref
import { ref } from 'vue'
//用ref创建password
const password = ref('')
</script>
# 功能
你可以点击输入框右侧的按钮 可实现对内容的隐藏或者显示的功能 
还有一键清空的功能 你可以点击一次按钮就能实现对整个内容的清空处理
