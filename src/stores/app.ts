import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore(
  'app',
  () => {
    const language = ref('')

    return { language }
  },
  {
    persist: true
  }
)
