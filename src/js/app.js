// Import Vue
import { createApp } from 'vue'

// Import Pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Import Framework7
import Framework7 from 'framework7/lite-bundle'

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle'

// Import Framework7 Styles
import 'framework7/css/bundle'

// Import Icons and App Custom Styles
import '../css/icons.css'
import '../css/app.scss'
import 'uno.css'

// Import App Component
import App from '../../app.vue'

// --- Framework7 Setup ---
Framework7.use(Framework7Vue)

// --- Pinia Setup ---
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// --- Vue App Init ---
const app = createApp(App)
app.use(pinia)
registerComponents(app)
app.mount('#app')
