<template>
  <div class="page-layout">
    <template v-if="showNavbar && $slots.navbar">
      <slot name="navbar"></slot>
    </template>

    <div class="page-main">
      <slot name="mainContent"></slot>
    </div>

    <template v-if="showFooter && $slots.footer">
      <slot name="footer"></slot>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps({
    showNavbar: { type: Boolean, default: true },
    showFooter: { type: Boolean, default: true }
  })
</script>
