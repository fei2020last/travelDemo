<template>
  <div class="footer-bar-container">
    <div class="mt-5 bg-white">
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
      <div class="container py-5">
        <div class="d-flex justify-content-center">
          <div class="px-5 text-center">
            <a
              href="https://www.instagram.com/kawalab.hosei/"
              class="text-decoration-none"
            >
              <svg
                class="svg-inline--fa fa-instagram fa-w-14 fa-lg"
                aria-hidden="true"
                data-prefix="fab"
                data-icon="instagram"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
              <br />
              <small class="text-muted">Instagram</small>
            </a>
          </div>
          <div class="px-5 text-center">
            <a
              href="https://www.facebook.com/KawakuboLaboratory/"
              class="text-decoration-none"
            >
              <svg
                class="svg-inline--fa fa-facebook fa-w-14 fa-lg"
                aria-hidden="true"
                data-prefix="fab"
                data-icon="facebook"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                ></path>
              </svg>
              <br />
              <small class="text-muted">Facebook</small>
            </a>
          </div>
          <div class="px-5 text-center">
            <a
              href="https://www.youtube.com/channel/UCXTu6pOTA6X-HCpEqAQMQgQ"
              class="text-decoration-none"
            >
              <svg
                class="svg-inline--fa fa-youtube fa-w-18 fa-lg"
                aria-hidden="true"
                data-prefix="fab"
                data-icon="youtube"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
              <br />
              <small class="text-muted">YouTube</small>
            </a>
          </div>
        </div>
        <div class="mt-5 row mx-0">
          <div class="col-3 col-md text-center">
            <a
              @click.stop="getActiveTab('TOP')"
              class="text-decoration-none"
              style="cursor: pointer;"
              >TOP</a
            >
          </div>
          <div class="col-3 col-md text-center">
            <a
              @click.stop="getActiveTab('About')"
              class="text-decoration-none"
              style="cursor: pointer;"
              >About</a
            >
          </div>
          <div class="col-3 col-md text-center">
            <a
              @click.stop="getActiveTab('Contact')"
              style="cursor: pointer;"
              class="text-decoration-none"
              >Contact</a
            >
          </div>
        </div>
        <hr />
        <div class="mt-3 text-center">
          <img
            src="../../assets/brand-muted-300x300.png"
            width="100"
            height="100"
          />
        </div>
        <div class="text-center lead">
          法政大学デザイン工学部建築学科 川久保研究室
        </div>
        <p class="small text-muted text-center" style="margin-bottom: 0;">
          © 2023 Kawakubo Laboratory All rights reserved
        </p>
        <!-- <div class="text-center">
          <a
            class="small text-muted"
            href="https://beian.miit.gov.cn/"
            target="_blank"
          >
            黑ICP备2023004983号
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterBar",
  components: {},
  data() {
    return {
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
    getActiveTab(val) {
      this.$emit("activeName", val);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.footer-bar-container {
  svg:not(:root).svg-inline--fa {
    overflow: visible;
  }
  .svg-inline--fa.fa-w-14 {
    width: 0.875em;
  }
  .svg-inline--fa.fa-lg {
    vertical-align: -0.225em;
  }
  .fa-lg {
    font-size: 1.33333em;
    line-height: 0.75em;
    vertical-align: -0.0667em;
  }
  .svg-inline--fa {
    display: inline-block;
    font-size: 18px;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
}
</style>
