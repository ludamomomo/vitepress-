---
outline: deep
---

# WRYFix

how to use

```md
<template>
    <WRYFix :options="dropdownOptions" :dialogTitle="dialogTitle" :dialogContent="dialogContent" />
</template>

<script setup>
// 自定义下拉框选项
const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

// 自定义弹出框内容
const dialogTitle = '标题xxx';
const dialogContent = '内容区域xxxxxxxxxxxxxxx';
</script>

# 功能
当你在点击输入框的时候 会有几个不同的选择项 选择项的数量和内容可被编辑
点击不同的选择就会在整个屏幕中跳出一个框 具体内容也可被编辑 
