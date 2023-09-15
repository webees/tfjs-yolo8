import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-backend-webgl'
import { yolo } from '@/vue-pinia'

export function loadModel() {
  tf.ready().then(async () => {
    const model = await tf.loadGraphModel(`${process.env.VUE_APP_PUBLIC_PATH}${yolo().name}_web_model/model.json`, {
      onProgress: progress => {
        console.log('tf.loadGraphModel', progress)
        yolo().loading = progress
      }
    })

    // warming up model
    if (model.inputs[0].shape) {
      const dummyInput = tf.ones(model.inputs[0].shape)
      const warmupResults = model.execute(dummyInput)

      yolo().net = model
      yolo().inputShape = model.inputs[0].shape

      tf.dispose([warmupResults, dummyInput]) // cleanup memory
    }
  })
}
