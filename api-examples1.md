---
outline: deep
---

# WRYButton

How to use

```md
<template>
    <WRYButton type="primary" :disabled="false" @click="handleButtonClick">Primary</WRYButton>
    <WRYButton type="secondary" :disabled="false" @click="handleButtonClick">Secondary</WRYButton>
    <WRYButton type="default" :disabled="true">Disabled</WRYButton>
</template>

### 属性
type="primary"
type="secondary"
type="default"
disabled="false"(or "true")
### 方法
<script setup>
const handleButtonClick = () => {
  alert('点击按钮所产生的内容');
};
</script>

# 功能
你可以传入type从而实现不同效果的按钮颜色 
并且还可以传入disabled的值来动态调整按钮是否能被点击

