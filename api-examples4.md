---
outline: deep
---

# WRYDropdown

how to use

```md
<template>
    <div>
      <WRYDropdown :actions="dropdownActions1" />
      <WRYDropdown :actions="dropdownActions2" />
    </div>
</template>

<script setup>
const dropdownActions1 = ['Option 1', 'Option 2', 'Option 3'];
const dropdownActions2 = ['Item A', 'Item B', 'Item C', 'Item D'];
</script>

# 功能
你可以直接点击框并且在其下方会出现不同的选择项 只有当你再次点击框的时候才会收起来 
并且选项的数量和内容可以自定义
只需传入:actions="dropdownActions1"或者:actions="dropdownActions2"
