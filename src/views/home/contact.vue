<template>
  <div class="contact-container">
    <div>
      <div class="mt-5 container">
        <div
          class="jumbotron jumbotron-fluid p-0 mb-0 border-left border-primary border-w-3 shadow-sm"
        >
          <div class="bg-light p-5">
            <h1 class="text-center text-primary mb-0">Contact</h1>
            <p class="text-center text-muted small">お問合せ</p>
            <p class="text-center mb-0">
              下記フォームから川久保研究室へお問合せを送信できます。<br />
              お急ぎの方は、法政大学デザイン工学部建築学科事務室（
              <a href="tel:03-5228-1403">03-5228-1403</a>
              ）までご連絡ください。
            </p>
          </div>
        </div>
        <div data-v-4c2584f6="">
          <div data-v-4c2584f6="" class="mt-5 row justify-content-center">
            <div data-v-4c2584f6="" class="col-6 col-md-4 col-lg-3 text-center">
              <div
                data-v-4c2584f6=""
                class="border-bottom border-primary border-w-2"
              >
                <h2 data-v-4c2584f6="" class="h3 mb-0 text-primary">
                  Step1
                </h2>
                <p data-v-4c2584f6="" class="text-muted small">フォーム入力</p>
              </div>
            </div>
            <div data-v-4c2584f6="" class="col-6 col-md-4 col-lg-3 text-center">
              <div data-v-4c2584f6="" class="">
                <h2 data-v-4c2584f6="" class="h3 mb-0 text-muted">
                  Step2
                </h2>
                <p data-v-4c2584f6="" class="text-muted small">内容の確認</p>
              </div>
            </div>
          </div>
          <form
            data-v-4c2584f6=""
            method="post"
            action="https://kawakubo-lab.ws.hosei.ac.jp/contact/send"
          >
            <input
              data-v-4c2584f6=""
              type="hidden"
              name="_token"
              value="TOTYcDIZJ5tSPGMH72MKDHdha6UvDaa3I8MLMwk0"
            />
            <input data-v-4c2584f6="" type="hidden" name="lastName" />
            <input data-v-4c2584f6="" type="hidden" name="firstName" />
            <input data-v-4c2584f6="" type="hidden" name="email" />
            <input data-v-4c2584f6="" type="hidden" name="subject" />
            <input data-v-4c2584f6="" type="hidden" name="message" />
            <div data-v-4c2584f6="" class="mt-4">
              <p data-v-4c2584f6="" class="small text-center text-muted">
                下記の全ての項目を入力してください
              </p>
              <div data-v-4c2584f6="" class="row justify-content-center">
                <div data-v-4c2584f6="" class="col-md-8 col-lg-6">
                  <div data-v-4c2584f6="" class="row">
                    <div data-v-4c2584f6="" class="col-6">
                      姓<sup data-v-4c2584f6="" class="text-primary">∗</sup>
                      <input
                        data-v-4c2584f6=""
                        type="text"
                        placeholder="姓"
                        class="form-control rounded-0"
                      />
                      <small data-v-4c2584f6="" class="text-danger"></small>
                    </div>
                    <div data-v-4c2584f6="" class="col-6">
                      名<sup data-v-4c2584f6="" class="text-primary">∗</sup>
                      <input
                        data-v-4c2584f6=""
                        type="text"
                        placeholder="名"
                        class="form-control rounded-0"
                      />
                      <small data-v-4c2584f6="" class="text-danger"></small>
                    </div>
                    <div data-v-4c2584f6="" class="mt-2 col-12">
                      Eメールアドレス<sup
                        data-v-4c2584f6=""
                        class="text-primary"
                        >∗</sup
                      >
                      <input
                        data-v-4c2584f6=""
                        type="email"
                        placeholder="Eメールアドレス"
                        class="form-control rounded-0"
                      />
                      <small data-v-4c2584f6="" class="text-danger"></small>
                    </div>
                    <div data-v-4c2584f6="" class="mt-2 col-12">
                      件名<sup data-v-4c2584f6="" class="text-primary">∗</sup>
                      <input
                        data-v-4c2584f6=""
                        type="text"
                        placeholder="お問合せ件名"
                        class="form-control rounded-0"
                      />
                      <small data-v-4c2584f6="" class="text-danger"></small>
                    </div>
                    <div data-v-4c2584f6="" class="mt-2 col-12">
                      内容<sup data-v-4c2584f6="" class="text-primary">∗</sup>
                      <textarea
                        data-v-4c2584f6=""
                        placeholder="お問合せ内容"
                        rows="4"
                        max-rows="6"
                        class="form-control rounded-0"
                      ></textarea>
                      <small data-v-4c2584f6="" class="text-danger"></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-4c2584f6="" class="mt-4 row justify-content-center">
              <div data-v-4c2584f6="" class="col-3 text-right">
                <button
                  data-v-4c2584f6=""
                  type="button"
                  disabled="disabled"
                  class="btn btn-block btn-outline-secondary rounded-0"
                >
                  <svg
                    data-v-4c2584f6=""
                    class="svg-inline--fa fa-arrow-circle-left fa-w-16"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="arrow-circle-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"
                    ></path>
                  </svg>
                  戻る
                </button>
              </div>
              <div data-v-4c2584f6="" class="col-3">
                <div data-v-4c2584f6="">
                  <button
                    data-v-4c2584f6=""
                    type="button"
                    class="btn btn-block btn-outline-primary rounded-0"
                  >
                    次へ
                    <svg
                      data-v-4c2584f6=""
                      class="svg-inline--fa fa-arrow-circle-right fa-w-16"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="arrow-circle-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
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
.contact-container {
  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  .svg-inline--fa.fa-w-16 {
    width: 1em;
  }
  svg:not(:root).svg-inline--fa {
    overflow: visible;
  }
}
</style>
