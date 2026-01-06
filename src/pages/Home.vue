<template>
  <f7-page @page:init="initPage">
    <Layout>
      <template #mainContent>
        <f7-block class="page_block">
          <div class="info">
            <div class="headshot"><img src="@/assets/images/photo.jpg" alt="建鴻的頭像" /></div>
            <div class="title">建鴻 Nick</div>
            哈囉，我是一名前端工程師，專注於 Vue 生態系 的實務開發，主要使用 Vue.js、Nuxt 以及各類 UI Framework，累積多年專案經驗，參與並完成過多種規模與類型的前端系統。
            <br />
            <br />

            在實務上，我長期投入 官方網站、購物網站、物流系統、客戶管理系統（CRM） 等專案的前端開發，並實作 Google 與 LINE LIFF OAuth 登入流程，負責從頁面結構規劃、互動流程設計、狀態管理，到 API
            串接與實際上線調整。我重視畫面體驗與系統穩定性，會在開發過程中持續優化效能、結構可讀性與維護性，確保專案在長期擴充下仍然易於管理。
            <br />
            <br />

            技術上，我熟悉 Vue.js 與 Nuxt 架構，能依需求選用 Vuetify、Quasar、Framework7 等框架來打造桌機或行動裝置友善的介面，並搭配 SASS、Tailwind CSS、UnoCSS 進行模組化與高效率的樣式管理。同時也具備 JavaScript、TypeScript 與 jQuery 的實戰經驗，能靈活應對不同專案與既有系統。
            <br />
            <br />

            在 UI 實作方面，我能依據 Figma 與 Adobe XD 設計稿進行精準切版，熟悉設計交付流程，並能將視覺稿轉換為具備響應式、可維護性與良好互動體驗的前端介面，同時兼顧實作效率與畫面還原度。
            <br />
            <br />

            在專案整合層面，我曾導入 Firebase 作為前端服務平台，並結合 Google OAuth 與 LINE LIFF，應用於身分驗證、前端登入流程控制與部署環境整合，能與既有 API 或後端系統順利串接。
            <br />
            <br />

            在前端資安方面，我熟悉前端資安基本觀念，包含 XSS、CSRF 等常見攻擊手法之防範方式。在實務開發中，透過 Vue 預設轉義機制、避免不當使用 v-html、OAuth 授權流程、Authorization Header 管理與 HTTPS 環境配置，確保前後端資料傳輸安全與使用者資訊保護。
            <br />
            <br />

            此外，我具備 無障礙 AA 規範 的實作經驗，了解實務上如何在設計與開發階段兼顧可及性需求。開發流程上，我熟悉 GitHub、GitLab 的版本控管與協作模式，並能在 Docker、Laragon 等環境中進行前端專案的建置與部署配合。
            <br />
            <br />

            這份作品集彙整了我在前端專案中的實務成果與核心技術，透過實際案例呈現我在介面設計、互動實作與系統整合上的能力與思維方式。
          </div>
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
  </f7-page>
</template>

<script setup>
  const { showAlert } = useDialog()

  const showDisclaimer = ref(false)

  async function initPage() {
    // showAlert('頁面初始化', '這是首頁的 initPage')
  }
</script>
