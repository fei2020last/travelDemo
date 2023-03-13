<!--
 * @Project: APM
 * @version: v1.0 r
 * @Author: mayf
 * @Description: 
 * @Date: 2023-03-08 20:51:22
 * @LastEditors: mayf
 * @LastEditTime: 2023-03-13 21:14:51
 * @FilePath: \travelDemo\src\components\NavBar\index.vue
-->
<template>
  <div class="nav-bar-container">
    <div
      class="navbar navbar-expand-lg navbar-light bg-white py-2"
      style="z-index: 10000!important"
    >
      <div class="container">
        <a
          class="navbar-brand text-primary"
          href="https://kawakubo-lab.ws.hosei.ac.jp"
        >
          <img
            alt="Brand"
            src="https://kawakubo-lab.ws.hosei.ac.jp/favicon/brand-300x300.png"
            width="30"
            height="30"
          />
          川久保研究室
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click.stop="showTabs"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- tabs标签 -->
        <div
          class="navbar-collapse show"
          id="navbarResponsive"
          :class="{ checked: show }"
        >
          <ul class="navbar-nav ml-auto my-2 my-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{
                  'disabled text-primary': active == 'TOP',
                  'text-muted': active != 'TOP'
                }"
                @click.stop="getActiveTab('TOP')"
                >TOP</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{
                  'disabled text-primary': active == 'About',
                  'text-muted': active != 'About'
                }"
                @click.stop="getActiveTab('About')"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{
                  'disabled text-primary': active == 'Contact',
                  'text-muted': active != 'Contact'
                }"
                @click.stop="getActiveTab('Contact')"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
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
      <div
        class="d-md-none border-bottom border-primary"
        style="border-width: 3px !important"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  props: {},
  components: {},
  data() {
    return {
      active: "TOP",
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
      ],
      show: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    getActiveTab(val) {
      this.active = val;
      this.$emit("activeName", val);
    },
    showTabs() {
      this.show = !this.show;
    }
  },
  created() {
    this.getActiveTab("TOP");
  }
};
</script>
<style lang="scss" scoped>
.nav-bar-container {
  .navbar-collapse {
    position: relative;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  @media only screen and (max-width: 960px) {
    .navbar-collapse {
      height: 0;
    }
  }
  .checked {
    height: 125px !important;
  }
}
</style>
