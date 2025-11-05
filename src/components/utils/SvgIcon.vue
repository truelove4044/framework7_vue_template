<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup>
  defineProps({
    name: {
      type: String,
      required: true
    }
  })
</script>

<style scoped>
  .svg-icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }
</style>
