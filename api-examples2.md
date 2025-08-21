---
outline: deep
---

# WRYCollapse

how to use
```md
<template>
    <WRYCollapse>
      <template #header>标题 1</template>
      <template #content>这是第一个标题对应的内容。</template>
    </WRYCollapse>

    <WRYCollapse>
      <template #header>标题 2</template>
      <template #content>这是第二个标题对应的内容。</template>
    </WRYCollapse>

    <WRYCollapse>
      <template #header>标题 3</template>
      <template #content>这是第三个标题对应的内容。</template>
    </WRYCollapse>
</template>

## 使用
<script setup>
    <WRYCollapse>
      <template #header>xxxxxx（标题名称）</template>
      <template #content>xxxxxxxxxxxxxx（内容）</template>
    </WRYCollapse>
</script>

# 功能
你可以点击标题从而出现下拉框 这个下拉框出现的面积区域就是对应标题的内容 
你可以在此标题内任意编辑你想要的内容

