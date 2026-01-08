<template>
  <f7-page @page:init="initPage">
    <Layout>
      <template #mainContent>
        <f7-block class="page_block">
          <article class="blocks info">
            <div class="headshot_wrap">
              <div class="headshot"><img src="@/assets/images/photo.jpg" alt="建鴻的頭像" /></div>
            </div>

            <h1 class="title">建鴻 Nick</h1>
            哈囉，我是一名前端工程師，專注於 Vue 生態系的實務開發，主要使用 Vue.js、Nuxt 以及各類 UI Framework，累積近10年前端專案經驗，曾參與並完成多種規模與類型的前端系統建置。

            <br />
            <br />

            在實務上，我長期投入IOS、Android雙端Web App、物流系統、客戶管理系統（CRM）、購物網站、官方網站…等專案的前端開發，並負責實作 Google OAuth 與 LINE LIFF OAuth 登入流程。開發過程中，我涵蓋從頁面結構規劃、互動流程設計、狀態管理，到 API
            串接與實際上線調整等工作，並持續優化效能、結構可讀性與維護性，確保系統在長期擴充下仍能穩定運作。
            <br />
            <br />

            技術面上，我熟悉 Vue.js 與 Nuxt 架構，能依專案需求選用 Vuetify、Quasar、Framework7 等框架，打造桌機與行動裝置皆具備良好體驗的介面。同時搭配 SASS、Tailwind CSS、UnoCSS 進行模組化與高效率的樣式管理，並具備 JavaScript、TypeScript 與 jQuery 的實戰經驗，能靈活應對新舊專案與不同技術堆疊。

            <br />
            <br />

            在 UI 實作方面，我能依據 Figma 與 Adobe XD 設計稿進行精準切版，熟悉設計交付與協作流程，並將視覺稿轉換為具備 響應式設計、良好互動體驗與高可維護性 的前端介面，在實作效率與畫面還原度之間取得平衡。

            <br />
            <br />

            在專案整合與部署層面，我熟悉 Laravel 架構與 CI 架構，具備前後端協作與 GitLab CI 自動化建置部署的實務經驗。

            <br />
            <br />

            在前端資安方面，我具備前端資安的基本實務觀念，熟悉 XSS、CSRF 等常見攻擊手法的防範方式，並在開發中透過 Vue 預設轉義機制、避免不當使用 v-html、OAuth 授權流程、Authorization Header 管理與 HTTPS 環境配置，確保前後端資料傳輸安全與使用者資訊保護。

            <br />
            <br />

            此外，我具備 無障礙 AA 規範 的實作經驗，了解如何在設計與開發階段兼顧可及性需求。開發流程上，我熟悉 GitHub、GitLab 的版本控管與團隊協作模式，並能在 Docker、Laragon 等環境中進行前端專案的建置與部署配合。

            <br />
            <br />

            本作品集彙整了我在前端專案中的實務成果與核心技術，透過實際案例呈現我在 介面設計、互動實作與系統整合 上的能力與思維方式。
          </article>

          <section class="blocks">
            <h1 class="page_title">
              <span class="zh">作品集</span>
              <span class="en">Portfolio</span>
            </h1>

            <div class="portfolio">
              <div class="project" v-for="(item, index) in projects" :key="index" @click="openProject(item)">
                <div class="img" :class="{ mobile_style: item?.icon === 'device_phone_portrait' }">
                  <img :src="item.image[0]" :alt="item.title" />
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
            <Swiper :key="currentProject?.title" class="project_images" :modules="[Pagination, Navigation]" :pagination="{ clickable: true }" :navigation="true" :space-between="12" @swiper="swiperRef = $event">
              <SwiperSlide v-for="(img, i) in currentProject?.image" :key="i" :class="{ mobile_style: currentProject?.icon === 'device_phone_portrait' }">
                <img :src="img" />
              </SwiperSlide>
            </Swiper>

            <p class="project_intro" v-html="currentProject?.introduction"></p>

            <div class="tech_block">
              <h3>技術棧</h3>
              <div class="tech_group">
                <strong>前端技術</strong>
                <span class="tech">
                  {{ currentProject?.technologyStack.frontend.join('、') }}
                </span>
              </div>
              <div class="tech_group">
                <strong>後端介接</strong>
                <span class="tech">
                  {{ currentProject?.technologyStack.backend.join('、') }}
                </span>
              </div>
              <div class="tech_group">
                <strong>開發工具</strong>
                <span class="tech">
                  {{ currentProject?.technologyStack.tools.join('、') }}
                </span>
              </div>
            </div>

            <div v-if="currentProject?.link" class="btns">
              <f7-button fill external :href="currentProject?.link" target="_blank">
                {{ currentProject?.icon === 'device_phone_portrait' ? '前往下載' : '前往網站' }}
                <f7-icon f7="arrow_right" />
              </f7-button>
            </div>
            <div v-else class="warning">
              <f7-icon f7="exclamationmark_triangle"></f7-icon>
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
        new URL('@/assets/images/case1/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case1/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case1/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case1/4.jpg', import.meta.url).href
      ],
      icon: 'device_desktop',
      introduction: `本專案為企業推廣平台，包含產品展示、活動報名與會員管理等功能，提升品牌曝光與客戶互動。`,
      link: 'https://sunshineprom-dev.muki001.com/',
      technologyStack: {
        frontend: [
          'Nuxt 3',
          'Vue 3',
          'Vuetify',
          'JavaScript',
          'HTML5',
          'SCSS',
          'RWD'
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
        new URL('@/assets/images/case2/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case2/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case2/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case2/4.jpg', import.meta.url).href
      ],
      icon: 'device_desktop',
      introduction: `本專案為大學職缺媒合平台，整合職缺展示與職缺媒合等核心功能，協助企業快速發布職缺資訊，並促進學生與企業之間的有效就業媒合，打造校園與產業接軌的就業服務平台。`,
      link: 'https://ssc.fcu.edu.tw/',
      technologyStack: {
        frontend: [
          'Nuxt 3',
          'Vue 3',
          'Vuetify',
          'JavaScript',
          'HTML5',
          'TailwindCSS',
          'RWD',
          'WebSocket'
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
        new URL('@/assets/images/case3/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case3/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case3/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case3/4.jpg', import.meta.url).href
      ],
      icon: 'device_desktop',
      introduction: `本專案為一套稽核資料分析與管理系統，整合人工稽核、稽核資料彙整、AI 輔助稽核與視覺化分析等功能，協助單位即時掌握稽核執行情形、法遵狀態與風險分布，有效提升稽核作業效率與決策品質。`,
      link: '',
      technologyStack: {
        frontend: [
          'Vue 3',
          'Quasar',
          'TypeScript',
          'HTML5',
          'SCSS',
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
        new URL('@/assets/images/case4/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case4/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case4/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case4/4.jpg', import.meta.url).href
      ],
      icon: 'device_desktop',
      introduction: `本專案為一套 B2B 企業物流管理系統，整合配送單管理、商品與庫存管理、配送流程設定與狀態追蹤等核心功能，協助企業有效控管物流作業流程，提升配送效率與整體營運透明度。
      <br><br>
      系統以實際企業物流作業情境為出發點，支援多配送狀態、溫層管理與多條件查詢，讓企業用戶能即時掌握訂單進度、配送狀況與商品流向，強化跨部門協作與營運管理能力。`,
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
      title: '昶青物流APP',
      image: [
        new URL('@/assets/images/case5/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case5/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case5/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case5/4.jpg', import.meta.url).href
      ],
      icon: 'device_phone_portrait',
      introduction: `本專案為一套 B2B 企業物流客戶端行動應用程式，提供配送單查詢、配送狀態追蹤、商品與溫層資訊檢視等核心功能，協助企業客戶即時掌握物流作業進度與配送狀況。
      <br><br>
      系統以實際物流現場與行動作業情境為出發點進行設計，透過直覺化介面與流程導引，讓企業使用者可隨時透過行動裝置快速查看訂單狀態、配送節點與商品流向，有效提升物流資訊透明度與企業端作業效率。`,
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
      title: '昶青物流運務員APP',
      image: [
        new URL('@/assets/images/case6/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case6/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case6/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case6/4.jpg', import.meta.url).href
      ],
      icon: 'device_phone_portrait',
      introduction: `本專案務是專為第一線運務人員打造的行動化作業系統，整合配送任務、車輛資訊、即時路況與異常回報功能，讓運務員能即時掌握工作狀態並快速完成回報，降低溝通成本、提升配送效率與行車安全，協助企業建立更即時、穩定且高效率的運務管理流程。`,
      link: '',
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
      title: '統昶(統一企業集團)',
      image: [
        new URL('@/assets/images/case7/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case7/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case7/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case7/4.jpg', import.meta.url).href
      ],
      icon: 'device_phone_portrait',
      introduction: `本專案為專為第一線物流士打造的行動化無紙作業系統，以廠商取貨、預估與實單出貨、DC下貨及集約中心作業為核心，透過直覺化介面、掃碼操作與即時數據呈現，協助現場人員快速完成取貨確認、數量核對與狀態回報，降低人工作業與溝通成本，提升物流流程準確性與作業效率，讓無紙化流程能穩定落實於實際物流營運場景中。`,
      link: '',
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
      title: '明治流通(屈臣氏)',
      image: [
        new URL('@/assets/images/case8/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case8/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case8/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case8/4.jpg', import.meta.url).href
      ],
      icon: 'device_phone_portrait',
      introduction: `本專案為專為第一線物流人員門市配送情境打造的行動化作業系統，聚焦門市配送、轉店與退貨等實務流程，透過門市選擇、掃碼作業、貨件狀態即時顯示與異常回報機制，協助配送人員快速完成到店作業與貨件確認，降低人工核對與溝通成本，提升配送準確度與整體作業效率，並使配送進度與異常狀況能即時回饋至系統，協助企業建立穩定、高效率且具完整可追蹤性的門市物流配送流程。`,
      link: '',
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
      title: '新北市長照交通接送平台',
      image: [
        new URL('@/assets/images/case10/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case10/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case10/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case10/4.jpg', import.meta.url).href
      ],
      icon: 'device_desktop',
      introduction: `本專案為住家與醫療院所往返情境打造的長照交通接送平台，提供預約訂車服務，透過地圖定位與地址搜尋、乘車條件設定，訂單狀態即時查詢，協助使用者快速完成接送預約並掌握行程進度；同時整合司機派車、行程追蹤與雙向聯絡機制，讓接送流程更透明、順暢且可追蹤，支援穩定且高效率的長照交通服務運作。`,
      link: 'https://www.ntpc.ltc-car.org/',
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS',
          'RWD',
          'LINE LIFF',
          'Google Maps API'
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
        new URL('@/assets/images/case11/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case11/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case11/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case11/4.jpg', import.meta.url).href
      ],
      icon: 'device_desktop',
      introduction: `本專案為美容芳療門市營運管理系統，以實際門市作業流程為核心，整合櫃台接待、芳療師排班、服務項目紀錄、身體部位勾選、金流結帳與優惠方案管理等功能，透過直覺化介面與視覺化排程表，協助櫃台人員即時掌握當日服務狀況、未排與取消訂單，並快速完成服務登記與結帳作業，提升門市作業效率與資訊一致性，讓營運管理流程更清楚、穩定且具高度可維護性。`,
      link: '',
      technologyStack: {
        frontend: [
          'Vue 3',
          'JavaScript',
          'HTML5',
          'SCSS',
          'RWD',
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
        new URL('@/assets/images/case12/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case12/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case12/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case12/4.jpg', import.meta.url).href
      ],
      icon: 'device_desktop',
      introduction: `本專案為工程與專案進度整合管理系統，以多專案、多站點的實際執行流程為核心，整合甘特圖時程規劃、專案列表彙整、工作項目拆解、進度比例視覺化與預算控管等功能，協助管理者即時掌握各工程階段的執行情形與資源使用狀況；透過清楚的時間軸呈現、跨專案比較與日曆式工作管理介面，讓專案進度、風險與成本一目了然，提升跨部門協作效率與專案控管精準度，支援大型工程專案的穩定推進與決策管理。`,
      link: '',
      technologyStack: {
        frontend: [
          'Jquery',
          'jquery gantt',
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
      title: '愛接送APP',
      image: [
        new URL('@/assets/images/case9/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case9/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case9/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case9/4.jpg', import.meta.url).href
      ],
      icon: 'device_phone_portrait',
      introduction: `本專案為專為長照與交通接送服務情境打造的行動化預約與派車系統，整合即時叫車、預約訂車、固定時段接送與臨時派車等核心功能，透過流程引導、地圖即時顯示、司機狀態追蹤與雙向通訊機制，協助乘客即時掌握行程進度，也讓司機與後台能快速完成派車與接送作業。`,
      link: 'https://apps.apple.com/tw/app/%E6%84%9B%E6%8E%A5%E9%80%81%E4%B9%98%E5%AE%A2/id1638875100',
      technologyStack: {
        frontend: [
          'Vue 3',
          'Framework7',
          'JavaScript',
          'HTML5',
          'SCSS',
          'LINE LIFF',
          'Google Maps API',
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
      title: '晨露文化藝術基金會',
      image: [
        new URL('@/assets/images/case13/1.jpg', import.meta.url).href,
        new URL('@/assets/images/case13/2.jpg', import.meta.url).href,
        new URL('@/assets/images/case13/3.jpg', import.meta.url).href,
        new URL('@/assets/images/case13/4.jpg', import.meta.url).href
      ],
      icon: 'device_desktop',
      introduction: `本專案為文化藝術活動整合平台，以藝文單位與一般民眾的實際使用情境為核心，整合活動資訊展示、行事曆瀏覽、線上報名、座位選擇與票券購買流程。結合互動式座位圖、即時票況更新與完整結帳機制，降低購票門檻並提升使用體驗，協助主辦單位建立穩定、高效率且易於管理的藝文活動推廣與售票系統。`,
      link: 'https://dewart.org.tw/',
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
  ]

  const showProject = ref(false)
  const currentProject = ref(null)
  const swiperRef = ref(null)

  function openProject(item) {
    currentProject.value = item
    showProject.value = true

    nextTick(() => {
      if (swiperRef.value) {
        swiperRef.value.slideTo(0, 0)
      }
    })
  }

  async function initPage() {}
</script>
