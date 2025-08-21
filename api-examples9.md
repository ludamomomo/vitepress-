---
outline: deep
---

# WRYTabs

how to use

```md
<template>
    <div id="tabs">
      <WRYTabs :tabs="['User', 'Config', 'Role', 'Task']" :initial-tab="'User'">
        <template #default="{ activeTab }">
          <div v-if="activeTab === 'User'">User的内容区</div>
          <div v-if="activeTab === 'Config'">Config的内容区</div>
          <div v-if="activeTab === 'Role'">Role的内容区</div>
          <div v-if="activeTab === 'Task'">Task的内容区</div>
        </template>
      </WRYTabs>
    </div>
</template>

<style>
#tabs {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


## 功能
点击不同的tabs 就显示其tabs下面的不同的内容区域 
其中每一个不同的tabs所对应的内容区域是一一对应的
