<template>
  <div class="pagination" v-if="totalPage > 1">
    <div class="first" :class="{ disabled: currentPage === 1 }" @click="toFirst">
      <f7-icon f7="chevron_left_2"></f7-icon>
    </div>
    <div class="prev" :class="{ disabled: currentPage === 1 }" @click="prev">
      <f7-icon f7="chevron_left"></f7-icon>
    </div>
    <div v-for="page in visiblePages" :key="page" class="pager" :class="{ current: page === currentPage }" @click="goToPage(page)">
      <span>{{ page }}</span>
    </div>
    <div class="next" :class="{ disabled: currentPage === props.totalPage }" @click="next">
      <f7-icon f7="chevron_right"></f7-icon>
    </div>
    <div class="last" :class="{ disabled: currentPage === props.totalPage }" @click="toLast">
      <f7-icon f7="chevron_right_2"></f7-icon>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    totalPage: {
      type: Number,
      required: true
    }
  })

  const emit = defineEmits(['update:currentPage'])
  const currentPage = ref(1)

  const visiblePages = computed(() => {
    const totalVisible = 4
    let start = Math.max(1, currentPage.value - Math.floor(totalVisible / 2))
    let end = Math.min(props.totalPage, start + totalVisible - 1)

    if (end - start < totalVisible - 1) {
      start = Math.max(1, end - totalVisible + 1)
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index)
  })

  const goToPage = (page) => {
    if (page >= 1 && page <= props.totalPage) {
      currentPage.value = page
      emit('update:currentPage', page)
    }
  }

  const prev = () => {
    if (currentPage.value > 1) {
      goToPage(currentPage.value - 1)
    }
  }

  const next = () => {
    if (currentPage.value < props.totalPage) {
      goToPage(currentPage.value + 1)
    }
  }

  const toFirst = () => {
    goToPage(1)
  }

  const toLast = () => {
    goToPage(props.totalPage)
  }
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 8px;
    > div {
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #fff;
      font-size: 14px;
      border: 1px #eaebf0 solid;
      cursor: pointer;
      line-height: 1;
      .f7-icons {
        font-size: 12px;
      }
      span {
        position: relative;
        color: var(--color-black);
      }
      &.current {
        background: var(--color-blue);
        border: 1px var(--color-blue) solid;
        span {
          color: #fff;
          font-weight: bold;
        }
      }
      &.disabled {
        background: #fff;
        opacity: 0.4 !important;
        i {
          &::before {
            color: #cdd3d5;
          }
        }
      }
    }
  }
</style>
