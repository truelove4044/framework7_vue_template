export const usePageStore = defineStore('pageStore', {
  state: () => ({
    isLoading: false
  }),
  getters: {},
  actions: {},
  persist: {
    key: 'page-store',
    paths: ['title']
  }
})
