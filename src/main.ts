import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/vue-router'
import store from '@/vue-pinia'
import i18n from '@/vue-i18n'

import '@/plugins'
import '@/registerServiceWorker'

export const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)

router.isReady().then(() => app.mount('#app'))
