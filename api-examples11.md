---
outline: deep
---

# WRYTree

how to use

```md
<template>
  <Tree :data="treeData" />
</template>

<script setup>
const treeData = ref([
  {
    id: '1',
    label: 'Level one 1',
    children: [
      {
        id: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            id: '1-1-1',
            label: 'Level three 1-1-1',
            children: []
          }
        ]
      },
      {
        id: '1-2',
        label: 'Level two 1-2',
        children: [
          {
            id: '1-2-1',
            label: 'Level three 1-2-1',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '2',
    label: 'Level one 2',
    children: [
      {
        id: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            id: '2-1-1',
            label: 'Level three 2-1-1',
            children: []
          }
        ]
      },
      {
        id: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            id: '2-2-1',
            label: 'Level three 2-2-1',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '3',
    label: 'Level one 3',
    children: [
      {
        id: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            id: '3-1-1',
            label: 'Level three 3-1-1',
            children: []
          }
        ]
      },
      {
        id: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            id: '3-2-1',
            label: 'Level three 3-2-1',
            children: []
          }
        ]
      }
    ]
  }
])
</script>

# 功能
当你点击三角形状的图标的时候 会显示几个嵌套在其中的不同内容 
当你再次点击嵌套在其中的内容时又会出现第二层嵌套
并且你还可以根据内容灵活的去调整不同的嵌套层级和内容
