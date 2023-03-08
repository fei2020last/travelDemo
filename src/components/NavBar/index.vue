<template>
  <div class="nav-bar-container">
    <div class="container">
      <a class="navbar-brand" href="https://kawakubo-lab.ws.hosei.ac.jp">
        <img
          alt="Brand"
          src="https://kawakubo-lab.ws.hosei.ac.jp/favicon/brand-300x300.png"
          width="30"
          height="30"
        />
        &nbsp;
        <div>川久保研究室</div>
      </a>
      <div class="collapse navbar-collapse">
        <ul
          class="navbar-nav ml-auto my-2 my-lg-0"
          v-for="(item, index) in tabs"
          :key="index"
        >
          <li
            class="nav-item"
            :class="{ 'is-checked': activeName == item }"
            @click.stop="getActiveTab(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      tabs: ["TOP", "About", "Contact"],
      activeName: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    getActiveTab(item) {
      this.activeName = item;
      console.log(111);
      this.$emit("activeName", this.activeName);
    }
  },
  created() {
    this.getActiveTab("TOP");
  }
};
</script>
<style lang="scss" scoped>
.nav-bar-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
      flex-wrap: nowrap !important;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .navbar-brand {
      display: inline-block;
      padding-top: 0.32rem;
      padding-bottom: 0.32rem;
      margin-right: 1rem;
      font-size: 1.125rem;
      line-height: inherit;
      white-space: nowrap;
      color: #008000;
      display: flex;
      align-items: center;
    }
    @media (min-width: 992px) {
      .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
      }
    }
    .navbar-collapse {
      flex-basis: 100%;
      flex-grow: 1;
      align-items: center;
    }
    @media (min-width: 992px) {
      .navbar-expand-lg .navbar-nav {
        flex-direction: row;
      }
      .mb-lg-0,
      .my-lg-0 {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
      }
    }
    .ml-auto,
    .mx-auto {
      margin-left: auto !important;
    }
    .navbar-nav {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }

    // ---------------------

    @media (min-width: 992px) {
      .nav-item {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
    }
    .nav-item {
      padding: 0.5rem 1rem;
      color: rgba(0, 0, 0, 0.5);
      font-family: "Nunito", sans-serif;
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 1.6;
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
      }
    }
    .is-checked {
      color: #008000;
    }
  }
}
</style>
