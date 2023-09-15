import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from '@/stores/app'
import Yolo from '@/stores/yolo'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
export const app = App
export const yolo = Yolo
