---
outline: deep
---

# WRYForm

how to use

```md
<template>
    <WRYForm @submit="handleFormSubmit" />
</template>

## 方法
<script setup>
    //此方法的目的是为了接收到form表单里面的数据
    const handleFormSubmit = (data)=>{
        console.log('父组件接收到表单数据:', data)
    }
</script>

# 功能
你可以直接利用表单的功能 其中还包括了表单的验证功能 当你去使用表单填写信息的时候 
如果信息的格式不符合当下输入框 在点击提交的时候会报错
也不会提交整个内容 只有当输入的信息全部都符合格式的时候 
才会正确的保存处理 并且信息全部都打印到控制台上面

