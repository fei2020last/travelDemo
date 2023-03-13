<!--
 * @Project: APM
 * @version: v1.0 r
 * @Author: mayf
 * @Description: 
 * @Date: 2023-03-08 19:43:35
 * @LastEditors: mayf
 * @LastEditTime: 2023-03-13 21:22:10
 * @FilePath: \travelDemo\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
