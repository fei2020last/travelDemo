<!--
 * @Project: APM
 * @version: v1.0 r
 * @Author: mayf
 * @Description: 
 * @Date: 2023-03-08 19:52:21
 * @LastEditors: mayf
 * @LastEditTime: 2023-03-14 13:16:31
 * @FilePath: \travelDemo\src\views\home\top.vue
-->
<template>
  <div class="top-container">
    <!-- 背景图片 -->
    <div
      class="fixed-top d-none d-xl-block"
      style="opacity: 0.3; z-index: -10000;"
    >
      <div
        data-ride="carousel"
        data-interval="4000"
        data-pause="false"
        class="carousel slide carousel-fade bg-white"
      >
        <section class="slider-contaner">
          <ul class="slider">
            <li class="slider-item slider-item1"></li>
            <li class="slider-item slider-item2"></li>
            <li class="slider-item slider-item3"></li>
            <li class="slider-item slider-item4"></li>
          </ul>
        </section>
      </div>
    </div>
    <div
      class="jumbotron-image fixed-top bg-white d-xl-none"
      style="opacity: 0.3;"
    ></div>
    <div
      v-if="showTip"
      role="alert"
      class="alert alert-dismissible fade show rounded-0 border-top-0 border-right-0 border-left-0 border-bottom border-w-3 border-primary bg-light"
    >
      <div class="container">
        <button
          type="button"
          data-dismiss="alert"
          aria-label="Close"
          class="close"
          @click.stop="showTip = false"
        >
          <span aria-hidden="true">×</span>
        </button>
        <strong class="text-primary"
          ><svg
            class="svg-inline--fa fa-info-circle fa-w-16 mr-2"
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
          川久保研究室では現在、ポスドク・研究補助員・秘書を募集しております。ご関心のある方は<a>こちら</a>からご連絡ください。
        </strong>
      </div>
    </div>
    <div class="container" style="margin-top:18vh">
      <div>
        <h1
          class="text-center text-dark display-2 d-none d-md-block text-shadow"
          style="text-shadow: white 5px 5px 5px;"
        >
          川久保研究室
        </h1>
      </div>
      <h1
        class="text-center text-dark d-md-none text-shadow display-4"
        style="text-shadow: white 5px 5px 5px;"
      >
        川久保研究室
      </h1>

      <p class="lead text-center px-4 mb-0 text-shadow">
        世界の共通言語SDGsを活かした<br class="d-md-none" />
        建築・都市づくりを研究しています
      </p>
      <p class="lead text-center px-4 text-shadow">
        <br class="d-lg-none" />
        <a class="text-decoration-none"
          >「持続可能な開発目標（SDGs: Sustainable Development Goals）とは</a
        >
      </p>
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal1.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal2.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal3.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal4.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal5.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal6.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal7.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal8.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal9.png"
                  class="w-100"
              /></a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal10.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal11.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal12.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal13.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal14.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal15.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal16.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <a
                ><img
                  src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal17.png"
                  class="w-100"
              /></a>
            </div>
            <div class="col p-1">
              <img
                src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal18.png"
                class="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <p class="lead text-center px-4 text-shadow mt-lg-2">
        <br class="d-lg-none" />
        <a target="_blank" class="text-decoration-none"
          >環境研究総合推進費 研究課題 1-2104
          ローカルSDGs推進による地域課題の解決に関する研究 HPはこちら</a
        >
      </p>
    </div>

    <div class="container" style="margin-top:50vh">
      <div class="row">
        <div class="col-lg-6 align-self-stretch">
          <div class="bg-white p-4 p-sm-5 h-100 shadow">
            <h2 class="text-center text-primary mb-0">
              <a class="text-decoration-none">News</a>
            </h2>
            <p class="text-center small text-muted">最新トピックス</p>
            <div class="py-2 ">
              <small class="text-muted">
                2月15日
              </small>
              <h3 class="h5 mb-0 text-truncate">
                <a class="text-decoration-none">
                  鎌田君、有坂君、高畑君がAIJ 若手優秀賞受賞を受賞しました
                </a>
              </h3>
              <p class="mb-0 text-muted small text-truncate">
                川久保研究室の鎌田智光君、有坂優輝君、高畑頼君の 3 名が 2022
                年度日本建築学会大会（北海道）学術講演会
                において発表を行い、若手優秀発表賞を受賞しました。鎌田智光
                発表題目：WEB
                アンケート調査に基づく日本全国の住宅における環境要素・部屋・場所別の環境性能の実態
                把握有坂優輝発表題目：不動産業における SDGs
                達成に向けた取り組みの時系列変化に関する研究 その 2：SDGs 達成
                に向けた取り組みの進展度の変遷及び取り組む企業の特徴高畑頼
                発表題目：自治体における SDGs
                達成に向けた取組の進捗管理のための指標に関する研究 その
                9：自治体 SDGs 達成に向けた取組の効率性評価に関する研究
                川久保研究室では、引き続き学術成果の社会還元に貢献してまいります。2022
                年度 日本建築学会大会（北海道）学術講演会 環境工学委員会
                若手優秀発表賞受賞者リスト
                http://news-sv.aij.or.jp/kankyo/s0/wakate/22wakate.pdf
              </p>
            </div>
            <div class="py-2  border-top ">
              <small class="text-muted">
                1月19日
              </small>
              <h3 class="h5 mb-0 text-truncate">
                <a class="text-decoration-none">
                  博士課程在籍中の増田大美さんの公聴会を実施します
                </a>
              </h3>
              <p class="mb-0 text-muted small text-truncate">
                博士課程在籍中の増田大美さんの公聴会を以下の通り実施します。SDGsを原動力としたまちづくりにご関心のある方は是非ご参加ください。日時：2023年1月28日（土）10:00～12:00場所：新宿区市谷田町2-33
                法政大学市ヶ谷田町校舎2階T204教室（Zoomによるリモート参加も可能）学位申請者：増田大美論文題目：
                Exploring local governments’ role towards delivery of
                sustainable development - Analyzing practices in
                Japan審査小委員会：主査 川久保俊、 副査
                網野禎昭、亀山康子、福井恒明（順不同・敬称略）Zoom
                URL：https://hosei-ac-jp.zoom.us/j/83269632149?pwd=T252dnJqYUdTN0NGVi9ZVXhFMUx6Zz09
                ミーティングID: 832 6963 2149パスコード：
                230128※リモート参加をご希望の方は上記URLにアクセスの上、事前登録をお願いします。
              </p>
            </div>
            <div class="py-2  border-top ">
              <small class="text-muted">
                2022年12月
              </small>
              <h3 class="h5 mb-0 text-truncate">
                <a class="text-decoration-none">
                  「SDGsターゲットパネル」を公開しました
                </a>
              </h3>
              <p class="mb-0 text-muted small text-truncate">
                SDGsに関する理解を促進し、行動を誘発する学習ツールである「SDGsスタディパネル」の第二弾として「ターゲットパネル」を開発し、研究室HP上に公開しました。
                SDGsを構成する17のゴールには、それぞれのゴールを具体化した計169のターゲット（行動目標）が設定されています。SDGsアクションを考えるうえで重要な要素ですので、ターゲットを学習することには大きな意味があります。しかし、ターゲットは数が多く、一つ一つの内容が難しいことから、学習するには多大な労力を要します。
                そこで、ターゲットの学習をサポートする「ターゲットパネル」を開発しました。「ターゲットパネル」作成にあたっては以下の工夫を施しています。
                ・169のターゲットをそれぞれアイコンと要約文で分かりやすく説明
                ・17のゴール毎に、ターゲット同士を関係図に整理し、全体像と相互関係を視覚的に説明
                ・ターゲットに関連するキーワードを盛り込み、社会課題との関連性を明示
                &nbsp;
                「SDGsスタディパネル」の第一弾「ゴールパネル」と合わせて、教育の現場はもちろん、ワークショップや講演会など様々な場面でご活用ください。
                &nbsp; パネルのダウンロードはこちらから
                https://kawakubo-lab.ws.hosei.ac.jp/sdgs/contents &nbsp;
                ※本パネルは環境研究総合推進費採択課題「ローカルSDGs推進による地域課題の解決に関する研究」の一環として大阪大学及び兵庫県立大学の研究チームと共同開発したものです。https://local-sdgs-research.net/
              </p>
            </div>
            <div class="py-2  border-top ">
              <small class="text-muted">
                2022年10月
              </small>
              <h3 class="h5 mb-0 text-truncate">
                <a class="text-decoration-none">
                  脱炭素ボードゲームCN2050を開発しました
                </a>
              </h3>
              <p class="mb-0 text-muted small text-truncate">
                2050年カーボンニュートラルを実現するためにも我々ひとりひとりの脱炭素アクションの実践が求められています。しかしながら、具体的にどのような行動を起こせば温室効果ガスを効果的に減らせるのか分からないという方も多いのではないかと思います。そこで、自宅でできる脱炭素アクションを遊びながら学べる「CN2050～脱炭素ボードゲーム～」を産学連携で開発しました。脱炭素行動を楽しく学びたいという方は是非手に取ってみてください。ボードゲームの詳細はこちらからゲームデザイン：遠山彬彦（Dig-A-Doo）アートワーク：たかみまこと企画・制作：A&amp;R
                GAMES製造：盤上遊戯製作所製作協力：法政大学デザイン工学部建築学科川久保研究室（ゲームデザインの支援、脱炭素行動の効果の推計などを行いました）
              </p>
            </div>
            <div class="py-2  border-top ">
              <small class="text-muted">
                2022年7月
              </small>
              <h3 class="h5 mb-0 text-truncate">
                <a class="text-decoration-none">
                  住環境と居住者の健康状態に関する研究成果が国際誌に掲載されました
                </a>
              </h3>
              <p class="mb-0 text-muted small text-truncate">
                国際誌Japan Architectural
                Reviewに論文が掲載されました。掲載雑誌名：JAR (Japan
                Architectural Review)論文名：Influence of residential
                performance on residents health status (part
                2)著者名：川久保俊、鎌田智光、村上周三、伊香賀俊治、星旦二、安藤慎太朗論文概要：戸建住宅居住者も共同住宅居住者も住環境が良いほど健康な人の割合が多いことが全国調査の結果で明らかになりました。なお、戸建住宅居住者は循環器系疾患の有病割合が高く、共同住宅居住者はアレルギー性疾患の有病割合が高い傾向が示されました。以上のように住居形態によって罹患しやすい疾病に差があることが判明しました。
              </p>
            </div>
            <div class="mt-3 text-right">
              <a class="text-decoration-none">
                ニュース一覧
                <svg
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
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-5 mt-lg-0 align-self-stretch">
          <div class="bg-white p-4 p-sm-5 h-100 shadow">
            <h2 class="text-center text-primary mb-0">
              <a class="text-decoration-none">About</a>
            </h2>
            <p class="text-center small text-muted mb-0">
              川久保研究室・研究室メンバーについて
            </p>
            <div class="text-center pt-3">
              <img
                src="https://kawakubo-lab.ws.hosei.ac.jp/images/about.jpg"
                class="rounded w-100"
                style="max-width: 350px;"
              />
            </div>
            <p class="mt-5">
              環境工学の視点から未来のあるべき建築・都市像を探求しています。建築・都市は、我々人間にとって重要な生活基盤・社会インフラです。良質な建築・都市環境が確保されなければ快適・健康的な生活はできません。
            </p>
            <div class="text-right">
              <a class="text-decoration-none">
                さらに詳しく
                <svg
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
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 row">
        <div class="col-lg-6 align-self-stretch">
          <div class="bg-white p-4 p-sm-5 h-100 shadow">
            <h2 class="text-center text-primary mb-0">
              <a class="text-decoration-none">
                Research
              </a>
            </h2>
            <p class="text-center small text-muted">川久保研究室の研究内容</p>
            <div class="py-3">
              <div class="row justify-content-center">
                <div class="col-1"></div>
                <div class="col-2 p-0">
                  <img
                    src="https://kawakubo-lab.ws.hosei.ac.jp/images/thumbnails/research/research1.png"
                    class="w-100 rounded-circle"
                  />
                </div>
                <div class="col-2 p-0">
                  <img
                    src="https://kawakubo-lab.ws.hosei.ac.jp/images/thumbnails/research/research2.png"
                    class="w-100 rounded-circle"
                  />
                </div>
                <div class="col-2 p-0">
                  <img
                    src="https://kawakubo-lab.ws.hosei.ac.jp/images/thumbnails/research/research3.png"
                    class="w-100 rounded-circle"
                  />
                </div>
                <div class="col-2 p-0">
                  <img
                    src="https://kawakubo-lab.ws.hosei.ac.jp/images/thumbnails/research/research4.png"
                    class="w-100 rounded-circle"
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-2 p-0">
                  <img
                    src="https://kawakubo-lab.ws.hosei.ac.jp/images/thumbnails/research/research5.png"
                    class="w-100 rounded-circle"
                  />
                </div>
                <div class="col-2 p-0">
                  <img
                    src="https://kawakubo-lab.ws.hosei.ac.jp/images/thumbnails/research/research6.png"
                    class="w-100 rounded-circle"
                  />
                </div>
                <div class="col-2 p-0">
                  <img
                    src="https://kawakubo-lab.ws.hosei.ac.jp/images/thumbnails/research/research7.png"
                    class="w-100 rounded-circle"
                  />
                </div>
                <div class="col-2 p-0">
                  <img
                    src="https://kawakubo-lab.ws.hosei.ac.jp/images/thumbnails/research/research8.png"
                    class="w-100 rounded-circle"
                  />
                </div>
                <div class="col-1"></div>
              </div>
            </div>
            <p class="mt-3">
              川久保研究室では、自治体・建築産業とSDGsに関する研究や、建築環境が我々人間へ及ぼす影響の研究を行っています。
            </p>
            <div class="text-right">
              <a class="text-decoration-none">
                さらに詳しく
                <svg
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
              </a>
            </div>
          </div>
        </div>
        <div class="mt-5 mt-lg-0 col-lg-6 align-self-stretch">
          <div class="bg-white p-4 p-sm-5 h-100 shadow">
            <h2 class="text-center mb-0">
              <a class="text-decoration-none">
                Application
              </a>
            </h2>
            <p class="text-center small text-muted mb-0">
              開発したオンラインアプリケーション
            </p>
            <div class="py-3 text-center">
              <img
                src="https://kawakubo-lab.ws.hosei.ac.jp/images/sdgsIcons/goal18.png"
                class="w-100"
                style="max-width: 200px;"
              />
            </div>
            <p>
              川久保研究室は、SDGsに積極的に取り組む方々を支援するオンラインアプリケーションを開発・公開しています。
            </p>
            <div class="text-right">
              <a class="text-decoration-none">
                さらに詳しく
                <svg
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Top",
  components: {},
  data() {
    return {
      showTip: true
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.top-container {
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
  /*slider start*/
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .slider-contaner {
    width: 100%;
    position: relative;
  }
  /*设置图片的高度，请根据具体需要修改百分比，响应式及时修改此值*/
  .slider,
  .slider-item {
    padding-bottom: 50%;
  }
  .slider-item + .slider-item {
    opacity: 0;
  }
  .slider-item {
    width: 100%;
    position: absolute;
    animation-timing-function: linear;
    animation-name: fade;
    animation-iteration-count: infinite;
    animation-duration: 24s;
    background-size: 100%;
  }
  .slider-item1 {
    animation-delay: -1s;
  }
  .slider-item2 {
    animation-delay: 5s;
  }
  .slider-item3 {
    animation-delay: 11s;
  }
  .slider-item4 {
    animation-delay: 17s;
  }
  @keyframes fade {
    0% {
      opacity: 0;
      z-index: 2;
    }
    5% {
      opacity: 1;
      z-index: 1;
    }
    20% {
      opacity: 1;
      z-index: 1;
    }
    30% {
      opacity: 0;
      z-index: 0;
    }
    100% {
      opacity: 0;
      z-index: 0;
    }
  }
  /*设置背景，响应式请利用媒体查询根据断点修改路径*/
  .slider-item1 {
    background-image: url("https://kawakubo-lab.ws.hosei.ac.jp/images/topPage/lab0.jpg");
  }
  .slider-item2 {
    background-image: url("https://kawakubo-lab.ws.hosei.ac.jp/images/topPage/lab1.jpg");
  }
  .slider-item3 {
    background-image: url("https://kawakubo-lab.ws.hosei.ac.jp/images/topPage/lab2.jpg");
  }
  .slider-item4 {
    background-image: url("https://kawakubo-lab.ws.hosei.ac.jp/images/topPage/lab3.jpg");
  }
}
</style>
