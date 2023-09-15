import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { GraphModel, io } from '@tensorflow/tfjs'

export default defineStore('yolo', () => {
  const name = ref('yolov8n')
  const net = ref<GraphModel<string | io.IOHandler> | null>()
  const inputShape = ref([1, 0, 0, 3])
  const loading = ref(0)

  return { name, net, inputShape, loading }
})
