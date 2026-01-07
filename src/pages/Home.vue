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
            哈囉，我是一名前端工程師，專注於 Vue 生態系的實務開發，主要使用 Vue.js、Nuxt 以及各類 UI Framework，累積多年前端專案經驗，曾參與並完成多種規模與類型的前端系統建置。

            <br />
            <br />

            在實務上，我長期投入 官方網站、購物網站、物流系統、客戶管理系統（CRM） 等專案的前端開發，並負責實作 Google OAuth 與 LINE LIFF OAuth 登入流程。開發過程中，我涵蓋從頁面結構規劃、互動流程設計、狀態管理，到 API
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
                <div class="img">
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
          <span>© 2025 建鴻</span>
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
            <Swiper class="project_images" :modules="[Pagination, Navigation]" :pagination="{ clickable: true }" :navigation="true" :auto-height="true" :space-between="12">
              <SwiperSlide v-for="(img, i) in currentProject?.image" :key="i">
                <img :src="img" />
              </SwiperSlide>
            </Swiper>

            <p class="project_intro">
              {{ currentProject?.introduction }}
            </p>

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

            <div class="btns">
              <f7-button fill external :href="currentProject?.link" target="_blank">
                前往網站
                <f7-icon f7="arrow_right" />
              </f7-button>
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
        new URL('@/assets/images/case1/1.png', import.meta.url).href,
        new URL('@/assets/images/case1/2.png', import.meta.url).href,
        new URL('@/assets/images/case1/3.png', import.meta.url).href,
        new URL('@/assets/images/case1/4.png', import.meta.url).href
      ],
      icon: 'device_desktop',
      introduction: '企業推廣平台，包含產品展示、活動報名與會員管理等功能，提升品牌曝光與客戶互動。',
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
    }
  ]

  const showProject = ref(false)
  const currentProject = ref(null)

  function openProject(item) {
    currentProject.value = item
    showProject.value = true
  }

  async function initPage() {}
</script>
