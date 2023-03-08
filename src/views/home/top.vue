<!--
 * @Project: APM
 * @version: v1.0 r
 * @Author: mayf
 * @Description: 
 * @Date: 2023-03-08 19:52:21
 * @LastEditors: mayf
 * @LastEditTime: 2023-03-08 23:31:37
 * @FilePath: \travelDemo\src\views\home\top.vue
-->
<template>
  <div class="top-container">
    <div class="top-header">
      <div class="container">
        <strong class="text-primary">
          <svg
            class="text-icon"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="info-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
            ></path>
          </svg>

          川久保研究室では現在、ポスドク・研究補助員・秘書を募集しております。ご関心のある方は
          <a href="/contact">こちら</a>からご連絡ください。
        </strong>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.top-container {
  .top-header {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    border-bottom: 3px solid #008000;
    // @media (min-width: 576px) {
    //   .container {
    //     max-width: 540px;
    //   }
    // }
    // @media (min-width: 768px) {
    //   .container {
    //     max-width: 720px;
    //   }
    // }
    // @media (min-width: 992px) {
    //   .container {
    //     max-width: 960px;
    //     flex-wrap: nowrap !important;
    //   }
    // }
    // @media (min-width: 1200px) {
    //   .container {
    //     max-width: 1140px;
    //   }
    // }
    .container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }
    .text-primary {
      color: #008000 !important;
    }
    .text-icon {
      display: inline-block;
      font-size: inherit;
      height: 1em;
      overflow: visible;
      vertical-align: -0.125em;
      width: 1em;
      margin-right: 0.5rem;
    }
  }
}
</style>
