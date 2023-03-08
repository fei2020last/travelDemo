<!--
 * @Project: APM
 * @version: v1.0 r
 * @Author: mayf
 * @Description: 
 * @Date: 2023-03-08 13:18:07
 * @LastEditors: mayf
 * @LastEditTime: 2023-03-08 22:52:57
 * @FilePath: \travelDemo\src\views\index.vue
-->
<template>
  <div class="index-container">
    <nav-bar @activeName="getActiveName" />
    <div class="d-none d-md-block">
      <div class="row mx-0">
        <div
          class="col"
          v-for="(item, index) in colorList"
          :key="index"
          :style="`height:3px;background:${item}`"
        ></div>
      </div>
    </div>
    <!-- 动态组件 -->
    <component :is="activeName" />
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("@/components/NavBar"),
    TOP: () => import("./home/top.vue"),
    About: () => import("./home/about.vue"),
    Contact: () => import("./home/contact.vue")
  },
  data() {
    return {
      activeName: "",
      colorList: [
        "#E5243B",
        "#DDA63A",
        "#4C9F38",
        "#C5192D",
        "#FF3A22",
        "#27BDE2",
        "#FCC30C",
        "#A21942",
        "#FE6926",
        "#DD1367",
        "#FD9D24",
        "#BF8B2E",
        "#3F7E44",
        "#0B97D9",
        "#56C02A",
        "#00689D",
        "#19486A"
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    getActiveName(val) {
      this.activeName = val;
      console.log("activeName", this.activeName);
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.index-container {
  @media (min-width: 768px) {
    .d-md-block {
      display: block !important;
    }
  }
  .d-none {
    display: none;
  }
  .mx-0 {
    margin-right: 0 !important;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
}
</style>
