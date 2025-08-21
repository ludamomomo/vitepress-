---
outline: deep
---

# WRYMessage

how to use

```md
<template>
    <div>
      <button @click="showInfo">显示信息消息</button>
      <button @click="showSuccess">显示成功消息</button>
      <button @click="showError">显示错误消息</button>

      <!-- 挂载 Message 组件（用来暴露方法） -->
      <WRYMessage ref="messageRef" />
    </div>
</template>


<script setup>
拿到Message的实例
const messageRef = ref(null)
//不同的按钮对应的弹出信息的效果是不同的 其中message的信息可动态调整 并且对应不同的颜色提示
const showInfo = () => {
  messageRef.value.useMessage({ message: '这是一条信息提示', type: 'info' })
}
const showSuccess = () => {
  messageRef.value.useMessage({ message: '操作成功！', type: 'success' })
}
const showError = () => {
  messageRef.value.useMessage({ message: '发生错误！', type: 'error' })
}

</script>

## 功能
这个Message组件在点击按钮的同时 在屏幕的中上方区域跳出对应不同颜色 不同信息的输入框 
你可以自由的去输入信息的内容
这个信息的颜色分别是普通颜色、绿色、红色就对应了不同的答案效果 他可以显示结果是正确的还是错误的 
