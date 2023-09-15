import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from '@/stores/app'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
export const app = App
