<template>
  <f7-app v-bind="f7params">
    <f7-view main class="safe-areas" url="/"></f7-view>
    <div class="loader_content" v-if="pageStore.isLoading">
      <div class="loader"></div>
    </div>
  </f7-app>
</template>

<script setup>
  import 'virtual:svg-icons-register'
  import routes from '@/router/index'

  const pageStore = usePageStore()
  const f7params = {
    name: 'Framework7 App',
    theme: 'ios',
    routes
  }

  onMounted(() => {
    f7ready(() => {
      console.log('Framework7 App 已初始化')
    })
  })
</script>

<style lang="scss" scoped>
  .loader_content {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999999999;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  }
  .loader {
    width: 50px;
    --b: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 1px;
    background: conic-gradient(#0000 10%, #f03355) content-box;
    -webkit-mask: repeating-conic-gradient(#0000 0deg, #000 1deg 20deg, #0000 21deg 36deg), radial-gradient(farthest-side, #0000 calc(100% - var(--b) - 1px), #000 calc(100% - var(--b)));
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    animation: l4 1s infinite steps(10);
  }
  @keyframes l4 {
    to {
      transform: rotate(1turn);
    }
  }
</style>
