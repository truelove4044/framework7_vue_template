<template>
  <div>
    <qrcode-vue :value="value" :size="size" :level="level" />
  </div>
</template>

<script setup>
  import QrcodeVue from 'qrcode.vue'

  // 定義可傳入的參數
  const props = defineProps({
    value: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 200
    },
    level: {
      type: String,
      default: 'H'
    }
  })
</script>
