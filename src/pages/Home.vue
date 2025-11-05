<template>
  <f7-page @page:init="initPage">
    <Layout>
      <template #navbar>
        <f7-navbar>
          <f7-nav-left></f7-nav-left>
          <f7-nav-title>我是標題</f7-nav-title>
          <f7-nav-right></f7-nav-right>
        </f7-navbar>
      </template>

      <template #mainContent>
        <f7-block class="page_block">
          <Pagination :totalPage="10"></Pagination>
        </f7-block>
      </template>

      <template #footer></template>
    </Layout>
  </f7-page>
</template>

<script setup>
  const { showAlert } = useDialog()

  async function initPage() {
    // showAlert('頁面初始化', '這是首頁的 initPage')
  }
</script>
