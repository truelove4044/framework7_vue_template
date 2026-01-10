<template>
  <f7-page @page:init="initPage">
    <Layout>
      <template #mainContent>
        <f7-block class="page_block">
          <article class="blocks info">
            <div class="headshot_wrap">
              <div class="headshot"><img src="/images/photo.jpg" alt="建鴻的頭像" /></div>
            </div>

            <h1 class="title">建鴻 Nick</h1>
            哈囉，我是一名前端工程師，專注於 Vue 生態系的實務開發，主要使用 Vue.js、Nuxt 以及各類 UI Framework，累積近 10 年前端專案經驗，曾參與並完成多種規模與類型的前端系統建置。

            <br />
            <br />

            我擅長將複雜的業務流程轉化為清楚、穩定且易於維護的前端系統，並能在新舊技術並存的環境中推進專案落地，確保系統在實際營運情境下長期穩定運作。
            <br />
            <br />

            在實務上，我長期投入 iOS、Android 雙端 Web App、物流系統、客戶管理系統（CRM）、購物網站與官方網站等專案的前端開發，並負責實作 Google OAuth 與 LINE LIFF OAuth 登入流程。開發過程中，我涵蓋從頁面結構規劃、互動流程設計、狀態管理，到 API
            串接與實際上線調整等工作，並持續優化效能、結構可讀性與維護性，確保系統能因應長期擴充需求。

            <br />
            <br />

            <h3>架構與框架運用</h3>
            <ul>
              <li>具備 Nuxt 3 專案實戰經驗，能依 SEO、效能與專案型態判斷 SSR / CSR 的使用時機，並處理實務中常見的水合與首屏效能問題</li>
              <li>可依專案需求選用 Vuetify、Quasar、Framework 7 等 UI Framework，打造桌機、平板與行動裝置皆具備一致體驗的介面</li>
              <li>熟悉多頁型（MPA）與單頁應用（SPA）專案架構，能在新舊專案中彈性調整實作方式</li>
            </ul>

            <br />

            <h3>JavaScript 與互動實作</h3>
            <ul>
              <li>熟悉 JavaScript（ES6+） 語法與非同步流程（Promise、async / await）</li>
              <li>能處理複雜互動邏輯、表單驗證、多狀態切換與條件式渲染</li>
              <li>具備 jQuery 舊專案維護與重構經驗，能在不影響既有系統的前提下進行功能擴充與優化</li>
              <li>熟悉事件流、DOM 操作與效能優化技巧，避免不必要的重繪與重排</li>
            </ul>

            <br />

            <h3>樣式與版型管理</h3>
            <ul>
              <li>熟悉 HTML5 語意化結構，能兼顧可讀性、SEO 與無障礙需求</li>
              <li>擅長使用 SCSS / SASS 進行模組化樣式管理，建立可維護的樣式結構</li>
              <li>具備 Tailwind CSS、UnoCSS 實務經驗，能依專案需求選擇 Utility-first 或傳統樣式架構</li>
              <li>熟悉 RWD 響應式設計，能因應不同裝置尺寸與實際使用情境進行細部調整</li>
            </ul>

            <br />

            <h3>UI 邏輯與使用者體驗</h3>
            <ul>
              <li>能依 Figma、Adobe XD 設計稿進行精準切版，理解設計交付流程與設計師協作方式</li>
              <li>重視互動回饋、操作流暢度與使用者操作直覺，避免過度複雜的 UI 行為</li>
              <li>熟悉表單流程、列表操作、資料搜尋與篩選等高頻使用情境的 UX 設計原則</li>
            </ul>

            <br />

            <h3>前端整合與系統溝通</h3>
            <ul>
              <li>熟悉與後端 RESTful API / GraphQL API 的資料介接與錯誤處理</li>
              <li>能妥善管理 Authorization Header、Token 流程與 OAuth 登入狀態</li>
              <li>熟悉第三方服務整合，如 Google Maps API 與 OAuth 登入（Google Login、Facebook Login、LINE LIFF），以及 WebSocket、MQTT 等即時通訊技術。</li>
            </ul>

            <br />

            <h3>前端品質與維護性</h3>
            <ul>
              <li>重視程式結構可讀性與命名一致性，降低後續維護成本</li>
              <li>熟悉 GitFlow、GitHub / GitLab 協作流程，能在多人開發情境下穩定推進專案</li>
              <li>具備 無障礙 AA 規範 實作經驗，能在開發階段兼顧可及性需求</li>
            </ul>

            <br />
            <br />

            本作品集彙整了我在前端專案中的實務成果與核心技術，透過實際案例呈現我在介面設計、互動實作與系統整合上的能力與思維方式。
          </article>

          <section class="blocks">
            <h1 class="page_title">
              <span class="zh">作品集</span>
              <span class="en">Portfolio</span>
            </h1>

            <div class="portfolio">
              <div class="project" v-for="(item, index) in projects" :key="index" @click="openProject(item)">
                <div class="img" :class="{ mobile_style: item?.icon === 'device_phone_portrait' }">
                  <img :src="getProjectImage(item.image[0])" :alt="item.title" loading="lazy" />
                </div>
                <h2>
                  {{ item.title }}
                  <f7-icon :f7="item.icon"></f7-icon>
                </h2>
              </div>
            </div>
          </section>
        </f7-block>
      </template>

      <template #footer>
        <div class="portfolio_footer">
          <span>© 2026 建鴻</span>
          <span class="divider">·</span>
          <f7-link @click="showDisclaimer = true">作品集聲明與免責條款</f7-link>
        </div>
      </template>
    </Layout>

    <f7-popup v-model:opened="showDisclaimer">
      <f7-page>
        <f7-navbar>
          <f7-nav-left></f7-nav-left>
          <f7-nav-title>作品集聲明</f7-nav-title>
          <f7-nav-right>
            <f7-link @click="showDisclaimer = false">
              <f7-icon f7="xmark" />
            </f7-link>
          </f7-nav-right>
        </f7-navbar>

        <f7-page-content>
          <f7-block class="disclaimer_text">
            本作品集僅作為個人前端技術與實務經驗之展示用途，所呈現之專案內容皆為實際參與或負責之開發成果，惟部分專案因保密協議、公司政策或客戶需求限制，無法完整公開實際系統畫面、原始碼或內部流程，相關內容已進行適度調整或重製示意。
            <br />
            <br />
            作品集中所提及之公司名稱、品牌標誌、系統畫面與功能描述，其著作權與相關權利皆屬原權利人所有，僅用於說明個人參與範圍與技術能力，並無任何商業用途或侵權之意圖。
            <br />
            <br />
            本作品集所示之功能、流程與畫面設計，可能因專案時程、需求變更或系統版本更新而與實際上線版本有所差異，內容僅供參考。
          </f7-block>
        </f7-page-content>
      </f7-page>
    </f7-popup>

    <f7-popup class="project_detail" v-model:opened="showProject">
      <f7-page>
        <f7-navbar>
          <f7-nav-left></f7-nav-left>
          <f7-nav-title>{{ currentProject?.title }}</f7-nav-title>
          <f7-nav-right>
            <f7-link @click="showProject = false">
              <f7-icon f7="xmark" />
            </f7-link>
          </f7-nav-right>
        </f7-navbar>

        <f7-page-content>
          <f7-block>
            <Swiper
              :key="currentProject?.title"
              class="project_images"
              :modules="[Pagination, Navigation]"
              :pagination="{
                el: '.project-pagination',
                clickable: true
              }"
              :navigation="true"
              :space-between="12"
              @swiper="swiperRef = $event"
            >
              <SwiperSlide v-for="(img, i) in currentProject?.image" :key="i" :class="{ mobile_style: currentProject?.icon === 'device_phone_portrait' }">
                <img :src="getProjectImage(img)" />
              </SwiperSlide>
            </Swiper>

            <div class="project-pagination"></div>

            <div v-if="typeof currentProject?.introduction === 'string'" class="project_intro" v-html="currentProject.introduction"></div>

            <div v-else-if="Array.isArray(currentProject?.introduction)" class="project_intro">
              <ul>
                <li v-for="(item, i) in currentProject.introduction" :key="i" v-html="item"></li>
              </ul>
            </div>

            <div class="tech_block">
              <h3>技術棧</h3>
              <div class="tech_group">
                <strong>前端技術</strong>
                <span class="tech">
                  {{ currentProject?.technologyStack.frontend.join('、') }}
                </span>
              </div>
              <div v-if="currentProject?.technologyStack.backend.length" class="tech_group">
                <strong>後端介接</strong>
                <span class="tech">
                  {{ currentProject?.technologyStack.backend.join('、') }}
                </span>
              </div>
              <div v-if="currentProject?.technologyStack.tools.length" class="tech_group">
                <strong>開發工具</strong>
                <span class="tech">
                  {{ currentProject?.technologyStack.tools.join('、') }}
                </span>
              </div>
            </div>

            <div v-if="isLinkString" class="btns">
              <f7-button v-if="!currentProject.offline" fill external :href="currentProject.link" target="_blank">
                前往網站
                <f7-icon f7="arrow_right" />
              </f7-button>

              <f7-button v-else class="red" fill>已停止維護</f7-button>
            </div>

            <div v-else-if="isLinkObject" class="btns style1">
              <f7-button v-if="currentProject.link.ios" fill external :href="currentProject.link.ios" target="_blank" class="ios_btn">
                iOS 下載
                <f7-icon f7="arrow_right" />
              </f7-button>

              <f7-button v-if="currentProject.link.android" fill external :href="currentProject.link.android" target="_blank" class="android_btn">
                Android 下載
                <f7-icon f7="arrow_right" />
              </f7-button>
            </div>

            <div v-else class="warning">
              <f7-icon f7="exclamationmark_triangle" />
              本系統為內部管理平台，僅供特定單位使用，相關畫面與功能已於作品集中以示意方式呈現。
            </div>
          </f7-block>
        </f7-page-content>
      </f7-page>
    </f7-popup>
  </f7-page>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Navigation } from 'swiper/modules'

  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  const { showAlert } = useDialog()

  const showDisclaimer = ref(false)
  // prettier-ignore
  const projects = [
    {
      title: '晨光推廣平台',
      image: [
        'case1/1.jpg',
        'case1/2.jpg',
        'case1/3.jpg',
        'case1/4.jpg',
        'case1/5.jpg',
      ],
      icon: 'device_desktop',
      introduction: [
        '使用 Nuxt 3 與 Vue 3 建立 SSR 架構，強化 SEO 與首屏載入效能',
        '導入 UI 元件系統，快速建立一致性的版型與互動介面',
        '實作 RWD 響應式設計，支援桌機、平板與行動裝置瀏覽',
        '動態管理頁面標題與 SEO Meta 資訊，提升搜尋引擎可見度',
        '整合地圖服務，實作「離我最近」地點搜尋與定位功能',
        '實作商品列表、分類篩選與商品詳細頁互動流程',
        '建置購物車機制，支援即時數量調整與金額計算',
        '實作後台管理介面，處理商品、訂單與詢價資料',
        '使用 Pinia 狀態管理工具統一控管全域狀態與跨頁資料同步'
      ],
      link: 'https://sunshineprom-dev.muki001.com/',
      offline: false,
      technologyStack: {
        frontend: [
          'Nuxt 3',
          'Vue 3',
          'Vuetify',
          'JavaScript',
          'HTML5',
          'SCSS',
          'RWD',
          'Google Maps API'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Vite',
          'Docker',
          'Git',
        ],
      }
    },
    {
      title: '逢甲成就學生中心',
      image: [
        'case2/1.jpg',
        'case2/2.jpg',
        'case2/3.jpg',
        'case2/4.jpg',
        'case2/5.jpg',
        'case2/6.jpg',
        'case2/7.jpg',
        'case2/8.jpg',
        'case2/9.jpg',
        'case2/10.jpg'
      ],
      icon: 'device_desktop',
      introduction: [
        '使用 Nuxt 3 與 Vue 3 建立 SSR 架構，提升校園平台的 SEO 與整體效能',
        '實作 RWD 響應式設計，支援學生與企業於各類裝置瀏覽與操作',
        '整合 WebSocket 即時通道，同步職缺狀態與媒合事件，並支援學生與企業的即時通訊',
        '串接校內 NID OAuth 機制，取得學生身分與基本資料，簡化登入與驗證流程',
        '建置多層級內容模組，整合公告、活動、職涯資源與企業職缺資訊',
        '支援分類搜尋、分頁與卡片式列表呈現，提升大量資訊瀏覽效率',
        '串接 RESTful API，處理職缺資料、學生申請與媒合流程',
        '使用 Pinia 狀態管理工具統一控管全域狀態與跨頁共用資料，確保操作流程一致性',
      ],
      link: 'https://ssc.fcu.edu.tw/',
      offline: false,
      technologyStack: {
        frontend: [
          'Nuxt 3',
          'Vue 3',
          'Vuetify',
          'JavaScript',
          'HTML5',
          'TailwindCSS',
          'RWD',
          'WebSocket',
          'Fcu NID OAuth'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Vite',
          'Docker',
          'Git',
        ],
      }
    },
    {
      title: '資安署稽核資料分析平台',
      image: [
        'case3/1.jpg',
        'case3/2.jpg',
        'case3/3.jpg',
        'case3/4.jpg',
        'case3/5.jpg',
        'case3/6.jpg',
        'case3/7.jpg',
      ],
      icon: 'device_desktop',
      introduction: [
      '使用 Vue 3 與 Quasar 建立後台型系統介面，支援大量資料操作與管理需求',
      '整合 GraphQL API，依畫面需求動態取得稽核資料，降低資料傳輸與重複請求',
      '實作稽核資料彙整與狀態管理，協助即時掌握稽核進度與法遵情形',
      '導入 Apache ECharts，呈現稽核結果、風險分布與統計分析等視覺化圖表',
      '支援人工稽核與 AI 輔助稽核結果並行呈現，強化資料判讀與決策效率',
      '設計多層資料篩選、條件查詢與分析介面，提升稽核人員操作效率',
      '依使用者角色動態控管畫面顯示與操作權限，符合系統使用規範',
      '處理大量稽核資料列表，優化後台效能與操作體驗',
      '實作稽核相關數位化表單，整合欄位驗證、格式檢查與送出流程控管',
      '設計分析導向的 Dashboard 版型，協助快速掌握關鍵風險指標',
      '採用模組化元件設計，拆分分析區塊與管理功能，提升系統維護性與擴充彈性',
      '使用 Pinia 狀態管理工具統一控管全域狀態與跨頁共用資料，確保流程一致性'
    ],
      link: '',
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'Quasar',
          'TypeScript',
          'HTML5',
          'SCSS',
          'Apache ECharts'
        ],
        backend: [
          'GraphQL API',
        ],
        tools: [
          'node.js',
          'Vite',
          'Git',
          'Corder'
        ],
      }
    },
    {
      title: '昶青物流(全家集團)',
      image: [
        'case4/1.jpg',
        'case4/2.jpg',
        'case4/3.jpg',
        'case4/4.jpg',
        'case4/5.jpg',
        'case4/6.jpg',
        'case4/7.jpg'
      ],
      icon: 'device_desktop',
      introduction: [
        '使用 Vue 3 與 Framework7 建立企業級 B2B 物流管理系統介面，支援複雜物流作業情境',
        '實作配送單建立與管理流程，支援多配送點、多時段與配送條件設定',
        '建置商品與庫存管理介面，處理商品溫層、配送溫層與特殊需求設定',
        '支援多溫層（常溫、冷藏、冷凍）與溫層轉換規則，貼合實際物流作業流程',
        '實作配送狀態追蹤機制，即時呈現未出貨、配送中、收貨中與已完成等狀態',
        '支援單筆配送單拆分為多車次配送，並可獨立追蹤各車次配送狀況',
        '設計配送明細與貨件分車顯示介面，協助掌握各車次與貨件流向',
        '實作商品、載具與配送數量異動提示機制，降低配送資料錯誤風險',
        '支援多條件查詢與篩選（日期、狀態、配送點、商品、關鍵字），提升操作效率',
        '建置出貨明細與訂單報表介面，協助企業進行物流數據彙整與分析',
        '實作圖片上傳與配送備註功能，輔助現場作業紀錄與異常回報',
        '採用模組化元件與表單結構設計，提升大型物流系統的可維護性與擴充彈性',
        '串接 RESTful API，處理物流資料、配送流程與狀態同步',
        '使用 Pinia 狀態管理工具統一控管全域狀態與跨頁共用資料，確保流程一致性'
      ],
      link: '',
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS',
          'AWD'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Vite',
          'Git',
          'Laragon'
        ],
      }
    },
    {
      title: '昶青物流行動派車系統',
      image: [
        'case5/1.jpg',
        'case5/2.jpg',
        'case5/3.jpg',
        'case5/4.jpg'
      ],
      icon: 'device_phone_portrait',
      introduction: [
        '使用 Vue 3 與 Framework7 開發企業級 B2B 物流行動派車系統，專注行動裝置操作體驗',
        '以行動作業情境為核心設計介面，優化單手操作與關鍵資訊快速瀏覽流程',
        '實作配送單查詢與配送狀態即時顯示，協助使用者快速掌握派車與配送進度',
        '針對行動裝置優化列表與詳情頁切換流程，降低操作步驟與等待時間',
        '設計清楚的配送節點與商品資訊呈現方式，避免行動作業情境下的資訊過載',
        '優化 API 請求與資料載入策略，減少不必要的重新請求與畫面刷新',
        '處理行動網路不穩定情境，確保資料顯示與操作流程的穩定性',
        '實作狀態提示與操作回饋機制，提升使用者對派車與配送狀態的掌握度',
        '採用模組化元件與頁面結構設計，提升行動 App 的維護性與後續擴充彈性',
        '串接 RESTful API，負責行動端資料顯示、狀態同步與操作流程控制',
        '使用 Pinia 狀態管理工具統一控管全域狀態與跨頁共用資料，確保操作流程一致性'
      ],
      link: '',
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS',
          'AWD'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Vite',
          'Git',
          'Laragon'
        ],
      }
    },
    {
      title: '昶青物流運務士管理系統',
      image: [
        'case6/1.jpg',
        'case6/2.jpg',
        'case6/3.jpg',
        'case6/4.jpg',
        'case6/5.jpg',
        'case6/6.jpg',
        'case6/7.jpg',
        'case6/8.jpg'
      ],
      icon: 'device_phone_portrait',
      introduction: [
        '以 Vue 3 與 Framework7 建立行動化運務士作業系統，針對手機使用情境進行介面與操作流程優化',
        '設計配送任務導向的操作流程，讓運務士可快速查看任務內容、配送點與當前工作狀態',
        '整合 Google Maps API，提供配送路線、定位與即時位置顯示，協助掌握行車與配送進度',
        '串接 TDX 即時影像服務，顯示即時路況影像，輔助運務士進行行車判斷與路線選擇',
        '整合 WebSocket 與 MQTT，即時同步配送狀態、任務更新與後台派車資訊',
        '實作到點回報、完成回報與異常回報流程，降低人工通報與溝通成本',
        '建置異常回報與回報說明表單，支援文字輸入與狀態標記，協助後台即時掌握異常狀況',
        '支援商品資訊、載具資訊與溫層狀態檢視，貼合實際物流配送作業流程',
        '針對行動裝置操作進行效能與操作優化，確保在移動網路環境下仍能穩定使用',
        '串接 RESTful API，負責任務資料、配送狀態與回報資訊的同步與更新',
        '使用 Pinia 管理全域狀態與共用資料，處理跨頁資料同步與操作流程控制'
      ],
      link: '',
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS',
          'Google Maps API',
          'TDX 即時影像服務',
          'WebSocket',
          'MQTT'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Vite',
          'Git',
          'Laragon'
        ],
      }
    },
    {
      title: '統昶(統一企業集團)',
      image: [
        'case7/1.jpg',
        'case7/2.jpg',
        'case7/3.jpg',
        'case7/4.jpg',
        'case7/5.jpg',
        'case7/6.jpg',
        'case7/7.jpg',
        'case7/8.jpg'
      ],
      icon: 'device_phone_portrait',
      introduction: [
        '以 Vue 3 與 Framework7 建立行動化無紙作業系統，專為第一線物流士實際作業情境設計',
        '規劃廠商取貨、DC 下貨與集約中心取貨等作業流程，將傳統紙本流程全面數位化',
        '設計任務導向操作介面，引導物流士依流程逐步完成取貨、核對與回報作業',
        '整合條碼掃描流程，支援商品條碼刷讀與數量即時累計，降低人為輸入錯誤',
        '實作商品箱數、尾箱與合計數量計算與驗證機制，強化現場數量核對準確性',
        '支援多 DC 單位取貨與回運流程，依實際作業情境彈性切換作業節點',
        '建置取貨確認與缺件回報流程，即時標記異常狀況並回傳後台系統',
        '即時顯示任務進度與作業狀態，協助物流士掌握當前工作完成度',
        '針對行動裝置高頻操作情境進行介面與效能優化，確保現場使用體驗穩定',
        '串接 RESTful API，同步取貨資料、作業狀態與回報結果，確保前後台資料一致性',
        '使用 Pinia 管理全域狀態與共用資料，處理跨頁資料同步與操作流程控制'
      ],
      link: '',
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Vite',
          'Git',
          'Laragon'
        ],
      }
    },
    {
      title: '明治流通APP(屈臣氏)',
      image: [
        'case8/1.jpg',
        'case8/2.jpg',
        'case8/3.jpg',
        'case8/4.jpg'
      ],
      icon: 'device_phone_portrait',
      introduction: [
        '以 Vue 3 與 Framework7 建立行動化門市配送作業系統，專為第一線物流人員實際操作情境設計',
        '規劃門市配送、轉店與退貨等作業流程，協助配送人員快速完成到店作業',
        '設計工作任務選擇與門市清單流程，支援依站所、門市與配送路線進行作業',
        '整合條碼掃描機制，支援貨件刷碼確認，降低人工核對與輸入錯誤',
        '即時顯示貨件配送狀態（未掃、已掃、回報等），協助配送人員掌握作業進度',
        '實作異常回報流程，支援原因快速選擇與補充說明，提升現場回報效率',
        '建置配送作業防呆機制，避免漏掃、重複掃描或錯誤狀態回報',
        '支援配送完成確認流程，確保每筆門市配送任務可完整追蹤',
        '針對行動裝置高頻操作情境進行介面與效能優化，提升現場操作流暢度',
        '串接 RESTful API，同步配送任務、貨件狀態與異常回報資料，確保前後台資訊一致',
        '使用 Pinia 管理全域狀態與共用資料，處理跨頁資料同步與操作流程控制'
      ],
      link: '',
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Vite',
          'Git',
          'Laragon'
        ],
      }
    },
    {
      title: '愛接送',
      image: [
        'case9/1.jpg',
        'case9/2.jpg',
        'case9/3.jpg',
        'case9/4.jpg',
        'case9/5.jpg',
        'case9/6.jpg',
        'case9/7.jpg'
      ],
      icon: 'device_phone_portrait',
      introduction: [
        '以 Vue 3 與 Framework7 建立長照與交通接送情境的行動化派車系統，支援乘客端實際使用需求',
        '實作即時叫車、預約訂車、固定時段接送與臨時派車等多種派車模式',
        '設計清楚的預約流程與操作引導，協助使用者快速完成訂車與確認',
        '整合 Leaflet 與 OpenStreetMap，呈現上車點、下車點與行程路線地圖',
        '即時顯示司機位置與行程狀態，讓乘客可掌握司機前往與接送進度',
        '整合 WebSocket 與 MQTT，即時同步派車狀態、行程更新與通知資訊',
        '實作司機與乘客雙向即時通訊功能，降低接送過程中的溝通成本',
        '支援乘車人數、輔具需求（如輪椅）等接送條件設定，貼合長照接送情境',
        '建置訂單列表與行程進度顯示，清楚呈現訂單狀態與歷程節點',
        '實作乘車紀錄與評分回饋機制，協助提升服務品質與後續管理',
        '整合 LINE LIFF，支援從 LINE 環境快速進入服務流程',
        '串接 RESTful API，負責訂單、派車、行程與通訊資料的同步與狀態控管',
        '使用 Pinia 管理全域狀態與共用資料，處理跨頁資料同步與操作流程控制'
      ],
      link: {
        ios: "https://apps.apple.com/tw/app/%E6%84%9B%E6%8E%A5%E9%80%81%E4%B9%98%E5%AE%A2/id1638875100",
        android: "https://play.google.com/store/apps/details?id=com.itaxi.passenger.android.prod&hl=zh_TW"
      },
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS',
          'LINE LIFF',
          'Leaflet',
          'OpenStreetMap',
          'WebSocket',
          'MQTT'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Webpack',
          'Git',
          'Laragon'
        ],
      }
    },
    {
      title: '新北市長照交通接送平台',
      image: [
        'case10/1.jpg',
        'case10/2.jpg',
        'case10/3.jpg',
        'case10/4.jpg',
        'case10/5.jpg'
      ],
      icon: 'device_desktop',
      introduction: [
        '建置長照交通接送平台，支援住家與醫療院所往返之預約訂車服務',
        '實作線上預約流程，整合上車與下車地點、乘車條件與時段設定',
        '串接 Google Maps API，實作地址搜尋與 Autocomplete 自動完成，降低地址輸入錯誤',
        '整合地圖定位功能，輔助使用者確認上下車地點位置',
        '實作日期與時段選擇機制，符合長照接送預約規則與時段限制',
        '整合 LINE 官方帳號與 LINE LIFF 登入，支援身分驗證與服務引導',
        '透過 LINE 提供訂單狀態通知與行程相關提醒，提升使用者即時掌握度',
        '建置訂單查詢與狀態顯示介面，清楚呈現派車、執行與完成流程',
        '支援司機派車、行程追蹤與雙向聯絡機制，強化接送流程透明度',
        '採用模組化元件與表單結構設計，提升系統維護性與後續擴充彈性',
        '串接 RESTful API，負責訂單、派車、行程與通訊資料的同步與狀態控管',
        '使用 Pinia 管理全域狀態與共用資料，處理跨頁資料同步與操作流程控制'
      ],
      link: 'https://www.ntpc.ltc-car.org/',
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS',
          'RWD',
          'LINE LIFF',
          'Google Maps API',
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Vite',
          'Git',
          'Laragon'
        ],
      }
    },
     {
      title: '泰晶殿',
      image: [
        'case11/1.jpg',
        'case11/2.jpg',
        'case11/3.jpg',
        'case11/4.jpg',
        'case11/5.jpg',
        'case11/6.jpg',
        'case11/7.jpg',
        'case11/8.jpg'
      ],
      icon: 'device_desktop',
      introduction: [
        '建置美容芳療門市營運管理系統，以實際門市作業流程為核心進行系統規劃',
        '整合櫃台接待、服務登記與訂單管理，協助門市即時掌握當日營運狀況',
        '導入 FullCalendar 建立芳療師排班與服務時段管理介面，以視覺化方式呈現每日與每月行程',
        '支援即時拖曳與時段調整操作，提升櫃台人員排程與調度效率',
        '建置服務項目與療程紀錄流程，支援多項服務內容與客製化設定',
        '設計身體部位勾選與服務重點標記介面，輔助完整記錄服務內容',
        '即時顯示訂單狀態（進行中、未排、取消、完成），清楚掌握現場服務進度',
        '實作結帳流程與金額計算邏輯，支援現金、優惠方案與多種付款情境',
        '建置優惠券與方案管理機制，協助門市進行促銷與會員回饋設定',
        '採用模組化元件與頁面結構設計，提升系統維護性與後續功能擴充彈性',
        '串接 RESTful API，同步訂單、排班、服務紀錄與結帳資料，確保前後台資料一致性',
        '使用 Pinia 管理全域狀態與共用資料，處理跨頁資料同步與操作流程控制'
      ],
      link: '',
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'JavaScript',
          'HTML5',
          'SCSS',
          'FullCalendar'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'webpack',
          'Git',
          'Laragon'
        ],
      }
    },
    {
      title: '晨光專案管理行事曆',
      image: [
        'case12/1.jpg',
        'case12/2.jpg',
        'case12/3.jpg',
        'case12/4.jpg'
      ],
      icon: 'device_desktop',
      introduction: [
        '建置多專案、多站點的工程與專案進度管理系統，對應實際工程執行與管理流程',
        '整合專案列表、工作項目拆解與執行狀態彙整，協助管理者快速掌握整體進度',
        '導入 FullCalendar，實作月曆式工作排程介面，清楚呈現各專案與工項的時間分佈',
        '搭配甘特圖視覺化呈現工程階段、任務時程與前後關係，掌握專案推進節奏',
        '支援專案、站點與工作項目的階層式結構，貼合實際工程拆解與管理邏輯',
        '以進度條與比例視覺化方式呈現各工項完成狀態，快速辨識落後或需關注項目',
        '提供日曆視角與清單視角切換，方便從不同層級檢視工作安排與負載情況',
        '透過 Ajax 串接後端資料，動態載入專案、工項、進度與預算資訊',
        '實作即時資料更新與狀態同步機制，避免整頁重新整理影響操作體驗',
        '處理大量專案與工作資料顯示，優化舊有系統的互動流暢度與可讀性',
        '在非 SPA 架構下整合複雜時程與進度視覺化元件，提升既有系統可用性',
        '採用模組化版型與功能區塊拆分設計，提升系統維護性與後續擴充彈性'
      ],
      link: '',
      offline: false,
      technologyStack: {
        frontend: [
          'Jquery',
          'jquery gantt',
          'fullCalendar',
          'HTML5',
          'SCSS',
        ],
        backend: [
          'Ajax',
        ],
        tools: [
          'Laragon'
        ],
      }
    },
    {
      title: '晨露文化藝術基金會',
      image: [
        'case13/1.jpg',
        'case13/2.jpg',
        'case13/3.jpg',
        'case13/4.jpg'
      ],
      icon: 'device_desktop',
      introduction: [
        '建置文化藝術活動整合平台，提供活動資訊展示、行事曆瀏覽與線上報名服務',
        '使用 jQuery 搭配 FullCalendar 實作活動行事曆，支援月檢視與活動快速瀏覽',
        '透過 Ajax 與後端串接，即時取得活動資料、場次資訊與報名狀態',
        '實作活動分類、時間與關鍵字篩選，提升大量活動資訊的瀏覽效率',
        '建置活動詳情頁，整合活動介紹、時間地點與相關內容展示',
        '實作互動式座位選擇介面，清楚呈現座位狀態與票價分級',
        '即時更新票券剩餘數量與選位結果，避免重複選位與超賣情況',
        '建置線上購票與結帳流程，整合優惠折扣、金額試算與付款方式選擇',
        '實作訂單確認與購票結果顯示，提升使用者購票流程的完整性',
        '採用 RWD 響應式設計，支援桌機與行動裝置瀏覽與操作',
        '以模組化前端結構拆分活動列表、行事曆、選位與結帳區塊，提升系統維護性'
      ],
      link: 'https://dewart.org.tw/',
      offline: false,
      technologyStack: {
        frontend: [
          'Jquery',
          'fullCalendar',
          'HTML5',
          'SCSS',
          'RWD',
        ],
        backend: [
          'Ajax',
        ],
        tools: [
          'Laragon'
        ],
      }
    },
    {
      title: '產業高階人才培訓計畫',
      image: [
        'case14/1.jpg',
        'case14/2.jpg',
        'case14/3.jpg',
        'case14/4.jpg'
      ],
      icon: 'device_desktop',
      introduction: [
        '建置產學媒合與高階人才培育平台，支援博士級人才、培訓單位與企業端的媒合需求',
        '以 jQuery 搭配 Ajax 建立前後端資料互動，即時取得職缺、履歷與媒合狀態資料',
        '實作職缺列表與多條件搜尋（關鍵字、地區、培訓單位），提升大量資料瀏覽效率',
        '建置人才履歷檢視與管理介面，清楚呈現學歷、經歷與專業背景資訊',
        '實作企業端職缺邀請與媒合流程，支援邀約發送、狀態追蹤與回覆管理',
        '設計會員登入與角色區分機制，依身分顯示對應功能與操作介面',
        '建置個人資料與履歷維護表單，支援資料編輯、驗證與送出流程',
        '採用 RWD 響應式設計，支援桌機與行動裝置瀏覽',
        '透過 Ajax 處理資料更新與狀態同步，避免整頁刷新，提升操作流暢度',
        '依實際政府專案需求規劃頁面結構與流程，確保系統穩定性與可維護性'
      ],
      link: 'https://phdojt.org.tw',
      offline: true,
      technologyStack: {
        frontend: [
          'Jquery',
          'HTML5',
          'SCSS',
          'RWD',
        ],
        backend: [
          'Ajax',
        ],
        tools: [
          'Laragon'
        ],
      }
    },
    {
      title: '喜美超市',
      image: [
        'case15/1.jpg',
        'case15/2.jpg',
        'case15/3.jpg',
        'case15/4.jpg',
        'case15/5.jpg',
        'case15/6.jpg',
        'case15/7.jpg',
        'case15/8.jpg',
        'case15/9.jpg',
        'case15/10.jpg',
        'case15/11.jpg'
      ],
      icon: 'device_phone_portrait',
      introduction: [
        '以 Vue 3 與 Framework7 建立連鎖超市行動購物與會員服務 App，專注行動裝置操作體驗',
        '整合商品瀏覽、線上預購、購物車結帳與門市取貨流程，簡化日常採買作業',
        '設計行動化購物流程，支援商品數量調整、即時金額計算與優惠套用',
        '建置會員中心功能，整合會員點數、優惠券、消費紀錄與帳號管理',
        '實作優惠券與點數折抵機制，依不同商品與活動規則動態計算折扣',
        '提供訂單查詢與取貨資訊顯示，清楚呈現訂單狀態與門市取貨流程',
        '整合 Google Maps API，顯示門市據點、營業資訊與地圖導引功能',
        '支援門市清單與地區篩選，協助使用者快速查找鄰近取貨門市',
        '透過 WebSocket 與 MQTT 同步訂單狀態、訊息通知與會員提醒',
        '針對行動網路環境進行效能與操作優化，確保高流量使用下的穩定體驗',
        '串接 RESTful API，負責商品資料、訂單流程、會員資訊與狀態同步',
        '採用模組化元件與頁面結構設計，提升行動 App 的維護性與擴充彈性'
      ],
      link: {
        ios: 'https://apps.apple.com/tw/app/%E5%96%9C%E7%BE%8E%E8%B6%85%E5%B8%82/id1439170897',
        android: 'https://play.google.com/store/apps/details?id=com.muki.civil&hl=zh_TW'
      },
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS',
          'Google Maps API',
          'websocket',
          'MQTT'
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Webpack',
          'Git',
          'Laragon'
        ],
      }
    },
    {
      title: 'JobLink123',
      image: [
        'case16/1.jpg',
        'case16/2.jpg',
        'case16/3.jpg',
        'case16/4.jpg',
        'case16/5.jpg',
        'case16/6.jpg',
        'case16/7.jpg',
        'case16/8.jpg',
        'case16/9.jpg',
        'case16/10.jpg',
        'case16/11.jpg'
      ],
      icon: 'device_phone_portrait',
      introduction: [
        '以 Vue 3 與 Framework7 建立企業人資與排班管理行動平台，專注行動裝置操作體驗與即時回饋',
        '整合員工與管理者雙角色介面，清楚區分權限與操作流程，降低學習成本',
        '提供出勤打卡、請假申請、排班查詢與異常狀態提示，協助即時掌握工作狀況',
        '建置排班管理機制，支援班表檢視、調整與人力配置，提升調度彈性',
        '整合薪資與出勤紀錄顯示，協助員工快速查詢個人工作與薪資資訊',
        '實作職缺資訊與應徵媒合功能，串聯企業招募與人力需求',
        '結合 Google Maps API 顯示職缺與工作地點，提供地圖定位與區域瀏覽',
        '支援地點搜尋與標記顯示，協助使用者快速查找鄰近職缺',
        '系統流程以行動裝置使用情境設計，減少操作步驟並強化互動回饋',
        '透過 RESTful API 串接後端服務，處理人資資料、排班資訊與狀態同步',
        '採用模組化頁面與元件結構，提升系統維護性與後續功能擴充彈性',
        '針對行動網路與長時間使用情境進行效能與穩定性優化'
      ],
      link: {
        ios: 'https://iphone.apkpure.com/app/joblink123%E6%99%BA%E8%83%BD%E6%8E%92%E7%8F%AD%E6%9A%A8%E4%BA%BA%E8%B3%87%E7%AE%A1%E7%90%86%E7%B3%BB%E7%B5%B1/com.joblink.new',
        android: 'https://play.google.com/store/apps/details?id=com.muki.joblink123&hl=zh_TW'
      },
      offline: false,
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS',
          'Google Maps API',
        ],
        backend: [
          'RESTful API',
        ],
        tools: [
          'node.js',
          'Webpack',
          'Git',
          'Laragon'
        ],
      }
    },
    {
      title: '建築專科',
      image: [
        'case24/1.jpg',
        'case24/2.jpg',
        'case24/3.jpg',
        'case24/4.jpg',
        'case24/5.jpg',
        'case24/6.jpg',
        'case24/7.jpg',
        'case24/8.jpg',
      ],
      icon: 'device_desktop',
      introduction: [
        '主導開發建築產業專屬的人力銀行，並整合「一鍵自動化建站」功能，協助公司快速生成專屬展示頁面',
        '設計高度抽象化的前端模板引擎，實現資料與 UI 的解耦，讓使用者透過單一操作即可動態渲染出完整的專屬網站',
        '運用 Ajax 異步處理，打造無刷新的數據互動環境，優化高頻率職缺管理與媒合體驗',
        '實作複雜的多條件篩選算法（關鍵字、地區、培訓單位），確保在海量建築職缺下仍保有極高的前端檢索效能',
        '開發高度組件化的人才履歷系統，支援結構化數據錄入與驗證，並提供企業端直觀的審閱與邀約介面',
        '設計完整的前端表單驗證機制，涵蓋必填檢查、格式驗證與錯誤提示，降低資料填寫錯誤並提升送出成功率',
        '優化跨裝置 RWD 響應式佈局，確保在各種網絡環境下的加載速度',
        '整合環境變數管理 API 介面串接，並針對建築業主操作習慣優化 UX 細節，有效提升系統的穩定性與轉換率'
      ],
      link: 'https://wotel.com.tw/',
      offline: false,
      technologyStack: {
        frontend: [
          'Jquery',
          'HTML5',
          'SCSS',
          'RWD',
        ],
        backend: [
          'Ajax',
        ],
        tools: [
          'Laragon'
        ],
      }
    },
    {
      title: '天地人',
      image: [
        'case25/1.jpg',
        'case25/2.jpg',
        'case25/3.jpg',
        'case25/4.jpg',
      ],
      icon: 'device_desktop',
      introduction: '本專案為切版作品。',
      link: 'https://www.lmdtwine.com/',
      offline: false,
      technologyStack: {
        frontend: [
          'Jquery',
          'HTML5',
          'SCSS',
          'RWD',
        ],
        backend: [],
        tools: [],
      }
    },
    {
      title: '糖村',
      image: [
        'case23/1.jpg',
        'case23/2.jpg',
      ],
      icon: 'device_desktop',
      introduction: `本專案為切版作品。`,
      link: 'https://www.sugar.com.tw/',
      offline: false,
      technologyStack: {
        frontend: [
          'jQuery',
          'HTML5',
          'SCSS',
          'RWD',
        ],
        backend: [],
        tools: [],
      }
    },
    {
      title: '寰宇財經網',
      image: [
        'case17/1.jpg',
        'case17/2.jpg',
        'case17/3.jpg',
        'case17/4.jpg',
        'case17/5.jpg',
      ],
      icon: 'device_desktop',
      introduction: [
        '本專案為一套專業財經內容與電商整合平台，專為投資學習族群打造，提供一站式知識獲取與商品購買體驗',
        '整合書籍銷售、實體與線上課程、專業投資文章及影音內容，建構完整的財經學習生態系',
        '首頁採用多維度導覽設計，結合「熱門排行」、「寰宇嚴選」與「特別推薦」，提升導購轉化率與內容曝光度',
        '實作完整的電子書城功能，包含分類瀏覽、精選套書、名家操盤及投資策略等多樣化篩選機制',
        '建置課程與活動預約系統，支援線上報名、早鳥優惠提示與名額即時控管，強化知識變現流程',
        '整合 IPC BLOG 財經觀點專欄，串接台股、美股、期權等不同投資領域之專家文章，提升使用者黏著度',
        '開發「IPC 駐站達人」功能，結合專家個人背景介紹與推薦書籍，建立專業權威感並輔助消費決策',
        '具備完整的會員帳戶中心，整合好文收藏、書城追蹤單、課程購物車與個人訂單管理流程',
        '採用 RWD 自適應網頁設計，確保使用者在桌機、平板與手機端皆能獲得一致的閱讀與選購體驗',
        '前端以 jQuery 與 Less 進行開發，實作複雜的選單收納、輪播與異步數據載入，維持介面互動流暢性',
        '透過 Ajax 技術與後端進行資料溝通，處理商品篩選、分頁切換與購物行為，實現無跳頁的操作感',
        '針對財經書籍與大量圖表資訊進行視覺排版優化，強化資訊層級分明性與長文閱讀舒適度'
      ],
      link: 'https://www.ipci.com.tw/index.php',
      offline: false,
      technologyStack: {
        frontend: [
          'jQuery',
          'HTML5',
          'Less',
          'RWD',
        ],
        backend: [
          'Ajax',
        ],
        tools: [],
      }
    },
    {
      title: '台灣博而美',
      image: [
        'case18/1.jpg',
        'case18/2.jpg',
        'case18/3.jpg',
        'case18/4.jpg',
      ],
      icon: 'device_desktop',
      introduction: `本專案為切版作品。`,
      link: 'https://www.tbms.com.tw/zh-tw/index.php',
      offline: false,
      technologyStack: {
        frontend: [
          'jQuery',
          'HTML5',
          'Less',
          'RWD',
        ],
        backend: [],
        tools: [],
      }
    },
    {
      title: '鉑菲專業頂級保養品',
      image: [
        'case19/1.jpg',
        'case19/2.jpg',
        'case19/3.jpg',
      ],
      icon: 'device_desktop',
      introduction: `本專案為切版作品。`,
      link: 'https://www.bofei-perfectskin.com/',
      offline: false,
      technologyStack: {
        frontend: [
          'jQuery',
          'HTML5',
          'Less',
          'RWD',
        ],
        backend: [],
        tools: [],
      }
    },
    {
      title: 'GEO 吉優光學',
      image: [
        'case20/1.jpg',
        'case20/2.jpg',
      ],
      icon: 'device_desktop',
      introduction: `本專案為切版作品。`,
      link: 'https://www.joetech.com.tw/index',
      offline: false,
      technologyStack: {
        frontend: [
          'jQuery',
          'HTML5',
          'Less',
          'RWD',
        ],
        backend: [],
        tools: [],
      }
    },
    {
      title: '台灣驗屋師',
      image: [
        'case21/1.jpg',
        'case21/2.jpg',
      ],
      icon: 'device_desktop',
      introduction: `本專案為切版作品。`,
      link: 'https://homeinspector.com.tw/',
      offline: false,
      technologyStack: {
        frontend: [
          'jQuery',
          'HTML5',
          'Less',
          'RWD',
        ],
        backend: [],
        tools: [],
      }
    },
    {
      title: '福智美',
      image: [
        'case22/1.jpg',
        'case22/2.jpg',
      ],
      icon: 'device_desktop',
      introduction: `本專案為切版作品。`,
      link: 'https://www.futuremed.com.tw/zh-tw/',
      offline: false,
      technologyStack: {
        frontend: [
          'jQuery',
          'HTML5',
          'Less',
          'RWD',
        ],
        backend: [],
        tools: [],
      }
    },
  ]

  const showProject = ref(false)
  const currentProject = ref(null)
  const swiperRef = ref(null)
  const isLinkObject = computed(() => {
    return typeof currentProject.value?.link === 'object' && currentProject.value?.link !== null
  })

  const isLinkString = computed(() => {
    return typeof currentProject.value?.link === 'string' && currentProject.value?.link !== ''
  })

  function openProject(item) {
    currentProject.value = item
    showProject.value = true

    nextTick(() => {
      if (swiperRef.value) {
        swiperRef.value.slideTo(0, 0)
      }
    })
  }

  const getProjectImage = (img) => `/images/${img}`

  async function initPage() {}
</script>
