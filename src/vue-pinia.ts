import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from '@/stores/app'
export const app = App

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
