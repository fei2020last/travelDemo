<template>
  <div class="index-container">
    <nav-bar @activeName="getActiveName" />
    <component :is="activeName" />
    <footer-bar @activeName="getActiveName" />
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("@/components/NavBar"),
    TOP: () => import("./home/top.vue"),
    About: () => import("./home/about.vue"),
    Contact: () => import("./home/contact.vue"),
    FooterBar: () => import("@/components/FooterBar")
  },
  data() {
    return {
      activeName: ""
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
}
</style>
