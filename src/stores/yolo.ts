import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { GraphModel, io } from '@tensorflow/tfjs'

export default defineStore('yolo', () => {
  const version = ref('yolov8n')
  const model = ref<GraphModel<string | io.IOHandler>>()
  const inputShape = ref([1, 0, 0, 3])
  const loading = ref(0)

  return { version, model, inputShape, loading }
})
